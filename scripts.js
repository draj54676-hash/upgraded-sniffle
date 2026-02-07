// Valentine's Day Calendar

function valentineCalendar() {
    const daysUntilValentine = Math.max(0, (new Date('2026-02-14') - new Date()) / (1000 * 60 * 60 * 24));
    const calendarElement = document.getElementById('valentine-calendar');
    calendarElement.innerHTML = `\n        <h1>Valentine's Day Countdown</h1>\n        <p>${daysUntilValentine} days until Valentine's Day! 🎉</p>\n    `;
}

document.addEventListener('DOMContentLoaded', valentineCalendar);