import data from "./data2.json" assert { type: 'json' };;

console.log(data)
console.log(data.games)

const gamesHtml = data.games.map((element) => {
  return `
  <section class="games-container">
    <article class="games-item">
      <div class="image-wrapper">
        <img
          src="${element.image[0]}"
          alt="" />
      </div>
      <div class="content">
        <h4>Pokémon Red</h4>
        <div class="games-info">
          <div class="year">
            <p class="score">${element.year}</p>
          </div>
          <div class="games-region">
            <span class="region">${element.region}</span>
          </div>
          <span class="games-console">${element.console}</span>
        </div>
      </div>
    </article>
  </section>
`
}).join("")

document.getElementsByClassName("games-container")[0].innerHTML = gamesHtml

document.querySelectorAll(".filter-button").forEach((buttonElement) => {
  buttonElement.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    const selectedType = e.target.textContent;
    const newGames = data.games.filter(
      (element) => element.console.includes(selectedType)
    );
    console.log(newGames)

    const newGamesHtml = newGames.map((element) => {
      return `
      <section class="games-container">
        <article class="games-item">
          <div class="image-wrapper">
            <img
              src="${element.image[0]}"
              alt="" />
          </div>
          <div class="content">
            <h4>Pokémon Red</h4>
            <div class="games-info">
              <div class="year">
                <p class="score">${element.year}</p>
              </div>
              <div class="games-region">
                <span class="region">${element.region}</span>
              </div>
              <span class="games-console">${element.console}</span>
            </div>
          </div>
        </article>
      </section>
  `
    }).join("")

    document.getElementsByClassName("games-container")[0].innerHTML = newGamesHtml
  });
});