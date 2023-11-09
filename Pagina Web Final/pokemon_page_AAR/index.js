import data from "./data.json" assert { type: 'json' };;

console.log(data)
console.log(data.pokemon)

const pokemonHtml = data.pokemon.map((element) => {
  return `
  <article class="pokemon-item">
  <div class="image-wrapper">
    <img src="${element.Images[0]}">
  </div>
  <div class="content">
    <h4>${element.Title}</h4>
    <div class="poke-info">
      <div class="poke-num">
        <p>${element.imdbRating}/10</p>
      </div>
      <span class="type">${element.Genre}</span>
    </div>
    <p class="description">${element.Plot}</p>
  </div>
</article>
  `
}).join("")

document.getElementsByClassName("pokemon-container")[0].innerHTML = filmsHtml

document.querySelectorAll(".filter-button").forEach((buttonElement) => {
  buttonElement.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    const selectedType = e.target.textContent;
    const newPokemon = data.pokemon.filter(
      (element) => element.Genre.includes(selectedType)
    );
    console.log(newPokemon)

    const newpokemonHtml = newPokemon.map((element) => {
      return `
      <article class="pokemon-item">
      <div class="image-wrapper">
        <img src="${element.Images[0]}">
      </div>
      <div class="content">
        <h4>${element.Title}</h4>
        <div class="poke-info">
          <div class="poke-num">
            <p>${element.imdbRating}/10</p>
          </div>
          <span class="type">${element.Genre}</span>
        </div>
        <p class="description">${element.Plot}</p>
      </div>
    </article>
      `
    }).join("")

    document.getElementsByClassName("pokemon-container")[0].innerHTML = newpokemonHtml
  });
});