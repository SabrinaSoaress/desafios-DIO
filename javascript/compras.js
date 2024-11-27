let produto = 100;
let parcelas = 6;

let pagamento = 'cartao';
const debito = produto - (produto * 0.1) ;
const dinheiro = produto - (produto * 0.15);
const pix = produto - (produto * 0.15);
const maisParcelas = produto + (produto * 0.1);

if (pagamento === 'debito') {
    console.log(debito);

} else if (pagamento === 'dinheiro'){
    console.log(dinheiro);

} else if (pagamento === 'cartao'){
    if (parcelas <= 2){
        console.log(produto);
    } else{
        console.log(maisParcelas);
    }   
} else if (pagamento === 'pix'){
    console.log(pix);
}