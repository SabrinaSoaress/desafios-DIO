/*Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um Herói, 
 depois utilize uma estrutura de decisão para apresentar alguma das mensagens Abaixo:
  - Se XP for menor do que 1000 = Ferro;
  - Se XP for entre  1001 e 2000 = Bronze;
  - Se XP for entre  2001 e 5000 = Prata; 
  - Se XP for entre  5001 e 6000 = Ouro;
  - Se XP for entre  6001 e 7000 = Platina;
  - Se XP for entre  7001 e 8000 = Diamante;
  - Se XP for entre  8001 e 9000 = Ascendente;
  - Se XP for entre  9001 e 10000 = Imortal;

  ao Final deve se exibir uma mensagem:
  "o Herói de nome (NOME) está no nível de (nivel)"
*/

let nome = "Jinx";
let xp = 12000;
let nivel;

if (xp < 1000) {
  nivel = "Fero"
}
else if (xp <= 2000 ) {
  nivel = "Bronze"
}
else if (xp <= 5000) {
  nivel = "Prata"
}
else if (xp <= 6000) {
  nivel = "Ouro"
}
else if (xp <= 7000) {
  nivel = "Platina"
}
else if (xp <= 8000) {
  nivel = "Diamante"
}
else if (xp <= 9000) {
    nivel = "Ascendente"
}
else {
    nivel = "Imortal"
}


console.log("O Herói  " + nome + " está no nível " + nivel);