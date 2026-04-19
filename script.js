const products = [
    { name: "Neon Pulse Tee", price: "$29" },
    { name: "Cyber Wave", price: "$35" },
    { name: "Midnight Cotton", price: "$25" },
    { name: "Arctic Flow", price: "$30" }
];

const grid = document.getElementById('product-grid');

products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="img-box"></div>
        <div class="info">
            <h4>${p.name}</h4>
            <p class="price">${p.price}</p>
        </div>
    `;
    grid.appendChild(card);
});
