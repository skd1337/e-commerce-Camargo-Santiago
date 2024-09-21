class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const card = new Producto(
    "Gol Volkswagen 2005",
    "Auto fachero, económico y clásico. ¿Qué más querés?",
    "$1,380,000",
    "¿Cuántos querés?",
    "https://blog.olhonocarro.com.br/wp-content/uploads/2023/09/volkswagen-gol-2005-prateado-diagonal-direita.png"
);

let main = document.querySelector("main");

main.innerHTML = `
    <div class="card" style="display: flex; width: 20rem;">
        <img src="${card.imagen}" class="card-img-top" alt="${card.titulo}">
        <div class="card-body">
            <h5 class="card-title">${card.titulo}</h5>
            <p class="card-text">${card.detalle}</p>
            <p><strong>Precio:</strong> ${card.precio}</p>
            <p><strong>Stock:</strong> ${card.stock}</p>
        </div>
    </div>
`;
