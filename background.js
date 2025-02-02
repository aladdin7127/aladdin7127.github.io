function generateBackground() {
    const numStripes = 100;
    const container = document.body;

    const existingBackground = document.getElementById('background-stripes');
    if (existingBackground) {
        existingBackground.remove();
    }

    const stripesContainer = document.createElement('div');
    stripesContainer.id = 'background-stripes';
    stripesContainer.style.position = 'absolute';
    stripesContainer.style.top = '0';
    stripesContainer.style.left = '0';
    stripesContainer.style.width = '100%';
    stripesContainer.style.height = '100vh';
    stripesContainer.style.zIndex = '-1';
    stripesContainer.style.pointerEvents = 'none';

    for (let i = 0; i < numStripes; i++) {
        const stripe = document.createElement('div');
        
        const stripeWidth = Math.random() * 5 + 3;
        const stripeLength = Math.random() * window.innerHeight + window.innerHeight / 2;

        const positionX = Math.random() * window.innerWidth;
        const positionY = (Math.random() * window.innerHeight / 1.0) - window.innerHeight / 3;

        stripe.style.position = 'absolute';
        stripe.style.top = `${positionY}px`;
        stripe.style.left = `${positionX}px`;
        stripe.style.width = `${stripeWidth}px`;
        stripe.style.height = `${stripeLength}px`;
        stripe.style.backgroundColor = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`;
        stripe.style.transform = `rotate(45deg)`;
        stripe.style.zIndex = '-1';

        stripesContainer.appendChild(stripe);
    }

    container.appendChild(stripesContainer);

    const gradientOverlay = document.createElement('div');
    gradientOverlay.style.position = 'absolute';
    gradientOverlay.style.top = '0';
    gradientOverlay.style.left = '0';
    gradientOverlay.style.width = '100%';
    gradientOverlay.style.height = '100vh';
    gradientOverlay.style.background = 'linear-gradient(to bottom left, rgba(100, 0, 150, 0.7), rgba(0, 200, 255, 0.7))';
    gradientOverlay.style.backgroundSize = 'cover';
    gradientOverlay.style.zIndex = '-1';
    container.appendChild(gradientOverlay);
}

window.onload = generateBackground;
