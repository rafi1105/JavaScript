
// Solution: Advanced Shopping Cart Manager (Node.js + Browser Compatible)
class ShoppingCartManager {
    constructor(storageKey = 'shopping_cart') {
        this.storageKey = storageKey;
        this.isNode = typeof window === 'undefined';
        this.storage = this.initStorage();
        this.cart = this.loadFromStorage();
        this.observers = [];
        this.taxRate = 0.08; // 8% tax
        this.shippingCost = 10;
        this.freeShippingThreshold = 50;
    }

    // Initialize storage based on environment
    initStorage() {
        if (this.isNode) {
            // Node.js: Use file system or in-memory storage
            const fs = require('fs');
            const path = require('path');
            
            return {
                getItem: (key) => {
                    try {
                        const filePath = path.join(__dirname, `${key}.json`);
                        if (fs.existsSync(filePath)) {
                            return fs.readFileSync(filePath, 'utf8');
                        }
                        return null;
                    } catch (error) {
                        console.error('Node storage read error:', error);
                        return null;
                    }
                },
                setItem: (key, value) => {
                    try {
                        const filePath = path.join(__dirname, `${key}.json`);
                        fs.writeFileSync(filePath, value, 'utf8');
                    } catch (error) {
                        console.error('Node storage write error:', error);
                    }
                }
            };
        } else {
            // Browser: Use localStorage
            return {
                getItem: (key) => localStorage.getItem(key),
                setItem: (key, value) => localStorage.setItem(key, value)
            };
        }
    }
    
    // Observer pattern for state changes
    subscribe(callback) {
        this.observers.push(callback);
        return () => {
            this.observers = this.observers.filter(obs => obs !== callback);
        };
    }
    
    notify() {
        this.observers.forEach(callback => callback(this.getCartSummary()));
        this.saveToStorage();
    }
    
    addItem(product, quantity = 1) {
        const existingItem = this.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            this.updateQuantity(product.id, existingItem.quantity + quantity);
        } else {
            this.cart.push({
                ...product,
                quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        this.notify();
        return this.getCartSummary();
    }
    
    removeItem(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.notify();
        return this.getCartSummary();
    }
    
    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            return this.removeItem(productId);
        }
        
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.notify();
        }
        
        return this.getCartSummary();
    }
    
    clearCart() {
        this.cart = [];
        this.notify();
        return this.getCartSummary();
    }
    
    // Apply discount codes
    applyDiscount(discountCode) {
        const discounts = {
            'SAVE10': { type: 'percentage', value: 0.10 },
            'WELCOME': { type: 'fixed', value: 5 },
            'FREESHIP': { type: 'shipping', value: 0 }
        };
        
        const discount = discounts[discountCode.toUpperCase()];
        if (discount) {
            this.appliedDiscount = discount;
            this.notify();
            return { success: true, discount };
        }
        
        return { success: false, message: 'Invalid discount code' };
    }
    
    calculateSubtotal() {
        return this.cart.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    
    calculateDiscount(subtotal) {
        if (!this.appliedDiscount) return 0;
        
        switch (this.appliedDiscount.type) {
            case 'percentage':
                return subtotal * this.appliedDiscount.value;
            case 'fixed':
                return Math.min(this.appliedDiscount.value, subtotal);
            default:
                return 0;
        }
    }
    
    calculateShipping(subtotal) {
        if (this.appliedDiscount?.type === 'shipping') {
            return 0;
        }
        
        return subtotal >= this.freeShippingThreshold ? 0 : this.shippingCost;
    }
    
    calculateTax(subtotal, discount) {
        return (subtotal - discount) * this.taxRate;
    }
    
    getCartSummary() {
        const subtotal = this.calculateSubtotal();
        const discount = this.calculateDiscount(subtotal);
        const shipping = this.calculateShipping(subtotal);
        const tax = this.calculateTax(subtotal, discount);
        const total = subtotal - discount + shipping + tax;
        
        return {
            items: [...this.cart],
            itemCount: this.cart.reduce((count, item) => count + item.quantity, 0),
            subtotal: Number(subtotal.toFixed(2)),
            discount: Number(discount.toFixed(2)),
            shipping: Number(shipping.toFixed(2)),
            tax: Number(tax.toFixed(2)),
            total: Number(total.toFixed(2)),
            appliedDiscount: this.appliedDiscount
        };
    }
    
    // Inventory management
    checkInventory(productId, requestedQuantity) {
        // In real app, this would check against server inventory
        const mockInventory = {
            1: 10, 2: 5, 3: 8, 4: 3, 5: 15
        };
        
        const available = mockInventory[productId] || 0;
        return {
            available,
            canAdd: available >= requestedQuantity,
            maxQuantity: available
        };
    }
    
    // Persistent storage (Node.js + Browser compatible)
    saveToStorage() {
        try {
            const data = JSON.stringify({
                cart: this.cart,
                appliedDiscount: this.appliedDiscount
            });
            this.storage.setItem(this.storageKey, data);
        } catch (error) {
            console.error('Failed to save cart to storage:', error);
        }
    }
    
    loadFromStorage() {
        try {
            const stored = this.storage.getItem(this.storageKey);
            if (stored) {
                const data = JSON.parse(stored);
                this.appliedDiscount = data.appliedDiscount;
                return data.cart || [];
            }
        } catch (error) {
            console.error('Failed to load cart from storage:', error);
        }
        return [];
    }
    
    // Export cart for checkout
    exportForCheckout() {
        const summary = this.getCartSummary();
        return {
            ...summary,
            timestamp: new Date().toISOString(),
            currency: 'USD'
        };
    }
}

// Usage Example
const cart = new ShoppingCartManager();

// Subscribe to cart changes
const unsubscribe = cart.subscribe((summary) => {
    console.log('Cart updated:', summary);
    updateUIDisplay(summary);
});

// Sample products
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Mouse', price: 29.99, category: 'Electronics' },
    { id: 3, name: 'Keyboard', price: 79.99, category: 'Electronics' }
];

// Add items to cart
cart.addItem(products[0], 1);
cart.addItem(products[1], 2);

// Apply discount
const discountResult = cart.applyDiscount('SAVE10');
console.log('Discount applied:', discountResult);

// Update quantity
cart.updateQuantity(1, 2);

// Get final summary
const finalSummary = cart.getCartSummary();
console.log('Final cart summary:', finalSummary);

// UI Update function (Browser-only, Node.js safe)
function updateUIDisplay(summary) {
    // Only run in browser environment
    if (typeof document === 'undefined') {
        console.log('📱 UI Update (Node.js):', {
            itemCount: summary.itemCount,
            total: `$${summary.total}`,
            items: summary.items.map(item => 
                `${item.name} x${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
            )
        });
        return;
    }
    
    // Update header cart summary
    const cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) cartBadge.textContent = summary.itemCount;
    
    const cartTotal = document.querySelector('.cart-total');
    if (cartTotal) cartTotal.textContent = `$${summary.total}`;
    
    // Update cart items display
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;
    
    if (summary.items.length === 0) {
        // Show empty cart message
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
                <p><small>Add some products to get started!</small></p>
            </div>
        `;
        if (cartSummaryContainer) cartSummaryContainer.style.display = 'none';
    } else {
        // Show cart items
        cartItemsContainer.innerHTML = summary.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">$${item.price} each</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="btn btn-danger" onclick="removeItem(${item.id})" style="margin-left: 10px;">
                        Remove
                    </button>
                </div>
            </div>
        `).join('');
        
        // Show and update cart summary
        if (cartSummaryContainer) {
            cartSummaryContainer.style.display = 'block';
            
            // Update summary values
            const updateElement = (id, value) => {
                const element = document.getElementById(id);
                if (element) element.textContent = value;
            };
            
            updateElement('subtotal', `$${summary.subtotal}`);
            updateElement('discount', summary.discount > 0 ? `-$${summary.discount}` : '$0.00');
            updateElement('shipping', `$${summary.shipping}`);
            updateElement('tax', `$${summary.tax}`);
            updateElement('total', `$${summary.total}`);
        }
    }
}

