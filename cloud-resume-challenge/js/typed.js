// Simple typing effect implementation
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');

    const textArrayTR = [
        "Bilgisayar Mühendisi",
        "Yapay Zeka Meraklısı",
        "Sistem Uzmanı",
        "Yazılım Geliştirici"
    ];

    const textArrayEN = [
        "Computer Engineer",
        "AI Enthusiast",
        "Systems Expert",
        "Software Developer"
    ];

    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;
    let currentLang = 'tr'; // Default language

    // Get text array based on current language
    function getTextArray() {
        return document.documentElement.getAttribute('data-lang') === 'en' ? textArrayEN : textArrayTR;
    }

    function type() {
        const textArray = getTextArray();
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        const textArray = getTextArray();
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove('typing');
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (getTextArray().length) setTimeout(type, newTextDelay + 250);
});