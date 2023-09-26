import cargarTitulos from "./cargarTitulos";
import fetchPopulares from "./fetchPopulares";

require('dotenv').config();

const cargar = async () => {
  const resultados = await fetchPopulares();
  cargarTitulos(resultados);
};
cargar();
// Ahora si tengo todas las peliculas
