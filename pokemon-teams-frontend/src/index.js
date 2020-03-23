const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main');


document.addEventListener('DOMContentLoaded',() => {
    getAllTrainers();
})

function getAllTrainers() {
    fetch(TRAINERS_URL)
        .then(res => res.json())
        .then(trainers => showTrainer(trainers))
}

function showTrainer(trainers) {
    trainers.map(trainer => renderTrainer(trainer));
}

function renderTrainer(trainer) {        
    let div = document.createElement('div');
    div.setAttribute('class', 'card');
    div.setAttribute('data-id', trainer.id);    
    let pTag = document.createElement('p');
    pTag.innerText = `${trainer.name}`
    div.append(pTag);
    main.append(div);
    trainer.pokemons.forEach(pokemon => renderPokemon(pokemon))
}

function renderPokemon(pokemon) {
    let trainerDiv = document.querySelector(`[data-id="${pokemon.trainer_id}"]`)
    let ul = document.createElement('ul');
    trainerDiv.append(ul);
    let li = document.createElement('li');
    li.innerText = `${pokemon.nickname} (${pokemon.species})`
    ul.append(li);
}







// function getAllPokemon() {
//     fetch(POKEMONS_URL)
//         .then(res => res.json())
//         .then(pokemons => showPokemon(pokemons))
// }

// function showPokemon(pokemons) {
//     console.log(pokemons)
//     pokemons.map(pokemon => renderPokemon(pokemon));
// }

// function renderPokemon(pokemon) {        
//     let ul = document.createElement('ul');
//     div.append(ul);
//     let li = document.createElement('li');
// }



/*
<div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div>
*/