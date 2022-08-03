#  JS na web: crud com JavaScript assíncrono
# JS-Doguito-CRUD

Para abrir o projeto é necessário ter o Node.JS e instalar e rodar o json-server.<br>


Neste projeto aprendi a estabelecer comunicação assíncrona para buscar e exibir dados, integrando um database (.db) Node.js, tanto via promises, quanto via método fetch(). Utilizei modularidade para delimitar mais claramente as atribuições das funções.<br>
Também implementei as funcionalidades de criar e deletar os clientes.<br>
Implementei função para buscar e detalhar informações de cliente no campo editar, assim função para editar propriamente as informações dos clientes.<br>
Implementei async/await, substituindo o método 'then()' (alguns trechos ainda ficaram o método '.then()', para fins educativos).<br>
Por fim, implementei testes e tratamento de erros com as declarações try/catch.

<br>
Dicas para utilização do json-server
<br>
abrir a pasta admin no vscode e 
rodar o json server: 
```
json-server --watch db.json
```

Rodar: browser-sync start --server --file . --host --port 5000 --startPath admin/telas/lista_cliente.html
ou
Utilizar o Live Server.