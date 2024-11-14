import { moviesData } from '../datos/data.js';

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('prod');
const product = moviesData.find(item => item.id == productId);

if (product) {
    const isLoggedIn = localStorage.getItem("email");

    const productContainer = document.getElementById('carContainer');
    
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = product.image;
    img.classList.add('card-img-top');
    img.alt = product.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = product.title;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = product.description;

    const genre = document.createElement('p');
    genre.classList.add('card-text');
    genre.innerHTML = `<strong>Género:</strong> ${product.genre}`;

    const price = document.createElement('p');
    price.classList.add('card-text');
    price.innerHTML = `<strong>Precio:</strong> $${product.price}`;

    const stock = document.createElement('p');
    stock.classList.add('card-text');
    stock.innerHTML = `<strong>Stock:</strong> ${product.stock > 0 ? product.stock : 'Agotado'}`;

    cardBody.append(title, description, genre, price, stock);

    if (isLoggedIn) {
        const quantityContainer = document.createElement('div');
        quantityContainer.classList.add('d-flex', 'align-items-center', 'mb-3');

        const decrementButton = document.createElement('button');
        decrementButton.classList.add('btn', 'btn-outline-secondary', 'me-2');
        decrementButton.id = 'decrementButton';
        decrementButton.textContent = '-';

        const quantityDisplay = document.createElement('span');
        quantityDisplay.classList.add('me-2');
        quantityDisplay.id = 'quantityDisplay';
        quantityDisplay.textContent = '1';

        const incrementButton = document.createElement('button');
        incrementButton.classList.add('btn', 'btn-outline-secondary');
        incrementButton.id = 'incrementButton';
        incrementButton.textContent = '+';

        quantityContainer.append(decrementButton, quantityDisplay, incrementButton);

        const buyButton = document.createElement('button');
        buyButton.classList.add('btn', 'btn-primary');
        buyButton.id = 'buyButton';
        buyButton.textContent = 'Comprar';

        cardBody.append(quantityContainer, buyButton);
    } else {
        const loginButton = document.createElement('button');
        loginButton.classList.add('btn', 'btn-secondary');
        loginButton.setAttribute('onclick', "alert('Inicia sesión para comprar')");
        loginButton.textContent = 'Inicia sesión para comprar';

        cardBody.append(loginButton);
    }

    card.append(img, cardBody);
    productContainer.append(card);

    if (isLoggedIn) {
        let quantity = 1;
        const quantityDisplay = document.getElementById("quantityDisplay");
        const decrementButton = document.getElementById("decrementButton");
        const incrementButton = document.getElementById("incrementButton");
        const buyButton = document.getElementById("buyButton");

        incrementButton.addEventListener("click", () => {
            if (quantity < product.stock) {
                quantity++;
                quantityDisplay.innerText = quantity;
            }
        });

        decrementButton.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityDisplay.innerText = quantity;
            }
        });

        buyButton.addEventListener("click", () => {
            addItemToCart(product.id, quantity);
            alert('Producto agregado al carrito');
        });
    }
} else {
    document.getElementById('carContainer').innerHTML = '<p>Producto no encontrado.</p>';
}

function addItemToCart(productId, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartQuantity();
}

function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem("quantity", totalQuantity);
    const quantityTag = document.querySelector("#quantity");
    if (quantityTag) {
        quantityTag.innerText = totalQuantity;
    }
}
