function encontrarperla(perlas, desplazamiento = 0) {
    if (perlas.length === 1) {
      return desplazamiento;
    }
  
    // Dividir el array en tres partes
    let tercio = Math.floor(perlas.length / 3);
  
    // Crear grupos de tres
    let grupo1 = perlas.slice(0, tercio);
    let grupo2 = perlas.slice(tercio, 2 * tercio);
    let grupo3 = perlas.slice(2 * tercio);
  
    // Sumar grupos
    let sumagrupo1 = grupo1.reduce((acum, val) => acum + val, 0);
    let sumagrupo2 = grupo2.reduce((acum, val) => acum + val, 0);
  
    // Comparación entre suma de grupos
    if (sumagrupo1 < sumagrupo2) {
      return encontrarperla(grupo1, desplazamiento);
    } else if (sumagrupo1 > sumagrupo2) {
      return encontrarperla(grupo2, desplazamiento + tercio);
    } else {
      return encontrarperla(grupo3, desplazamiento + 2 * tercio);
    }
  }
  
  let perlas = [2, 2, 2, 2, 2, 2, 2, 2, 1];
  perlas = perlas.sort(() => Math.random() - 0.5);
  console.log(perlas);
  let posicionperla = encontrarperla(perlas);
  console.log(`La posición de la perla es: ${posicionperla + 1}`);
  