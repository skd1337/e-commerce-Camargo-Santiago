function cargarNavbar() {
    const email = localStorage.getItem("email");
    const cartQuantity = localStorage.getItem("quantity") || "0";

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
                    Generos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Accion</a></li>
                    <li><a class="dropdown-item" href="#">Comedia</a></li>
                    <li><a class="dropdown-item" href="#">Humor</a></li>
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
}

function closeSession() {
    localStorage.clear();
    location.href = "/paginas/index.html";
}

document.addEventListener('DOMContentLoaded', cargarNavbar);
