function cuerdita(numero, incrementar = 2){
    let resultado = numero + incrementar;
    if (numero === 8){
        incrementar = 8;
        resultado = resultado + 6;
    }
    let saltar = `${numero} + ${incrementar} = ${resultado}`;
    console.log(`mover: ${saltar}`);
    if (numero !== 8){
        cuerdita(numero + 2, incrementar);
    }
}
cuerdita(2);
