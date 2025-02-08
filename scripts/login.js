document.getElementById("btLogin").addEventListener("click", handleLogin);

async function handleLogin() {
    const cpf = document.getElementById("lbCPF").value;
    const senha = document.querySelector("input[name='senha']").value;

    if (!cpf || !senha) {
        shakeForm();
        alert("Por favor, preencha todos os campos!");
        return;
    }

    try {
        // Simula uma chamada ao backend para verificar o usuário
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cpf, senha }),
        });

        const data = await response.json();

        if (data.success) {
            // Login bem-sucedido: salva no localStorage e redireciona
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "./metis.html";
        } else {
            shakeForm();
            alert("CPF ou senha inválidos!");
        }
    } catch (error) {
        console.error("Erro ao tentar autenticar:", error);
        alert("Erro ao conectar com o servidor.");
    }
}

// Efeito de tremulação no formulário
function shakeForm() {
    const form = document.getElementById("box_login");
    form.classList.add("shake");
    setTimeout(() => form.classList.remove("shake"), 500);
}
