

export async function editTasks(idedit) {
    let titulo = document.querySelector("#tituloum").value
    let descricao = document.querySelector("#textareaView").value
    let status = document.querySelector("#selectp").value
    let dataFormatada = document.querySelector(".datar")
    const apiUrl = `http://localhost:8080/tarefas/${idedit}`;

    console.log(titulo);
    console.log(descricao);
    console.log(status);
    console.log(dataFormatada.textContent)

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": idedit,
                "titulo": titulo,
                "descricao": descricao,
                "status": status,
                "dataCriacao": dataFormatada.textContent
            })
        });

        if (!response.ok) {
            throw new Error('Erro ao editar a tarefa: ' + response.status);
        }

        mostrarMensagemSucesso();
        setTimeout(() => {
        }, 1000);
        return true;
    } catch (error) {
        console.error('Erro ao editar a tarefa:', error.message);
        return false;
    }
}

function mostrarMensagemSucesso() {
    const successBox = document.createElement('div');
    successBox.className = 'success-box';
    successBox.textContent = 'Tarefa atualizada!';

    document.body.appendChild(successBox);

    setTimeout(() => {
        successBox.classList.add('fadeOut');
        setTimeout(() => {
            successBox.remove();
        }, 300);
    }, 3000);
}
