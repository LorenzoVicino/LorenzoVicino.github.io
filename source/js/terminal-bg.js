/**
 * Terminal Background Animation
 * Animated falling characters effect for the homepage
 */

(function() {
  // Only run on homepage
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
    return;
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTerminalBackground);
  } else {
    initTerminalBackground();
  }

  function initTerminalBackground() {
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.id = 'terminal-bg-canvas';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters to display (mix of tech symbols, code, and special chars)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン</>{}[]()=+-*&|$#@!?;:,.абвгдежзийклмнопрстуфхцчшщъыьэюя';
    const charArray = chars.split('');

    // Configuration
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = [];

    // Color schemes (will rotate through these)
    const colorSchemes = [
      { main: '#0F0', glow: 'rgba(0, 255, 0, 0.8)' },      // Classic green
      { main: '#00FFFF', glow: 'rgba(0, 255, 255, 0.8)' }, // Cyan
      { main: '#FF1493', glow: 'rgba(255, 20, 147, 0.8)' },// Pink
      { main: '#FFD700', glow: 'rgba(255, 215, 0, 0.8)' }, // Gold
      { main: '#9370DB', glow: 'rgba(147, 112, 219, 0.8)' }// Purple
    ];

    // Initialize drops with random positions and colors
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -100,
        speed: 0.5 + Math.random() * 0.5,
        colorScheme: colorSchemes[Math.floor(Math.random() * colorSchemes.length)]
      };
    }

    // Animation
    function draw() {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];

        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];

        // Draw character with glow effect
        const x = i * fontSize;
        const y = drop.y * fontSize;

        // Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = drop.colorScheme.glow;

        // Main color with gradient (brighter at top)
        const gradient = ctx.createLinearGradient(x, y - fontSize * 5, x, y);
        gradient.addColorStop(0, drop.colorScheme.main);
        gradient.addColorStop(0.5, drop.colorScheme.main);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.3)');

        ctx.fillStyle = gradient;
        ctx.fillText(char, x, y);

        // Reset position when off screen
        if (drop.y * fontSize > canvas.height && Math.random() > 0.975) {
          drop.y = 0;
          drop.speed = 0.5 + Math.random() * 0.5;
          // Occasionally change color scheme
          if (Math.random() > 0.9) {
            drop.colorScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
          }
        }

        drop.y += drop.speed;
      }

      // Remove shadow for next frame
      ctx.shadowBlur = 0;
    }

    // Animation loop
    let animationId;
    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Pause animation when page is not visible (performance optimization)
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    });

    // Stop animation on page navigation
    window.addEventListener('beforeunload', function() {
      cancelAnimationFrame(animationId);
    });
  }
})();
