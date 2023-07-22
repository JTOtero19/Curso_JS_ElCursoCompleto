const personaArray = ['Carlos', 27, 'correo@correo.com', true, true];

const persona = {
    nombre: 'Carlos',
    edad: 24,
    correo: 'correo@correo.com',
    suscripsiones: {
        web: true,
        correo: true,
    },
    coloresFavoritos: ['Negro', 'Rojo'],
    sauldo: function(){
        alert('Hola!');
    },
};
console.log(persona);
console.log(persona.suscripsiones.web); // true

const variable = 'correo';
console.log(persona[variable]);

// const variable = 'suscripsiones'
// console.log(persona.suscripsiones.correo)

persona.pais = 'Chile';
console.log(persona.pais);

persona.sauldo();
