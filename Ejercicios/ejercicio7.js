const jujutsu = [ `Panda`, `Nobara`, `Yuta`]
//Estan peleando en shibuya y Nanami se quiere unir a ayudar
jujutsu.push(`Nanami`);
// En eso llega Satoru y se dispone a lideral al equipo asi que se agrega al inicio 
jujutsu.unshift(`Satoru Gojo`)
//Nanami y Yuta se cansan asi que gojo los manda a descansar
const equipofuerte = jujutsu.slice(0, 3);
// Quiero contar las letras de todo el equipo de fuertes
const totaletras = equipofuerte.reduce((acumulador, nombre) => acumulador + nombre.length, 0);
//acaba la batalla y gana el equipo fuerte
const ganadores=equipofuerte.map((ganador) => ganador === `Nobara` ? `ganadora de la batalla. ${ganador}`: `ganadores de la batalla ${ganador}`);
console.log('Los Fuertes:', equipofuerte);
console.log('Los que Descansan:', jujutsu.slice (3,5));
console.log('Total de letras:', totaletras);
console.log(ganadores);

