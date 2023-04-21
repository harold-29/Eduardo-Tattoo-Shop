
const video = document.getElementById('video');

video.volume = 0.1;

const options = {
  threshold: 0.5 // Define el porcentaje de visibilidad del elemento en el viewport
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play(); // Reproducir el video si está visible en el viewport

    } else {
      video.pause(); // Pausar el video si no está visible en el viewport
    }
  });
}, options);

observer.observe(video); // Observar el elemento de video


