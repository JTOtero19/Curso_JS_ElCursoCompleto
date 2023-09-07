// Fecha actual
const fechaActual = new Date();
// console.log(fechaActual);

const cumpleanios = new Date('1999-04-09T09:00:00');
// console.log(cumpleanios);

// Metodos para trabajar con fechas y transformarla en cadena de texto
fechaActual.toString();

// Obtener solo la fecha, dia, mes y anio
fechaActual.toDateString();

// Obtener el tiempo
fechaActual.toTimeString();

// Quiero obtener el mes
cumpleanios.getMonth();

// Quiero obtener el dia
cumpleanios.getDay();

// Quiero obtener el anio
cumpleanios.getFullYear();

// Quiero obtener la hora
cumpleanios.getHours();

// Quiero obtener los minutos
cumpleanios.getMinutes();

// Quiero obtener los segundos
cumpleanios.getSeconds();

// Quiero obtener los milisegundos
cumpleanios.getMilliseconds();

// Quiero obtener el tiempo en milisegundos
cumpleanios.getTime();
