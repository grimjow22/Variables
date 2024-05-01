const Frutas = [`Gomu Gomu`, `Mera Mera`,`Hito Hito`];
Frutas.push(`Suke Suke`);
Frutas.splice(2, 2);
const frutasFiltradas = Frutas.filter(fruta => fruta.includes("Mera"));
frutasFiltradas.forEach((fruta) => console.log(fruta));
