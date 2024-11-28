// um objeto é uma estrutura dinâmica de { coleção de chave: valor};
// Class é um definição do que deveria ser e uma INSTANCIA é uma ocorrência de uma class

class Pessoa {
    nome;
    idade;
    anoNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} tenho ${this.idade} anos, eu nasci no ano de ${this.anoNascimento}!`);
    }
};

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`o ${p1.nome} é mais velho do que a ${p2.nome}`);

    } else if(p2.idade > p1.idade) {
        console.log(`a ${p2.nome} é mais velha do que o ${p1.nome}`);
    } else {
        console.log(`a ${p2.nome} e o ${p1.nome} são da mesma idade!`);
    }
}


const guilherme = new Pessoa('guilherme', 25);
const sabrina = new Pessoa('sabrina', 24);

compararPessoas(guilherme, sabrina);


// acrescentar / substituir
// sabrina['nome'] = 'teste'; /*dinâmico*/
// sabrina.nome = 'teste'; /*acesso direto*/