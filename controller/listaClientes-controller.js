import { clienteService } from '../service/cliente-service.js'

const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr');
    const conteudo =
        `
            <td class="td" data-td>${nome}</td>
            <td>${email}</td>
            <td>
                <ul class="tabela__botoes-controle">
                    <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                </ul>
            </td>
        `;
    linhaNovoCliente.innerHTML = conteudo;

    linhaNovoCliente.dataset.id = id; //foi preciso criar um data-attribute para passar o id, fazendo com que a função de remover cliente seja aplicada também no html.

    return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela')

// função deletar cliente

tabela.addEventListener('click', (evento) => {
    let selecionaBotaoDeletar = evento.target.className == 'botao-simples botao-simples--excluir';
    if (selecionaBotaoDeletar) {
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id;
        clienteService.removeCliente(id)
            .then(() => {
                linhaCliente.remove();
            });
    };
});
//--------------------

clienteService.listaClientes()
    .then(data => {
        data.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
        });
    });