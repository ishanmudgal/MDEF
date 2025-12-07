// AGGRESSIVE BRUTALIST THEME JAVASCRIPT - Back to Amazing!

document.addEventListener('DOMContentLoaded', function() {
    // Aggressive parallax scrolling effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-layer');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.3);
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.01}deg)`;
        });
    });
    
    // Aggressive mouse movement effect
    document.addEventListener('mousemove', function(e) {
        const cards = document.querySelectorAll('.floating-card');
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        cards.forEach((card, index) => {
            const speed = 0.05 + (index * 0.02);
            const x = (mouseX - 0.5) * 100 * speed;
            const y = (mouseY - 0.5) * 100 * speed;
            
            card.style.transform += ` translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
        });
    });
    
    // Aggressive glitch effect on hover for links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '3px 0 #ff3333, -3px 0 #ff6666, 0 3px #ff3333, 0 -3px #ff6666';
            this.style.animation = 'aggressiveGlitch 0.2s ease-in-out infinite';
            this.style.filter = 'hue-rotate(90deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = '';
            this.style.animation = '';
            this.style.filter = '';
        });
    });
    
    // Aggressive button effects
    const buttons = document.querySelectorAll('.brutalist-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'aggressiveShake 0.1s ease-in-out infinite alternate, brutalistButtonPulse 0.3s ease-in-out infinite alternate';
            this.style.filter = 'brightness(1.3) contrast(1.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = 'brutalistButtonPulse 1.5s ease-in-out infinite alternate, aggressiveShake 0.4s ease-in-out infinite alternate';
            this.style.filter = '';
        });
    });
    
    // Add aggressive glitch animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes aggressiveGlitch {
            0% { transform: translate(0); filter: hue-rotate(0deg); }
            10% { transform: translate(-3px, 3px); filter: hue-rotate(90deg); }
            20% { transform: translate(-3px, -3px); filter: hue-rotate(180deg); }
            30% { transform: translate(3px, 3px); filter: hue-rotate(270deg); }
            40% { transform: translate(3px, -3px); filter: hue-rotate(360deg); }
            50% { transform: translate(-2px, 2px); filter: hue-rotate(45deg); }
            60% { transform: translate(-2px, -2px); filter: hue-rotate(135deg); }
            70% { transform: translate(2px, 2px); filter: hue-rotate(225deg); }
            80% { transform: translate(2px, -2px); filter: hue-rotate(315deg); }
            90% { transform: translate(-1px, 1px); filter: hue-rotate(22deg); }
            100% { transform: translate(0); filter: hue-rotate(0deg); }
        }
    `;
    document.head.appendChild(style);
    
    // VIOLENT random movement for navigation and buttons - LIKE GITHUB ICON!
    setInterval(function() {
        const navElements = document.querySelectorAll('.md-nav__link, .md-tabs__link, .md-header__button, .brutalist-button');
        navElements.forEach(element => {
            const randomX = (Math.random() - 0.5) * 25;
            const randomY = (Math.random() - 0.5) * 25;
            const randomRotate = (Math.random() - 0.5) * 15;
            const randomScale = 0.7 + (Math.random() * 0.6);
            element.style.transform += ` translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(${randomScale})`;
        });
    }, 800);
    
    // Aggressive text effects
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseenter', function() {
            this.style.animation = 'aggressiveShake 0.1s ease-in-out infinite alternate, neonGlow 0.5s ease-in-out infinite alternate';
            this.style.filter = 'brightness(1.5) contrast(1.3)';
        });
        
        heading.addEventListener('mouseleave', function() {
            this.style.animation = '';
            this.style.filter = '';
        });
    });
});
