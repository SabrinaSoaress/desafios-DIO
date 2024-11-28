const notaProva = 9;
const notaTrabalho = 9;
const notaAtividades = 5;
const notaSemestre = (notaAtividades + notaTrabalho + notaTrabalho) / 3;


if(notaSemestre < 5) {
    console.log('Reprovado! Sua nota nesse Semestre foi '+ notaSemestre);
} else if (notaSemestre >= 5 && notaSemestre <= 7) {
    console.log('Recuperação! Sua nota nesse Semestre foi '+ notaSemestre);
}else {
    console.log('Aprovado!  Sua nota nesse Semestre foi '+ notaSemestre);
}

