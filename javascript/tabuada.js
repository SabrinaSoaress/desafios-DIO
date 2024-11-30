 1//Crie um programa que peça um numero e exiba a tabuada;

const numero = 2;

for (let tabuada = 1; tabuada <=10; tabuada++ ) {
    console.log(tabuada * numero);
}

//  2 //Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero PAR encontrado;

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < numeros.length; i++) {
    const numeroPar = numeros[i];
    if(numeroPar % 2 === 0)
    console.log(numeroPar);
}