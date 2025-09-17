// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme')) {
  body.className = localStorage.getItem('theme');
  toggleBtn.textContent = body.classList.contains('dark') ? '🌙' : '☀️';
}

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    toggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.replace('light', 'dark');
    toggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
