//brinquedos
let brinquedo1 = gets();
let brinquedo2 = gets();
let brinquedo3 = gets();

// Imprimindo a lista
print("<ul>");
print(`<li>${brinquedo1}</li>`);
print(`<li>${brinquedo2}</li>`);
print(`<li>${brinquedo3}</li>`);
print("</ul>");


//Configurando CSS através do GET()
const cor = gets();
const tamanhoFonte = gets();
const nomeBrinquedo = gets();
const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

// Exibindo o resultado no console
print(resultado);

const idade = parseInt(gets());

let categoria;

if( idade <= 9) {
    categoria = "Infantil";
}
else if ( idade <= 14 ) {
    categoria = "Pre-Adolecente";
}
else if ( idade <= 18) {
    categoria = "Adolescente";
}
print(categoria);

// IF, FOR

let dados = gets().split(", ");
let estoque = [];

dados.forEach(item => {
  
    let [nome, quantidade] = item.split(":");
    quantidade = parseInt(quantidade);
  
    if (quantidade < 5) {
        estoque.push(nome + ": Baixo");
    } else {
        estoque.push(nome +": Adequado");
    }
    
});

// Saída formatada corretamente
print(estoque.join(", "));

function verificarPromocoes() {
    
        const taxaDesconto = 0.10;
        const entrada = gets(); 
        const produtos = entrada.split(' - '); 
        const resultado = [];
    
        produtos.forEach(produto => {
            const [nome, quantidadePreco] = produto.split(': '); 
            const [quantidade, precoUnitario] = quantidadePreco.split(', ').map(Number); 
    
            let precoFinal;
            if (quantidade >= 5) {
                precoFinal = precoUnitario * (1 - taxaDesconto);
            } else{
              precoFinal = precoUnitario;
            }
            resultado.push(`${nome}: ${precoFinal.toFixed(2)}`);
        });
    
        print(resultado.join(' - '));
    }
    
    //Chame a função:
    verificarPromocoes();


    class CalculadoraFrete {

        constructor(taxaFixa, taxaPorProduto) {
           this.taxaFixa = taxaFixa;
           this.taxaPorProduto = taxaPorProduto;
            
        }
    
        calcularFrete(listaProdutos) {
            const produtos = listaProdutos.split(', ');
            
            const quantidadeTotal = produtos.reduce((total, produto) => {
                const quantidade = parseInt(produto.split(':')[1], 10);
                return total + quantidade;
            }, 0);
            
          const freteTotal = this.taxaFixa + this.taxaPorProduto * quantidadeTotal;
        
             return freteTotal.toFixed(2);
        }
    }
    
    function main() {
      
        const listaProdutos = gets();
        
        const taxaFixa = parseFloat(gets());
        
        const taxaPorProduto = parseFloat(gets());
        
        const calculadora = new CalculadoraFrete(taxaFixa, taxaPorProduto);
        
        print(calculadora.calcularFrete(listaProdutos));
    }
    main();