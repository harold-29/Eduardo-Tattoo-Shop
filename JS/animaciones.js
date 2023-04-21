window.sr = ScrollReveal();

let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

if (viewportWidth > 930) {
    sr.reveal(".card-design",{
        duration: 2000,
        origin: "top",
        distance: "-50px",
        delay: 500
    }) 
}


