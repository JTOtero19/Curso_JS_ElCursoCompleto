const galeria = document.getElementById('galeria');
const carousel = (direccion) => {
  const opciones = {
    root: document.querySelector('.galeria__carousel'),
    rootmargin: '0px',
    treshold: 0.9,
  }

  // callback que se ejcuta cuando la visibilidad va cambiando
  const observer = new IntersectionObserver((entradas) => {

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
    observer.unobserve(slide);
    });
  }, opciones);

  const slides = galeria.querySelectorAll('.galeria__carousel-slide');
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
