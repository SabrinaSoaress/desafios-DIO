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