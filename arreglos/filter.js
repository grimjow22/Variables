const piratas = [{ nombre:`Luffy`,recompensa: 1000000},
{ nombre:`Zoro`,recompensa: 300000},
{ nombre:`Nami`,recompensa: 400000},
{ nombre:`Ussop`,recompensa: 500000},
];
const recompensa = piratas.filter(pirata => pirata.recompensa > 10000);
console.log(recompensa);
