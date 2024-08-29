function scrollLeftAction() {
    console.log('Scroll Left Clicked');
    const container = document.getElementById('product-cards');
    container.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
}

function scrollRightAction() {
    console.log('Scroll Right Clicked');
    const container = document.getElementById('product-cards');
    container.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
}

function selectTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.style.display = card.classList.contains(tabId) ? 'block' : 'none';
    });

    document.getElementById('product-cards').scrollTo({ left: 0, behavior: 'smooth' });
}

function viewAll() {
    window.location.href = 'all-shoes.html';
}

selectTab('running');

let products = {};

async function loadProducts() {
    const response = await fetch('products.json');
    products = await response.json();
    loadCards();
}

function loadCards() {
    const productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.innerHTML = '';  
    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            const card = createCard(product, category);
            productCardsContainer.appendChild(card);
        });
    });
}

loadProducts();

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('size-button')) {
        alert(`Selected size: ${event.target.textContent}`);
    }
});

function createCard(product, category) {
    const card = document.createElement('div');
    card.classList.add('card', category);

    let colorsHtml = '';
    product.colors.forEach(color => {
        colorsHtml += `<span class="color ${color}"></span>`;
    });

    let sizesHtml = '';
    product.sizes.forEach(size => {
        sizesHtml += `<button class="size-button">${size}</button>`;
    });

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="details">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <div class="colors">
                ${colorsHtml}
            </div>
        </div>
        <div class="sizes">
            ${sizesHtml}
        </div>
    `;

    return card;
}


function createCard(product, category) {
    const card = document.createElement('div');
    card.classList.add('card', category);

    let colorsHtml = '';
    product.colors.forEach(color => {
        colorsHtml += `<span class="color ${color}"></span>`;
    });

    let sizesHtml = '';
    product.sizes.forEach(size => {
        sizesHtml += `<button class="size-button">${size}</button>`;
    });

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="details">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <div class="colors">
                ${colorsHtml}
            </div>
        </div>
        <div class="sizes">
            ${sizesHtml}
        </div>
    `;

    return card;
}

function loadCards() {
    const productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.innerHTML = '';  
    Object.keys(products).forEach(category => {
        products[category].forEach(product => {
            const card = createCard(product, category);
            productCardsContainer.appendChild(card);
        });
    });
}

loadCards();

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('size-button')) {
        alert(`Selected size: ${event.target.textContent}`);
    }
});
