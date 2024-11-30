// alunos.shift();  Excluir o primeiro
// alunos.pop();  Excluir o ultimo
// alunos.push();  Adiciona na lista
// alunos.length(); Mostra quantidade de itens na lista

//FOR (declaração; condição; o que vai acontecer){}
// string  FOR (let i = 0; i < nome.length; i++) {}
// numero  FOR (let i =0; i < 10; i++){}



const alunos = ['Sabrina', 'Guilherme', 'Edson', 'Gabrielle', 'Ludmila', 'Lunna', 'Erika', 'Felipe'];
alunos.push('Romulo');

console.log(alunos);


 const notas = [];

notas.push(5);
notas.push(5);
notas.push(9);
notas.push(9);

let semestre = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    semestre = semestre + nota;
}

const media = semestre / notas.length;
console.log(media);