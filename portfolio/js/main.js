const cursor = document.getElementById('cursor');
const cursorOutline = document.getElementById('cursor-outline');

if (cursor && cursorOutline && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorOutline.style.left = e.clientX + 'px';
        cursorOutline.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('.magnetic').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.8)';
            cursorOutline.style.borderColor = 'rgba(255,255,255,0.9)';
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.borderColor = 'rgba(255,255,255,0.6)';
        });
    });
}

const menuBtn = document.querySelector('.nav-menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const menuLinks = document.querySelectorAll('.menu-link');

if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', () => {
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = menuOverlay.classList.contains('active') ? 'hidden' : '';
    });
}

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});

if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.title-char', {
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.4
    });

    gsap.set('.title-char', { y: 120, opacity: 0 });
}

// 3D PDF Carousel
const pdfCards = Array.from(document.querySelectorAll('.pdf-card'));
const pdfCardsContainer = document.getElementById('pdfCards');
const pdfStage = document.getElementById('pdfStage');

if (pdfCards.length && pdfCardsContainer) {
    const total = pdfCards.length;
    const radius = Math.min(window.innerWidth * 0.28, 520);
    const angle = 360 / total;

    pdfCards.forEach((card, i) => {
        gsap.set(card, {
            transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
            transformOrigin: '50% 50%'
        });
    });

    let currentRotation = 0;
    let targetRotation = 0;

    const updateRotation = () => {
        currentRotation += (targetRotation - currentRotation) * 0.08;
        gsap.set(pdfCardsContainer, { rotateY: currentRotation });
        requestAnimationFrame(updateRotation);
    };
    updateRotation();

    if (pdfStage) {
        pdfStage.addEventListener('mousemove', (e) => {
            const rect = pdfStage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            targetRotation = x * -90;
        });
        pdfStage.addEventListener('mouseleave', () => {
            targetRotation = 0;
        });
    }

    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
            trigger: '.pdf-showcase',
            start: 'top bottom',
            end: 'bottom top',
            onUpdate: (self) => {
                targetRotation = self.progress * -720;
            }
        });
    }
}
