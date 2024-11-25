const isNoAuthRedirectHome = () => {
    if (!localStorage.getItem("email")) {
        location.href = "/paginas/index.html";
    }
};
