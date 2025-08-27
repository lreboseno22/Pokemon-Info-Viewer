import { getPokemonByName, getPokemonById, getRandomPokemonId } from "./api.mjs";
import { displayPokemon } from "./display.mjs";

document.getElementById('fetchPokemon').addEventListener('click', async () => {
    try {
        const randomId = getRandomPokemonId();
        const pokemonData = await getPokemonById(randomId) // 1-898

        displayPokemon(pokemonData);
    } catch (err){
       alert("Failed to fetch Pokemon data: " + err.message);
    }
})

document.getElementById('searchContainer').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('pokemonSearch').value.trim().toLowerCase();

    try {
        const pokemonData = await getPokemonByName(input);
        displayPokemon(pokemonData);
    } catch (err) {
        alert("Pokemon not found! Try again.")
    }
})