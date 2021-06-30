# API, REST e RESTFUL
<br>

* Acronimo de Application Programming Interface (Interface de Programação de Aplicações) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades deta aplicação.

# REST
<br>

* Um acrônimo para Representational State Transfer (Transferência de EStado Representativo).
* Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.
* A transferência de dados, geralmente, utiliza protocolo HTTP.
* O REST, delimita algumas obrigações nessas transferências de dados.
* Resources seria então, uma entidade, um objeto.

# 6 Necessidades (Constraints) para ser RESTful
<br>

É aplicação dos padrões REST.

* _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

* _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor enteder e responder (RESPONSE) a requisição (REQUEST). Exemplo: Tokens.

* _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

* _Layered System_: O cliente acessa a um endpoint, sem precisar saber da comlexidade, de quais passos estão sendo necessários para o servidor responder a requisição ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

* _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente.

# BOAS PRÁTICAS
<br>

* Utilizar verbos HTTP para nossas requisições.

* Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão!

* Não deixar barra no final do endpoint

* Nunca deixe seu cliente sem respostas do servidor. Sempre emitir uma mensagem de erro caso não encontre dados (STATUS DAS RESPOSTAS).

# VERBOS HTTP
<br>

* GET: Receber dados de um Resource;

* POST: Enviar dados ou informações para serem processados por um Resource;

* PUT: Atualizar os dados de um Resource;

* DELETE: Deletar um Resource;

# STATUS DAS RESPOSTAS
<br>

* 1xx: Informação
* 2xx: Sucesso
    * 200: OK
    * 201: CREATED
    * 204: NÃO TEM CONTEÚDO PUT POST DELETE
* 3xx: Redirection
* 4xx: Client Error
    * 400: Bad Request
    * 404: Not Found
* 5xx: Server Error
    * 500: Internal Server Error








