function criarTask() {
    let formulario = document.getElementById('formulario');
    let submit = document.querySelector("#submit");
    let titulo = document.querySelector(".inputTitulo");
    let descricao = document.querySelector("#descricao");
    let data = new Date(); 

    let dia = ("0" + data.getDate()).slice(-2); 
    let mes = ("0" + (data.getMonth() + 1)).slice(-2); 
    let ano = data.getFullYear(); 

    let dataFormatada = `${dia}-${mes}-${ano}`;

    let status = "PENDENTE";

    console.log(titulo.value);
    console.log(descricao.value);
    console.log(submit);
    console.log(dataFormatada);

    fetch('http://localhost:8080/tarefas/addTask', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            "titulo": titulo.value,
            "descricao": descricao.value,
            "dataCriacao": dataFormatada, 
            "status": status 
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Funcionando:', data);
        mostrarMensagemSucesso();
    })
    .catch((error) => {
        console.error('Bugou foi tudo:', error);
      
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    criarTask();
      document.querySelector(".inputTitulo").value = ''
    document.querySelector("#descricao").value = ''
});



function mostrarMensagemSucesso() {

    const successBox = document.createElement('div');
    successBox.className = 'success-box';
    successBox.textContent = 'Tarefa enviada!';
   
    document.body.appendChild(successBox);

    setTimeout(() => {
        successBox.classList.add('fadeOut');
        setTimeout(() => {
            successBox.remove(); 
        }, 300); 
    }, 3000); 
}

