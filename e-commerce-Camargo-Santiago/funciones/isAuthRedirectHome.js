const isAuthRedirectHome = () => {
    if (localStorage.getItem("email")){
        location.href = "./paginas/index.html"
    }
}