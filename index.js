import data from "./data.json" assert { type: 'json' };;

console.log(data)
console.log(data.pokemon)

const pokemonHtml = data.pokemon.map((element) => {
  return `
  <section class="pokemon-container">
    <article class="pokemon-item">
    <div class="image-wrapper">
      <img src="${element.image}">
    </div>
    <div class="content">
      <h4>${element.pokemon}</h4>
      <div class="poke-info">
      <div class="poke-num">
        <p>${element["pokedex-num"]}?}/10</p>
        </div>
        <span class="type">${element.type}</span>
      </div>
      <p class="description">${element.description}</p>
    </div>
  </article>
</section>
  `
}).join("")

document.getElementsByClassName("pokemon-container")[0].innerHTML = pokemonHtml

document.querySelectorAll(".filter-button").forEach((buttonElement) => {
  buttonElement.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    const selectedType = e.target.textContent;
    const newPokemon = data.pokemon.filter(
      (element) => element.type.includes(selectedType)
    );
    console.log(newPokemon)

    const newPokemonHtml = newPokemon.map((element) => {
      return `
    <section class="pokemon-container">
        <article class="pokemon-item">
        <div class="image-wrapper">
         <img src="${element.image}">
        </div>
        <div class="content">
          <h4>${element.pokemon}</h4>
          <div class="poke-info">
            <div class="poke-num">
              <p>${element["pokedex-num"]}</p>
            </div>
            <span class="type">${element.type}</span>
          </div>
          <p class="description">${element.description}</p>
        </div>
      </article>
    </section>
      `
    }).join("")

    document.getElementsByClassName("pokemon-container")[0].innerHTML = newPokemonHtml
  });
});