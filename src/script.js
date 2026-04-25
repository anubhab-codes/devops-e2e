const footerText = document.getElementById('footer-text');
const currentYear = new Date().getFullYear();
footerText.textContent = `Built for DevOps E2E with GitHub Actions — ${currentYear}`;
