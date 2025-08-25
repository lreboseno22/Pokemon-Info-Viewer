document.getElementById("fetchPokemon").addEventListener('click', async () =>{
    try {
        // get random pokemon from list of pokemon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1');
        const data = await response.json();
        const totalPokemeon = data.count;

        const randomId = Math.floor(Math.random() * totalPokemeon) + 1; // random number to associate with pokemon id 1 - totalPokemonCount
        console.log("Random pokemon id", randomId);

        // get pokemon info based on randomId
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const pokemonData = await pokemonResponse.json();
        console.log("Pokemon data:", pokemonData);

        // display pokemon info
        document.getElementById('pokemonName').textContent = `${pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}`; 

        document.getElementById('pokemonTypes').textContent = `Type(s): ${pokemonData.types.map(t => t.type.name).join(', ')}`;

        document.getElementById('pokemonAbilities').textContent = `Abilities: ${pokemonData.abilities.map(a => a.ability.name).join(', ')}`;

        document.getElementById('pokemonStats').textContent = `Stats: ${pokemonData.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(', ') }`
    } catch (err){
        alert(err.message);
    }
})