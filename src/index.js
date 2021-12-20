import controlerUserLogin from "./moduloInterface.js";

//Elementos de Avisos para uso do Bootstrap: 

var myModal = new bootstrap.Modal(document.getElementById('myModal'));

//Trazendo os botões da DOM em HTML.

const entrarUsuario = document.getElementById("btnEntrar");
entrarUsuario.addEventListener("click", (event) => {
    let nome = document.getElementById("usuario").value,
    senha = document.getElementById("senha").value;

    //Testando se os campos estão vazios.
    if (!nome || nome === "null" || nome === "" || !senha || senha === "null" || senha === "") {
        alert("Campos vazios, não há como executar o login!");
        document.getElementById("titleModal").innerHTML = "Campos Vazios!";
        document.getElementById("bodyModal").innerHTML = "Os campos não podem estar vazios!";
        document.getElementById("btnModalClose").innerHTML = "Fechar";
        document.getElementById("btnModalSave").innerHTML = "Salvar";
        myModal.show();
    } else {
        controlerUserLogin.loginInfo(nome, senha);
    }
});

