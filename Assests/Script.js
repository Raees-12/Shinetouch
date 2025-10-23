// Modal Functions
function openVideoModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    video.src = videoUrl;
    modal.style.display = 'block';
    video.play();
}

function openSamplesModal(productIndex) {
    const modal = document.getElementById('samplesModal');
    const container = modal.querySelector('.carousel-container');
    const product = products[productIndex];
    
    container.innerHTML = '';
    product.samples.forEach((sample, index) => {
        const img = document.createElement('img');
        img.src = sample;
        img.alt = `Sample ${index + 1}`;
        img.className = index === 0 ? 'active' : '';
        container.appendChild(img);
    });
    
    modal.style.display = 'block';
    currentSlide = 0;
}

// Close modals when clicking the close button or outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal')) {
        const modal = e.target.closest('.modal');
        const video = modal.querySelector('video');
        if (video) video.pause();
        modal.style.display = 'none';
    }
});

// Carousel Navigation
let currentSlide = 0;

document.addEventListener('click', (e) => {
    if (e.target.closest('.carousel-btn')) {
        const isNext = e.target.closest('.next');
        const container = document.querySelector('.carousel-container');
        const slides = container.getElementsByTagName('img');
        
        slides[currentSlide].classList.remove('active');
        currentSlide = isNext ? 
            (currentSlide + 1) % slides.length : 
            (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorTrail = document.querySelector('.cursor-trail');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorTrail.style.left = e.clientX + 'px';
        cursorTrail.style.top = e.clientY + 'px';
    }, 50);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
});

// Loading Screen
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader-wrapper');
    const images = document.querySelectorAll('img');
    let loadedImages = 0;

    // Show loader
    loader.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    function hideLoader() {
        loader.style.opacity = '0';
        document.body.style.overflow = '';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }

    function imageLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            setTimeout(hideLoader, 500); // Minimum loader display time
        }
    }

    // Check if all images are already cached
    let allCached = true;
    images.forEach(img => {
        if (!img.complete) {
            allCached = false;
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // Count failed images as loaded
        }
    });

    // If all images are cached, hide loader after minimum time
    if (allCached) {
        setTimeout(hideLoader, 500);
    }

    // Fallback: Hide loader after maximum wait time (3 seconds)
    setTimeout(hideLoader, 3000);
});

// Responsive Navigation
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic Product Cards
const products = [
    {
        name: "Auto Screen With Industrial Foiler",
        description: "High-performance industrial screen printing machine with automatic foiling capabilities. Perfect for precision manufacturing and high-volume production.",
        image: "Assests/Auto Screen With industrial Foiler.jpeg",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Auto%20Screen%20With%20Industrial%20Foiler.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Full Logo.png"]
    },
    // Add more products as needed
];

const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-buttons">
            <a href="${product.whatsappUrl}" target="_blank" class="product-btn quote-btn">
                <i class="fab fa-whatsapp"></i> Get Best Quote
            </a>
            <button class="product-btn demo-btn" onclick="openVideoModal('${product.videoUrl}')">
                <i class="fas fa-play"></i> Watch Demo
            </button>
            <button class="product-btn samples-btn" onclick="openSamplesModal(${products.indexOf(product)})">
                <i class="fas fa-images"></i> View Samples
            </button>
        </div>
    `;
    
    if (products.indexOf(product) === 0) { // First product
        document.body.insertAdjacentHTML('beforeend', `
            <!-- Video Modal -->
            <div id="videoModal" class="modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <video id="modalVideo" controls>
                        <source src="" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <!-- Samples Modal -->
            <div id="samplesModal" class="modal">
                <div class="modal-content samples-content">
                    <span class="close-modal">&times;</span>
                    <div class="carousel">
                        <div class="carousel-container"></div>
                        <button class="carousel-btn prev"><i class="fas fa-chevron-left"></i></button>
                        <button class="carousel-btn next"><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </div>
        `);
    }
    productGrid.appendChild(productCard);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submitted successfully!');
    contactForm.reset();
});

// Navbar Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    if (currentScroll === 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature, .product-card, .machine-card').forEach(element => {
    observer.observe(element);
});
