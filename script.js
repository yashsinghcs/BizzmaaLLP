const galleryItems = [
    { name: "Silk Touch Tee", price: "$45" },
    { name: "Urban Edge", price: "$38" },
    { name: "Minimalist Vibe", price: "$32" },
    { name: "Classic Noir", price: "$40" },
    { name: "Sunset Blend", price: "$35" },
    { name: "Arctic Flow", price: "$42" }
];

const gallery = document.getElementById('product-gallery');

galleryItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.innerHTML = `
        <div class="img-box"></div>
        <div class="info">
            <h4>${item.name}</h4>
            <p class="price">${item.price}</p>
        </div>
    `;
    gallery.appendChild(card);
});
