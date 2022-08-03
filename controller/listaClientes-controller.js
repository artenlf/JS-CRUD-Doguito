import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo =
        `
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        `;
    // dentro do html edita_cliente, fazemos uma query ('?'), passando o id para que ele encaminhe para a página do id que queremos editar.

    linhaNovoCliente.innerHTML = conteudo;

    linhaNovoCliente.dataset.id = id; //foi preciso criar um data-attribute para passar o id, fazendo com que a função de remover cliente seja aplicada também no html.

    return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela')

// função deletar cliente

tabela.addEventListener('click', async (evento) => {
    let selecionaBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir';
    if (selecionaBotaoDeletar) {
        try {
            const linhaCliente = evento.target.closest('[data-id]');
            let id = linhaCliente.dataset.id;
            await clienteService.removeCliente(id);
            linhaCliente.remove();
        }
        catch (erro) {
            console.log(erro);
            window.location.href = '../telas/erro.html'
        }
    };
});

//--------------------

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes()
        listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
        });
    }
    catch (erro) {
        console.log(erro);
        window.location.href = '../telas/erro.html';
    };
};

render();