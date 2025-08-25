// Capitalize first letter of Pokemon name
export function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

// Display Pokemon Info
export function displayPokemon(pokemonData) {
    document.getElementById('pokemonName').textContent = capitalize(pokemonData.name);

    document.getElementById('pokemonTypes').textContent = `Type(s): ${pokemonData.types.map(t => t.type.name).join(', ')}`;

    document.getElementById('pokemonAbilities').textContent = `Abilities: ${pokemonData.abilities.map(a => a.ability.name).join(', ')}`;

    document.getElementById('pokemonStats').textContent = `Stats: ${pokemonData.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join(', ')}`
}