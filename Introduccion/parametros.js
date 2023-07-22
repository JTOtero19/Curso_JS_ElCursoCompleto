const saludo = (nombre = 'Amigo') => { // poniendo un = con una variable le decimos que esa sera la orden por defecto
    console.log(`Hola ${nombre}!`);
};

saludo('Teo');
saludo('Carlos');
saludo('Messi');
saludo(); // Este saldra undefined ya que no le estoy pasando ningun nombre

// Multiples parametros
const operacion = (tipo, a, b) => {
    // console.log(a + b);
    if(tipo === 'suma') {
        console.log(a + b);
    } else if(tipo === 'resta') {
        console.log(a - b);
    }
};

operacion('suma', 10, 9);
operacion('resta', 10, 9)