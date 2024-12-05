// ======================= EXERCÍCIO 1 =======================
console.log('BEM VINDOOO!! ');

let nome = "Sabrina";
console.log(`Olá ${nome}!`);
alert(`Minha querida ${nome} você é maravilhosa, talentosa e vai ser uma ótima DEV`);

// ======================= EXERCÍCIO 2 =======================
let Linguagem = prompt('Qual é a sua linguagem de programação Favorita');
console.log(`A sua linguagem é a ${Linguagem}`);

// ======================= EXERCÍCIO 3 =======================
let valor1 = 17;
let valor2 = 12;
let somaValores = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${somaValores}`);

// ======================= EXERCÍCIO 4 =======================
let idadeUsuario = prompt('Qual é a sua idade?');
if (idadeUsuario < 18) {
    console.log("MUITO NOVO");
} else {
    console.log("MAIOR DE IDADEEE");
}

// ======================= EXERCÍCIO 5 =======================
let numeroEscolhido = prompt('Escolha um numero');
if (numeroEscolhido < 0) {
    console.log('Número NEGATIVO');
} else if (numeroEscolhido > 0) {
    console.log('Número POSITIVO');
} else {
    console.log('ZERO é Zero né 000');
}

// ======================= EXERCÍCIO 6 =======================
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

// ======================= EXERCÍCIO 7 =======================
let notaAluno = 4;
if (notaAluno < 5) {
    console.log('Você REPROVOU!!');
} else if (notaAluno > 5) {
    console.log('Você passou!!');
} else {
    console.log('Passou? Passou, mas não se orgulhe MEDIANA');
}

// ======================= EXERCÍCIO 8 =======================
let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
console.log(numeroAleatorio);

// ======================= EXERCÍCIO 9 =======================
document.querySelector('h1').textContent = 'Hora do Desafio';

// ======================= EXERCÍCIO 10 =======================
document.querySelector('#consoleButton').addEventListener('click', function() {
    console.log('O botão foi clicado');
});

// ======================= EXERCÍCIO 11 =======================
document.querySelector('button').addEventListener('click', function() {
    alert('EU AMO JS');
});

// ======================= EXERCÍCIO 12 =======================
document.querySelector('button').addEventListener('click', function () {
    let cidadeUsuario = prompt('Qual cidade você mora?');
    alert(`Estive em ${cidadeUsuario} e lembrei de você!!`);
});

// ======================= EXERCÍCIO 13 =======================
document.querySelector('button').addEventListener('click', function(){
    let number1 = prompt('Escolha um numero Inteiro');
    let num1 = parseInt(number1);
    let number2 = prompt('Escolha outro numero Inteiro');
    let num2 = parseInt(number2);
    let somaNumeros = num1 + num2;
    alert(`A soma do ${num1} e do ${num2} é de ${somaNumeros}`);
});

// ======================= EXERCÍCIO 14 =======================
function mensagem() {
    console.log('Olá mundo');
};
mensagem();

// ======================= EXERCÍCIO 15 =======================
function mensagemComNome(nome) {
    console.log(nome);
}
mensagemComNome('Sabrina');

// ======================= EXERCÍCIO 16 =======================
function dobrarNumero(numero) {
    console.log(numero * 2);
}
dobrarNumero(12);

// ======================= EXERCÍCIO 17 =======================
function calcularMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    return media;
}

const mediaResultado = calcularMedia(10, 2, 8);
console.log("A média é: " + mediaResultado);

// ======================= EXERCÍCIO 18 =======================
function calcularMaiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
const maiorNumero = calcularMaiorNumero(21, 9);
console.log(`O maior número é o: ${maiorNumero}`);

// ======================= EXERCÍCIO 19 =======================
function calcularMenorNumero(numero1, numero2) {
    if (numero1 < numero2) {
        return numero1;
    } else {
        return numero2;
    }
};
const menorNumero = calcularMenorNumero(10, 6);
console.log(`O menor número é o ${menorNumero}`);

// ======================= EXERCÍCIO 20 =======================
function multiplicarNumero(numero) {
    const multiplicado = numero * numero;
    return multiplicado;
}
const resultadoMultiplicacao = multiplicarNumero(5); 
console.log(`O seu número multiplicado por ele mesmo: ${resultadoMultiplicacao}`);
