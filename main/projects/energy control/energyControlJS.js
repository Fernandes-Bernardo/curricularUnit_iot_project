document.addEventListener('DOMContentLoaded', () => {
            // Ajusta o caminho para a página atual, considerando a estrutura de pastas
            const currentPathFull = window.location.pathname;
            const currentFileName = currentPathFull.split('/').pop(); // Ex: "project-iot-monitoring.html"

            const navLinks = document.querySelectorAll('.main-nav ul li a');

            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove a classe active de todos os links primeiro
                const linkHrefFull = link.getAttribute('href');
                const linkFileName = linkHrefFull.split('/').pop();

                // Compara apenas o nome do arquivo
                if (linkFileName === currentFileName) {
                    link.classList.add('active');
                }
                // Tratamento especial para a página inicial (index.html)
                else if (currentFileName === '' && linkFileName === 'index.html') {
                    link.classList.add('active');
                }
                // Ativa "Projetos" no menu se estiver em qualquer subpágina de projetos
                else if (currentPathFull.includes('/projects/') && linkFileName === 'projects.html') {
                    link.classList.add('active');
                }
            });
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