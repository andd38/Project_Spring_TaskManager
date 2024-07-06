import { removeTask } from './removeTask.js';
import { editTasks } from './EditTasks.js';

async function Start() {
    const apiUrl = 'http://localhost:8080/tarefas';
    async function getTasks() {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }

            const dados = await response.json();
            return dados
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
            return null;
        }

    }

    let dados = await getTasks()

    function createCell(tag, className, content) {
        const cell = document.createElement(tag);
        cell.className = className;

        if (className === 'descricao') {

            const textarea = document.createElement('textarea');
            textarea.id = "textareaView";
            textarea.className = className;
            textarea.textContent = content;
            cell.appendChild(textarea);
        } else if (className === 'titulo') {

            const input = document.createElement('input');
            input.type = 'text';
            input.id = "tituloum"
            input.className = className;
            input.value = content;
            cell.appendChild(input);
        } else if (className === 'status') {

            const select = document.createElement('select');
            select.id = "selectp"
            select.className = className;


            ['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDA'].forEach(status => {
                const option = document.createElement('option');
                option.value = status;
                option.textContent = status;
                if (status === content) {
                    option.selected = true;
                }
                select.appendChild(option);
            });

            cell.appendChild(select);
        } else {
            cell.textContent = content;
        }
        return cell;
    }

    function adicionarLinhasNaTabela(dados) {
        const tabelaCorpo = document.getElementById('tabela-corpo');

        dados.forEach(item => {
            const row = document.createElement('tr');

            row.appendChild(createCell('td', 'id', item.id));
            row.appendChild(createCell('td', 'titulo', item.titulo));
            row.appendChild(createCell('td', 'descricao', item.descricao));
            row.appendChild(createCell('td', 'datar', item.dataCriacao));
            row.appendChild(createCell('td', 'status', item.status));

            let icon = "<i class='bx bx-trash' style='color:#ffffff'></i>";
            const deleteButton = document.createElement('button');
            deleteButton.id = 'delete';
            deleteButton.className = 'delete';
            deleteButton.innerHTML = icon;
            const buttonCell = document.createElement('td');
            buttonCell.appendChild(deleteButton);
            row.appendChild(buttonCell);

            let othericon = "<i class='bx bx-check' style='color:#ffffff'  ></i>";
            const confirmedButton = document.createElement('button');
            confirmedButton.id = 'confirmed';
            confirmedButton.className = 'confirmed';
            confirmedButton.innerHTML = othericon;
            const buttonCon = document.createElement('td');
            buttonCon.appendChild(confirmedButton);
            row.appendChild(buttonCon);

            tabelaCorpo.appendChild(row);

            deleteButton.addEventListener('click', function () {
                const id = row.querySelector('.id').textContent;
                removeTask(id);
            });

            confirmedButton.addEventListener('click', function () {
                const id = row.querySelector('.id').textContent;
                editTasks(id);
            });
        });
    }


    adicionarLinhasNaTabela(dados);

}

Start()