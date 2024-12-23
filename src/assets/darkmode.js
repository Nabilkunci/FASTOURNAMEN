const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Check local storage for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.classList.toggle('dark', savedTheme === 'dark');
  themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Switch theme on button click
themeToggleButton.addEventListener('click', () => {
  const isDarkMode = htmlElement.classList.toggle('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
});

// Show Overlay
function openOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'flex'; // Show overlay
}

// Hide Overlay
function closeOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none'; // Hide overlay
}

document.addEventListener('DOMContentLoaded', function () {
  const sessionOptions = document.querySelectorAll('#session-time option');
  const currentTime = new Date();

  sessionOptions.forEach(option => {
    const sessionTime = option.getAttribute('data-time');
    if (sessionTime) {
      // Parse session time
      const [hour, minute] = sessionTime.split(':').map(Number);
      const sessionDate = new Date(currentTime);
      sessionDate.setHours(hour, minute, 0, 0);

      // If session time has passed, mark as "CLOSE"
      if (sessionDate < currentTime) {
        option.textContent = `${option.textContent.split(' - ')[0]} - CLOSE`;
        option.disabled = true;
      }
    }
  });
});