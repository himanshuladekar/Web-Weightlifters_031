// Carousel Functionality
const carousel = document.querySelector('.carousel-innerG');
const items = carousel.querySelectorAll('.carousel-itemG');
const prevBtn = document.querySelector('.carousel-controlG.prev');
const nextBtn = document.querySelector('.carousel-controlG.next');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(currentIndex + 1);
});

// Auto-advance slides every 5 seconds
setInterval(() => showSlide(currentIndex + 1), 5000);

const scrollToTopBtn = document.querySelector('.scroll-to-top');

function toggleScrollToTopButton() {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleScrollToTopButton);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initial check
toggleScrollToTopButton();


const iconLink = document.getElementById('iconLink');

iconLink.addEventListener('click', function() {
  
    window.location.href = './icon.html';
});



// AR Carousel Functionality
function showSlideA(index) {
    const slides = document.querySelectorAll('.carousel-item_a');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner_a').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlideA(currentIndex + 1);
}

function prevSlide() {
    showSlideA(currentIndex - 1);
}

// Scroll Actions
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

// Tab Selection
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

// Load Products
let products = [];

async function loadProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        loadCards();
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

function loadCards() {
    const productCardsContainer = document.getElementById('product-cards');
    productCardsContainer.innerHTML = '';  

    products.forEach(product => {
        const card = createCard(product);
        productCardsContainer.appendChild(card);
    });
}

function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('card', product.type.toLowerCase().replace(/\s+/g, '-')); 

    let sizesHtml = '';
    product.sizes.forEach(size => {
        sizesHtml += `<button class="size-button">${size}</button>`;
    });

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="details">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <div class="sizes">
                ${sizesHtml}
            </div>
        </div>
    `;

    return card;
}

// Size Button Click Event
document.addEventListener('click', function(event) {
    if (event.target.matches('.size-button')) {
        alert(`Selected size: ${event.target.textContent}`);
    }
});

loadProducts();

// Ams code ends here
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links a");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.id;
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });
  function openModal() {
    document.getElementById("signupModal").style.display = "block";
  }

  // Close Modal
  function closeModal() {
    document.getElementById("signupModal").style.display = "none";
  }

  // Handle Sign-Up Form Submission
  document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Process the form data
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      // Example: Display the data
      alert("Email: " + email + "\nPassword: " + password);

      // Close the modal after submission
      closeModal();
    });
