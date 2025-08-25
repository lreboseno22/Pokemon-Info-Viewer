import { getTotalPokemon, getPokemonById, getRandomPokemonId } from "./api.mjs";
import { displayPokemon } from "./display.mjs";

document.getElementById('fetchPokemon').addEventListener('click', async () => {
    try {
        const total = await getTotalPokemon();
        const randomId = getRandomPokemonId(total);
        const pokemonData = await getPokemonById(randomId)

        displayPokemon(pokemonData);
    } catch (err){
       alert("Failed to fetch Pokemon data: " + err.message);
    }
})