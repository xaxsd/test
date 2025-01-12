// statistics.js
document.addEventListener('DOMContentLoaded', () => {
    // Перемикання теми
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Light Theme';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Dark Theme';
        }
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Theme';
    } else {
        themeToggle.textContent = 'Dark Theme';
    }

    // Загрузка і відображення статистики
    loadStatistics();
});

function loadStatistics() {
    const statsContainer = document.getElementById('stats-container');

    // Приклад: завантаження статистики з сервера (можна змінити на реальний API)
    fetch('/api/statistics')
        .then(response => response.json())
        .then(data => {
            // Створення елементів для відображення статистики
            const visitsElement = document.createElement('p');
            visitsElement.textContent = `Total visits: ${data.totalVisits}`;

            const uniqueVisitorsElement = document.createElement('p');
            uniqueVisitorsElement.textContent = `Unique visitors: ${data.uniqueVisitors}`;

            const pageViewsElement = document.createElement('p');
            pageViewsElement.textContent = `Page views: ${data.pageViews}`;

            // Додавання елементів до контейнера
            statsContainer.appendChild(visitsElement);
            statsContainer.appendChild(uniqueVisitorsElement);
            statsContainer.appendChild(pageViewsElement);
        })
        .catch(error => console.error('Error loading statistics:', error));
}

// server.js (Node.js приклад)
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/statistics', (req, res) => {
    const statistics = {
        totalVisits: 1234,
        uniqueVisitors: 567,
        pageViews: 7890
    };
    res.json(statistics);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});