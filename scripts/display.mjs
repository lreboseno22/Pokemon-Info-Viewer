// Capitalize first letter of Pokemon name
export function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

// Display Pokemon Info
export function displayPokemon(pokemonData) {
    document.getElementById('pokemonName').textContent = capitalize(pokemonData.name);

    // make type badges for styling
    const typesHtml = pokemonData.types.map( t=> `<span class="type type-${t.type.name}">${t.type.name}</span>`).join(" ");
    document.getElementById('pokemonTypes').innerHTML = `<strong>Type(s):</strong> ${typesHtml}`;

    // style ablitites
    const abilitiesHtml = pokemonData.abilities.map( a => `<span class="ability">${a.ability.name}</span>`).join(" ");
    document.getElementById('pokemonAbilities').innerHTML = `<strong>Abilities:</strong> ${abilitiesHtml}`;

    // better style stats
    const statsHtml = pokemonData.stats.map( s => `<div class="stat"> <span class="stat-name">${capitalize(s.stat.name)}</span> <span class="stat-value">${s.base_stat}</span> </div>`).join("");
    document.getElementById('pokemonStats').innerHTML = `<div class="stats-label">Stats:</div> <div class="stats-list">${statsHtml}</div>`;

    document.getElementById('pokemonSprite').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`;
    document.getElementById('pokemonSprite').alt = pokemonData.name;

    // play pokemon sound
}