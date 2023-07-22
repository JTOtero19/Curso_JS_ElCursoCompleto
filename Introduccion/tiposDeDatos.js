// cadena de texto
const nombre = 'Teo';
const parrafo = "Este es un 'parrafo'";

// numero
const numero = 4;
const numero2 = -4.2;

// booleano
const usuarioConectado = true;
const mayorQue = 10 > 2;

// array
const array = [1, 10, 5, 'texto', true, {propiedad: 'valor'}, [1, 2, 3]];


// objeto
const perro = {
    nombre: 'Teo', 
    edad: 1.6, 
    raza: {
        nombreRaza: 'Salchicha',
        descripcion: 'Perros muy largos',
        sexo: 'Masculino',
    },
};
console.log(perro.raza.sexo);

// funcion
function hola() {
    console.log('Hola');
};
hola();

// null
// normalmente lo usamos cuando queremos especificar que un valor sea nulo
const miVariable = null;

// undefined
// undefined se usa para indicarnos que un valor no esta definido
const miVariable2 = undefined;