//brinquedos
let brinquedo1 = gets();
let brinquedo2 = gets();
let brinquedo3 = gets();

// Imprimindo a lista
print("<ul>");
print(`<li>${brinquedo1}</li>`);
// TODO: Preencha o código abaixo com as variáveis que representam os nomes dos brinquedos
print(`<li>${brinquedo2}</li>`);
print(`<li>${brinquedo3}</li>`);
print("</ul>");


//Configurando CSS através do GET()
const cor = gets();
const tamanhoFonte = gets();
const nomeBrinquedo = gets();

// TODO: Construa a tag <h1> com o estilo CSS, completando com as variáveis representando cada estilização
const resultado = `<h1 style="color: ${cor}; font-size: ${tamanhoFonte};">${nomeBrinquedo}</h1>`;

// Exibindo o resultado no console
print(resultado);