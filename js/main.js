// Loader -
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

// Alternar tela cheia
document.getElementById('fullscreen-btn').addEventListener('click', function() {
    const container = document.getElementById('map-container');
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            console.error(`Erro ao tentar entrar em tela cheia: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
});

// Verificar carregamento do iframe 
const mapIframe = document.querySelector('iframe');
if (mapIframe) {
    mapIframe.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });
}

// Efeito de scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});