// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const src = image.getAttribute("src");
            const alt = image.getAttribute("alt");

            // Створення модального вікна
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${src}" alt="${alt}">
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