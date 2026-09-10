// Initialize essential functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Check for saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

        // Theme toggle click handler
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }

    // Initialize language toggle
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        // Check for saved language preference or use browser language (default to Turkish if unsupported)
        const savedLang = localStorage.getItem('language');
        let detectedLang = navigator.language.substring(0, 2);
        // Default to Turkish if language is not explicitly supported
        if (detectedLang !== 'en' && detectedLang !== 'tr') {
            detectedLang = 'tr';
        }
        const initialLang = savedLang || detectedLang;
        setLanguage(initialLang);
        updateLanguageToggleIcon(initialLang);

        // Language toggle click handler
        languageToggle.addEventListener('click', () => {
            const currentLang = document.documentElement.getAttribute('data-lang');
            const newLang = currentLang === 'tr' ? 'en' : 'tr';
            setLanguage(newLang);
            updateLanguageToggleIcon(newLang);
            localStorage.setItem('language', newLang);
        });
    }

    // Add smooth scroll to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Only run the scroll listener if nav links exist
    if (navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            // Add fallback to prevent removing all active classes
            if (current) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Scroll reveal animation for sections
    const revealElements = document.querySelectorAll('.section');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Uncomment the line below if you want each section to animate only once
                // revealObserver.unobserve(entry.target);
            }
            // Optional: Remove the comment below if you want elements to hide when scrolling back up
            // else {
            //     entry.target.classList.remove('visible');
            // }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger a bit before reaching the bottom
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // Cursor follower enhancement - Removed per user request

    // Animation suspension when tab is hidden
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations
            document.body.style.animationPlayState = 'paused';
            document.querySelectorAll('.blob').forEach(blob => {
                blob.style.animationPlayState = 'paused';
            });
        } else {
            // Resume animations
            document.body.style.animationPlayState = 'running';
            document.querySelectorAll('.blob').forEach(blob => {
                blob.style.animationPlayState = 'running';
            });
        }
    });

    // Visitor count from API
    const apiUrl = "https://6jtfklgftj.execute-api.us-east-1.amazonaws.com/prod";
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ağ yanıtı düzgün değil");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("ziyaretci-sayaci").innerText = data.ziyaretci_sayisi;
        })
        .catch(error => {
            console.error("Sayaç verisi çekilirken hata oluştu:", error);
            document.getElementById("ziyaretci-sayaci").innerText = "Sayılmıyor";
        });
});

// Language functions
function setLanguage(lang) {
    // Set language attribute on html element
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;

    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-en]');
    translatableElements.forEach(element => {
        // Handle text content (for most elements)
        if (element.dataset.en && element.dataset.tr) {
            if (lang === 'en') {
                element.innerHTML = element.dataset.en;
            } else {
                element.innerHTML = element.dataset.tr;
            }
        }
        // Handle meta tags (which use content attribute instead of innerHTML)
        else if (element.dataset.en && element.tagName.toLowerCase() === 'meta' && element.dataset.tr) {
            if (lang === 'en') {
                element.content = element.dataset.en;
            } else {
                element.content = element.dataset.tr;
            }
        }
        // Handle alt attributes
        if (element.dataset.enAlt) {
            if (lang === 'en') {
                element.alt = element.dataset.enAlt;
            }
            // For Turkish, we keep the original alt attribute (original content)
        }
    });

    // Update CV download link based on language
    const cvLink = document.querySelector('.cv-download-btn');
    if (cvLink) {
        if (lang === 'en') {
            cvLink.href = 'hasan-arnavutoglu-EN.pdf';
        } else {
            cvLink.href = 'hasanarnavutoglu-cv.pdf';
        }
    }
}

function updateLanguageToggleIcon(lang) {
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        // Update button content with flag images
        if (lang === 'en') {
            languageToggle.innerHTML = '<img src="assets/images/uk.png" alt="English flag" width="24" height="16" class="language-flag">';
            languageToggle.setAttribute('aria-label', 'English - Click to switch to Turkish');
        } else {
            languageToggle.innerHTML = '<img src="assets/images/turkey.png" alt="Turkish flag" width="24" height="16" class="language-flag">';
            languageToggle.setAttribute('aria-label', 'Türkçe - İngilizceye geçmek için tıklayın');
        }
    }
}