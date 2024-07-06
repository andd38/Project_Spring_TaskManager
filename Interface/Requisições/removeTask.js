export async function removeTask(id) {
    const apiUrl = `http://localhost:8080/tarefas/${id}`;
    
    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao deletar a tarefa: ' + response.status);
        }
        mostrarMensagemSucesso()

        setTimeout(() => {
            window.location.reload();
        }, 1000);
        return true; 
    } catch (error) {
        console.error('Erro ao deletar a tarefa:', error.message);
        return false;
    }
}

function mostrarMensagemSucesso() {

    const successBox = document.createElement('div');
    successBox.className = 'success-box';
    successBox.textContent = 'Tarefa deletada!';
   
    document.body.appendChild(successBox);

    setTimeout(() => {
        successBox.classList.add('fadeOut');
        setTimeout(() => {
            successBox.remove(); 
        }, 300); 
    }, 3000); 
}