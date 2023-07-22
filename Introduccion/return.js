const operacion = (tipo, a, b) => {

    if (tipo === 'suma') {
        return a + b
    } else if (tipo === 'resta') {
        return a - b
    }
};

const miVariable = operacion ('suma', 100, 9);
console.log(miVariable);