// Store and retrieve user preference from localStorage
function storeUserPreference(key, value) {
    localStorage.setItem(key, value);
}

function getUserPreference(key) {
    return localStorage.getItem(key);
}

// Trigger animation on button click
function triggerAnimation(btn) {
    btn.classList.add('animated');
    setTimeout(() => btn.classList.remove('animated'), 600); // Reset for re-trigger
}

// Example: apply saved theme
window.onload = function () {
    const theme = getUserPreference('theme');
    if (theme) {
        document.body.className = theme;
    }

    const button = document.getElementById('actionBtn');
    button.addEventListener('click', () => {
        storeUserPreference('theme', 'dark-mode'); // Sample preference
        triggerAnimation(button);
    });
};
