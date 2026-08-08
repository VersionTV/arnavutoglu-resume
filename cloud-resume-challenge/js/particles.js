// Set background color based on theme
function setBackgroundColor() {
    if (document.body.classList.contains('dark')) {
        document.body.style.backgroundColor = '#0a0a0a'; // dark mode color from CSS
    } else {
        document.body.style.backgroundColor = '#fff'; // light mode color from CSS
    }
}

// Run on load
setBackgroundColor();

// Also run when theme changes (watch for class changes on body)
const observer = new MutationObserver(setBackgroundColor);
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });