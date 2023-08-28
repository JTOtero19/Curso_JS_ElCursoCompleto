const marcarPaso = (paso) => {
  document
    .querySelector(`.linea-pasos [data-paso="${paso}"] span`)
    .classList.add('linea-pasos__paso-check--cheked');
};

export default marcarPaso;
