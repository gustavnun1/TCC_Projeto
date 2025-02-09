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


document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o botão de suporte no menu
    const suporteBotao = document.querySelector(".tituloSuporte a");
    // Seleciona o modal
    const modal = document.getElementById("modal");
    // Seleciona o botão de fechar dentro do modal
    const closeButton = document.querySelector(".close-button");

    // Função para alternar a visibilidade do modal
    function toggleModal() {
        modal.classList.toggle("hidden");
    }

    // Adiciona evento de clique no botão de suporte para abrir o modal
    suporteBotao.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        toggleModal();
    });

    // Adiciona evento de clique no botão de fechar para esconder o modal
    closeButton.addEventListener("click", toggleModal);

    // Fecha o modal se o usuário clicar fora do conteúdo
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            toggleModal();
        }
    });
});


button.addEventListener('click', enviarTexto, true);