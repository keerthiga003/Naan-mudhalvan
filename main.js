let cart = [];

// Load cart from localStorage
function loadCart() {
    let savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) cart = savedCart;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart
function addToCart(product, price) {
    cart.push({ product, price });
    saveCart();
    
}

// Display cart items
function displayCart() {
    loadCart();
    let cartItemsDiv = document.getElementById("cartItems");
    cartItemsDiv.innerHTML = '';
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += <p>${item.product} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button></p>;
    });
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
}

// Proceed to checkout
function checkout() {
    window.location.href = 'checkout.html';
}

// Display checkout summary
function displayCheckout() {
    loadCart();
    let summaryDiv = document.getElementById("checkoutSummary");
    let total = 0;
    cart.forEach(item => {
        summaryDiv.innerHTML += <p>${item.product} - $${item.price}</p>;
        total += item.price;
    });
    summaryDiv.innerHTML += <h3>Total: $${total}</h3>;
}

// Place order
function placeOrder() {
    alert("Order placed successfully!");
    cart = [];
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}

// Run on page load
window.onload = function() {
    if (document.getElementById("cartItems")) displayCart();
    if (document.getElementById("checkoutSummary")) displayCheckout();
};