let intento = 1
function atraparpokemon(){
    const resultado = Math.floor(Math.random()*10)+1
    if (resultado === 1){
        console.log(`atrapaste el pokemon en el intento ${intento}`);
        return;
    } else {
        console.log(`no lo atrapaste en el intento ${intento}`);
        intento++;
        atraparpokemon();
    }
}
atraparpokemon();