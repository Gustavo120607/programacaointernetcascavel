let h1texto = document.querySelector("#h1Texto");
let inputTexto = document.querySelector("#inputTexto");
let btTrocaTexto = document.querySelector("#btTrocaTexto");

function trocarTexto(){
    //retornando o texto digitando no campo
    let textoDigitando = inputTexto.ariaValueMax;

    //alterando o texto do elemento h1
    h1texto.textContent = textoDigitando;
}