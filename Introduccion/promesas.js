const promesa = new Promise((resolve, reject) => {
    // Accion que se ejecutara
    setTimeout(() => {
      const exito = false;

      if(exito){
          resolve('La operacion tuvo exito');
      } else {
          reject('La operacion fue un fracaso');
      }
    }, 4000);
});

// Le digo que se quede atento a la respuesta
// Se ejecutara cuando la promesa tenga exito
promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
  alert(mensaje);
});
