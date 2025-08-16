document.getElementById("btLogin").addEventListener("click", login);

function login() {
      console.log("login.js carregado");

      setTimeout(() => {
            window.location.href = "areadoestudante.html";
      }, 1000);

      const data = {
        
        cpf: document.getElementById("lbCPF").value,
        senha: document.getElementById("lbsenha").value
      };

      fetch("http://localhost:5000/api/UsuarioController/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(res => {
        if (res.status === 200) return res.text();
        else return res.text().then(msg => { throw msg });
      })
      .then(msg => document.getElementById("resultado").innerText = msg)
      .catch(err => document.getElementById("resultado").innerText = err);
    }
        
    // Efeito de tremulação no formulário
    function shakeForm() {
        const form = document.getElementById("box_login");
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 500);
    }
