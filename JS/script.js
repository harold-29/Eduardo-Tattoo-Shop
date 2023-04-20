const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const miModal = new bootstrap.Modal(document.getElementById("miModal"));

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
  apellidos: /^[a-zA-ZÀ-ÿ\s]/, // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  nombre: false,
  apellidos: false,
  correo: false,
  telefono: false,
};

// Función que envia los parámetros correctos a la función validar campo segun el name del target
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;

    case "apellidos":
      validarCampo(expresiones.apellidos, e.target, "apellidos");
      break;

    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");

      break;

    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");

      break;
  }
};

// Función que valida si el campo cumple con los requisitos correspondientes
const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-circle-xmark");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-circle-check");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error `)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-circle-check");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-circle-xmark");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error `)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

// Para cada input ejecuta la función validar el formulario
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

// Función para verficar el envio de manera correcta y afectar el html con los mensajes correctos
formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("boton_enviar").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Procesando...';
  document.getElementById("boton_enviar").disabled = true;

  setTimeout(() => {
    document.getElementById("boton_enviar").innerHTML = "Enviar";
    document.getElementById("boton_enviar").disabled = false;
  }, 3000);

  if (campos.nombre && campos.apellidos && campos.correo && campos.telefono) {
    // Mostrar el mensaje de datos enviados

    setTimeout(() => {
      miModal.show();
    }, 3000);

    //   Ocultar los iconos de correcto

    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((icono) => {
        icono.classList.remove("formulario__grupo-correcto");
      });
    //   Ocultar el mensaje de error
    document
      .getElementById("formulario__mensaje")
      .classList.remove("formulario__mensaje-exito-activo");
    //   Colocar los espacios en blanco
    formulario.reset();
  } else {

    setTimeout(() => {
      document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-exito-activo");
    }, 3000);

  }
});
