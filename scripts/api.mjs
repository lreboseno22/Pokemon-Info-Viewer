// Fetch Pokemon data by ID
export async function getPokemonById(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok) throw new Error('Failed to fetch Pokemon data');
    const data = await response.json();
    return data;
}

// Random Pokemon ID
export function getRandomPokemonId(){
    return Math.floor(Math.random() * 898) + 1; // some pokemon in the pokemon api dont have sprites in the poke sprites api so we keep it at this number to ensure all pokemons get fetched with a sprite
}

// Fetch Pokemon by name
export async function getPokemonByName(input) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if(!response.ok)  throw new Error('Failed to fetch Pokemon data');
    return await response.json();
}