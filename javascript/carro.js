let precoCombustivel = 6.17;
let precoGasolina = 6.17;
let precoEtanol = 4.40;

let kmPorLitro = 10;
let distanciaEmKm = 100;

let tipoCombustivel = 'Etanol';

const litroConumido = distanciaEmKm / kmPorLitro;
const valorGasto = litroConumido * precoCombustivel;


console.log('você vai gastar R$ ' + valorGasto +' para percorrer '+ distanciaEmKm + 'Km');

if (tipoCombustivel === 'Gasolina') {
    const valorViagem = precoGasolina * distanciaEmKm;
    console.log('com Gasolina vai custar '+ valorViagem.toFixed(2));

} else if (tipoCombustivel === 'Etanol') {
    const valorViagem = precoEtanol * distanciaEmKm;
    console.log('com Etanol vai custar '+ valorViagem.toFixed(2));

} else {
    console.log('Não identificamos o seu tipo de combustivel')
};


class Carros {
    marca;
    cor;
    gastoKm;

    constructor(marca, cor, gastoKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKm = gastoKm;
    }
    calcularGastos(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoKm * precoCombustivel;
    }
}

const uno = new Carros('fiat', 'prata', 8 / 10);
console.log(uno.calcularGastos(70, 5));

const compass = new Carros('jeep', 'preto', 3 / 10);
console.log(compass.calcularGastos(70, 5));