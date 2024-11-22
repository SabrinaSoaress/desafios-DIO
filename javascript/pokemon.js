console.log("Digita o nome do seu jogador");
let nickname = "Maria mestra do Pikachu";
const notificacao = "Pokemon Go diz: ";

console.log("Bem vinda " + nickname);

let pokemons = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];
let sexoPokemon = ['M', 'M', 'M', 'F'];
let pontosVida = ['45', '50', '35', '40'];
let nivelPokemon = ['20', '20', '10', '15'];
let selecionavel = [true, false, false, false];''

console.log(nickname + " entrou no servidor");
console.log(notificacao + "tem um novo pokemon na região");
console.log(notificacao + "você foi derrotado por um líder");

console.log(" Olá" + nickname +"Seu Pokemon é o " + pokemons[0] + ", ele tem " + pontosVida + "pontos de Vida." )


// Acessando o primeiro Pokémon (índice 0)
console.log(pokemons[0]);

// Adicionando um novo Pokémon ao final do array
pokemons.push("Eevee");
console.log(pokemons); 

// Removendo o último Pokémon do array
pokemons.pop();
console.log(pokemons); 

// Alterando o nome do segundo Pokémon (índice 1)
pokemons[1] = "Ivysaur";
console.log(pokemons);
