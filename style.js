// Auto-create 50 futuristic product cards
const productGrid = document.getElementById("productGrid");

let products = [];
for (let i = 1; i <= 50; i++) {
    products.push({
        name: `Zero Ultra Product ${i}`,
        price: (20 + i).toFixed(2),
        img: "https://via.placeholder.com/350"
    });
}

// Insert & Animate Each Product
products.forEach((p, i) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <button class="dark-btn">View</button>
    `;

    productGrid.appendChild(card);

    // Sequential fade animation
    setTimeout(() => {
        card.classList.add("visible");
    }, i * 130);
});
