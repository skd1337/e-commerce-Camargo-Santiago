const cars = [
    {
        title: "Volkswagen",
        description: "La marca del auto que mas se vende de segunda mano y tiene casi 300 mil kilometros.",
        image: "https://images.unsplash.com/photo-1642187653035-ca9cd17fdaa8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9nb3RpcG8lMjBkZSUyMHZvbGtzd2FnZW58ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "Fiat",
        description: "La marca del auto chiquitito que siempre lleva parlantes mas grandes que el auto en si.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UaMrM754ySbdUdUm0wzDnhgaPRzb_YflOA&s",
    },
    {
        title: "Renault",
        description: "Hicieron el Renault 12. La verdad no sé si hicieron mas autos",
        image: "https://images1.autocasion.com/actualidad/wp-content/uploads/2016/12/Qu%C3%A9-significa-el-logo-de-Renault-0.jpg",
    }
];

const carContainer = document.getElementById('carContainer');

cars.forEach(car => {
    const cardHTML = `
        <div class="col-md-4">
            <div class="card">
                <img src="${car.image}" class="card-img-top" alt="${car.title}">
                <div class="card-body">
                    <h5 class="card-title">${car.title}</h5>
                    <p class="card-text">${car.description}</p>
                    <a href="producto.html" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    `;
    carContainer.innerHTML += cardHTML;
});
