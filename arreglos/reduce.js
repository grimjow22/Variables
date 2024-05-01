const equipo7 = [{nombre:`Naruto`, chakra: `5000`},
{nombre:`Sasuke`, chakra: `4500`},
{nombre:`Sakura`, chakra: `500`},
{nombre:`Kakashi`, chakra: `9500`}];
const chakra = equipo7.reduce((acumulador, ninja) => acumulador + ninja.chakra, 0);
console.log(chakra);