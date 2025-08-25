document.getElementById("fetchPokemon").addEventListener('click', async () =>{
    try {
        // get random pokemon from list of pokemon
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1');
        const data = await response.json();
        
        const totalPokmeon = data.count;
        const randomId = Math.floor(Math.random() * totalPokmeon) + 1; // random number to associate with pokemon id 1 - totalPokemonCount
        console.log(randomId);
    } catch (err){
        alert(err.message);
    }
})