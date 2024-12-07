// =======================Função para calcular o IMC=======================

function calcularImc(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}
console.log(calcularImc(65, 1.55));  

// =======================Função para calcular o fatorial=======================

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}
console.log(calcularFatorial(12));  

// =======================Função para converter dólares para reais=======================

function converter(valorDolar) {
    const cotacaoDolar = 5.99;
    const valorReais = valorDolar * cotacaoDolar;
    return valorReais;
}
console.log(`Você tem ${converter(4500)} reais`);  

// =======================Função para converter reais para dólares=======================

function converterParaDolar(valorReais) {
    const cotacaoDolar = 5.99;
    const valorDolar = valorReais / cotacaoDolar;
    return valorDolar;
}
console.log(`Você tem ${converterParaDolar(45000)} dólares`); 

// =======================Função para calcular a área e o perímetro de uma sala Retangular=======================
function calcularAreaRetangular(altura, largura) {
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    console.log(`A área da sala é: ${area} metros quadrados.`);
    console.log(`O perímetro da sala é: ${perimetro} metros.`);
}
calcularAreaRetangular(5, 3);

// =======================Função para calcular a área e o perímetro de uma sala Circular=======================

function calcularAreaCircular(raio) {
    const pi = 3.14;
    const areaCircular = pi * Math.pow(raio,2);
    const perimetroCircular = 2* pi * raio;
    console.log(`Área da sala circular: ${areaCircular}`);
    console.log(`Perímetro da sala circular: ${perimetroCircular}`);
}
calcularAreaCircular(5);

// =======================Função para calcular a Tabuada de um número=======================

function calcularTabuada(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
calcularTabuada(2);

// =======================OPERAÇÕES BÁSICAS=======================

let numero1 = 6;
let numero2 = 3;

console.log(`a subtração do número ${numero1} e do número ${numero2} é ${numero1 - numero2}`);
console.log(`a soma do número ${numero1} e do número ${numero2} é ${numero1 + numero2}`);
console.log(`a divisão do número ${numero1} e do número ${numero2} é ${numero1 / numero2}`);
console.log(`a multiplicação do número ${numero1} e do número ${numero2} é ${numero1 * numero2}`);

// =======================Desafio de Par ou Ímpar=======================

function ParOuImpar(numero) {
    if (numero % 2 !== 0) {
        console.log('O seu número é Ímpar');
    } else {
        console.log('O seu número é Par');
    }
}
ParOuImpar(5);

// =======================Estrutura de Repetição=======================

for (let i = 20; i <=30; i++) {
    console.log(i);
}