const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  // Gerando numero aleatorio
  let id = Math.floor(Math.random() * 150) + 1;
  console.log(id);
  // Combinando URL com ID 
  const finalUrl = url + id;
  console.log(finalUrl);
  
  fetch(finalUrl)
  .then((response) => response.json())
  .  then((data) => {
    generateCard(data)
  });
}

// Gerando Card
let generateCard = (data) => {

  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stats;
}

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
