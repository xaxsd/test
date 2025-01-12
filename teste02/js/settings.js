document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const languageSelect = document.getElementById('language');
    const saveButton = document.getElementById('save-settings');

    // Завантаження налаштувань із JSON
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const settings = data.userSettings;
            usernameInput.value = settings.username;
            languageSelect.value = settings.language;
        })
        .catch(error => console.error('Error loading settings:', error));

    // Збереження налаштувань
    saveButton.addEventListener('click', () => {
        const updatedSettings = {
            username: usernameInput.value,
            language: languageSelect.value
        };

        console.log('Saved settings:', updatedSettings);
        alert('Settings saved!');
    });
});
