// Ano dinâmico no rodapé
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Menu Responsivo Mobile
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Fechar menu ao clicar num link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
}

// Header com efeito de sombra ao fazer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Funcionalidade da Janela Modal do Portfólio
function openProject(imageSrc) {
    const modal = document.getElementById('projectModal');
    const projectImage = document.getElementById('projectImage');
    
    if (modal && projectImage) {
        projectImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita scroll do fundo
    }
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Fechar modal ao clicar fora da janela
window.addEventListener('click', (event) => {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProject();
    }
});

// Submissão do Formulário de Contacto via WhatsApp
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Substitui pelo número de WhatsApp real da Ctrl Plus+ (incluindo o indicativo 244 para Angola)
    const phoneNumber = "244933837608"; 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Formata o texto da mensagem para o WhatsApp
        const text = `Olá, Ctrl Plus+! 👋%0A%0A` +
                     `*Nome:* ${encodeURIComponent(name)}%0A` +
                     `*Email:* ${encodeURIComponent(email)}%0A%0A` +
                     `*Mensagem:*%0A${encodeURIComponent(message)}`;

        // Gera o link direto do WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        // Abre o WhatsApp numa nova aba
        window.open(whatsappUrl, '_blank');

        // Limpa o formulário
        document.getElementById('contactForm').reset();
    }
}

// Funcionalidade do Widget Flutuante Interativo
function toggleWidget() {
    const popup = document.getElementById('widgetPopup');
    if (popup) {
        popup.classList.toggle('active');
    }
}

// Copiar Email com Notificação
function copyEmail() {
    const email = "ctrlplus@hotmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copiado com sucesso: " + email);
        toggleWidget();
    });
}

// Alternar Modo de Brilho Intensificado
function toggleGlowMode() {
    document.body.classList.toggle('super-glow');
    alert("Efeito de iluminação Neon alternado!");
    toggleWidget();
}
// ================= SUBMISSÃO DO FORMULÁRIO PARA O WHATSAPP =================
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Altera este número para o número real do WhatsApp da Ctrl Plus+ (com o indicativo 244)
    const phoneNumber = "244933837608"; 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const text = `Olá, Ctrl Plus+! 👋%0A%0A` +
                     `*Nome:* ${encodeURIComponent(name)}%0A` +
                     `*Email:* ${encodeURIComponent(email)}%0A%0A` +
                     `*Mensagem:*%0A${encodeURIComponent(message)}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

        window.open(whatsappUrl, '_blank');
        document.getElementById('contactForm').reset();
    }
}

// ================= WIDGET FLUTUANTE INTERATIVO =================
function toggleWidget() {
    const popup = document.getElementById('widgetPopup');
    if (popup) {
        popup.classList.toggle('active');
    }
}

function copyEmail() {
    const email = "ctrlplus@hotmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copiado com sucesso: " + email);
        toggleWidget();
    });
}

function toggleGlowMode() {
    document.body.classList.toggle('super-glow');
    alert("Efeito de iluminação Neon alternado!");
    toggleWidget();
}