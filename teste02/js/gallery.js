document.addEventListener('DOMContentLoaded', () => {
    // Перемикання теми
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Обробник події для перемикання теми
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme'); // Перемикає клас для темної теми

        // Збереження вибору теми в localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = 'Light Theme'; // Зміна тексту кнопки на "Light Theme"
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = 'Dark Theme'; // Зміна тексту кнопки на "Dark Theme"
        }
    });

    // Перевірка збереженого вибору теми з localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Theme'; // Якщо збережена темна тема
    } else {
        themeToggle.textContent = 'Dark Theme'; // Якщо збережена світла тема
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо елементи меню
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Додаємо слухач події для показу випадаючого меню на наведенні
    dropdown.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block'; // Показуємо меню
    });

    // Додаємо слухач події для приховування випадаючого меню при виході
    dropdown.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none'; // Приховуємо меню
    });
});

// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const src = image.getAttribute("src");
            const alt = image.getAttribute("alt");
            const description = image.getAttribute("data-description") || "No description available.";

            // Створення модального вікна
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${src}" alt="${alt}">
                    <p>${description}</p>
                </div>
            `;
            document.body.appendChild(modal);

            // Закриття модального вікна
            const closeButton = modal.querySelector(".close-button");
            closeButton.addEventListener("click", () => {
                modal.remove();
            });
        });
    });
});
