document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('cabecalho');
    const spotifyIcon = document.getElementById('animation');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
                    header.classList.remove('scrolled');
        }
    });
});

ScrollReveal().reveal('.imagem-menor', {
    origin: 'bottom',      
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    scale: 0.9,
    interval: 300,
    reset: true         
});

const frases = [
    "Conectar pessoas é transformar resultados...",
    "Comunicação que gera impacto!",
    "Liderança começa pelo exemplo, não é mesmo?"
];

const elemento = document.getElementById("typing-text");
let fraseIndex = 0;
let letraIndex = 0;
let apagando = false;

function digitar() {
    const fraseAtual = frases[fraseIndex];

    if (!apagando) {
        elemento.textContent = fraseAtual.substring(0, letraIndex++);
        if (letraIndex > fraseAtual.length) {
            setTimeout(() => apagando = true, 2000);
        }
        } else {
            elemento.textContent = fraseAtual.substring(0, letraIndex--);
            if (letraIndex < 0) {
                apagando = false;
                fraseIndex = (fraseIndex + 1) % frases.length;
            }
        }

    setTimeout(digitar, apagando ? 40 : 80);
}

digitar();