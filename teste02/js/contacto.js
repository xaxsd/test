document.addEventListener('DOMContentLoaded', () => {
    const contactReason = document.getElementById('contact-reason');
    const dynamicFieldsContainer = document.getElementById('dynamic-fields');

    // Завантаження даних із JSON
    fetch('../contacto')
        .then(response => response.json())
        .then(data => {
            const contactReasons = data.contactReasons;

            // Оновлення полів форми при зміні вибору
            contactReason.addEventListener('change', () => {
                const selectedReason = contactReason.value;
                const fields = contactReasons[selectedReason] || [];
                dynamicFieldsContainer.innerHTML = '';

                fields.forEach(field => {
                    const label = document.createElement('label');
                    label.textContent = field;

                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = field.toLowerCase().replace(' ', '_');

                    dynamicFieldsContainer.appendChild(label);
                    dynamicFieldsContainer.appendChild(input);
                });
            });

            // Тригер початкового стану
            contactReason.dispatchEvent(new Event('change'));
        })
        .catch(error => console.error('Error loading contact form data:', error));
});
