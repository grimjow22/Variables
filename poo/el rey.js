function encontrarPerlaDefectuosaConPruebas(perlas, paso = 1) {
    const n = perlas.length;
    if (n === 1) {
      console.log(`Paso ${paso}: La perla defectuosa es la perla ${perlas[0]}`);
      return perlas[0];
    }
    const groupSize = Math.floor(n / 3);
    const grupo1 = perlas.slice(0, groupSize);
    const grupo2 = perlas.slice(groupSize, 2 * groupSize);
    const grupo3 = perlas.slice(2 * groupSize);
    const resultado1 = compararGrupos(grupo1, grupo2);
    console.log(`Paso ${paso}: Pesada ${resultado1 === 0 ? "equilibrada" : resultado1 > 0 ? "a la derecha" : "a la izquierda"}`);
    if (resultado1 === 0) {
      return encontrarPerlaDefectuosaConPruebas(grupo3, paso + 1);
    } else if (resultado1 > 0) {
      return encontrarPerlaDefectuosaConPruebas(grupo1, paso + 1);
    } else {
      return encontrarPerlaDefectuosaConPruebas(grupo2, paso + 1);
    }
  }
  function compararGrupos(grupo1, grupo2) {
    return grupo1.length - grupo2.length;
  }
  const perlas = [1, 1, 1, 1, 1, 1, 1, 1, 2]; 
  const perlaDefectuosa = encontrarPerlaDefectuosaConPruebas(perlas);
  console.log("La perla defectuosa es: " + perlaDefectuosa);
  