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
// Reviews Data
const reviews = [
    {
        name: "Shivam Sharma",
        location: "Lucknow, Uttar Pradesh",
        rating: 5,
        date: "05-September-25",
        product: "Gluing Machinery"
    },
    {
        name: "SHREYAS GHOTEKAR",
        location: "Nashik, Maharashtra",
        rating: 5,
        date: "04-August-25",
        product: "Gypsum Cornice"
    },
    {
        name: "V.baskar",
        location: "Thanjavur, Tamil Nadu",
        rating: 4,
        date: "07-May-25",
        product: "UV Coating Machine"
    },
    {
        name: "Ravi",
        location: "Rajkot, Gujarat",
        rating: 5,
        date: "24-December-24",
        product: "Screen Printing Machines"
    },
    {
        name: "Sandeep",
        location: "Sri Ganganagar, Rajasthan",
        rating: 5,
        date: "29-November-24",
        product: "Industrial Machinery"
    },
    {
        name: "Maujooth",
        location: "Sri Lanka",
        rating: 5,
        date: "27-June-24",
        product: "Halal Frozen Whole Chicken"
    },
    {
        name: "Yaqeen",
        location: "United Arab Emirates",
        rating: 4,
        date: "03-April-24",
        product: "Thermal Lamination Machine"
    },
    {
        name: "Amith Keshri",
        location: "Patna, Bihar",
        rating: 5,
        date: "18-March-24",
        product: "Thermal Lamination Machine"
    },
    {
        name: "Faisal Ameen",
        location: "Pakistan",
        rating: 4,
        date: "31-January-24",
        product: "Terracotta Clay"
    },
    {
        name: "Manickam",
        location: "Tiruchirappalli, Tamil Nadu",
        rating: 5,
        date: "24-March-23",
        product: "Clay Block"
    },
    {
        name: "NIMESH VALLABHBHAI THUMMAR",
        location: "Rajkot, Gujarat",
        rating: 5,
        date: "15-July-21",
        product: "Thermal Lamination Machine"
    },
    {
        name: "Naveed Latif",
        location: "Pakistan",
        rating: 4,
        date: "20-June-21",
        product: "UV Coating Machine"
    },
    {
        name: "John",
        location: "United Kingdom",
        rating: 5,
        date: "12-April-20",
        product: "Gypsum Cornice"
    }
];

// Function to create review cards
function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <div class="review-header">
            <div class="reviewer-avatar">${review.name[0]}</div>
            <div class="reviewer-info">
                <h3>${review.name}</h3>
                <p class="reviewer-location">${review.location}</p>
            </div>
        </div>
        <div class="stars">
            ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
            ${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
        </div>
        <div class="review-date">${review.date}</div>
        <div class="review-product">
            <strong>Product Name:</strong> ${review.product}
        </div>
    `;
    return card;
}

// Function to initialize reviews
function initializeReviews() {
    const reviewsGrid = document.querySelector('.reviews-grid');
    if (!reviewsGrid) return;

    // Check if we're on the main page or reviews page
    const isReviewPage = window.location.pathname.includes('Review.html');
    
    if (isReviewPage) {
        // Show all reviews with pagination on review page
        currentFilteredReviews = [...reviews];
        showReviewPage(1);
    } else {
        // Show only 3 reviews on main page
        reviews.slice(0, 3).forEach(review => {
            reviewsGrid.appendChild(createReviewCard(review));
        });
    }
}

let currentFilteredReviews = [];
const REVIEWS_PER_PAGE = 10;

function showReviewPage(pageNumber) {
    const reviewsGrid = document.querySelector('.reviews-grid');
    const start = (pageNumber - 1) * REVIEWS_PER_PAGE;
    const end = start + REVIEWS_PER_PAGE;
    
    // Clear existing reviews
    reviewsGrid.innerHTML = '';
    
    // Show reviews for current page
    currentFilteredReviews.slice(start, end).forEach(review => {
        reviewsGrid.appendChild(createReviewCard(review));
    });
    
    // Update pagination
    updatePagination(pageNumber);
}

function updatePagination(currentPage) {
    const totalPages = Math.ceil(currentFilteredReviews.length / REVIEWS_PER_PAGE);
    const pageNumbers = document.querySelector('.page-numbers');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!pageNumbers) return;
    
    pageNumbers.innerHTML = '';
    
    // Generate page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageNum = document.createElement('div');
        pageNum.className = `page-number${i === currentPage ? ' active' : ''}`;
        pageNum.textContent = i;
        pageNum.addEventListener('click', () => showReviewPage(i));
        pageNumbers.appendChild(pageNum);
    }
    
    // Update prev/next buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    prevBtn.onclick = () => showReviewPage(currentPage - 1);
    nextBtn.onclick = () => showReviewPage(currentPage + 1);
}

// Initialize reviews on page load
document.addEventListener('DOMContentLoaded', initializeReviews);

const products = [
    {
        name: "Auto Screen With I Foil Online",
        description: "Advanced screen printing system with integrated online foiling capabilities for high-quality finishing applications.",
        image: "Assests/Machines/Foiling & Finishing Machines/Auto Screen With I Foil Online/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Auto%20Screen%20With%20I%20Foil%20Online.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/Auto Screen With I Foil Online/1.png"]
    },
    {
        name: "Comp Foil Fusing Machine",
        description: "Professional foil fusing equipment designed for precise and consistent foil application across various materials.",
        image: "Assests/Machines/Foiling & Finishing Machines/Comp Foil Fusing Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Comp%20Foil%20Fusing%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/Comp Foil Fusing Machine/1.png"]
    },
    {
        name: "Foil Fuser H33",
        description: "Compact and efficient foil fusing system perfect for small to medium-scale production requirements.",
        image: "Assests/Machines/Foiling & Finishing Machines/Foil Fuser H33/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Foil%20Fuser%20H33.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/Foil Fuser H33/1.png"]
    },
    {
        name: "Foil Fusing Machine",
        description: "Professional-grade foil fusing machine designed for high-volume production and precise foil application. Features advanced temperature control and consistent pressure application.",
        image: "Assests/Machines/Foiling & Finishing Machines/Foil Fusing Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Foil%20Fusing%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/Foil Fusing Machine/1.png"]
    },
    {
        name: "I Foil With Semiautomatic Machine",
        description: "Semi-automated foiling system offering precise control and versatility for various finishing applications.",
        image: "Assests/Machines/Foiling & Finishing Machines/I Foil With Semiautomatic Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20I%20Foil%20With%20Semiautomatic%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/I Foil With Semiautomatic Machine/1.png"]
    },
    {
        name: "i-Foil 610 3DSPOT UV AND EMBOSSED FOILING MACHINE",
        description: "Advanced machine combining 3D spot UV coating and embossed foiling capabilities for premium finishing effects.",
        image: "Assests/Machines/Foiling & Finishing Machines/i-Foil 610 3DSPOT UV AND EMBOSSED FOILING MACHINE/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20i-Foil%20610%203DSPOT%20UV%20AND%20EMBOSSED%20FOILING%20MACHINE.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/i-Foil 610 3DSPOT UV AND EMBOSSED FOILING MACHINE/1.png"]
    },
    {
        name: "Multitasking UV Coating Machine",
        description: "Versatile UV coating system capable of handling multiple finishing tasks with professional-grade results.",
        image: "Assests/Machines/Foiling & Finishing Machines/Multitasking UV Coating Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Multitasking%20UV%20Coating%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/Multitasking UV Coating Machine/1.png"]
    },
    {
        name: "Paper Texture Machine",
        description: "Specialized equipment for creating custom textures and finishes on paper and similar materials.",
        image: "Assests/Machines/Foiling & Finishing Machines/Paper Texture Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20Paper%20Texture%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/Paper Texture Machine/1.png"]
    },
    {
        name: "SEMI AUTOMATIC SPOT UV Indiacot",
        description: "Semi-automatic spot UV coating machine designed for precise application and professional finishing.",
        image: "Assests/Machines/Foiling & Finishing Machines/SEMI AUTOMATIC SPOT UV  Indiacot/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20SEMI%20AUTOMATIC%20SPOT%20UV%20Indiacot.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/SEMI AUTOMATIC SPOT UV  Indiacot/1.png"]
    },
    {
        name: "UV Curing Machine",
        description: "High-efficiency UV curing system for fast and reliable curing of UV coatings and inks.",
        image: "Assests/Machines/Foiling & Finishing Machines/UV Curing Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20UV%20Curing%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/UV Curing Machine/1.png"]
    },
    {
        name: "UV LED Exposure Machine",
        description: "Modern LED-based UV exposure system offering precise control and energy-efficient operation.",
        image: "Assests/Machines/Foiling & Finishing Machines/UV LED Exposure Machine/1.png",
        whatsappUrl: "https://wa.me/919624186098?text=Hello%2C%20I%E2%80%99m%20interested%20in%20getting%20the%20best%20quote%20for%20your%20UV%20LED%20Exposure%20Machine.%20Please%20share%20details.",
        videoUrl: "Assests/Video 1.mp4",
        samples: ["Assests/Machines/Foiling & Finishing Machines/UV LED Exposure Machine/1.png"]
    }
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
