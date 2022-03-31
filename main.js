const button = document.getElementById('button');
const email = document.getElementById('inpemail');
const senha = document.getElementById('inpsenha');
const usuario = document.getElementById('inusuario');
const confirmado = document.getElementById('inpconfirmar')
function enviarTexto (){
   

    if(email.value == ""){
        alert('Complete todas as caixas corretamente');
        return;   
    }
    
    else if(senha.value == ""){
        alert('Complete todas as caixas corretamente');
        return;   
    }
    else if(usuario.value == ""){
        alert('Complete todas as caixas corretamente');
        return;   
    }
    else if(confirmado.value == ""){
        alert('Complete todas as caixas corretamente');
        return;   
    }
    
    else{
        alert('Você foi registrado! Seu perfil está disponivel para personalização 😀');
    
            window.location.href = "./login.html";
        ;
    }


}

button.addEventListener('click', enviarTexto, true);