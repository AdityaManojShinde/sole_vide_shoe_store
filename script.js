// === Product Data (Shared Across Pages) ===
const products = [
    { id: 1, name: "Air Runner Pro", price: 189, oldPrice: 249, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80", images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80"], category: "running", tag: "Best Seller", rating: 4.9, reviews: 284, description: "Experience unmatched performance with the Air Runner Pro. Featuring our revolutionary cushioning system, breathable mesh upper, and responsive sole technology, these shoes are engineered for serious runners who demand the best.", colors: ["#FF6B35","#1a1a2e","#e74c3c","#2ecc71"], sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12], features: ["Breathable mesh upper","Responsive cushioning","Lightweight design","Durable rubber outsole","Reflective details"] },
    { id: 2, name: "Urban Street X", price: 149, oldPrice: null, image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80", images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80","https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80"], category: "casual", tag: "New", rating: 4.7, reviews: 156, description: "The Urban Street X blends street style with everyday comfort. Crafted with premium materials and a modern silhouette, these shoes transition seamlessly from day to night. Perfect for the style-conscious urbanite.", colors: ["#1a1a2e","#f5f5f5","#3498db","#e67e22"], sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,12], features: ["Premium leather upper","Memory foam insole","Flexible outsole","Classic street design","All-day comfort"] },
    { id: 3, name: "Sport Flex Max", price: 219, oldPrice: 279, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80"], category: "sport", tag: "Sale", rating: 4.8, reviews: 312, description: "Dominate the court with Sport Flex Max. Designed for multi-sport athletes, these shoes provide superior traction, ankle support, and energy return. From basketball to training, unleash your full potential.", colors: ["#f5f5f5","#FF6B35","#1a1a2e","#9b59b6"], sizes: [7,8,8.5,9,9.5,10,10.5,11,11.5,12,13], features: ["Multi-sport design","Superior traction pattern","Ankle support collar","Energy return technology","Impact protection"] },
    { id: 4, name: "Classic Vibe", price: 129, oldPrice: null, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&q=80", images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80","https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80"], category: "lifestyle", tag: null, rating: 4.6, reviews: 198, description: "Timeless style meets modern comfort in the Classic Vibe. These versatile shoes feature a clean design that pairs with any outfit. Built with sustainable materials and cushioned insoles for all-day wear.", colors: ["#8B4513","#1a1a2e","#c0392b","#2c3e50"], sizes: [6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11], features: ["Sustainable materials","Cushioned insole","Timeless design","Versatile styling","Eco-friendly packaging"] },
    { id: 5, name: "Trail Blazer", price: 199, oldPrice: 259, image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&q=80", images: ["https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80","https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&q=80"], category: "running", tag: "Sale", rating: 4.9, reviews: 421, description: "Conquer any terrain with the Trail Blazer. Built for off-road adventures with aggressive tread patterns, waterproof membrane, and reinforced toe cap. These shoes handle anything nature throws at you.", colors: ["#27ae60","#1a1a2e","#d35400","#7f8c8d"], sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13], features: ["Waterproof membrane","Aggressive tread pattern","Reinforced toe cap","Trail-specific cushioning","Quick-lace system"] },
    { id: 6, name: "Metro Slip-On", price: 99, oldPrice: null, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80", images: ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80","https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80"], category: "casual", tag: "New", rating: 4.5, reviews: 89, description: "Effortless style starts here. The Metro Slip-On features a minimalist design with elastic gore for easy on-off, soft canvas upper, and a vulcanized rubber sole for that classic casual look.", colors: ["#f5f5f5","#1a1a2e","#e74c3c","#3498db"], sizes: [6,7,7.5,8,8.5,9,9.5,10,10.5,11], features: ["Easy slip-on design","Soft canvas upper","Vulcanized rubber sole","Elastic gore entry","Lightweight construction"] },
    { id: 7, name: "Bounce Pro 3", price: 239, oldPrice: 299, image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=500&q=80", images: ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600&q=80","https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80","https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80"], category: "sport", tag: "Best Seller", rating: 5.0, reviews: 567, description: "The third generation of our most popular performance shoe. The Bounce Pro 3 features next-gen bounce technology for explosive energy return, a knit upper that adapts to your foot, and a stability system for confident cuts.", colors: ["#FF6B35","#1a1a2e","#f5f5f5","#e74c3c"], sizes: [7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,13,14], features: ["Next-gen bounce technology","Adaptive knit upper","Stability control system","Explosive energy return","Pro-level performance"] },
    { id: 8, name: "Retro Wave", price: 159, oldPrice: null, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&q=80", images: ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80","https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80","https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80"], category: "lifestyle", tag: "Trending", rating: 4.7, reviews: 234, description: "Ride the wave of retro-inspired fashion with the Retro Wave. Bold colorways meet vintage design cues, updated with modern comfort tech. These head-turners are for those who dare to stand out.", colors: ["#9b59b6","#e74c3c","#f39c12","#1abc9c"], sizes: [6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,12], features: ["Retro-inspired design","Bold colorways","Modern comfort tech","Padded collar","Vintage aesthetic"] },
];

// === localStorage Cart & Wishlist ===
function getCart() {
    return JSON.parse(localStorage.getItem('solevibe_cart') || '[]');
}
function saveCart(cart) {
    localStorage.setItem('solevibe_cart', JSON.stringify(cart));
}
function getWishlist() {
    return JSON.parse(localStorage.getItem('solevibe_wishlist') || '[]');
}
function saveWishlist(wl) {
    localStorage.setItem('solevibe_wishlist', JSON.stringify(wl));
}

// === Shared Cart Functions ===
function addToCart(id, qty = 1, size = null, color = null) {
    const cart = getCart();
    const product = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, oldPrice: product.oldPrice, image: product.image, qty: qty, size: size || (product.sizes ? product.sizes[3] : '9'), color: color || (product.colors ? product.colors[0] : '#000') });
    }
    saveCart(cart);
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(c => c.id !== id);
    saveCart(cart);
    updateCartCount();
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof updateCartSidebar === 'function') updateCartSidebar();
}

function changeQty(id, delta) {
    const cart = getCart();
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
            return;
        }
    }
    saveCart(cart);
    updateCartCount();
    if (typeof renderCartPage === 'function') renderCartPage();
    if (typeof updateCartSidebar === 'function') updateCartSidebar();
}

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, c) => sum + c.qty, 0);
    const el = document.getElementById('cartCount');
    if (el) el.textContent = totalQty;
}

// === Wishlist Functions ===
function toggleWishlist(id) {
    let wl = getWishlist();
    const idx = wl.indexOf(id);
    if (idx > -1) {
        wl.splice(idx, 1);
        showToast('Removed from wishlist');
    } else {
        wl.push(id);
        showToast('Added to wishlist ❤️');
    }
    saveWishlist(wl);
    updateWishlistCount();
    if (typeof renderProducts === 'function') {
        const activeFilter = document.querySelector('.filter-btn.active');
        const cat = activeFilter ? activeFilter.textContent.toLowerCase() : 'all';
        renderProducts(cat);
    }
}

function updateWishlistCount() {
    const wl = getWishlist();
    const el = document.getElementById('wishlistCount');
    if (el) el.textContent = wl.length;
}

// === Toast Notification ===
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    document.getElementById('toastMsg').textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        toast.classList.remove('show');
    }, 2500);
}

// === Mobile Menu ===
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const icon = document.getElementById('menuIcon');
    if (menu) menu.classList.toggle('hidden');
    if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    }
}

// === Newsletter ===
function handleSubscribe(e) {
    e.preventDefault();
    showToast('🎉 Subscribed! Check your email for 15% off.');
    e.target.reset();
}

// === Get Tag Color ===
function getTagColor(tag) {
    switch (tag) {
        case 'Sale': return 'bg-red-500';
        case 'New': return 'bg-green-500';
        case 'Trending': return 'bg-purple-500';
        default: return 'bg-orange-500';
    }
}

// === Back to Top ===
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (!btn) return;
    if (window.scrollY > 500) {
        btn.classList.remove('opacity-0', 'translate-y-4');
    } else {
        btn.classList.add('opacity-0', 'translate-y-4');
    }
});

// ==============================
// INDEX PAGE SPECIFIC
// ==============================

function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    const wishlist = getWishlist();
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    grid.innerHTML = filtered.map((p, index) => `
        <div class="card-hover bg-white/5 border border-white/10 rounded-3xl overflow-hidden group" data-category="${p.category}" style="animation-delay: ${index * 0.1}s">
            <div class="relative overflow-hidden">
                <a href="product.html?id=${p.id}">
                    <img src="${p.image}" alt="${p.name}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
                </a>
                ${p.tag ? `<span class="absolute top-4 left-4 ${getTagColor(p.tag)} text-white text-xs font-bold px-3 py-1 rounded-full">${p.tag}</span>` : ''}
                <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onclick="toggleWishlist(${p.id})" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                        <i class="${wishlist.includes(p.id) ? 'fas' : 'far'} fa-heart text-sm"></i>
                    </button>
                    <a href="product.html?id=${p.id}" class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                        <i class="far fa-eye text-sm"></i>
                    </a>
                </div>
            </div>
            <div class="p-5">
                <div class="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                    <i class="fas fa-star"></i>
                    <span class="text-white/60">${p.rating} (${p.reviews})</span>
                </div>
                <a href="product.html?id=${p.id}" class="font-bold text-lg hover:text-orange-400 transition-colors">${p.name}</a>
                <div class="flex items-center gap-2 mt-2">
                    <span class="text-xl font-black text-orange-400">$${p.price}</span>
                    ${p.oldPrice ? `<span class="text-white/40 line-through text-sm">$${p.oldPrice}</span>` : ''}
                </div>
                <button onclick="addToCart(${p.id})" class="mt-4 w-full bg-white/10 hover:bg-orange-500 border border-white/20 hover:border-orange-500 text-white py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <i class="fas fa-shopping-bag text-sm"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function filterProducts(category, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-orange-500', 'text-white');
        b.classList.add('bg-white/10', 'text-white/70');
    });
    btn.classList.add('active', 'bg-orange-500', 'text-white');
    btn.classList.remove('bg-white/10', 'text-white/70');
    renderProducts(category);
}

// === Cart Sidebar (Index Page) ===
function updateCartSidebar() {
    const cart = getCart();
    const totalEl = document.getElementById('cartTotal');
    const itemsEl = document.getElementById('cartItems');
    const footerEl = document.getElementById('cartFooter');
    if (!itemsEl) return;

    const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

    if (cart.length === 0) {
        if (footerEl) footerEl.style.display = 'none';
        itemsEl.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full text-white/40">
                <i class="fas fa-shopping-bag text-5xl mb-4"></i>
                <p class="text-lg font-medium">Your cart is empty</p>
                <p class="text-sm mt-1">Add some awesome kicks!</p>
            </div>`;
        return;
    }

    if (footerEl) footerEl.style.display = 'block';
    if (totalEl) totalEl.textContent = `$${totalPrice.toFixed(2)}`;

    itemsEl.innerHTML = cart.map(item => `
        <div class="flex gap-4 mb-4 bg-white/5 rounded-2xl p-3">
            <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl">
            <div class="flex-1">
                <h4 class="font-semibold text-sm">${item.name}</h4>
                <p class="text-orange-400 font-bold mt-1">$${item.price}</p>
                <div class="flex items-center gap-3 mt-2">
                    <button onclick="changeQty(${item.id}, -1)" class="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 text-xs">-</button>
                    <span class="text-sm font-medium">${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)" class="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 text-xs">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="self-start text-white/40 hover:text-red-400 transition-colors">
                <i class="fas fa-trash-alt text-sm"></i>
            </button>
        </div>
    `).join('');
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    if (!sidebar || !overlay) { window.location.href = 'cart.html'; return; }
    const isOpen = !sidebar.classList.contains('translate-x-full');
    if (isOpen) {
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    } else {
        updateCartSidebar();
        overlay.classList.remove('hidden');
        requestAnimationFrame(() => {
            overlay.classList.remove('opacity-0');
            sidebar.classList.remove('translate-x-full');
        });
    }
}

// === Countdown Timer ===
function updateCountdown() {
    const daysEl = document.getElementById('days');
    if (!daysEl) return;
    const end = new Date();
    end.setDate(end.getDate() + 3);
    end.setHours(23, 59, 59);
    const target = end.getTime();
    function tick() {
        const now = new Date().getTime();
        const diff = target - now;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById('days').textContent = String(d).padStart(2, '0');
        document.getElementById('hours').textContent = String(h).padStart(2, '0');
        document.getElementById('mins').textContent = String(m).padStart(2, '0');
        document.getElementById('secs').textContent = String(s).padStart(2, '0');
    }
    tick();
    setInterval(tick, 1000);
}

// === Animated Counter ===
function animateCounter(el, target, suffix = '') {
    if (!el) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current).toLocaleString() + suffix;
    }, 25);
}

// === Init on DOM Ready ===
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateWishlistCount();

    // Index page init
    if (document.getElementById('productsGrid')) {
        renderProducts();
        updateCountdown();
        setTimeout(() => {
            animateCounter(document.getElementById('stat1'), 50000, '+');
            animateCounter(document.getElementById('stat2'), 500, '+');
            animateCounter(document.getElementById('stat3'), 12000, '+');
        }, 500);
    }
});
