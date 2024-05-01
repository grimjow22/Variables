// Ternarios
const villanos =[`Shigaraki`,`Toga`,`Dabi`]
villanos.push(`Kurogiri`);
villanos.splice(villanos.indexOf(`Dabi`),1);
const nuevoequipo=villanos.map((villano) => villano === `Toga` ? `SRA. ${villano}`: `Sra ${villano}`);
console.log(nuevoequipo);