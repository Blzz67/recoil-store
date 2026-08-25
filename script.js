// ============ NAVIGATION ============
function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// ============ FAQ TOGGLE ============
function toggleFAQ(element) {
    element.classList.toggle('active');
}

// ============ PAYPAL INTEGRATION ============
// REPLACE WITH YOUR PAYPAL EMAIL
const PAYPAL_EMAIL = 'sophieesser19@gmail.com';
const PRICE = '10.00';
const CURRENCY = 'EUR';
const ITEM_NAME = 'Recoil Scripts - Full Access';
const SUCCESS_URL = 'https://your-domain.com/success.html';
const CANCEL_URL = 'https://your-domain.com/cancel.html';

function startPayment() {
    const paypalUrl = 'https://www.paypal.com/cgi-bin/webscr?' +
        'cmd=_xclick' +
        '&business=' + encodeURIComponent(PAYPAL_EMAIL) +
        '&item_name=' + encodeURIComponent(ITEM_NAME) +
        '&amount=' + PRICE +
        '&currency_code=' + CURRENCY +
        '&return=' + encodeURIComponent(SUCCESS_URL) +
        '&cancel_return=' + encodeURIComponent(CANCEL_URL) +
        '&no_shipping=1';
    
    window.location.href = paypalUrl;
}

// ============ SCROLL ANIMATION ============
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// ============ PARTICLE BACKGROUND GENERATOR ============
function createParticles() {
    const bg = document.querySelector('.particle-bg');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 68, 68, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s infinite`;
        bg.appendChild(particle);
    }
}

// Inject particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
    }
`;
document.head.appendChild(style);

createParticles();