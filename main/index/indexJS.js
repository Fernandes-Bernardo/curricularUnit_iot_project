document.addEventListener('DOMContentLoaded', () => {
            const currentPath = window.location.pathname.split('/').pop(); // Pega o nome do arquivo (ex: index.html ou projects.html)
            const navLinks = document.querySelectorAll('.main-nav ul li a');

            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove a classe active de todos os links primeiro
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
                    e.preventDefault(); // Previne o comportamento padrão APENAS para âncoras internas
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
                header.style.background = 'var(--gradient-primario)';
                header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }
        });