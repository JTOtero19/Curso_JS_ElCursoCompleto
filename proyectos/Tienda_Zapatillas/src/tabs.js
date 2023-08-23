export default class Tabs {
  // Para ejecutar este codigo hay que hacer una instancia de la clase.
  constructor(idElemento){
    // Queremos tener acceso a los tabs
    // Queremos definir una propiedad, se usa this, aqui guardaremos el elemento completo
    this.tabs = document.getElementById(idElemento);
    // Aqui guardaremos el menu de navegacion
    this.nav = this.tabs.querySelector('.tabs');

    //Agregar eventlistener a todo el menu de navegacion
    this.nav.addEventListener('click', (e) => {
      // De esta forma lo transformamos en un array que contiene las clases
      if ([...e.target.classList].includes('tabs__button')){
        // Obetenmos la tab
        const tab = e.target.dataset.tab;
      };
    });
  }
};
