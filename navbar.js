function cargarNavbar() {
    const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">PelisPelis</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav me-auto">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
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
</nav> `;
document.getElementById("navbar").innerHTML = navbarHTML;
}
window.onload = cargarNavbar;
