const nombre = document.getElementById("nameInput");
const apellido = document.getElementById("surnameInput");
const correo = document.getElementById("emailInput");
const celular = document.getElementById("cellInput");
const fecha = document.getElementById("dateInput");
const invitados = document.getElementById("numInput");
const zona = document.getElementById("zoneInput");
const lugar = document.getElementById("placeInput");
const contanos = document.getElementById("FormControlTextarea");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let condicion = validacionForm();
    if (condicion) {
        enviarFormulario();
    }
})

function validacionForm() {
    form.lastElementChild.innerHTML = "";
    let condicion = true;
    listInputs.forEach((element) => {
        element.lastElementChild.innerHTML = "";
    });

    if (nombre.value.length < 1 || nombre.value.trim() == "") {
        mostrarMensajeError("nameInput", "Nombre no vélido*");
        condicion = false;
    }
    if (apellido.value.length < 1 || apellido.value.trim() == "") {
        mostrarMensajeError("surnameInput", "Apellido no válido*");
        condicion = false;
    }
    if (correo.value.length < 1 || correo.value.trim() == "") {
        mostrarMensajeError("emailInput", "Correo no válido*");
        condicion = false;
    }
    if (celular.value.length != 10 || celular.value.trim() == "" || isNaN(celular.value)) {
        mostrarMensajeError("cellInput", "Celular no válido*");
        condicion = false;
    }
    if (fecha.value.length < 1 || fecha.value.trim() == "") {
        mostrarMensajeError("dateInput", "Fecha no válida*");
        condicion = false;
    }
    if (invitados.value.length < 1 || invitados.value.trim() == "") {
        mostrarMensajeError("numInput", "Número de invitados no válido*");
        condicion = false;
    }
    if (zona.value.length < 1 || zona.value.trim() == "") {
        mostrarMensajeError("zoneInput", "Zona no válida*");
        condicion = false;
    }
    if (lugar.value == 0 || lugar.value.trim() == "") {
        mostrarMensajeError("placeInput", "Opción no válida*");
        condicion = false;
    }
    if (contanos.value == 0 || contanos.value.trim() == "") {
        mostrarMensajeError("FormControlTextarea", "Danos una pista sobre tus preferencias*");
        condicion = false;
    }
    return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
    form.reset();
    form.lastElementChild.innerHTML = "Datos cargados con éxito!!";
  }