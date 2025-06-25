document.addEventListener('DOMContentLoaded', () => {
            const currentPath = window.location.pathname.split('/').pop(); // Pega o nome do arquivo
            const navLinks = document.querySelectorAll('.main-nav ul li a');

            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove a classe active de todos os links primeiro
                const linkHref = link.getAttribute('href');

                // Verifica se o href do link corresponde à página atual
                if (linkHref === currentPath) {
                    link.classList.add('active');
                }
                // Caso a página inicial seja acessada sem "index.html" explícito no URL
                else if (currentPath === '' && linkHref === 'index.html') {
                    link.classList.add('active');
                }
            });
        });

        // Scroll animations (fade-in) - Replicado para esta página
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