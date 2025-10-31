// Function to open WhatsApp with product inquiry
function openWhatsAppInquiry(productName) {
    const message = encodeURIComponent(`Hello, I'm interested in getting more information about your ${productName}. Please share details about pricing and specifications.`);
    const whatsappUrl = `https://wa.me/918200479696?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Product database
const products = {
    // Book Binding & Post-Press Solutions
    'dual-side-binding': {
        category: 'Book Binding & Post-Press Solutions',
        title: 'Dual Side Print Lay Flat Binding Machine',
        description: 'Professional binding solution for creating lay-flat books with dual-side printing capabilities. Perfect for photo albums, catalogs, and premium publications requiring seamless page spreads.',
        images: [
            'Machines/Book Binding & Post-Press Solutions/Dual Side Print Lay Flat Blinding/1.png',
            'Machines/Book Binding & Post-Press Solutions/Dual Side Print Lay Flat Blinding/2.png',
            'Machines/Book Binding & Post-Press Solutions/Dual Side Print Lay Flat Blinding/3.png'
        ],
        features: [
            'Dual-side printing compatibility',
            'Lay-flat binding technology',
            'Precision alignment system',
            'Adjustable binding pressure',
            'Quick setup and operation',
            'Various paper size compatibility'
        ],
        specifications: [
            'Maximum Book Size: 450 x 450mm',
            'Minimum Book Size: 100 x 100mm',
            'Binding Thickness: 2-50mm',
            'Power Supply: 220V/50Hz'
        ]
    },
    'pneumatic-creasing': {
        category: 'Book Binding & Post-Press Solutions',
        title: 'Pneumatic Creasing Machine',
        description: 'High-precision pneumatic creasing solution for professional print finishing. Features adjustable pressure and multiple creasing patterns.',
        images: [
            'Machines/Book Binding & Post-Press Solutions/Pneumatic Creasing Machine/1.png',
            'Machines/Book Binding & Post-Press Solutions/Pneumatic Creasing Machine/2.png'
        ],
        features: [
            'Adjustable pneumatic pressure',
            'Multiple creasing patterns',
            'Digital control panel',
            'Quick tool change system',
            'Safety guards',
            'Counter function'
        ],
        specifications: [
            'Working Width: Up to 650mm',
            'Paper Weight: 80-400gsm',
            'Speed: Up to 4000 sheets/hour',
            'Power Supply: 220V/50Hz'
        ]
    },
    'gluing-machine': {
        category: 'Book Binding & Post-Press Solutions',
        title: 'Gluing Machine',
        description: 'Professional gluing solution for book binding and post-press operations. Features precise glue application control and adjustable settings.',
        images: [
            'Machines/Book Binding & Post-Press Solutions/Gluing Machine/1.png',
            'Machines/Book Binding & Post-Press Solutions/Gluing Machine/2.png'
        ],
        features: [
            'Precision glue application',
            'Adjustable glue thickness',
            'Temperature control system',
            'Easy cleaning mechanism',
            'Variable speed control',
            'Safety interlocks'
        ],
        specifications: [
            'Working Width: Up to 600mm',
            'Gluing Speed: 20-60m/min',
            'Temperature Range: 0-200°C',
            'Power Supply: 220V/50Hz'
        ]
    },
    // Foiling & Finishing Machines
    'i-foil-610': {
        category: 'Foiling & Finishing Machines',
        title: 'i-Foil 610 3D SPOT UV and Embossed Foiling Machine',
        description: 'Advanced 3D spot UV and embossed foiling machine for premium finishing effects, offering precise control and versatile application options.',
        images: [
            'Machines/Foiling & Finishing Machines/i-Foil 610 3DSPOT UV AND EMBOSSED FOILING MACHINE/1.png',
            'Machines/Foiling & Finishing Machines/i-Foil 610 3DSPOT UV AND EMBOSSED FOILING MACHINE/2.png',
            'Machines/Foiling & Finishing Machines/i-Foil 610 3DSPOT UV AND EMBOSSED FOILING MACHINE/3.png'
        ],
        features: [
            '3D spot UV capability',
            'Embossed foiling functionality',
            'Precise registration system',
            'Digital control interface',
            'Multiple effect options',
            'High-speed operation'
        ],
        specifications: [
            'Maximum Sheet Size: 610 x 420mm',
            'Minimum Sheet Size: 210 x 297mm',
            'Speed: Up to 3,000 sheets/hour',
            'UV Power: 2kW',
            'Power Supply: 220V/50Hz'
        ]
    },
    'i-foil-semi-auto': {
        category: 'Foiling & Finishing Machines',
        title: 'i-Foil Semi Automatic Machine',
        description: 'Semi-automatic foiling solution offering versatile finishing applications with user-friendly operation and consistent results.',
        images: [
            'Machines/Foiling & Finishing Machines/I Foil With Semiautomatic Machine/1.png',
            'Machines/Foiling & Finishing Machines/I Foil With Semiautomatic Machine/2.png'
        ],
        features: [
            'Semi-automatic operation',
            'Easy foil loading system',
            'Temperature control',
            'Pressure adjustment',
            'Multiple foil compatibility',
            'Safety interlocks'
        ],
        specifications: [
            'Working Area: 450 x 320mm',
            'Temperature Range: 0-200°C',
            'Operation Mode: Semi-automatic',
            'Power Supply: 220V/50Hz'
        ]
    },
    'auto-screen-foil': {
        category: 'Foiling & Finishing Machines',
        title: 'Auto Screen with i-Foil Online',
        description: 'Integrated screen printing and foiling solution for continuous production, combining efficiency with premium finishing quality.',
        images: [
            'Machines/Foiling & Finishing Machines/Auto Screen With I Foil Online/1.png',
            'Machines/Foiling & Finishing Machines/Auto Screen With I Foil Online/2.png'
        ],
        features: [
            'Automatic screen printing',
            'Integrated foiling system',
            'Continuous operation',
            'Digital controls',
            'Quick changeover',
            'Multiple substrate handling'
        ],
        specifications: [
            'Maximum Sheet Size: 700 x 500mm',
            'Screen Frame Size: 800 x 600mm',
            'Production Speed: Up to 3,600 sheets/hour',
            'Power Supply: 380V/50Hz'
        ]
    },
    'foil-fuser-h33': {
        category: 'Foiling & Finishing Machines',
        title: 'Foil Fuser H33',
        description: 'Compact and efficient foil fusing solution for small to medium production, offering precise temperature control and consistent results.',
        images: [
            'Machines/Foiling & Finishing Machines/Foil Fuser H33/1.png',
            'Machines/Foiling & Finishing Machines/Foil Fuser H33/2.png'
        ],
        features: [
            'Compact design',
            'Digital temperature control',
            'Even heat distribution',
            'Quick warm-up',
            'Easy maintenance',
            'Safety features'
        ],
        specifications: [
            'Fusing Width: 330mm',
            'Temperature Range: 0-200°C',
            'Speed: 1.2-12m/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    'paper-texture': {
        category: 'Foiling & Finishing Machines',
        title: 'Paper Texture Machine',
        description: 'Create unique paper textures and patterns for premium print products with this versatile texturing solution.',
        images: [
            'Machines/Foiling & Finishing Machines/Paper Texture Machine/1.png',
            'Machines/Foiling & Finishing Machines/Paper Texture Machine/2.png'
        ],
        features: [
            'Multiple texture patterns',
            'Adjustable pressure',
            'Variable speed control',
            'Pattern customization',
            'Quick pattern change',
            'Digital control panel'
        ],
        specifications: [
            'Working Width: Up to 650mm',
            'Paper Weight: 120-350gsm',
            'Speed: 10-35m/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    'uv-curing': {
        category: 'Foiling & Finishing Machines',
        title: 'UV Curing Machine',
        description: 'Professional UV curing solution for various printing applications, featuring advanced UV technology and precise curing control.',
        images: [
            'Machines/Foiling & Finishing Machines/UV Curing Machine/1.png',
            'Machines/Foiling & Finishing Machines/UV Curing Machine/2.png'
        ],
        features: [
            'Advanced UV technology',
            'Variable power control',
            'Adjustable height',
            'Cooling system',
            'Safety shields',
            'Digital interface'
        ],
        specifications: [
            'UV Lamp Power: 3-5kW',
            'Curing Width: Up to 800mm',
            'Belt Speed: 3-30m/min',
            'Power Supply: 380V/50Hz'
        ]
    },
    'comp-foil-fusing': {
        category: 'Foiling & Finishing Machines',
        title: 'Comp Foil Fusing Machine',
        description: 'Professional foil fusing equipment designed for precise and consistent foil application across various materials, with advanced temperature and pressure control.',
        images: [
            'Machines/Foiling & Finishing Machines/Comp Foil Fusing Machine/1.png',
            'Machines/Foiling & Finishing Machines/Comp Foil Fusing Machine/2.png'
        ],
        features: [
            'Digital temperature control',
            'Adjustable pressure system',
            'Multiple foil compatibility',
            'Quick warm-up time',
            'Even heat distribution',
            'Safety interlocks'
        ],
        specifications: [
            'Working Width: Up to 500mm',
            'Temperature Range: 0-200°C',
            'Speed: 2-15m/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    'foil-fusing': {
        category: 'Foiling & Finishing Machines',
        title: 'Foil Fusing Machine',
        description: 'High-performance foil fusing machine designed for industrial-scale production, featuring advanced control systems and consistent application quality.',
        images: [
            'Machines/Foiling & Finishing Machines/Foil Fusing Machine/1.png',
            'Machines/Foiling & Finishing Machines/Foil Fusing Machine/2.png'
        ],
        features: [
            'Industrial-grade construction',
            'Precise temperature control',
            'Variable speed adjustment',
            'Multiple material handling',
            'Digital control interface',
            'Emergency stop system'
        ],
        specifications: [
            'Maximum Width: 650mm',
            'Temperature Range: 0-220°C',
            'Production Speed: 3-20m/min',
            'Power Supply: 380V/50Hz'
        ]
    },
    'spot-uv-indiacot': {
        category: 'Foiling & Finishing Machines',
        title: 'SEMI AUTOMATIC SPOT UV Indiacot',
        description: 'Semi-automatic spot UV coating machine designed for precise application and professional finishing, with user-friendly controls and consistent coating quality.',
        images: [
            'Machines/Foiling & Finishing Machines/SEMI AUTOMATIC SPOT UV  Indiacot/1.png',
            'Machines/Foiling & Finishing Machines/SEMI AUTOMATIC SPOT UV  Indiacot/2.png'
        ],
        features: [
            'Semi-automatic operation',
            'Precise UV coating application',
            'Adjustable coating thickness',
            'Multiple coating patterns',
            'User-friendly interface',
            'Built-in safety features'
        ],
        specifications: [
            'Maximum Sheet Size: 550 x 750mm',
            'UV Power: 2kW',
            'Production Speed: Up to 2,000 sheets/hour',
            'Power Supply: 220V/50Hz'
        ]
    },
    'uv-led-exposure': {
        category: 'Foiling & Finishing Machines',
        title: 'UV LED Exposure Machine',
        description: 'Modern LED-based UV exposure system offering precise control and energy-efficient operation, perfect for screen printing preparation and UV-sensitive applications.',
        images: [
            'Machines/Foiling & Finishing Machines/UV LED Exposure Machine/1.png',
            'Machines/Foiling & Finishing Machines/UV LED Exposure Machine/2.png'
        ],
        features: [
            'LED UV technology',
            'Digital exposure control',
            'Energy-efficient operation',
            'Multiple exposure programs',
            'Timer function',
            'Uniform light distribution'
        ],
        specifications: [
            'Maximum Exposure Area: 600 x 800mm',
            'LED Power: 1.5kW',
            'Exposure Time: 1-999 seconds',
            'Power Supply: 220V/50Hz'
        ]
    },
    'multitasking-uv-coating': {
        category: 'Foiling & Finishing Machines',
        title: 'Multitasking UV Coating Machine',
        description: 'Versatile UV coating system capable of handling multiple finishing tasks with professional-grade results, featuring advanced coating technology and precise control systems.',
        images: [
            'Machines/Foiling & Finishing Machines/Multitasking UV Coating Machine/1.png',
            'Machines/Foiling & Finishing Machines/Multitasking UV Coating Machine/2.png'
        ],
        features: [
            'Multiple coating options',
            'Precise application control',
            'Variable speed system',
            'Quick coating changeover',
            'Digital interface',
            'Advanced curing system'
        ],
        specifications: [
            'Working Width: Up to 600mm',
            'UV Power: 3kW',
            'Speed Range: 5-25m/min',
            'Power Supply: 380V/50Hz'
        ]
    },
    // Lamination & Window Patch Machines
    'thermal-lamination': {
        category: 'Lamination & Window Patch Machines',
        title: 'Thermal Lamination Machine',
        description: 'Professional thermal lamination system for high-quality document finishing, featuring precise temperature control and consistent results.',
        images: [
            'Machines/Lamination & Window Patch Machines/Thermal Lamination Machine/1.png',
            'Machines/Lamination & Window Patch Machines/Thermal Lamination Machine/2.png'
        ],
        features: [
            'Digital temperature control',
            'Variable speed adjustment',
            'Double-sided lamination',
            'Anti-curling system',
            'Multiple film compatibility',
            'Safety emergency stop'
        ],
        specifications: [
            'Maximum Width: 650mm',
            'Temperature Range: 0-180°C',
            'Speed: 0.5-15m/min',
            'Film Thickness: 20-250μm',
            'Power Supply: 220V/50Hz'
        ]
    },
    'mini-lam-textring': {
        category: 'Lamination & Window Patch Machines',
        title: 'Mini Lam Textring Machine',
        description: 'Compact lamination solution with texture application capabilities, perfect for small to medium production requirements.',
        images: [
            'Machines/Lamination & Window Patch Machines/Mini Lam Textring Machine/1.png',
            'Machines/Lamination & Window Patch Machines/Mini Lam Textring Machine/2.png'
        ],
        features: [
            'Compact design',
            'Texture application',
            'Temperature control',
            'Speed adjustment',
            'Easy film loading',
            'Quick warm-up'
        ],
        specifications: [
            'Working Width: 350mm',
            'Temperature Range: 0-150°C',
            'Speed: 1-8m/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    'manual-window-stapler': {
        category: 'Lamination & Window Patch Machines',
        title: 'Manual Window with Stapler',
        description: 'Manual window patching solution with integrated stapling functionality, offering versatility for packaging applications.',
        images: [
            'Machines/Lamination & Window Patch Machines/Manual Window With Stapler/1.png',
            'Machines/Lamination & Window Patch Machines/Manual Window With Stapler/2.png'
        ],
        features: [
            'Manual operation',
            'Integrated stapler',
            'Adjustable window size',
            'Multiple window shapes',
            'Easy setup',
            'Low maintenance'
        ],
        specifications: [
            'Maximum Window Size: 300 x 200mm',
            'Material Thickness: Up to 400gsm',
            'Operation: Manual',
            'Staple Size: 24/6, 26/6'
        ]
    },
    // Paper Tube & Core Manufacturing Line
    'spiral-winding': {
        category: 'Paper Tube & Core Manufacturing Line',
        title: 'Automatic Paper Tube Spiral Winding Machine',
        description: 'High-speed automatic spiral winding machine for professional paper tube production with precise control and consistent quality.',
        images: [
            'Machines/Paper Tube & Core Manufacturing Line/Automatic Paper Tube Spiral Winding Machine/1.png',
            'Machines/Paper Tube & Core Manufacturing Line/Automatic Paper Tube Spiral Winding Machine/2.png'
        ],
        features: [
            'Automatic operation',
            'Variable speed control',
            'Multiple layer winding',
            'Tension control system',
            'Quick size change',
            'Digital interface'
        ],
        specifications: [
            'Tube Diameter: 25-150mm',
            'Wall Thickness: 2-20mm',
            'Production Speed: Up to 40m/min',
            'Power Supply: 380V/50Hz'
        ]
    },
    'core-cutting': {
        category: 'Paper Tube & Core Manufacturing Line',
        title: 'Automatic Paper Core Cutting Machine',
        description: 'Precise automatic cutting solution for paper cores and tubes with advanced measurement and control systems.',
        images: [
            'Machines/Paper Tube & Core Manufacturing Line/Automatic Paper Core Cutting Machine/1.png',
            'Machines/Paper Tube & Core Manufacturing Line/Automatic Paper Core Cutting Machine/2.png'
        ],
        features: [
            'Automatic length control',
            'High-precision cutting',
            'Digital measurement',
            'Multiple cut programs',
            'Safety interlocks',
            'Easy maintenance'
        ],
        specifications: [
            'Cutting Length: 50-2500mm',
            'Core Diameter: 25-150mm',
            'Cutting Speed: Up to 30 cuts/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    'tube-labeling': {
        category: 'Paper Tube & Core Manufacturing Line',
        title: 'Paper Tube Labeling Machine',
        description: 'Automated labeling system for paper tubes and cores, offering precise label placement and high efficiency.',
        images: [
            'Machines/Paper Tube & Core Manufacturing Line/Paper Tube Labeling Machine/1.png',
            'Machines/Paper Tube & Core Manufacturing Line/Paper Tube Labeling Machine/2.png'
        ],
        features: [
            'Automatic label feeding',
            'Precise positioning',
            'Speed adjustment',
            'Label size flexibility',
            'Quick changeover',
            'Counter function'
        ],
        specifications: [
            'Tube Diameter: 25-120mm',
            'Label Length: 50-300mm',
            'Speed: Up to 60 tubes/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    'tube-capping': {
        category: 'Paper Tube & Core Manufacturing Line',
        title: 'Automatic Paper Tube Capping Line',
        description: 'Complete automated line for paper tube end capping operations, ensuring consistent quality and high productivity.',
        images: [
            'Machines/Paper Tube & Core Manufacturing Line/Automatic Paper Tube Capping Line/1.png',
            'Machines/Paper Tube & Core Manufacturing Line/Automatic Paper Tube Capping Line/2.png'
        ],
        features: [
            'Automatic cap feeding',
            'Glue application system',
            'Cap alignment control',
            'Variable speed',
            'Multiple cap sizes',
            'Production counter'
        ],
        specifications: [
            'Tube Diameter: 25-150mm',
            'Cap Size: 30-160mm',
            'Speed: Up to 40 tubes/min',
            'Power Supply: 380V/50Hz'
        ]
    },
    'tube-curling': {
        category: 'Paper Tube & Core Manufacturing Line',
        title: 'Paper Tube Curling Machine (Servo Motor)',
        description: 'Servo-driven curling machine for precise paper tube forming, featuring advanced control and consistent quality.',
        images: [
            'Machines/Paper Tube & Core Manufacturing Line/Paper Tube Curling Machine (Servo Motor)/1.png',
            'Machines/Paper Tube & Core Manufacturing Line/Paper Tube Curling Machine (Servo Motor)/2.png'
        ],
        features: [
            'Servo motor control',
            'Precise curling angle',
            'Digital interface',
            'Multiple tube sizes',
            'Quick setup',
            'Safety features'
        ],
        specifications: [
            'Tube Diameter: 25-100mm',
            'Curling Angle: 0-180°',
            'Speed: Up to 30 tubes/min',
            'Power Supply: 220V/50Hz'
        ]
    },
    // Screen Printing & UV Systems
    'auto-screen-industrial': {
        category: 'Screen Printing & UV Systems',
        title: 'Auto Screen with Industrial Foiler',
        description: 'Automated screen printing system with integrated industrial foiling capability for high-volume production.',
        images: [
            'Machines/Screen Printing & UV Systems/Auto Screen With Industrial Foiler/1.png',
            'Machines/Screen Printing & UV Systems/Auto Screen With Industrial Foiler/2.png'
        ],
        features: [
            'Automatic screen printing',
            'Industrial foiling system',
            'Registration control',
            'Variable speed',
            'Multiple substrate handling',
            'Touch screen interface'
        ],
        specifications: [
            'Maximum Sheet Size: 750 x 550mm',
            'Screen Frame Size: 900 x 700mm',
            'Production Speed: Up to 4,000 sheets/hour',
            'Power Supply: 380V/50Hz'
        ]
    },
    'screen-printing': {
        category: 'Screen Printing & UV Systems',
        title: 'Screen Printing Machine',
        description: 'Versatile screen printing solution for various applications, offering precision and reliability.',
        images: [
            'Machines/Screen Printing & UV Systems/Screen Printing Machine/1.png',
            'Machines/Screen Printing & UV Systems/Screen Printing Machine/2.png'
        ],
        features: [
            'Manual/semi-automatic operation',
            'Adjustable pressure',
            'Quick screen change',
            'Multiple print modes',
            'Registration system',
            'Safety guards'
        ],
        specifications: [
            'Print Area: 500 x 700mm',
            'Screen Size: 600 x 800mm',
            'Table Height: Adjustable',
            'Power Supply: 220V/50Hz'
        ]
    },
    'ic-1020': {
        category: 'Screen Printing & UV Systems',
        title: 'IC 1020 Swing Cylinder Screen Printing Machine',
        description: 'Advanced swing cylinder screen printing system for precise applications, featuring innovative cylinder technology.',
        images: [
            'Machines/Screen Printing & UV Systems/IC 1020 Swing Cylinder Screen Printing Machine/1.png',
            'Machines/Screen Printing & UV Systems/IC 1020 Swing Cylinder Screen Printing Machine/2.png'
        ],
        features: [
            'Swing cylinder technology',
            'Precise registration',
            'Digital control system',
            'Quick setup',
            'Multiple printing modes',
            'Advanced feeding system'
        ],
        specifications: [
            'Maximum Sheet Size: 1020 x 720mm',
            'Minimum Sheet Size: 360 x 260mm',
            'Speed: Up to 3,600 sheets/hour',
            'Power Supply: 380V/50Hz'
        ]
    },
    // Specialty & Hybrid Systems
    'auto-screen-ifoil': {
        category: 'Specialty & Hybrid Systems',
        title: 'Auto Screen with i-Foil Online',
        description: 'Integrated screen printing and foiling system for continuous production, combining multiple finishing processes.',
        images: [
            'Machines/Specialty & Hybrid Systems/Auto Screen with i-Foil Online/1.png',
            'Machines/Specialty & Hybrid Systems/Auto Screen with i-Foil Online/2.png'
        ],
        features: [
            'Combined printing and foiling',
            'Online processing',
            'Digital controls',
            'Registration system',
            'Multiple substrate handling',
            'Production monitoring'
        ],
        specifications: [
            'Maximum Sheet Size: 700 x 500mm',
            'Production Speed: Up to 3,000 sheets/hour',
            'Screen Frame Size: 800 x 600mm',
            'Power Supply: 380V/50Hz'
        ]
    },
    'multitask-uv': {
        category: 'Specialty & Hybrid Systems',
        title: 'Multitasking UV Coating Machine',
        description: 'Versatile UV coating system for multiple finishing applications, offering flexibility and high-quality results.',
        images: [
            'Machines/Specialty & Hybrid Systems/Multitasking UV Coating Machine/1.png',
            'Machines/Specialty & Hybrid Systems/Multitasking UV Coating Machine/2.png'
        ],
        features: [
            'Multiple coating types',
            'UV curing system',
            'Variable speed control',
            'Digital interface',
            'Easy maintenance',
            'Safety features'
        ],
        specifications: [
            'Maximum Width: 600mm',
            'UV Power: 2-5kW',
            'Speed: 5-30m/min',
            'Power Supply: 380V/50Hz'
        ]
    }
};

// Function to show loading state
function showLoading() {
    document.getElementById('productTitle').textContent = 'Loading...';
    document.getElementById('productCategory').textContent = '';
    document.getElementById('productDescription').textContent = 'Loading product details...';
    document.getElementById('mainImage').src = '';
    document.getElementById('thumbnailGrid').innerHTML = '';
    document.getElementById('featuresList').innerHTML = '<li>Loading features...</li>';
    document.getElementById('specsList').innerHTML = '<li>Loading specifications...</li>';
    document.getElementById('productField').value = '';
}

// Function to show error state
function showError(message) {
    document.getElementById('productTitle').textContent = 'Error';
    document.getElementById('productCategory').textContent = '';
    document.getElementById('productDescription').textContent = message;
    document.getElementById('mainImage').src = '';
    document.getElementById('thumbnailGrid').innerHTML = '';
    document.getElementById('featuresList').innerHTML = '<li class="error">Unable to load features</li>';
    document.getElementById('specsList').innerHTML = '<li class="error">Unable to load specifications</li>';
    document.getElementById('productField').value = '';
}

// Function to load product details
function loadProduct(productId) {
    console.log('Attempting to load product:', productId);
    showLoading();

    try {
        const product = products[productId];
        if (!product) {
            throw new Error('Product not found');
        }

        // Update page title
        document.title = `${product.title} - Shinetouch MFG LLP`;
        
        // Update product details
        document.getElementById('productTitle').textContent = product.title;
        document.getElementById('productCategory').textContent = product.category;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productField').value = product.title;
        
        // Update main image
        const mainImage = document.getElementById('mainImage');
        mainImage.src = product.images[0];
        mainImage.alt = product.title;

        // Update thumbnails
        const thumbnailGrid = document.getElementById('thumbnailGrid');
        thumbnailGrid.innerHTML = product.images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}">
                <img src="${img}" 
                     alt="${product.title} View ${index + 1}" 
                     onclick="changeImage(this)">
            </div>
        `).join('');

        // Update features
        document.getElementById('featuresList').innerHTML = product.features.map(feature => `
            <li><i class="fas fa-check-circle"></i> ${feature}</li>
        `).join('');

        // Update specifications
        document.getElementById('specsList').innerHTML = product.specifications.map(spec => `
            <li><i class="fas fa-cog"></i> ${spec}</li>
        `).join('');

        console.log('Product loaded successfully:', productId);
    } catch (error) {
        console.error('Error loading product:', error);
        showError('Product not found or error loading details. Please try again.');
    }
}

// Function to change the main image
function changeImage(element) {
    document.getElementById('mainImage').src = element.src;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.parentElement.classList.add('active');
}

// Initialize product page
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        showError('No product selected. Please select a product from the category pages.');
        return;
    }
    
    loadProduct(productId);
});