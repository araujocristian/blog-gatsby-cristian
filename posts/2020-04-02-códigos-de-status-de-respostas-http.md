---
title: Códigos de status de respostas HTTP
description: >-
  Você conhece os códigos de status de resposta do protocolo HTTP? Hoje vamos
  desmistificar cada um deles.
date: '2020-04-01 08:58:30'
thumbnail: assets/img/códigos-de-status-de-respostas-http.png
---
Talvez não seja de vital importância ser o Google dos códigos de status de resposta do protocolo HTTP, mas é muito importante conhecer os principais e as diferenças sutis entre eles.

É muito importante ser coerente no uso dos códigos para que o cliente não se enrole na mensageiria e consiga gerenciar erros de uma forma fácil e padronizada.

Nesse artigo vamos tratar apenas de alguns dos muitos códigos das 5 classes, esses são os mais utilizados nos sistemas atuais. É recomendado sempre que você use o mais adequado para situação. Nada de colar 400 e 500 em tudo, ok?

### 1xx: Informacional

> Vai ser muito raro encontrar um código desse. Eles são usados para informação.

**100 Continue: **Uma resposta provisória para indicar que tudo ocorreu bem até então e que o cliente pode continuar com a requisição.

**101 Switching Protocol: **Esse código é enviado em resposta a um cabeçalho de solicitação Upgrade pelo cliente, e indica o protocolo a que o servidor está alternando.

**102 Processing (WebDAV): **Este código indica que o servidor recebeu e está processando a requisição, mas nenhuma resposta está disponível ainda.

**103 Early Hints: **Este código tem principalmente o objetivo de ser utilizado com o cabeçalho Link, indicando que o agente deve pré-carregar recursos enquanto o servidor prepara uma resposta.

### 2xx: Sucesso

> Esse é o que sempre esperamos receber! Significa que deu tudo certo com sua solicitação.

**200 OK: **Requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP.

**201 Created: **A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma típica resposta enviada após uma requisição POST.

**204 No Content: **

**206 Partial Content: ** 

### 3xx: Redirecionamento

> Vai ser muito raro encontrar um código desse. Eles são usados para informação.

**301 Moved Permanently:**

**302 Found:**

**304 Not Modified:** 

### 4xx: Erro do Cliente

> Vai ser muito raro encontrar um código desse. Eles são usados para informação.

**400 Continue:**

**401 Switching Protocol:**

**403 Processing (WebDAV):**

**404 Early Hints:** 

**406 Early Hints:** 

### 5xx: Erro do Cliente

> Vai ser muito raro encontrar um código desse. Eles são usados para informação.

**500 Continue:**

**501 Switching Protocol:**

**502 Processing (WebDAV):**

**503 Early Hints:** 