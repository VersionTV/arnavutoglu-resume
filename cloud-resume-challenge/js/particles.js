// Particles.js loader with fallback
(function() {
    // Try to load particles.js from CDN
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';

    script.onload = function() {
        // Initialize particles.js after it loads
        particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.json', function() {
            console.log('Particles.js loaded successfully');
        });
    };

    script.onerror = function() {
        console.warn('Failed to load particles.js from CDN, using fallback');
        // Create fallback particles
        createFallbackParticles();
    };

    document.head.appendChild(script);

    function createFallbackParticles() {
        var particlesContainer = document.getElementById('particles-js');
        if (!particlesContainer) return;

        // Create simple animated background as fallback
        for (var i = 0; i < 30; i++) {
            var particle = document.createElement('div');
            particle.className = 'fallback-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = (Math.random() * 2 + 1) + 'px';
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = 'rgba(0, 100, 255, 0.2)';
            particle.style.borderRadius = '50%';
            particle.style.position = 'absolute';
            particle.style.pointerEvents = 'none';

            var duration = Math.random() * 10 + 5;
            var delay = Math.random() * 5;
            particle.style.animation = 'float ' + duration + 's ease-in-out ' + delay + 's infinite';

            particlesContainer.appendChild(particle);
        }
    }
})();

// Add keyframes for fallback particles if not already present
if (!document.getElementById('float-keyframes')) {
    var style = document.createElement('style');
    style.id = 'float-keyframes';
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            50% { opacity: 0.5; }
            100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
        }

        .fallback-particle {
            pointer-events: none;
        }
    `;
    document.head.appendChild(style);
}