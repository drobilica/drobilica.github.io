
const uploadArea = document.getElementById('upload-area');
const fileInput = document.getElementById('file-input');
const progressBar = document.getElementById('progress-bar');
const feedback = document.getElementById('feedback');
const filenameInput = document.getElementById('filename-input');

uploadArea.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFiles);
uploadArea.addEventListener('dragover', (event) => event.preventDefault());
uploadArea.addEventListener('drop', (event) => {
    event.preventDefault();
    fileInput.files = event.dataTransfer.files;
    handleFiles();
});

async function handleFiles() {
    const files = Array.from(fileInput.files);
    if (!files.every(file => file.type === 'application/pdf')) {
        feedback.textContent = 'Please upload only PDF files.';
        return;
    }

    progressBar.style.display = 'block';
    progressBar.style.width = '0%';
    feedback.textContent = 'Merging...';

    try {
        const mergedPdf = await PDFLib.PDFDocument.create();
        
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileBytes = await file.arrayBuffer();
            const pdf = await PDFLib.PDFDocument.load(fileBytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach(page => mergedPdf.addPage(page));

            // Update progress bar
            progressBar.style.width = `${((i + 1) / files.length) * 100}%`;
        }

        const mergedPdfBytes = await mergedPdf.save();
        const customFilename = filenameInput.value.trim() || 'merged';
        download(mergedPdfBytes, `${customFilename}.pdf`, "application/pdf");
        feedback.textContent = 'Merge completed! Downloading...';
    } catch (error) {
        feedback.textContent = 'An error occurred while merging the files.';
        console.error(error);
    } finally {
        progressBar.style.display = 'none';
        fileInput.value = ''; // Reset file input for next operation
    }
}

function download(blob, filename, mimeType) {
    const blobUrl = URL.createObjectURL(new Blob([blob], { type: mimeType }));
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
}
