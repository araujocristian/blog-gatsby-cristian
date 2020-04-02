---
title: Códigos de status de respostas HTTP
description: >-
  Você conhece os códigos de status de resposta do protocolo HTTP? Hoje vamos
  desmistificar cada um deles.
date: "2020-04-01 08:58:30"
category: dev
background: "#637a91"
thumbnail: assets/img/códigos-de-status-de-respostas-http.png
---

Talvez não seja de vital importância ser o Google dos códigos de status de resposta do protocolo HTTP, mas é muito importante conhecer os principais e as diferenças sutis entre eles.

É muito importante ser coerente no uso dos códigos para que o cliente não se enrole na mensageiria e consiga gerenciar erros de uma forma fácil e padronizada.

Nesse artigo vamos tratar apenas de alguns dos muitos códigos das 5 classes, esses são os mais utilizados nos sistemas atuais. É recomendado sempre que você use o mais adequado para situação. Nada de colar 400 e 500 em tudo, ok?

### 1xx: Informacional

> Vai ser muito raro encontrar um código desse. Eles são usados para informação.

**100 Continue:** Uma resposta provisória para indicar que tudo ocorreu bem até então e que o cliente pode continuar com a requisição.

**101 Switching Protocol:** Esse código é enviado em resposta a um cabeçalho de solicitação Upgrade pelo cliente, e indica o protocolo a que o servidor está alternando.

**102 Processing (WebDAV):** Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.

**103 Early Hints:** Este código tem principalmente o objetivo de ser utilizado com o cabeçalho Link, indicando que o agente deve pré-carregar recursos enquanto o servidor prepara uma resposta.

### 2xx: Sucesso

> Esse é o que sempre esperamos receber! Significa que deu tudo certo com sua solicitação.

**200 OK:** Requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP.

**201 Created:** A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma típica resposta enviada após uma requisição POST.

**204 No Content:** Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.

**206 Partial Content:** Esta resposta é usada por causa do cabeçalho de intervalo enviado pelo cliente para separar o download em vários fluxos.

### 3xx: Redirecionamento

> Aqui o cliente vai precisar fazer ações extras para completar o pedido e redirecionar a requisição.

**301 Moved Permanently:** Esse código de resposta significa que a URI do recurso requerido mudou. Provavelmente, a nova URI será especificada na resposta.

**302 Found:** Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.

**304 Not Modified:** Essa resposta é usada para questões da cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache de resposta.

### 4xx: Erro do Cliente

> Essa classe é provavelmente BIOS rsrs. Os códigos devem ser apresentados quando o cliente parecer ter cometido um erro.

**400 Bad Request:** Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

**401 Unauthorized:** Embora o padrão HTTP especifique _"unauthorized"_, semanticamente, essa resposta significa _"unauthenticated"_. Ou seja, o cliente deve se autenticar para obter a resposta solicitada.

**403 Forbidden:** O cliente não tem direitos de acesso ao conteúdo portanto o servidor esta rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.

**404 Not Found:** O recurso requisitado não foi encontrado, mas pode ser disponibilizado novamente no futuro.

**406 Not Acceptable:** O recurso solicitado é apenas capaz de gerar conteúdo não aceitáveis de acordo com os cabeçalhos Accept enviados na solicitação.

### 5xx: Erro do Cliente

> Aqui deu BO, bateu fofo. Essa classe informa que o erro aconteceu do lado do servidor.

**500 Internal Server Error:** Indica um erro do servidor ao processar a solicitação.

**501 Not Implemented:** O método da requisição não é suportado pelo servidor e não pode ser manipulado. Os únicos métodos exigidos que servidores suportem (e portanto não devem retornar este código) são GET e HEAD.

**502 Bad Gateway:** Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.

**503 Service Unavailable:** O servidor não está pronto para manipular a requisição. Causas comuns são um servidor em manutenção ou sobrecarregado.

### A saideira

Essa publicação foi inspirada numa publicação do pessoal da [Codar.me](https://codar.me/). Gosto muito do conteúdo deles, podem acompanhar!
