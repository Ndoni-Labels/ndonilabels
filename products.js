
const products = [
    // Education Products
    { id: 1, 
        title: "Student Name Tags - Colorful Pack", 
        category: "education", 
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Durable, waterproof vinyl name tags perfect for students.", 
        subCategory: "name-tags", 
        material: "vinyl", 
        size: "small", 
        badge: "Popular", 
        fullDescription: "Our Student Name Tags are designed with durability and safety in mind. Made from high-quality vinyl material that withstands daily wear and washing.", 
        keyFeatures: ["Sticker Size – 75mm x 38mm", "Pack of 50 stickers", "Waterproof vinyl material", "Multiple color options available", "Rounded corners for safety"] 
    },

    { id: 2, title: "Bag Tags - Colorful Pack", category: "education", image: "/assets/School/Bag Tags.jpg", description: "Durable, waterproof vinyl name tags perfect for students.", subCategory: "name-tags", material: "vinyl", size: "small", badge: "", fullDescription: "Our Bag Tags are designed with durability and safety in mind.", keyFeatures: ["Sticker Size – 75mm x 38mm", "Pack of 50 stickers", "Waterproof vinyl material"] },
    { id: 3, title: "Bag Tags - Flexible Pack", category: "education", image: "/assets/School/Bag Tags -FLEXIBLE.jpeg", description: "Durable, waterproof vinyl name tags perfect for students.", subCategory: "name-tags", material: "vinyl", size: "small", badge: "Popular", fullDescription: "Our Student Name Tags are designed with durability and safety in mind.", keyFeatures: ["Sticker Size – 75mm x 38mm", "Pack of 50 stickers"] },
    { id: 4, title: "Bag Tags - Economy Polymer Pack", category: "education", image: "/assets/School/Bag Tags- Economy Polymer.jpeg", description: "Durable, waterproof vinyl name tags perfect for students.", subCategory: "name-tags", material: "vinyl", size: "small", badge: "Popular", fullDescription: "Our Student Name Tags are designed with durability and safety in mind.", keyFeatures: ["Sticker Size – 75mm x 38mm", "Pack of 50 stickers"] },
    { id: 5, title: "Classroom Organization Sticker", category: "education", image: "/assets/School/classroom sticker.jpg", description: "Versatile paper labels for storage bins, shelves, and learning centers.", subCategory: "organization", material: "paper", size: "medium", badge: "", fullDescription: "Transform your classroom organization with our premium paper labels.", keyFeatures: ["Sticker Size – 100mm x 50mm", "Pack of 30 labels"] },
    { id: 6, title: "Large Sticker", category: "education", image: "/assets/School/large stickers.jpg", description: "Large Stickers are ideal for lunch boxes, juice bottles and sports equipment.", subCategory: "organization", material: "Vinyl", size: "large", badge: "", fullDescription: "Large Stickers are ideal for lunch boxes, juice bottles and sports equipment.", keyFeatures: ["Sticker Size – ± 90mm x 19mm", "Dishwasher & Microwave Safe"] },
    { id: 7, title: "Large Sticker with Icons", category: "education", image: "/assets/School/stickers-large-with icons1.jpg", description: "Large Stickers are ideal for lunch boxes, juice bottles and sports equipment.", subCategory: "organization", material: "Vinyl", size: "large", badge: "", fullDescription: "Large Stickers are ideal for lunch boxes, juice bottles and sports equipment.", keyFeatures: ["Sticker Size – ± 90mm x 19mm"] },
    { id: 8, title: "Medium Sticker", category: "education", image: "/assets/School/medium-stickers.jpg", description: "Medium Stickers are ideal for stationery, shoes, lunch boxes.", subCategory: "organization", material: "Vinyl", size: "medium", badge: "", fullDescription: "Medium Stickers are ideal for stationery.", keyFeatures: ["Sticker Size – ± 36mm x 12mm"] },
    { id: 9, title: "Medium Sticker with Icons", category: "education", image: "/assets/School/medium-stickers-icons.jpg", description: "Medium Stickers are ideal for stationery, shoes, lunch boxes.", subCategory: "organization", material: "Vinyl", size: "medium", badge: "", fullDescription: "Medium Stickers are ideal for stationery.", keyFeatures: ["Sticker Size – ± 36mm x 12mm"] },
    { id: 10, title: "Mini Sticker with Icons", category: "education", image: "/assets/School/minis-with icons.jpg", description: "Labelling all the pencils, crayons, kokies, pens.", subCategory: "organization", material: "Vinyl", size: "mini", badge: "", fullDescription: "Labelling all the pencils, crayons, kokies, pens could not be any easier.", keyFeatures: ["Sticker Size – ± 36mm x 6mm"] },
    { id: 11, title: "Mini Sticker", category: "education", image: "/assets/School/minis-colour-stickers.jpg", description: "Labelling all the pencils, crayons, kokies, pens.", subCategory: "organization", material: "Vinyl", size: "mini", badge: "", fullDescription: "Labelling all the pencils, crayons, kokies, pens.", keyFeatures: ["Sticker Size – ± 36mm x 12mm"] },
    { id: 12, title: "Standard Sticker", category: "education", image: "/assets/School/standard-stickers.jpg", description: "Standard Stickers are ideal for stationery, shoes, lunch boxes.", subCategory: "organization", material: "Vinyl", size: "standard", badge: "", fullDescription: "Standard Stickers are ideal for stationery.", keyFeatures: ["Sticker Size – ± 57mm x 12mm"] },
    { id: 13, title: "Standard Sticker with Icons", category: "education", image: "/assets/School/standard-stickers-with icons.jpg", description: "Standard Stickers are ideal for stationery, shoes, lunch boxes.", subCategory: "organization", material: "Vinyl", size: "standard", badge: "", fullDescription: "Standard Stickers are ideal for stationery.", keyFeatures: ["Sticker Size – ± 57mm x 12mm"] },
    { id: 14, title: "Wrap Around Sticker", category: "education", image: "/assets/School/wraparound-stickers-colour-scaled.jpg", description: "Wraparound Stickers are ideal for stationery.", subCategory: "organization", material: "Vinyl", size: "standard", badge: "", fullDescription: "Standard Stickers are ideal for stationery.", keyFeatures: ["Sticker Size – ± 30mm x 36mm"] },
    { id: 15, title: "School Book Labels", category: "education", image: "/assets/School/school-book-stickers-scaled.jpg", description: "Add a Personalised Schoolbook Subject sticker to your workbooks.", subCategory: "books", material: "paper", size: "small", badge: "", fullDescription: "Add a Personalised Schoolbook Subject sticker.", keyFeatures: ["STICKER SIZE – 75mm x 25mm", "Pack of 15 stickers"] },
    { id: 16, title: "School Book Subject Stickers", category: "education", image: "/assets/School/schoolbook subject stickers.jpg", description: "Professional, acid-free book labels for classroom.", subCategory: "books", material: "paper", size: "small", badge: "", fullDescription: "Keep your classroom or school library perfectly organized.", keyFeatures: ["Sticker Size – 75mm x 25mm"] },
    { id: 17, title: "Back to School Book Pack A", category: "education", image: "/assets/School/back-to-school-a.jpg", description: "Our Back 2 School Packs are ideal for topping up your existing stickers.", subCategory: "books", material: "Iron on Label", size: "small", badge: "", fullDescription: "Our Back 2 School Packs are ideal.", keyFeatures: ["26 Standard Stickers", "30 Mini Stickers"] },
    { id: 18, title: "Back to School Book Pack B", category: "education", image: "/assets/School/back-to-school-b.jpg", description: "Our Back 2 School Packs are ideal for topping up your existing stickers.", subCategory: "books", material: "Iron on Label", size: "small", badge: "", fullDescription: "Our Back 2 School Packs are ideal.", keyFeatures: ["26 Standard Stickers"] },
    { id: 19, title: "Back to School Book Pack B with Icons", category: "education", image: "/assets/School/back-to-school-b with icons.jpg", description: "Our Back 2 School Packs are ideal.", subCategory: "books", material: "Iron on Label", size: "small", badge: "", fullDescription: "Our Back 2 School Packs.", keyFeatures: ["26 Standard Stickers"] },
    { id: 20, title: "Back to School Book Pack A with Icons", category: "education", image: "/assets/School/back-to-school-with icons.jpg", description: "Our Back 2 School Packs are ideal.", subCategory: "books", material: "Iron on Label", size: "small", badge: "", fullDescription: "Our Back 2 School Packs.", keyFeatures: ["26 Standard Stickers"] },
    { id: 21, title: "Mixed Size Sticker Pack", category: "education", image: "/assets/School/mixed-sticker-sheet-colour-scaled.jpg", description: "Mixed Size Sticker packs.", subCategory: "books", material: "Iron on Label", size: "small", badge: "", fullDescription: "Mixed Size Sticker packs.", keyFeatures: ["56 Mini Stickers"] },
    { id: 22, title: "MIXED SIZE STICKER PACK – with icons", category: "education", image: "/assets/School/Mixed size stickers.jpg", description: "Mixed Size Sticker packs.", subCategory: "books", material: "Iron on Label", size: "small", badge: "", fullDescription: "Mixed Size Sticker packs.", keyFeatures: ["56 Mini Stickers"] },
    { id: 23, title: "Allergy Tags", category: "education", image: "/assets/School/ALLERGY-TAGS-1.jpeg", description: "Highly visible, weather-resistant safety labels.", subCategory: "safety", material: "vinyl", size: "medium", badge: "", fullDescription: "Safety first with our Emergency Contact Labels.", keyFeatures: ["Sticker Size – 90mm x 50mm"] },
    { id: 24, title: "Allergy Stickers", category: "education", image: "/assets/School/ALLERGY-STICKERS.jpeg", description: "Highly visible, weather-resistant safety labels.", subCategory: "safety", material: "vinyl", size: "medium", badge: "", fullDescription: "Safety first.", keyFeatures: ["Sticker Size – 90mm x 50mm"] },
    { id: 25, title: "Medical Alert Tags", category: "education", image: "/assets/School/MEDICAL-TAGS-1.jpeg", description: "Highly visible, weather-resistant safety labels.", subCategory: "safety", material: "vinyl", size: "medium", badge: "", fullDescription: "Safety first.", keyFeatures: ["Sticker Size – 90mm x 50mm"] },
    { id: 26, title: "Ribbon Labels with Colour Text", category: "education", image: "/assets/School/clothing labels - colour text.jpg", description: "Clothing labels.", subCategory: "clothing", material: "vinyl", size: "medium", badge: "", fullDescription: "Clothing labels.", keyFeatures: ["Sticker Size – 90mm x 50mm"] },
    { id: 27, title: "Ribbon Labels", category: "education", image: "/assets/School/clothing_labels-black_text.jpg", description: "Clothing labels.", subCategory: "clothing", material: "vinyl", size: "medium", badge: "", fullDescription: "Clothing labels.", keyFeatures: ["Sticker Size – 90mm x 50mm"] },
    { id: 28, title: "Iron on Clothing Labels", category: "education", image: "/assets/School/Iron on clothing labels.jpg", description: "These easy iron-on labels.", subCategory: "clothing", material: "Heat Transfer", size: "medium", badge: "", fullDescription: "10-Second Easy 2 Apply Iron On Clothing Labels.", keyFeatures: ["Label Size – ± 50mm x 10mm"] },
    { id: 29, title: "Instant & Seamless Iron-On Labels", category: "education", image: "/assets/School/Iron on transfer labels.jpg", description: "Marking clothing is a breeze.", subCategory: "clothing", material: "Heat Transfer", size: "medium", badge: "", fullDescription: "20-Second Easy 2 Apply Iron On Labels.", keyFeatures: ["Label Size – ± 50mm x 10mm"] },
    { id: 30, title: "Shoe Dot Stickers", category: "education", image: "/assets/School/shoe-dot-stickers.jpg", description: "Mark your child's shoes.", subCategory: "organization", material: "vinyl", size: "small", badge: "", fullDescription: "Mark your child's shoes.", keyFeatures: ["24 Stickers per pack"] },
    
    // Business Products
    { id: 31, title: "Professional Product Labels", category: "business", image: "/assets/Packaging/branding.jpg", description: "High-quality vinyl product labels for retail.", subCategory: "product", material: "vinyl", size: "medium", badge: "Custom", fullDescription: "Elevate your product presentation.", keyFeatures: ["Custom sizes available", "Full-color printing"] },
    { id: 32, title: "Professional Packaging Labels", category: "business", image: "/assets/Packaging/product4.jpg", description: "High-quality vinyl product labels.", subCategory: "packaging", material: "vinyl", size: "medium", badge: "Custom", fullDescription: "Elevate your product presentation.", keyFeatures: ["Custom sizes available"] },
    { id: 33, title: "Packaging Labels - Professional Grade", category: "business", image: "/assets/Packaging/packaging logo.jpg", description: "Clear, durable paper shipping labels.", subCategory: "packaging", material: "paper", size: "large", badge: "", fullDescription: "Streamline your shipping process.", keyFeatures: ["Sticker Size – 100mm x 150mm"] },
    { id: 34, title: "Packaging Stickers", category: "business", image: "/assets/Packaging/packaging sticker.jpg", description: "Clear, durable paper shipping labels.", subCategory: "packaging", material: "paper", size: "large", badge: "", fullDescription: "Streamline your shipping process.", keyFeatures: ["Sticker Size – 100mm x 150mm"] },
    { id: 35, title: "Custom Branding Labels", category: "business", image: "/assets/Packaging/honey-bee-lekker packaging.jpg", description: "Promote your brand with custom vinyl labels.", subCategory: "branding", material: "vinyl", size: "large", badge: "Premium", fullDescription: "Make a lasting impression.", keyFeatures: ["Custom sizes and shapes"] },
    { id: 36, title: "Custom Branding Labels", category: "business", image: "/assets/Packaging/brand logo 1.jpg", description: "Promote your brand with custom vinyl labels.", subCategory: "branding", material: "vinyl", size: "large", badge: "", fullDescription: "Make a lasting impression.", keyFeatures: ["Custom sizes and shapes"] },
    
    // Stickers & Awards
    { id: 37, title: "Teacher Reward Stickers", category: "stickers", image: "/assets/School/teacher  reward stickers.jpg", description: "Motivational paper stickers.", subCategory: "awards", material: "paper", size: "small", badge: "New", fullDescription: "Celebrate student success.", keyFeatures: ["Sticker Size – 38mm diameter"] },
    { id: 38, title: "Thank You Stickers", category: "stickers", image: "/assets/Packaging/THANK-YOU-STICKERS.jpg", description: "Classic gold and silver star stickers.", subCategory: "awards", material: "paper", size: "small", badge: "", fullDescription: "The timeless appeal of star stickers.", keyFeatures: ["Sticker Size – 13mm and 20mm stars"] },
    { id: 39, title: "Pantry & Bathroom Storage Container Stickers", category: "stickers", image: "/assets/House/pantry and bathroom stickers.jpeg", description: "Water-resistant, peel-and-stick labels.", subCategory: "household", material: "vinyl", size: "medium", badge: "", fullDescription: "These funky NEW Pantry & Bathroom stickers.", keyFeatures: ["6 x A4 sheets of stickers"] },
    { id: 40, title: "Spice Stickers", category: "stickers", image: "/assets/House/SPICE-STICKERS-1.jpg", description: "These stickers are ideal for organising your spice shelf.", subCategory: "household", material: "paper", size: "small", badge: "", fullDescription: "These stickers are ideal.", keyFeatures: ["112 Stickers per sheet"] },
    { id: 41, title: "Large Tupperware & Spice Stickers", category: "stickers", image: "/assets/House/new-tupperware.jpeg", description: "Our revised and updated TUPPERWARE & SPICE STICKER set.", subCategory: "household", material: "paper", size: "medium", badge: "", fullDescription: "Our revised and updated set.", keyFeatures: ["164 Stickers per sheet"] },
    { id: 42, title: "Tupperware Stickers", category: "stickers", image: "/assets/House/tuppetware sticker.jpg", description: "These stickers are ideal for organising.", subCategory: "household", material: "paper", size: "small", badge: "", fullDescription: "These stickers are ideal.", keyFeatures: ["112 Stickers per sheet"] },
    { id: 43, title: "Themed Stickers", category: "stickers", image: "/assets/School/MIXED-PACK-CATS.jpeg", description: "Colorful decorative stickers.", subCategory: "decorative", material: "paper", size: "medium", badge: "", fullDescription: "Add flair to any project.", keyFeatures: ["Sheet Size – 210mm x 297mm (A4)"] },
    
    // Custom Products
    { id: 44, title: "Custom Logo Stickers", category: "custom", image: "/assets/Packaging/brand logos.jpg", description: "High-quality vinyl stickers featuring your custom logo.", subCategory: "logo", material: "vinyl", size: "large", badge: "Premium", fullDescription: "Showcase your brand.", keyFeatures: ["Custom sizes up to 300mm"] },
    { id: 45, title: "Thank You Stickers", category: "custom", image: "/assets/Stickers/thank you sticker.jpg", description: "Elegant thank you paper stickers.", subCategory: "promotional", material: "paper", size: "small", badge: "", fullDescription: "Show appreciation to your customers.", keyFeatures: ["Sticker Size – 50mm diameter"] },
    { id: 46, title: "Magnetic Name Badge", category: "custom", image: "/assets/Stickers/magnetic badge.jpg", description: "Magnetic Name Badges: The ultimate professional fastener.", subCategory: "promotional", material: "Acrylic/Metal with Neodymium Magnet", size: "medium", badge: "", fullDescription: "Elevate your corporate identity.", keyFeatures: ["60mm x 20mm (MBDG60x20)", "60mm x 25mm (MBDG60x25)"] },
    { id: 47, title: "Magic Stamp", category: "custom", image: "/assets/Stickers/magic stamp.png", description: "Eye-catching magic stamp.", subCategory: "specialty", material: "Ink", size: "small", badge: "Popular", fullDescription: "This super cute stamp is a great way to mark clothing.", keyFeatures: ["Waterproof ink that survives many washes"] }
];

// Category configuration
const categoryConfig = {
    'all': { title: "All Products", subtitle: "Explore our complete range of professional labeling and sticker solutions.", subFilters: [] },
    'education': { title: "School & Education Solutions", subtitle: "Professional labeling solutions to keep classrooms organized and students engaged.", subFilters: [
        { id: 'all-school', label: 'All School Labels' },
        { id: 'name-tags', label: 'Name Tags' },
        { id: 'clothing', label: 'Clothing Labels' },
        { id: 'organization', label: 'Organization' },
        { id: 'safety', label: 'Safety/Emergency' },
        { id: 'books', label: 'Book/Library' }
    ]},
    'business': { title: "Business Solutions", subtitle: "Professional labeling and branding solutions for your commercial needs.", subFilters: [
        { id: 'all-business', label: 'All Business Labels' },
        { id: 'product', label: 'Product Labels' },
        { id: 'packaging', label: 'Packaging Labels' },
        { id: 'branding', label: 'Branding Labels' }
    ]},
    'stickers': { title: "Stickers & Awards", subtitle: "Motivational, decorative stickers and awards to recognize achievements.", subFilters: [
        { id: 'all-stickers', label: 'All Stickers' },
        { id: 'awards', label: 'Achievement Awards' },
        { id: 'household', label: 'Household' },
        { id: 'decorative', label: 'Decorative' }
    ]},
    'custom': { title: "Custom Products", subtitle: "Personalized solutions tailored to your specific requirements and brand.", subFilters: [
        { id: 'all-custom', label: 'All Custom' },
        { id: 'logo', label: 'Logo Stickers' },
        { id: 'promotional', label: 'Promotional' },
        { id: 'specialty', label: 'Specialty Items' }
    ]}
};

// Global variables
let currentFilter = 'all';
let currentSubFilter = null;
let currentProduct = null;
let carouselCurrentSlide = 0;
let carouselInterval;

// Hero carousel
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
        heroSection.addEventListener('mouseleave', () => { carouselInterval = setInterval(nextSlide, 5000); });
    }
}

// Update sub-filters
function updateSubFilters(category) {
    const subFiltersContainer = document.getElementById('subFilters');
    if (!subFiltersContainer) return;
    
    subFiltersContainer.innerHTML = '';
    const config = categoryConfig[category];
    
    if (!config || !config.subFilters || config.subFilters.length === 0) {
        subFiltersContainer.classList.add('hidden');
        return;
    }
    
    subFiltersContainer.classList.remove('hidden');
    
    config.subFilters.forEach((filter, index) => {
        const btn = document.createElement('button');
        btn.className = `sub-filter-btn ${index === 0 ? 'active' : ''}`;
        btn.textContent = filter.label;
        btn.dataset.subfilter = filter.id;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sub-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSubFilter = filter.id;
            const searchInput = document.querySelector('.search-input');
            filterAndRenderProducts(searchInput ? searchInput.value : '');
        });
        
        subFiltersContainer.appendChild(btn);
    });
    
    currentSubFilter = config.subFilters[0].id;
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
            (p.subCategory && p.subCategory.toLowerCase().includes(lowerCaseSearch)) ||
            p.fullDescription.toLowerCase().includes(lowerCaseSearch) ||
            p.material.toLowerCase().includes(lowerCaseSearch)
        );
    }
    
    const config = categoryConfig[currentFilter];
    const categoryTitle = document.getElementById('currentCategoryTitle');
    const categorySubtitle = document.getElementById('currentCategorySubtitle');
    
    if (categoryTitle && categorySubtitle) {
        categoryTitle.textContent = config.title;
        categorySubtitle.textContent = config.subtitle;
    }
    
    renderProducts(filteredProducts);
}

// Render products
function renderProducts(productList) {
    const mainGrid = document.getElementById('mainProductsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!mainGrid) return;
    
    mainGrid.innerHTML = '';
    
    if (productList.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    }
    
    if (noResults) noResults.classList.add('hidden');
    
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.category}`;
        
        const categoryName = categoryConfig[product.category].title.replace(' Solutions', '').replace(' & Awards', '').replace(' Products', '');
        
        productCard.innerHTML = `
            <div class="product-image" onclick="openProductModal(${product.id})">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <div class="product-category-tag">${categoryName}</div>
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
    
    const downloadBtn = document.getElementById('downloadCatalogueBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            downloadCatalogue();
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

// Download Catalogue Function as PDF
function downloadCatalogue() {
    // Check if jsPDF is loaded
    if (typeof window.jspdf === 'undefined') {
        // Load jsPDF dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = function() {
            generatePDF();
        };
        document.head.appendChild(script);
    } else {
        generatePDF();
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let yPos = 20;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const lineHeight = 7;
    
    // Helper function to add new page if needed
    function checkPageBreak(additionalSpace = 10) {
        if (yPos + additionalSpace > pageHeight - margin) {
            doc.addPage();
            yPos = 20;
        }
    }
    
    // Title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('NDONI LABELS', 105, yPos, { align: 'center' });
    yPos += 10;
    
    doc.setFontSize(16);
    doc.text('PRODUCT CATALOGUE 2025', 105, yPos, { align: 'center' });
    yPos += 15;
    
    // Subtitle
    doc.setFontSize(11);
    doc.setFont(undefined, 'normal');
    doc.text('Professional Labels and Stickers for Schools, Businesses, and Homes', 105, yPos, { align: 'center' });
    yPos += 15;
    
    // Contact Information
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Contact Information:', margin, yPos);
    yPos += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text('Phone: +27 123 456 789', margin, yPos);
    yPos += 6;
    doc.text('Email: info@ndonilabels.co.za', margin, yPos);
    yPos += 6;
    doc.text('Location: Johannesburg, South Africa', margin, yPos);
    yPos += 15;
    
    // Categories
    const categories = ['education', 'business', 'stickers', 'custom'];
    
    categories.forEach(category => {
        const categoryProducts = products.filter(p => p.category === category);
        const config = categoryConfig[category];
        
        checkPageBreak(20);
        
        // Category Title
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(30, 32, 97); // Dark blue
        doc.text(config.title.toUpperCase(), margin, yPos);
        yPos += 7;
        
        // Category Subtitle
        doc.setFontSize(9);
        doc.setFont(undefined, 'italic');
        doc.setTextColor(85, 85, 85); // Dark grey
        const subtitleLines = doc.splitTextToSize(config.subtitle, 170);
        doc.text(subtitleLines, margin, yPos);
        yPos += subtitleLines.length * 5 + 5;
        
        // Products
        categoryProducts.forEach((product, index) => {
            checkPageBreak(25);
            
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(11);
            doc.setFont(undefined, 'bold');
            doc.text(`${index + 1}. ${product.title}`, margin, yPos);
            yPos += 6;
            
            doc.setFontSize(9);
            doc.setFont(undefined, 'normal');
            
            // Description
            const descLines = doc.splitTextToSize(`Description: ${product.description}`, 160);
            doc.text(descLines, margin + 5, yPos);
            yPos += descLines.length * 5;
            
            // Material
            doc.text(`Material: ${product.material}`, margin + 5, yPos);
            yPos += 5;
            
            // Badge if exists
            if (product.badge) {
                doc.setFont(undefined, 'bold');
                doc.setTextColor(204, 0, 0); // Red
                doc.text(`Badge: ${product.badge}`, margin + 5, yPos);
                doc.setTextColor(0, 0, 0);
                doc.setFont(undefined, 'normal');
                yPos += 5;
            }
            
            // Key Features
            if (product.keyFeatures && product.keyFeatures.length > 0) {
                checkPageBreak(15);
                doc.text('Key Features:', margin + 5, yPos);
                yPos += 5;
                
                product.keyFeatures.forEach(feature => {
                    checkPageBreak(8);
                    const featureLines = doc.splitTextToSize(`• ${feature}`, 155);
                    doc.text(featureLines, margin + 10, yPos);
                    yPos += featureLines.length * 4.5;
                });
            }
            
            yPos += 5;
        });
        
        yPos += 5;
    });
    
    // How to Order Section
    checkPageBreak(40);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 32, 97);
    doc.text('HOW TO ORDER', margin, yPos);
    yPos += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    const orderSteps = [
        '1. Visit our website or contact us directly',
        '2. Provide product details and quantities',
        '3. Receive a custom quote',
        '4. Approve and place your order',
        '5. Fast delivery across South Africa'
    ];
    
    orderSteps.forEach(step => {
        doc.text(step, margin, yPos);
        yPos += 6;
    });
    
    yPos += 5;
    
    // Services Section
    checkPageBreak(30);
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(30, 32, 97);
    doc.text('SERVICES', margin, yPos);
    yPos += 7;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    const services = [
        '• Custom Design Services',
        '• Bulk Orders & Volume Discounts',
        '• Fast Turnaround Times',
        '• Professional Consultation',
        '• Quality Guarantee'
    ];
    
    services.forEach(service => {
        doc.text(service, margin, yPos);
        yPos += 6;
    });
    
    // Footer
    checkPageBreak(15);
    yPos = pageHeight - 20;
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text('© 2025 Ndoni Labels. All rights reserved.', 105, yPos, { align: 'center' });
    
    // Save the PDF
    doc.save('Ndoni_Labels_Catalogue_2025.pdf');
    
    alert('Catalogue PDF downloaded successfully! Check your downloads folder.');
}

// Initialize application
function init() {
    initCarousel();
    setupEventListeners();
    updateSubFilters('all');
    filterAndRenderProducts();
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions globally available
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;