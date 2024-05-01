const luchadores = [ `Goku`, `Vegeta`, `Krillin`];
luchadores.push(`Piccolo`, `Tien`);
luchadores.unshift(`Yamcha`);
luchadores.splice(3,1);
luchadores.forEach((peleadores) => console.log(`Estos son los luchadores ${peleadores} `));

