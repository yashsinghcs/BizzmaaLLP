// Sample T-Shirt Data
const tshirts = [
    { id: 1, name: "Neon Pulse Tee", price: 25, img: "https://via.placeholder.com/250" },
    { id: 2, name: "Retro Wave", price: 30, img: "https://via.placeholder.com/250" },
    { id: 3, name: "Cyber Punk", price: 28, img: "https://via.placeholder.com/250" },
    { id: 4, name: "Arctic Flow", price: 22, img: "https://via.placeholder.com/250" }
];

const productDisplay = document.getElementById('product-display');

// Function to render products
function displayProducts() {
    productDisplay.innerHTML = tshirts.map(shirt => `
        <div class="product-card">
            <img src="${shirt.img}" alt="${shirt.name}">
            <h3>${shirt.name}</h3>
            <p>$${shirt.price}</p>
            <button onclick="addToCart(${shirt.id})">Add to Cart</button>
        </div>
    `).join('');
}

let cartCount = 0;
function addToCart(id) {
    cartCount++;
    document.getElementById('cart-btn').innerText = `Cart (${cartCount})`;
    // Logic for sliding sidebar would go here
}

displayProducts();
