// Image Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}
setInterval(nextSlide, 3000);

// Menu Tabs
function showCategory(category, event) {
    const categories = document.querySelectorAll('.menu-category');
    const tabs = document.querySelectorAll('.tab-btn');

    categories.forEach(cat => cat.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(category).classList.add('active');
    event.target.classList.add('active');
}

// Offers Slider
const offerCards = document.querySelectorAll('.offer-card');
const dots = document.querySelectorAll('.dot');
let currentOffer = 0;

function nextOffer() {
    offerCards[currentOffer].classList.remove('active');
    dots[currentOffer].classList.remove('active');
    currentOffer = (currentOffer + 1) % offerCards.length;
    offerCards[currentOffer].classList.add('active');
    dots[currentOffer].classList.add('active');
}
setInterval(nextOffer, 4000);

// Smooth Scrolling
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Order Form
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your order!! We will call you shortly to confirm!! 🚀🍔');
    this.reset();
});

// Cart Button
document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.textContent = '✅ Added!!';
        this.style.backgroundColor = '#28a745';
        setTimeout(() => {
            this.textContent = '🛒 Add to Cart';
            this.style.backgroundColor = '#ff6b35';
        }, 2000);
    });
});