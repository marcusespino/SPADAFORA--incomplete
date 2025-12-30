/* ================= DEPENDÊNCIAS ================= */
import '../styles/main.less';
import 'bootstrap';
import $ from 'jquery';
window.$ = window.jQuery = $;

import 'jquery-mask-plugin';
import 'jquery-validation';
import ScrollReveal from 'scrollreveal';

import './form';
import './videos';
import './o_que_eu_faco';

/* ================= DOM READY ================= */
document.addEventListener('DOMContentLoaded', () => {

    /* ===== HEADER SCROLL ===== */
    const header = document.getElementById('cabecalho');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    /* ===== TYPING EFFECT ===== */
    const frases = [
        "Conectar pessoas é transformar resultados...",
        "Comunicação que gera impacto!",
        "Liderança começa pelo exemplo, não é mesmo?"
    ];

    const elemento = document.getElementById('typing-text');

    if (elemento) {
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
    }

    /* ===== INSTAGRAM EMBEDS ===== */
    if (!window.instgrm) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);
    } else {
        window.instgrm.Embeds.process();
    }
});

/* ================= WINDOW LOAD ================= */
window.addEventListener('load', () => {

    /* ===== SCROLL REVEAL ===== */
    ScrollReveal().reveal('.imagem-menor', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        easing: 'ease-out',
        scale: 0.9,
        interval: 300,
        reset: true
    });

    /* ===== SCALE ON SCROLL ===== */
    const scaleImage = document.querySelector('.js-scale-on-scroll');

    if (scaleImage) {
        window.addEventListener('scroll', () => {
            const rect = scaleImage.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom > 0) {
                const progress = 1 - rect.top / windowHeight;
                const scale = Math.min(1.15, 1 + progress * 0.15);
                scaleImage.style.transform = `scale(${scale})`;
            }
        });
    }
});
