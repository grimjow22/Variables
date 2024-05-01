const akatsuki = [`Itachi`, `Kisame`, `Deidara`];
akatsuki.unshift(`Tobi`);
const muerto = akatsuki.splice(1,1)
const akatsukis2 = akatsuki.map ( Mejora => `akatsuki ${Mejora}`);
akatsukis2.forEach((nombre) => console.log(`${nombre} `));