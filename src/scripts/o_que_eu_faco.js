const section = document.querySelector('#o-que-eu-faco');
const image = document.querySelector('.js-scale-on-scroll');

window.addEventListener('scroll', () => {
    if (!image) return;

    const width = window.innerWidth;

    const isMobile = width < 576;
    const isTablet = width >= 576 && width < 992;
    const isDesktop = width >= 992;

    // 📲 TABLET: trava completamente
    if (isTablet) {
        image.style.transform = 'scale(1)';
        return;
    }

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const start = sectionTop - windowHeight * 0.7;
    const end = sectionTop + sectionHeight * 0.75;

    if (scrollY > start && scrollY < end) {
        const progress = (scrollY - start) / (end - start);

        const steps = 6;
        const stepped = Math.floor(progress * steps) / steps;

        let minScale = 0.9;
        let maxScale = 1.35;

        // 📱 MOBILE: anima menos
        if (isMobile) {
            minScale = 0.95;
            maxScale = 1.0;
        }

        // 🖥 DESKTOP mantém impacto
        const scale = minScale + stepped * (maxScale - minScale);
        image.style.transform = `scale(${scale})`;
    }
});
