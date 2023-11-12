
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(icon.href, '_blank');
    });
});
