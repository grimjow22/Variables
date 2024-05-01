const shinobi = ['Naruto', 'Sasuke', 'Sakura'];
shinobi.push('Konohamaru');
shinobi.unshift('Kakashi');
const equipo1 = shinobi.slice(0, 3);
const totaletras = equipo1.reduce((acumulador, nombre) => acumulador + nombre.length, 0);
console.log('Equipo principal:', equipo1);
console.log('Reserva:', shinobi.slice(3));
console.log('Total de letras:', totaletras);
