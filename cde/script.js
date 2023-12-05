
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(icon.href, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // Hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;

        var timeString = hours + ':' + minutes + ' ' + ampm;
        document.getElementById('clock').innerHTML = timeString;
    }

    setInterval(updateClock, 10000);
    updateClock(); // Initial call to display clock immediately
});
