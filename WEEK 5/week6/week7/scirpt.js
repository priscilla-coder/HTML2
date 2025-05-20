// Store user preferences in localStorage
function savePreference(key, value) {
  localStorage.setItem(key, value);
}

// Retrieve user preferences from localStorage
function getPreference(key) {
  return localStorage.getItem(key);
}

// Trigger an animation on button click
document.getElementById('colorBtn').addEventListener('click', () => {
  const button = document.getElementById('colorBtn');
  button.style.backgroundColor = '#ff5722';
  button.style.transform = 'scale(1.2)';
  savePreference('buttonColor', '#ff5722');
});

// Apply saved preferences on page load
window.addEventListener('load', () => {
  const savedColor = getPreference('buttonColor');
  if (savedColor) {
    const button = document.getElementById('colorBtn');
    button.style.backgroundColor = savedColor;
  }
});