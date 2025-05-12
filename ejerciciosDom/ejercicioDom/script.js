let parrafo = document.getElementById("parrafo");
let button = document.getElementById("submit");

const cambiarTexto = () => {
    parrafo.innerHTML = "HOLA TE CAMBIE"
}

button.addEventListener("click", cambiarTexto)

