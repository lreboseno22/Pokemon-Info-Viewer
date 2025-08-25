// Fetch total Pokemon count
export async function getTotalPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1');
    const data = await response.json();
    return data.count;
}

// Fetch Pokemon data by ID
export async function getPokemonById(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok) throw new Error('Failed to fetch Pokemon data');
    const data = await response.json();
    return data;
}

// Random Pokemon ID
export function getRandomPokemonId(total){
    return Math.floor(Math.random() * total) + 1; // random number to associate with pokemon id 1 - totat
}