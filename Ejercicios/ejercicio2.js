const equipopokemon = [`Charizard`, `Pikachu`, `Bulbasaur`];
equipopokemon.splice(0,1, 'squirtle');
equipopokemon.push(`geodude`);
const proximosenluchar = equipopokemon.slice(0,2);
proximosenluchar.forEach((pokemon) => console.log(`Estos son los pokemones ${pokemon} `));