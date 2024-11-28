let peso = 54;
let altura = 1.56;
const imc = peso /Math.pow(altura, 2);

console.log('seu IMC é de ' + imc);

if (imc < 18.5) {
    console.log ('Você está ABAIXO do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log ('Você está no seu PESO NORMAL');
} else if (imc >= 25 && imc <= 30) {
    console.log ('Você está ACIMA do peso');
} else if (imc >= 30 && imc <= 40) {
    console.log ('Você está MUITO ACIMA do peso OBESIDADE');
}  else {
    console.log ('Você está EXTREMAMENTE ACIMA do peso, OBESIDADE GRAVE');
}

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc () {
        const imc = this.valorImc();

        if(imc <18.5 ) {
            return 'Você está ABAIXO do peso';
        }else if (imc >= 18.5 && imc <= 25) {
           return 'Você está no seu PESO NORMAL';

        } else if (imc >= 25 && imc <= 30) {
            return 'Você está ACIMA do peso';

        } else if (imc >= 30 && imc <= 40) {
            return 'Você está MUITO ACIMA do peso OBESIDADE';

        }  else {
            return 'Você está EXTREMAMENTE ACIMA do peso, OBESIDADE GRAVE';
        }
    }
};

const jose = new Pessoa ('José', 10, 1.75);
 console.log(jose.valorImc(), jose.classificarImc());

const sabrina = new Pessoa('sabrina', 54, 1.56);
 console.log(sabrina.valorImc(), sabrina.classificarImc());

const guilherme = new Pessoa('Guilherme', 150, 1.70);
console.log(guilherme.valorImc(), guilherme.classificarImc());
