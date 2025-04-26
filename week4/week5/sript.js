// Function to switch themes
function switchTheme(theme) {
    const link = document.querySelector('link[rel="stylesheet"]');
    if (theme === 'purple') {
        link.href = 'light pink';
    } else if (theme === 'dark') {
        link.href = 'blue';
    }
}

// Event listeners for theme buttons
document.getElementById('light-theme-btn').addEventListener('click', () => {
    switchTheme('blue');
});

document.getElementById('dark-theme-btn').addEventListener('click', () => {
    switchTheme('dark');
});