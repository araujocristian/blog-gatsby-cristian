---
title: Configurando acesso a dashboard do Netlify CMS em produção
description: Como corrigir o erro "No Auth Provider Found" ao tentar logar via GitHub
date: '2020-04-03 10:24:55'
thumbnail: assets/img/configurando-acesso-a-dashboard-do-netlify-cms-em-produção.png
category: dev
background: '#637a91'
---
Se você, assim como eu, ficou se batendo e se questionando porque não conseguia acessar a rota `/admin` depois de enviar o site para produção no Netlify com Github? **Seus problemas acabaram!!**

# Ajustando o arquivo config.yml

Como o objetivo é único e exclusivo resolver o erro "*No Auth Provider Found Make sure you've configured the API credentials*", alguns detalhes serão omitidos tomando como base que você já tem suas collections definidas e demais detalhes.

```javascript
backend:
  name: github
  repo: github-name/seu-site
  branch: master
  site_domain: seu-site.netlify.com

publish_mode: editorial_workflow
media_folder: 'static/assets/img'
public_folder: 'assets/img'

collections:
 // your collection
```

Atente-se para os campos `repo` e `site_domain`. Perceba que não há **http** ou **https**. Não inclua-os!

# Configurando uma nova aplicação no Github

Quando você tentar logar via Github na sua rota `/admin` só será possível se as credenciais Netlify estiverem cadastradas. Vamos aos detalhes:

Acesse esse link: <https://github.com/settings/applications/new> para cadastrar sua aplicação. Siga o exemplo da imagem abaixo.

![Tela do GitHub de registro de novo OAuth application](assets/img/captura-de-tela-de-2020-04-03-22-43-10.png)

Após registrar sua aplicação, suas credenciais estão prontas para serem inseridas nas configurações do Netlify.

![Credenciais do github geradas](https://marciofrancalima.com.br/static/d98bf2524bc0a53e0451cb6b5879c679/f1dec/github-credentials.png "Credenciais do github geradas")

Copie essas credenciais (Client ID e Client Secret), pois elas serão usadas logo na sequência.

Acesse as configurações (settings) do seu site lá no Netlify, em Access control, instale o provider do Github.

![Controle de acesso netlify](https://marciofrancalima.com.br/static/3b0788682e2ad6743a45034e5c501ea5/f570d/settings-netlify.png "Controle de acesso netlify")

Escolha **Github** e informe `Client ID` e `Client Secret`.

Lembrando dos ajustes realizados no arquivo `config.yml`, NÃO esquecer de enviar as alterações para a sua branch remota.

Agora basta acessar o seu site/admin e se autenticar com o github.

# A Saideira