const galeria = document.getElementById('galeria');
const carousel = (direccion) => {
  const observer = new IntersectionObserver((entradas) => {
    console.log(entradas);
  });

  const slides = galeria.querySelectorAll('.galeria__carousel-slide');
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
