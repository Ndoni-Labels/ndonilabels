// Enhanced product data with unique key features
const products = [
    // Education Products
    { 
        id: 1, 
        title: "Student Name Tags - Colorful Pack", 
        category: "education", 
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "Durable, waterproof vinyl name tags perfect for students. Available in multiple vibrant colors and fun designs that kids love.", 
        subCategory: "name-tags", 
        material: "vinyl", 
        size: "small", 
        badge: "Popular", 
        fullDescription: "Our Student Name Tags are designed with durability and safety in mind. Made from high-quality vinyl material that withstands daily wear and washing. The bright colors help teachers quickly identify students during group activities and field trips.",
        keyFeatures: [
            "Sticker Size – 75mm x 38mm",
            "Pack of 50 stickers",
            "Waterproof vinyl material",
            "Multiple color options available",
            "Rounded corners for safety"
        ]
    },
    
    { 
        id: 2, 
        title: "Classroom Organization Labels", 
        category: "education", 
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80", 
        description: "Versatile paper labels for storage bins, shelves, and learning centers. Easy to read fonts and durable adhesive.", 
        subCategory: "organization", 
        material: "paper", 
        size: "medium", 
        badge: "", 
        fullDescription: "Transform your classroom organization with our premium paper labels. Featuring clear, bold fonts that are easy for students of all ages to read. The special adhesive formula ensures labels stay put during the school year but remove cleanly without residue.",
        keyFeatures: [
            "Sticker Size – 100mm x 50mm",
            "Pack of 30 labels",
            "Removable adhesive (no residue)",
            "Multiple sizes available",
            "Bold, easy-to-read fonts"
        ]
    },
    
    { 
        id: 3, 
        title: "Book Labels for Library", 
        category: "education", 
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80", 
        description: "Professional, acid-free book labels for classroom or school library organization.", 
        subCategory: "books", 
        material: "paper", 
        size: "small", 
        badge: "", 
        fullDescription: "Keep your classroom or school library perfectly organized with our professional book labels. Made from acid-free paper that won't yellow or deteriorate over time, ensuring your books stay properly labeled for years.",
        keyFeatures: [
            "Sticker Size – 75mm x 25mm",
            "Pack of 15 stickers",
            "Available in English / Afrikaans",
            "Acid-free paper material",
            "Permanent adhesive for book spines"
        ]
    },
    
    { 
        id: 4, 
        title: "Emergency Contact Labels", 
        category: "education", 
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "Highly visible, weather-resistant safety labels for emergency contact information.", 
        subCategory: "safety", 
        material: "vinyl", 
        size: "medium", 
        badge: "New", 
        fullDescription: "Safety first with our Emergency Contact Labels. Designed with bright, attention-grabbing colors and weather-resistant vinyl construction. These labels are perfect for student backpacks, lunch boxes, and emergency kits.",
        keyFeatures: [
            "Sticker Size – 90mm x 50mm",
            "Pack of 20 stickers",
            "Weather-resistant vinyl",
            "High visibility colors",
            "Space for emergency contacts and medical info"
        ]
    },
    
    // Business Products
    { 
        id: 5, 
        title: "Professional Product Labels", 
        category: "business", 
        image: "https://images.unsplash.com/photo-1551836026-d5c8c1a7e61b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "High-quality vinyl product labels for retail environments. Customizable with your brand colors and logo.", 
        subCategory: "product", 
        material: "vinyl", 
        size: "medium", 
        badge: "Custom", 
        fullDescription: "Elevate your product presentation with our professional-grade vinyl labels. Perfect for retail products, these labels feature vibrant colors that won't fade and strong adhesive that stays put.",
        keyFeatures: [
            "Custom sizes available",
            "Full-color printing",
            "UV and moisture resistant",
            "Minimum order: 100 labels",
            "Free design consultation included"
        ]
    },
    
    { 
        id: 6, 
        title: "Shipping Labels - Professional Grade", 
        category: "business", 
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "Clear, durable paper shipping labels compatible with thermal and standard printers.", 
        subCategory: "shipping", 
        material: "paper", 
        size: "large", 
        badge: "", 
        fullDescription: "Streamline your shipping process with our professional-grade shipping labels. Compatible with all major thermal and inkjet printers, these labels ensure clear, smudge-resistant printing every time.",
        keyFeatures: [
            "Sticker Size – 100mm x 150mm (4x6 inches)",
            "Pack of 100 labels",
            "Compatible with thermal printers",
            "Permanent adhesive",
            "Perforated for easy separation"
        ]
    },
    
    { 
        id: 7, 
        title: "Custom Branding Labels", 
        category: "business", 
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "Promote your brand with custom vinyl labels featuring your logo and company colors.", 
        subCategory: "branding", 
        material: "vinyl", 
        size: "large", 
        badge: "Premium", 
        fullDescription: "Make a lasting impression with our custom branding labels. These premium vinyl labels showcase your company logo and brand colors with stunning clarity and professional finish.",
        keyFeatures: [
            "Custom sizes and shapes",
            "Premium vinyl material",
            "Full-color logo printing",
            "Minimum order: 250 labels",
            "Bulk discounts available"
        ]
    },
    
    // Stickers & Awards
    { 
        id: 8, 
        title: "Achievement Award Stickers", 
        category: "stickers", 
        image: "https://images.unsplash.com/photo-1618040996337-56904f7860a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", 
        description: "Motivational paper stickers to reward student accomplishments and good behavior.", 
        subCategory: "awards", 
        material: "paper", 
        size: "small", 
        badge: "New", 
        fullDescription: "Celebrate student success with our colorful Achievement Award Stickers. Each pack includes a variety of encouraging messages like 'Great Job!', 'Excellent Work!', and 'Star Student!'",
        keyFeatures: [
            "Sticker Size – 38mm diameter",
            "Pack of 120 mixed designs",
            "Multiple motivational messages",
            "Non-toxic adhesive",
            "Bright, colorful designs"
        ]
    },
    
    { 
        id: 9, 
        title: "Good Behavior Star Stickers", 
        category: "stickers", 
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80", 
        description: "Classic gold and silver star stickers for positive reinforcement.", 
        subCategory: "motivational", 
        material: "paper", 
        size: "small", 
        badge: "", 
        fullDescription: "The timeless appeal of star stickers for positive reinforcement! Our Good Behavior Star Stickers come in classic gold and silver foil that catches the light beautifully.",
        keyFeatures: [
            "Sticker Size – 13mm and 20mm stars",
            "Pack of 500 stickers (mixed sizes)",
            "Gold and silver foil finish",
            "Easy peel adhesive",
            "Perfect for behavior charts"
        ]
    },
    
    { 
        id: 10, 
        title: "Decorative Border Stickers", 
        category: "stickers", 
        image: "https://images.unsplash.com/photo-1584824486537-46f5c3c9140d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "Colorful decorative stickers perfect for bulletin boards, scrapbooking, and craft projects.", 
        subCategory: "decorative", 
        material: "paper", 
        size: "medium", 
        badge: "", 
        fullDescription: "Add flair to any project with our Decorative Border Stickers. Perfect for bulletin boards, scrapbooking, classroom displays, and craft projects.",
        keyFeatures: [
            "Sheet Size – 210mm x 297mm (A4)",
            "Pack of 10 themed sheets",
            "Multiple design themes available",
            "Includes borders and corner pieces",
            "Repositionable adhesive"
        ]
    },
    
    // Custom Products
    { 
        id: 11, 
        title: "Custom Logo Stickers", 
        category: "custom", 
        image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
        description: "High-quality vinyl stickers featuring your custom logo design.", 
        subCategory: "logo", 
        material: "vinyl", 
        size: "large", 
        badge: "Premium", 
        fullDescription: "Showcase your brand with our premium Custom Logo Stickers. Made from high-grade vinyl that maintains vibrant colors and sharp detail reproduction.",
        keyFeatures: [
            "Custom sizes up to 300mm",
            "Full-color digital printing",
            "Weather and UV resistant",
            "Minimum order: 50 stickers",
            "Die-cut to any shape"
        ]
    },
    
    { 
        id: 12, 
        title: "Thank You Stickers", 
        category: "custom", 
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80", 
        description: "Elegant thank you paper stickers for small businesses and online sellers.", 
        subCategory: "promotional", 
        material: "paper", 
        size: "small", 
        badge: "", 
        fullDescription: "Show appreciation to your customers with our elegant Thank You Stickers. Perfect for small businesses, online sellers, and service providers.",
        keyFeatures: [
            "Sticker Size – 50mm diameter",
            "Pack of 100 stickers",
            "Multiple elegant designs",
            "Can be customized with logo",
            "Premium paper finish"
        ]
    },
    
    { 
        id: 13, 
        title: "Specialty Holographic Stickers", 
        category: "custom", 
        image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80", 
        description: "Eye-catching holographic stickers that create stunning visual effects.", 
        subCategory: "specialty", 
        material: "holographic", 
        size: "medium", 
        badge: "Exclusive", 
        fullDescription: "Make your brand unforgettable with our Specialty Holographic Stickers. These premium stickers feature stunning holographic effects that shift and shimmer in the light.",
        keyFeatures: [
            "Custom sizes available",
            "Tamper-evident holographic material",
            "Full-color printing over holographic",
            "Minimum order: 100 stickers",
            "Multiple holographic patterns"
        ]
    }
];

// Category configuration
const categoryConfig = {
    'all': { 
        title: "All Products", 
        subtitle: "Explore our complete range of professional labeling and sticker solutions.",
        subFilters: []
    },
    'education': { 
        title: "School & Education Solutions", 
        subtitle: "Professional labeling solutions to keep classrooms organized and students engaged.",
        subFilters: []
    },
    'business': { 
        title: "Business Solutions", 
        subtitle: "Professional labeling and branding solutions for your commercial needs.",
        subFilters: []
    },
    'stickers': { 
        title: "Stickers & Awards", 
        subtitle: "Motivational stickers and awards to recognize achievements and good behavior.",
        subFilters: []
    },
    'custom': { 
        title: "Custom Products", 
        subtitle: "Personalized solutions tailored to your specific requirements and brand.",
        subFilters: []
    }
};

// Global variables
let currentFilter = 'all';
let currentSubFilter = null;
let currentProduct = null;
let carouselCurrentSlide = 0;
let carouselInterval;

// DOM elements
const mainGrid = document.getElementById('mainProductsGrid');
const categoryTitle = document.getElementById('currentCategoryTitle');
const categorySubtitle = document.getElementById('currentCategorySubtitle');
const noResults = document.getElementById('noResults');

// Hero carousel functionality
function initCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const totalSlides = slides.length;
    
    if (slides.length === 0) return;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        carouselCurrentSlide = index;
    }
    
    function nextSlide() {
        const nextIndex = (carouselCurrentSlide + 1) % totalSlides;
        showSlide(nextIndex);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(carouselInterval);
            showSlide(index);
            carouselInterval = setInterval(nextSlide, 5000);
        });
    });
    
    carouselInterval = setInterval(nextSlide, 5000);
    
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => clearInterval(carouselInterval));
        heroSection.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Filter and render products
function filterAndRenderProducts(searchTerm = '') {
    let filteredProducts = [...products];
    
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
    }

    if (currentSubFilter && !currentSubFilter.startsWith('all-')) {
        filteredProducts = filteredProducts.filter(p => p.subCategory === currentSubFilter);
    }

    if (searchTerm && searchTerm.trim() !== '') {
        const lowerCaseSearch = searchTerm.toLowerCase().trim();
        filteredProducts = filteredProducts.filter(p => 
            p.title.toLowerCase().includes(lowerCaseSearch) || 
            p.description.toLowerCase().includes(lowerCaseSearch) || 
            p.category.toLowerCase().includes(lowerCaseSearch) ||
            p.subCategory.toLowerCase().includes(lowerCaseSearch) ||
            p.fullDescription.toLowerCase().includes(lowerCaseSearch) ||
            p.material.toLowerCase().includes(lowerCaseSearch)
        );
    }
    
    const config = categoryConfig[currentFilter];
    if (categoryTitle && categorySubtitle) {
        categoryTitle.textContent = config.title;
        categorySubtitle.textContent = config.subtitle;
    }
    
    renderProducts(filteredProducts);
}

// Render products to grid
function renderProducts(productList) {
    if (!mainGrid) return;
    
    mainGrid.innerHTML = '';
    
    if (productList.length === 0) {
        if (noResults) {
            noResults.classList.remove('hidden');
        }
        return;
    }
    
    if (noResults) {
        noResults.classList.add('hidden');
    }

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.category}`;
        
        productCard.innerHTML = `
            <div class="product-image" onclick="openProductModal(${product.id})">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-info">
                <div class="product-category-tag">${categoryConfig[product.category].title.replace(' Solutions', '').replace(' & Awards', '').replace(' Products', '')}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description-short">${product.description}</p>
                <div class="product-footer">
                    <button class="read-more-btn" onclick="openProductModal(${product.id})">Read More</button>
                </div>
            </div>
        `;
        
        mainGrid.appendChild(productCard);
    });
}

// Update sub-filter visibility
function updateSubFilters(category) {
    document.querySelectorAll('[id$="LabelFilter"]').forEach(filter => {
        filter.classList.add('hidden');
    });

    currentSubFilter = null;

    if (category !== 'all') {
        const categoryToFilterId = {
            'education': 'schoolLabelFilter',
            'business': 'businessLabelFilter',
            'stickers': 'stickerLabelFilter',
            'custom': 'customLabelFilter'
        };
        
        const filterId = categoryToFilterId[category];
        const filterElement = document.getElementById(filterId);
        
        if (filterElement) {
            filterElement.classList.remove('hidden');
            
            const allButton = filterElement.querySelector('.sub-filter-btn[data-subfilter^="all-"]');
            if (allButton) {
                document.querySelectorAll('.sub-filter-btn.active').forEach(btn => btn.classList.remove('active'));
                allButton.classList.add('active');
                currentSubFilter = allButton.dataset.subfilter;
            }
        }
    }
}

// Setup event listeners
function setupEventListeners() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentFilter = btn.dataset.filter;
            currentSubFilter = null;
            
            updateSubFilters(currentFilter);
            
            const searchInput = document.querySelector('.search-input');
            filterAndRenderProducts(searchInput ? searchInput.value : '');
        });
    });

    document.querySelectorAll('.sub-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentGroup = btn.closest('.filter-group');
            parentGroup.querySelectorAll('.sub-filter-btn').forEach(activeBtn => {
                activeBtn.classList.remove('active');
            });
            btn.classList.add('active');
            
            currentSubFilter = btn.dataset.subfilter;
            
            const searchInput = document.querySelector('.search-input');
            filterAndRenderProducts(searchInput ? searchInput.value : '');
        });
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterAndRenderProducts(e.target.value);
        });
    }

    const closeBtn = document.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeProductModal);
    }
    
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'productModal') {
                closeProductModal();
            }
        });
    }
}

// Open product modal
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    
    if (currentProduct && modal) {
        document.getElementById('modalProductName').textContent = currentProduct.title;
        document.getElementById('modalProductImage').src = currentProduct.image;
        document.getElementById('modalProductImage').alt = currentProduct.title;
        
        let keyFeaturesHTML = '';
        if (currentProduct.keyFeatures && currentProduct.keyFeatures.length > 0) {
            keyFeaturesHTML = '<ul style="margin-left: 20px; line-height: 1.8;">';
            currentProduct.keyFeatures.forEach(feature => {
                keyFeaturesHTML += `<li>${feature}</li>`;
            });
            keyFeaturesHTML += '</ul>';
        }
        
        document.getElementById('modalProductDetails').innerHTML = `
            <div style="display: flex; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 200px;">
                    <p><strong>Category:</strong> ${categoryConfig[currentProduct.category].title}</p>
                    <p><strong>Material:</strong> ${currentProduct.material.charAt(0).toUpperCase() + currentProduct.material.slice(1)}</p>
                    ${currentProduct.badge ? `<p><strong>Special:</strong> <span style="color: var(--red); font-weight: bold;">${currentProduct.badge}</span></p>` : ''}
                </div>
            </div>
            <hr style="margin: 20px 0; border: 1px solid var(--light-grey);">
            <h4>Product Description:</h4>
            <p style="line-height: 1.7; font-size: 1.1rem; margin-top: 15px;">${currentProduct.fullDescription}</p>
            <div style="background: var(--light-grey); padding: 20px; border-radius: 10px; margin-top: 20px;">
                <h4 style="color: var(--dark-blue); margin-bottom: 15px;">Key Features:</h4>
                ${keyFeaturesHTML}
            </div>
        `;
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentProduct = null;
    }
}

// Initialize application
function init() {
    initCarousel();
    setupEventListeners();
    filterAndRenderProducts();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions globally available
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;