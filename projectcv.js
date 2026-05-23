const skillsTrigger = document.getElementById('show-skills-trigger');
const eduTrigger = document.getElementById('show-edu-trigger');
const eduTable = document.getElementById('education-section');
const skillsTable = document.getElementById('skills-section');
skillsTrigger.addEventListener('click', function() {
    eduTable.style.display = 'none';
    skillsTable.style.display = 'table';
});
eduTrigger.addEventListener('click', function() {
    skillsTable.style.display = 'none';
    eduTable.style.display = 'table';
});

function updateClock() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    const timeString = now.toLocaleTimeString(undefined, timeOptions);
    document.getElementById('datetime-display').textContent = `${dateString} - ${timeString}`;
}
setInterval(updateClock, 60000);
updateClock();
