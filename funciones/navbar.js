function cargarNavbar() {
    const email = localStorage.getItem("email");
    const cartQuantity = localStorage.getItem("quantity") || "0";

    const genres = ["Acción", "Comedia", "Humor", "Ciencia Ficción", "Drama"];
    const genresHTML = genres.map(genre => `
        <li><a class="dropdown-item" href="#" data-genre="${genre}">${genre}</a></li>
    `).join("");

    const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/paginas/index.html">PelisPelis</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/paginas/index.html">Inicio</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Géneros
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    ${genresHTML}
                </ul>
            </li>
        </ul>
        <ul class="navbar-nav session">
            ${email 
                ? `<li>Hola, ${email}</li><span>|</span><li onclick="closeSession()">Cerrar sesión</li>` 
                : `<li><a class="nav-link" href="/paginas/login.html">Iniciar sesión</a></li>`
            }
            <span>|</span>
            <li>
                <a href="/paginas/cart.html">
                    <img height="25" src="/multimedia/cart.png" alt="Carrito" />
                    <b id="quantity">${cartQuantity}</b>
                </a>
            </li>
        </ul>
    </div>
</nav>`;

    document.getElementById("navbar").innerHTML = navbarHTML;

    const genreLinks = document.querySelectorAll('[data-genre]');
    genreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const genre = event.target.getAttribute('data-genre');
            filterMoviesByGenre(genre);
        });
    });
}

function closeSession() {
    localStorage.clear();
    location.href = "/paginas/index.html";
}

function filterMoviesByGenre(genre) {
    const filteredMovies = moviesData.filter(movie => movie.genre.toLowerCase().includes(genre.toLowerCase()));
    displayMovies(filteredMovies);
}

function displayMovies(movies) {
    const container = document.getElementById('carContainer');
    
    if (!container) {
        console.error("No se encuentra el contenedor para mostrar las películas.");
        return;
    }

    container.innerHTML = '';

    if (movies.length === 0) {
        container.innerHTML = '<p>No se encontraron películas en este género.</p>';
    } else {
        movies.forEach(movie => {
            const card = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.description}</p>
                            <p class="card-text"><strong>Género:</strong> ${movie.genre}</p>
                            <p class="card-text"><strong>Precio:</strong> $${movie.price}</p>
                            <a href="producto.html?prod=${movie.id}" class="btn btn-primary">Ver Más</a>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }
}

document.addEventListener('DOMContentLoaded', cargarNavbar);
