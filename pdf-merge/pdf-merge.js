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
    if (!validateFiles(files)) return;

    setUIForProcessing(true);
    feedback.textContent = 'Merging...';

    try {
        const mergedPdfBytes = await mergeFiles(files);
        const customFilename = getCustomFilename();
        download(mergedPdfBytes, `${customFilename}.pdf`, "application/pdf");
        feedback.textContent = 'Merge completed! Downloading...';
    } catch (error) {
        feedback.textContent = 'An error occurred: ' + error.message;
        console.error(error);
    } finally {
        setUIForProcessing(false);
    }
}

function validateFiles(files) {
    if (!files.every(file => file.type === 'application/pdf')) {
        feedback.textContent = 'Please upload only PDF files.';
        return false;
    }
    return true;
}

async function mergeFiles(files) {
    const mergedPdf = await PDFLib.PDFDocument.create();
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileBytes = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(fileBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
        updateProgressBar(i, files.length);
    }

    return mergedPdf.save();
}

function updateProgressBar(current, total) {
    progressBar.style.width = `${(current + 1) / total * 100}%`;
}

function getCustomFilename() {
    return filenameInput.value.trim() || 'merged';
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

function setUIForProcessing(isProcessing) {
    uploadArea.disabled = isProcessing;
    progressBar.style.display = isProcessing ? 'block' : 'none';
    progressBar.style.width = '0%';
    if (!isProcessing) fileInput.value = '';
}
