/* operadores logicos
    %% AND
    || OR  
    ! NOT
*/

const nombre = 'Teo';
const edad = 17;
const tieneEntrada = true;
const tienePermiso = true;

// &&
// const permitirAcceso = edad >= 18 && tieneEntrada;
// console.log('Acceso permitido al concierto: ' + permitirAcceso);

// OR
// const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada);
// console.log('Acceso permitido: ' + permitirAcceso);

// ! NOT
const variable = true;
console.log(!variable);

!tieneEntrada // si no tiene entrada