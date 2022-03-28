
function enviarTexto (){
    const button = document.getElementById("button");
    const input1 = document.getElementById("inpconfirmar")
    if(input1.value == ""){
        alert('Complete todas as caixas corretamente');
        return;


    }else{
        alert('Verifique se preencheu as caixas corretamente')
    }


}