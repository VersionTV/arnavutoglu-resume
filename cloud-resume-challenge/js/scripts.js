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

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
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
});