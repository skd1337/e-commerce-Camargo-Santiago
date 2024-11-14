import { USER_LOGIN } from '../datos/loginData.js';

const submitLogin = document.querySelector("#login form");
const message = document.querySelector("#formLoginMessage");

const handleSubmitLogin = (ev) => {
  ev.preventDefault(); 
  let emailForm = ev.target.elements.email.value;
  let passwordForm = ev.target.elements.password.value;
  
  if (emailForm === USER_LOGIN.email && passwordForm === USER_LOGIN.password) {
    localStorage.setItem("email", emailForm);
    localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0");
    location.href = "../paginas/index.html";
  } else {
    message.innerText = "Por favor introduce credenciales válidas.";
  }
};

submitLogin.addEventListener("submit", handleSubmitLogin);
