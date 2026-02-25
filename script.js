// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const form = event.target;
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector('textarea').value;
    
    // Simple validation
    if (nombre && email && mensaje) {
        // Show success message
        alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
        
        // Reset form
        form.reset();
    } else {
        alert('Por favor completa todos los campos.');
    }
}

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = 'var(--shadow-light)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Active nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        document.querySelectorAll('.nav-links a').forEach(l => {
            l.style.color = 'var(--text-color)';
        });
    });
});

// Add reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and skill items
document.querySelectorAll('.project-card, .skill-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Smooth number counter for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada con éxito');
    
    // Add animation to hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
});

// Parallax effect for bubbles
window.addEventListener('mousemove', (e) => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        const speed = (index + 1) * 0.05;
        const x = (e.clientX * speed) / 100;
        const y = (e.clientY * speed) / 100;
        bubble.style.transform = `translate(${x}px, ${y}px)`;
    });
});
