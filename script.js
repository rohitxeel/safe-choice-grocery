// Product Listing
const products = [
    { id: 1, name: "Apple", price: 0.5 },
    { id: 2, name: "Banana", price: 0.3 },
    { id: 3, name: "Orange", price: 0.4 }
];

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `${product.name} - $${product.price.toFixed(2)} 
            <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productContainer.appendChild(productElement);
    });
}

// Shopping Cart System
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} added to the cart!`);
    }
}

function viewCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';  // Clear any existing items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartContainer.appendChild(itemElement);
    });
}

// User Login Features
function login(username, password) {
    // Simulated login (for demo purposes)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Login failed. Please try again.');
    }
}

// Initialize the product display
document.addEventListener("DOMContentLoaded", displayProducts);