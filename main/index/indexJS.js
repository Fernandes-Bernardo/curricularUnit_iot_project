document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop(); // Pega o nome do arquivo
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const linkHref = link.getAttribute('href');


        if (linkHref === currentPath || (linkHref === 'index.html' && (currentPath === '' || currentPath === 'index.html'))) {
            link.classList.add('active');
        } else if (linkHref.includes(currentPath) && currentPath !== '') {
        }
    });
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#') && document.querySelector(targetId)) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations (fade-in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 80) {
        header.style.background = 'var(--cor-blur-background-header)';
        header.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
    } else {
        // Cor inicial do header
        header.style.background = 'linear-gradient(135deg, rgba(49, 130, 189, 0.5) 0%, rgba(8, 81, 156, 0.7) 100%)';
        header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    }
});