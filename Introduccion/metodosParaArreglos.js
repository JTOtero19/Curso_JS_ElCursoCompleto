const colores = ['Rojo', 'Verde', 'Azul'];
// 
// console.log(colores.join(', '));
// document.body.innerHTML = colores.toString();

const letras = ['c', 'b', 'd', 'a'];
// console.log(letras.sort());

const array1 = [1, 2, 3];
const array2 = ['A', 'B', 'C'];
const array3 = array1.concat(array2);
// console.log(array3);

// shift
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
// const diaEliminado = dias.shift();
// console.log(diaEliminado);
// console.log(dias);

// dias.unshift('Teo');
// console.log(dias);

const amigos = ['Alejandro', 'Cesar', 'Manuel'];
amigos.splice(1, 0, 'Beto', 'Gordo');
// console.log(amigos);

const frutas = ['Melon', 'Frutillas', 'Durazno', 'Mango', 'Pomelo'];
const frutasFav = frutas.slice(2, 4);
console.log(frutasFav);