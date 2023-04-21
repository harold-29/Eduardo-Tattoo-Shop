window.sr = ScrollReveal();

let viewportWidth = window.innerWidth;
// let viewportHeight = window.innerHeight;

// Ejecutar un reveal solo cuando la pantalla tenga cierto tamaño de ancho
if (viewportWidth > 930) {
  sr.reveal(".card-design", {
    duration: 2000,
    origin: "top",
    distance: "-50px",
    delay: 500,
  });
}

// Array con todos los div con esta clase donde se ubican las imágenes
let imagenes = document.querySelectorAll(".card-design ");

// para cada uno de los elementos con la clase se ejecutara una función
imagenes.forEach((img) => {

// En la cual al pasar el mouse por encima mostrar la descripción del respectivo producto
  img.addEventListener("mouseover", () => {

    let imagen =  document.querySelector(`#${img.id} .card-design_img`);

    imagen.classList.add('card-design_img-zoom');

    let descripcion = document.querySelector(`#${img.id} .descripcionImg`);
    
    descripcion.classList.add('descripcionImg-activo');

  });
// Y ocultara está descripción cuando el mouse salga 
  img.addEventListener("mouseout", () => {

    let imagen =  document.querySelector(`#${img.id} .card-design_img`);

    imagen.classList.remove('card-design_img-zoom');

    let descripcion = document.querySelector(`#${img.id} .descripcionImg`);
    
    descripcion.classList.remove('descripcionImg-activo');

  });

});
