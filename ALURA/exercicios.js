// ======================= EXERCÍCIO 1: Boas-vindas =======================
console.log('BEM VINDOOO!! ');

// Exibe uma mensagem personalizada no console e em um alert
let nome = "Sabrina";
console.log(`Olá ${nome}!`);
alert(`Minha querida ${nome} você é maravilhosa, talentosa e vai ser uma ótima DEV`);

// ======================= EXERCÍCIO 2: Linguagem de Programação =======================
let Linguagem = prompt('Qual é a sua linguagem de programação Favorita');
// Pergunta ao usuário qual sua linguagem de programação favorita e exibe a resposta no console
console.log(`A sua linguagem é a ${Linguagem}`);

// ======================= EXERCÍCIO 3: Soma de Valores =======================
let valor1 = 17;
let valor2 = 12;
let somaValores = valor1 + valor2;
// Realiza a soma de dois valores e exibe o resultado
console.log(`A soma de ${valor1} e ${valor2} é igual a ${somaValores}`);

// ======================= EXERCÍCIO 4: Verificação de Idade =======================
let idadeUsuario = prompt('Qual é a sua idade?');
if (idadeUsuario < 18) {
    console.log("MUITO NOVO");
} else {
    console.log("MAIOR DE IDADEEE");
}
// Pergunta a idade do usuário e exibe se é maior ou menor de idade

// ======================= EXERCÍCIO 5: Número Positivo, Negativo ou Zero =======================
let numeroEscolhido = prompt('Escolha um numero');
if (numeroEscolhido < 0) {
    console.log('Número NEGATIVO');
} else if (numeroEscolhido > 0) {
    console.log('Número POSITIVO');
} else {
    console.log('ZERO é Zero né 000');
}
// Verifica se o número fornecido é negativo, positivo ou zero

// ======================= EXERCÍCIO 6: Contagem de 1 a 10 =======================
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
// Imprime os números de 1 a 10 no console utilizando um laço while

// ======================= EXERCÍCIO 7: Resultado de Nota =======================
let notaAluno = 4;
if (notaAluno < 5) {
    console.log('Você REPROVOU!!');
} else if (notaAluno > 5) {
    console.log('Você passou!!');
} else {
    console.log('Passou? Passou, mas não se orgulhe MEDIANA');
}
// Verifica a nota do aluno e exibe se ele passou ou reprovou

// ======================= EXERCÍCIO 8: Número Aleatório =======================
let numeroAleatorio = Math.floor(Math.random() * 3) + 1;
// Gera um número aleatório entre 1 e 3
console.log(numeroAleatorio);

// ======================= EXERCÍCIO 9: Alterar Texto de Elemento =======================
document.querySelector('h1').textContent = 'Hora do Desafio';
// Altera o texto de um elemento <h1> na página HTML para "Hora do Desafio"

// ======================= EXERCÍCIO 10: Click no Botão =======================
document.querySelector('#consoleButton').addEventListener('click', function() {
    console.log('O botão foi clicado');
});
// Adiciona um ouvinte de evento no botão com o id "consoleButton", que imprime uma mensagem no console ao ser clicado

// ======================= EXERCÍCIO 11: Alerta ao Clicar no Botão =======================
document.querySelector('button').addEventListener('click', function() {
    alert('EU AMO JS');
});
// Exibe um alerta dizendo "EU AMO JS" quando o botão é clicado

// ======================= EXERCÍCIO 12: Cidade do Usuário =======================
document.querySelector('button').addEventListener('click', function () {
    let cidadeUsuario = prompt('Qual cidade você mora?');
    alert(`Estive em ${cidadeUsuario} e lembrei de você!!`);
});
// Pergunta a cidade onde o usuário mora e exibe um alerta personalizado

// ======================= EXERCÍCIO 13: Soma de Dois Números =======================
document.querySelector('button').addEventListener('click', function(){
    let number1 = prompt('Escolha um numero Inteiro');
    let num1 = parseInt(number1);
    let number2 = prompt('Escolha outro numero Inteiro');
    let num2 = parseInt(number2);
    let somaNumeros = num1 + num2;
    alert(`A soma do ${num1} e do ${num2} é de ${somaNumeros}`);
});
// Pergunta ao usuário dois números inteiros e exibe a soma deles em um alerta

// ======================= EXERCÍCIO 14: Função Simples =======================
function mensagem() {
    console.log('Olá mundo');
};
mensagem();
// Função simples que imprime "Olá mundo" no console

// ======================= EXERCÍCIO 15: Função com Parâmetro (Nome) =======================
function mensagemComNome(nome) {
    console.log(nome);
}
mensagemComNome('Sabrina');
// Função que recebe um nome e imprime no console

// ======================= EXERCÍCIO 16: Função para Dobrar Número =======================
function dobrarNumero(numero) {
    console.log(numero * 2);
}
dobrarNumero(12);
// Função que recebe um número e imprime o dobro dele

// ======================= EXERCÍCIO 17: Calcular Média de 3 Números =======================
function calcularMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    return media;
}

const mediaResultado = calcularMedia(10, 2, 8);
console.log("A média é: " + mediaResultado);
// Função que calcula e retorna a média de três números

// ======================= EXERCÍCIO 18: Calcular Maior Número =======================
function calcularMaiorNumero(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}
const maiorNumero = calcularMaiorNumero(21, 9);
console.log(`O maior número é o: ${maiorNumero}`);
// Função que calcula e retorna o maior de dois números

// ======================= EXERCÍCIO 19: Calcular Menor Número =======================
function calcularMenorNumero(numero1, numero2) {
    if (numero1 < numero2) {
        return numero1;
    } else {
        return numero2;
    }
};
const menorNumero = calcularMenorNumero(10, 6);
console.log(`O menor número é o ${menorNumero}`);
// Função que calcula e retorna o menor de dois números

// ======================= EXERCÍCIO 20: Multiplicar Número por Ele Mesmo =======================
function multiplicarNumero(numero) {
    const multiplicado = numero * numero;
    return multiplicado;
}
const resultadoMultiplicacao = multiplicarNumero(5); 
console.log(`O seu número multiplicado por ele mesmo: ${resultadoMultiplicacao}`);
// Função que recebe um número e retorna o seu quadrado (número multiplicado por ele mesmo)
