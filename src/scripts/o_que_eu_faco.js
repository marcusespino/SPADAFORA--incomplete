const section = document.querySelector('#o-que-eu-faco');
const wrapper = document.querySelector('.imagem-wrapper');

if (section && wrapper) {
    window.addEventListener('scroll', () => {

        const width = window.innerWidth;

        const isMobile = width < 576;
        const isTablet = width >= 576 && width < 992;

        /* ================= TABLET ================= */
        if (isTablet) {
            wrapper.style.transform = 'scale(1)';
            return;
        }

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const start = sectionTop - windowHeight * 0.6;
        const end = sectionTop + sectionHeight * 0.6;

        if (scrollY < start || scrollY > end) return;

        const progress = (scrollY - start) / (end - start);

        const steps = 6;
        const stepped = Math.floor(progress * steps) / steps;

        /* ================= MOBILE ================= */
        if (isMobile) {
            const minZ = -140;
            const maxZ = -80;
            const z = minZ + stepped * (maxZ - minZ);

            wrapper.style.transform =
                `perspective(800px) translateZ(${z}px)`;
            return;
        }

        /* ================= DESKTOP ================= */
        const minScale = 0.9;
        const maxScale = 1.2;
        const scale = minScale + stepped * (maxScale - minScale);

        wrapper.style.transform = `scale(${scale})`;
    });
}
