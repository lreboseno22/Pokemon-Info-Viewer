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
    } catch (err){
        alert(err.message);
    }
})