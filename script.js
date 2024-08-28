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

const products = {
    running: [
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Running Shoes 1", price: "₹4,999", image: "https://th.bing.com/th?id=OPAC.nv%2fedFchJ2GNCA474C474&w=220&h=220&c=17&o=5&pid=21.1", colors: ["black", "blue"], sizes: [6, 7, 8, 9, 10, 11, 12] },
    ],
    walking: [
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Walking Shoes 1", price: "₹3,999", image: "path_to_image_2", colors: ["grey", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
    ],
    training: [
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Training Shoes 1", price: "₹5,499", image: "path_to_image_3", colors: ["black", "grey"], sizes: [6, 7, 8, 9, 10, 11, 12] },
    ],
    classics: [
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
        { name: "Reebok Classic Shoes 1", price: "₹6,999", image: "path_to_image_4", colors: ["black", "green"], sizes: [6, 7, 8, 9, 10, 11, 12] },
    ]
};

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
