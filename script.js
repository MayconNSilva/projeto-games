const targets = document.querySelectorAll('.autoBlur');

function updateBlur() {
    targets.forEach(target => {
        const rect = target.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        const visibilityRatio = visibleHeight / rect.height;

        if (visibilityRatio > 0.4) { // se mais de 50% da div tá visível
            target.classList.add('visible');
        } else {
            target.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', updateBlur);
window.addEventListener('resize', updateBlur);
updateBlur();