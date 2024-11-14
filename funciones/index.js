import { moviesData } from '../datos/data.js';

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const clearButton = document.getElementById('clearButton');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const filteredMovies = moviesData.filter(movie =>
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
});

clearButton.addEventListener('click', () => {
    displayMovies(moviesData);
});

function displayMovies(movies) {
    const container = document.getElementById('carContainer');
    container.innerHTML = '';

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

document.addEventListener('DOMContentLoaded', () => {
    displayMovies(moviesData);
});
