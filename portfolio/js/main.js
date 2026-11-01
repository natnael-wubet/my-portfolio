
// 3D PDF Carousel
const pdfCards = Array.from(document.querySelectorAll('.pdf-card'));
const pdfCardsContainer = document.getElementById('pdfCards');
const pdfStage = document.getElementById('pdfStage');

if (pdfCards.length && pdfCardsContainer) {
    const total = pdfCards.length;
    const radius = 520;
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
            targetRotation = x * -60;
        });
        pdfStage.addEventListener('mouseleave', () => {
            targetRotation = 0;
        });
    }

    if (typeof ScrollTrigger !== 'undefined') {
        gsap.to({}, {
            scrollTrigger: {
                trigger: '.pdf-showcase',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                onUpdate: (self) => {
                    targetRotation = self.progress * -360;
                }
            }
        });
    }
}
