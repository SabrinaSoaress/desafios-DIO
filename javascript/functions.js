function calcularImc (peso, altura) {
    return peso / Math.pow(altura, 2);
}

function clasificarImc(imc) {
    if (imc < 18.5) {
        return 'Você está ABAIXO do peso';
    } else if (imc >= 18.5 && imc <= 25) {
        return 'Você está no seu PESO NORMAL';
    } else if (imc >= 25 && imc <= 30) {
        return 'Você está ACIMA do peso';
    } else if (imc >= 30 && imc <= 40) {
        return 'Você está MUITO ACIMA do peso OBESIDADE';
    }  else {
        return 'Você está EXTREMAMENTE ACIMA do peso, OBESIDADE GRAVE';
    }
}

function main (){
    
    let peso = 54;
    let altura = 1.56;

    const imc = calcularImc(peso, altura);
    console.log(clasificarImc(imc));
}

main();

function escrevaMeuNome(nome) {
    return 'meu nome é ' + nome;
}

function verificarIdade(idade) {
    if(idade >= 18) {
        console.log (escrevaMeuNome('sabrina') + ' é maior de idade');
    } else {
        console.log (escrevaMeuNome('bibina') + ' é menor de idade');
    }
}

verificarIdade(19);
verificarIdade(10);


// formas de pagamento : 1 debito; 2 dinheiro; 3 cartão; 

function aplicarDeconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 3;

if(formaDePagamento === 1) {
    console.log(aplicarDeconto(precoEtiqueta, 10));
}else if (formaDePagamento === 2) {
    console.log(aplicarDeconto(precoEtiqueta, 15));
}else if (formaDePagamento === 3) {
    console.log(aplicarJuros(precoEtiqueta, 10));
}else {
    console.log(aplicarDeconto(precoEtiqueta));
}