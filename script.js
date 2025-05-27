let inputsabor1 = document.querySelector("#inputsabor1");
let inputsabor2 = document.querySelector("#inputsabor2");
let inputsabor3 = document.querySelector("#inputsabor3");
let inputsabor4 = document.querySelector("#inputsabor4");
let inputRefri  = document.querySelector("#inputRefri")
let btFinalizar = document.querySelector("#btFinalizar");
let resumoPedido = document.querySelector ("#resumodopedido");

function geraPedidoPizza(){

       let qtdrefri = 0;
       let qtdsabor = 0;
       let sabores = "sabores selecionados: <br>";

       if(inputsabor1.value != ""){
        qtdsabor = qtdsabor + 1;
        sabores = sabores + inputsabor1.value+"<br>";
       }

       if(inputsabor2.value != ""){
        qtdsabor = qtdsabor + 1;
        sabores = sabores + inputsabor2.value+"<br>";
       }

       if(inputsabor3.value != ""){
        qtdsabor = qtdsabor + 1;
        sabores = sabores + inputsabor3.value+"<br>";
       }

       if(inputsabor4.value != ""){
        qtdsabor = qtdsabor + 1;
        sabores = sabores + inputsabor4.value+"<br>";
       }
        qtdrefri + Number (inputRefri.value) * 7;


       resumoPedido.innerHTML = sabores + 
                                         "total Pizza: R$"+(qtdsabor * 12).toFixed(2)+"<hr>"+
                                         "Quantidade de refri: "+inputRefri.value+"<br>"+
                                         "total Refrigerante R$"+ qtdrefri.toFixed(2)+"<hr>"+
                                         "total do pedido R$" +  ((qtdsabor * 12)+qtdrefri)
                                            
       
}

btFinalizar.onclick = function(){
    geraPedidoPizza()
}