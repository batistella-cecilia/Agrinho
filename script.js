// Aguarda o carregamento completo do DOM (documento HTML)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Rolagem Suave para os Links do Menu
    const linksMenu = document.querySelectorAll('nav ul li a');

    linksMenu.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita o pulo seco padrão do navegador
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calcula a posição descontando a altura do header fixo
                const headerOffset = 75;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Faz a rolagem deslizar suavemente
                });
            }
        });
    });

    // 2. Interação no Botão de Inscrição do Concurso
    const btnInscricao = document.querySelector('.cta-section .btn');

    if (btnInscricao) {
        btnInscricao.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Simulação de abertura de inscrições ou redirecionamento
            alert('农业 - Agro Sustentável:\n\nParabéns pelo interesse! O sistema de submissão de projetos do GitHub estará disponível em breve. Prepare seu código focado em IA, IoT ou Softwares de preservação ambiental!');
        });
    }

    // 3. Efeito Simples de Log ao Entrar no Site (Útil para checar no console do desenvolvedor)
    console.log("Console: Sistema do Concurso 'Agro forte, futuro sustentável' iniciado
