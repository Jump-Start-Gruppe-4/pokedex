

//Imported Code
const pokemonContainer = document.querySelector(".pokemon-container");
const formEl = document.querySelector("form");
const inputEl = document.querySelector("input[type=text]");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  pokemonContainer.innerHTML = "";
  getPokemon(inputEl.value);
});

async function getPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await res.json();


  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  pokemonEl.innerHTML = `
    <div class="info">
      <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" width="200">
<h2>${pokemon.name}</h2>
<h3>Type       ${pokemon.types.map((type) => type.type.name).join(', ')}</h3>
<h3>Abilities: ${pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</h3>

<div class="stats">${pokemon.stats.map((stat) => {
    return `<p>${stat.stat.name}: ${stat.base_stat}</p>`;}).join("")}</div>
`;




pokemonContainer.appendChild(pokemonEl);
}

getPokemon();

