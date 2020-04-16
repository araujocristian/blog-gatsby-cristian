---
title: E o React? Parte 3
description: Um resumo sobre o que é React pela TreinaWeb.
date: '2020-04-09 07:43:34'
thumbnail: assets/img/e-o-react.png
category: react
background: '#2DA0C3'
---
As ultimas partes desse tutorial podem ser encontradas aqui:

* [E o React? Parte 1](https://araujocristian.codes/e-o-react/) 
* [E o React? Parte 2](https://araujocristian.codes/e-o-react-parte-2/)

Continuando a nossa saga sobre React do curso da TreinaWeb, vamos aprender um pouco sobre alguns conceitos mais avançados.

# React Transition Group

Uma biblioteca muito utilizada para ter mais controle das suas animações e criar transições com React é o **React Transition Group**.

Seu código é bem leve, praticamente não influenciando no tamanho da sua aplicação.

Para começar a utilizar, precisamos instalar com o comando:

```shell
$ npm install react-transition-group --save
// or
$ yarn add react-transition-group
```

Com ele nós teremos três componentes: *Transition*, *CSSTransition*e *TransitionGroup*.

### Transition

Componente utilizado para se gerenciar o estado de uma animação.

Devemos passar as propriedades "in" (booleano, que trata se a animação está entrando ou saindo) e "timeout" (numérico, tempo em milissegundos da animação).

```jsx
<Transition in={true} timeout={300} >
        {(status) => (
          <div>{status}</div>
        )}
</Transition>
```

São 4 estados no total:

* entering;
* entered;
* exiting;
* exited.

### Propriedades do Transition

* **in**- indica se a animação está ou não ativa;
* **timeout**- indica o tempo da animação;
* **appear**- indica se queremos animação de entrada logo que a tela carregar;
* **unmountOnExit**- indica se um elemento deve ser removido do DOM ao sair;
* **mountOnEnter**- indica se um elemento já deve ser inserido no DOM quando a tela carregar e ele ainda não tiver entrado.

### Eventos do Transition

* onEnter;
* onEntering;
* onEntered;
* onExit;
* onExiting;
* onExited.

### CSSTransition

Componente que aplica classes automaticamente em seu elemento filho. Recebe as mesmas propriedades e eventos do componente Transition.

Passamos um nome padrão de classe pela propriedade "classNames". Também podemos customizar cada um dos estados.

Os estados disponíveis para customização são:

* appear;
* appearActive;
* enter;
* enterActive;
* enterDone;
* exit;
* exitActive;
* exitDone.

### TransitionGroup

Componente que serve para grupos de animações. Nos dispensa a necessidade de controlar a propriedade "in", que será controlada automaticamente conforme um elemento for inserido ou removido.

# React Router

Até agora vimos como criar componentes e utilizar apenas uma tela. Mas claro que quando estivermos criando uma aplicação de verdade necessitaremos de mais de uma tela.

Precisamos então começar a criar views, e para gerenciar estas views precisamos de um router.

React é todo baseado em componentes, e um método simples seria criar um componente que seria um container da aplicação inteira, e conforme mudássemos o seu status, ele exibiria uma determinada view, que seria um outro componente.

Para facilitar a nossa vida, existe o React Router, uma biblioteca que nos ajuda a gerenciar views, feita especialmente para trabalhar com o React ou React Native.

Instale com o comando:

```shell
$ npm install --save react-router-dom
```

### Usando o React Router

Use o componente `<BrowserRouter>`como contêiner da aplicação.

Use o componente `<Link to="caminho"/>`para redirecionar o usuário ao clicar.

Use o componente `<Route path="caminho"component={Componente} />`para indicar o componente que será exibido quando determinado caminho for acessado.

Para passar parâmetros na URL, basta usar ":" no path junto ao nome da variável `(<Route path="caminho/:variavel"component={Componente} />)`.

A variável ficará acessível dentro de "params" do objeto "match" que será inserido nos "props" dos componentes passados aos componentes `<Route>`.

Para garantir que apenas um componente seja renderizado, utilize o componente `<Switch>`.

### Evitando mudar de View

Utilize o componente `<Prompt>`. A propriedade "*message*" recebe uma função que retorna uma mensagem a ser exibida. A propriedade "*when*" recebe um valor true ou false. Quando true perguntará ao usuário se ele realmente quer ir a outra view caso o endereço mude.

```jsx
<Prompt
          when={true}
          message={location =>
            `Tem certeza de que deseja ir para ${location.pathname} ?`
          }
/>
```

### Hooks do React Router

* **useHistory:** retorna um objeto para navegação;
* **useLocation:** retorna um objeto com informações da URL atual;
* **useParams:** retorna um objeto com parâmetros presentes na URL;
* **useRouteMatch:** retornar se estamos em uma determinada rota.

# Code Splitting e Lazy Loading

Para manter uma boa organização é sempre bom mantermos apenas um componente em cada arquivo.

A maioria das ferramentas de empacotamento como Webpack juntam todos estes arquivos em um só arquivo minificado. Isso pode ser muito bom, pois faz a aplicação ser carregada toda de uma só vez dentro de uma única requisição, deixando o carregamento de toda a aplicação mais rápido.

Porém, caso sua aplicação seja grande, carregar tudo de uma única vez não é o mais recomendado, pois teremos um único arquivo muito grande, portanto, demorará mais para ser carregado, prejudicando a experiência do usuário ao entrar na aplicação.

Nestes casos é recomendado que partes da aplicação sejam separados em arquivos menores. A parte principal será carregada na inicialização e, como separamos o código em outros arquivos, este arquivo principal será menor, carregando mais rapidamente.

As demais partes nós podemos fazer com que sejam carregadas apenas quando necessárias. Por exemplo, se um usuário não entrar na rota "/about" não precisamos carregar os arquivos responsáveis por esta view.

Teremos arquivos menores sendo rapidamente carregados apenas quando forem necessários.

Carregamentos feitos apenas quando necessários são chamados de Lazy Loading (carregamento preguiçoso)

Se você utiliza o "*create-react-app*", ele já tem o Webpack configurado para isso. Vamos ver melhor como funciona o Code-Splitting e Lazy Loading com React.

### Code Splitting

Divisão do código em vários arquivos

### Lazy Loading

Carregamento de arquivos apenas quando necessários.

### React.lazy() e <Suspense>

Utilize o React.lazy() para carregar componentes apenas quando necessários.

```jsx
const TextCounter = React.lazy(() => import('./components/text-counter'));
```

O componente deve estar dentro do componente `<Suspense>`, ao qual indicamos um componente a ser exibido enquanto o módulo com o componente carregando não terminar de ser carregado.

```jsx
<Suspense fallback={<div>Loading...</div>} >
   <TextCounter />
</Suspense>
```

### Loadable Components

Loadable Components é uma biblioteca que facilita o carregamento dinâmico de componentes. Para instalar execute:

```shell
$ npm install --save @loadable/component
```

```jsx
import loadable from '@loadable/component';
const Index = loadable(() => import('./views/index'));
```

O Loadable Components não exige a presença do `<Suspense>`.

# Por que Tipar dados?

Tipar dados significa que estaremos indicando se um dado é uma string, número, etc.

Tipar dados nos permite identificar certos problemas até mesmo antes de executarmos nosso código, nos ajudando a melhorar e acelerar nosso fluxo de trabalho.

O JavaScript não oferece um tipo de tipagem estática, então precisamos de outras ferramentas para nos possibilitar isso.

Hoje em dia, por causa do Angular, a forma mais comum de se trabalhar com tipagem no JavaScript é usando o TypeScript, mas também temos o Flow, uma ferramenta criada pelo Facebook e muito utilizada com React para fazer a verificação de tipagem.

### Flow

Ferramenta criada pelo Facebook, normalmente usada com React, para se trabalhar com tipagem no JavaScript.

### Instalação do Flow

* Execute:

```shell
$ npm install --save-dev flow-bin
```

* Inclua o comando "flow" : "flow" nos scripts do "package.json"
* Crie o arquivo de configuração ".flowconfig" executando o comando:

```shell
$ npm run flow init
```

* Adicione a notação "// @flow" no início dos arquivos que quer que o Flow analise
* Execute o Flow com o comando:

```shell
$ npm run flow
```

### Tipando Dados

Declare um "type" e indique o tipo do dado após ":". Caso seja um objeto ou classe, utilize generics (*<>*).

```jsx
type Props = {
  name?: string,
  age: number,
  isActive: boolean,
  nameList: Array<string>
}
class App extends Component <Props>  {

}
```

# Testes Automatizados

Automatização de testes de software são basicamente funções que escrevemos que tem como objetivo executar funcionalidades do nosso código e verificar se ocorre um resultado esperado. Do contrário, provavelmente alguma função não foi bem escrita e pode gerar algum erro no nosso software.

Automatizamos os testes porque um código executando testes é bem mais rápido do que uma pessoa testando.

O maior motivo é que quando alteramos qualquer detalhe em nosso código, o sistema todo deve ser testado novamente para garantir que tudo está bem. Raramente teremos um código que só é usado em um lugar. Normalmente ele é usado em uma função que é usada por outra função que é responsável por algum dado que outra função precisa, etc.

Para uma pessoa executar todos os testes do sistema a cada alteração levaria muito tempo, e cada código criado precisa de novos testes, então a pilha de testes só tende a aumentar conforme o software aumenta.

Para testar aplicações feitas com React normalmente usamos o Jest e Enzyme.

Jest é uma ferramenta de testes criada pelo Facebook, utilizada para testar seus códigos JavaScript incluindo aplicações feitas com React.

O Jest é rápido e utiliza workers para maximizar a performance, executando vários testes paralelamente. 

O Enzyme é uma ferramenta criada pela Airbnb para facilitar os testes de componentes criados com React.

Sua API é intuitiva e flexível, se inspirando na API de manipulação de DOM do jQuery.

### Jest

Ferramenta criada pelo Facebook para testar código JavaScript.

### Enzyme

Ferramenta criada pela Airbnb para testar componentes criados com React.

### Preparando o Enzyme

Instale as dependências com:

```shell
$ npm i enzyme enzyme-adapter-react-(numero da versão do react) react-test-renderer
```

Crie um arquivo de configuração para o Enzyme chamado "**src/setupTests.js**".

```jsx
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```

Exemplo de um arquivo de teste:

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import ClickCounter from './ClickCounter';

it('ClickCounter tenha o texto alterado apos o clique', () => {
    const meuComponente = shallow(<ClickCounter />);

    expect(meuComponente.find('#checkStatus').text()).toEqual('OFF');
    meuComponente.find('input').simulate('change');
    expect(meuComponente.find('#checkStatus').text()).toEqual('ON');
})

it('ClickCounter deve ter o total de cliques igual a 2', () => {
    const meuComponente = shallow(<ClickCounter />);

    meuComponente.find('input').simulate('change').simulate('change');
    expect(meuComponente.state().totalClicks).toEqual(2);
})
```

# Internacionalização

Em informática chamamos de "Internacionalização" quando desenvolvemos ou adaptamos um software para que ele se adapte a outras culturas, países, línguas, etc.

Pense nas datas:

* No Brasil usamos o formato "dia-mês-ano", como 31/12/2020;
* Nos Estados Unidos usamos o formato "mês-dia-ano", como 12/31/2020;
* No Japão usamos o formato "ano-mês-dia", como 2020/12/31.

Quando falamos de números, no Brasil separamos as casas decimais com vírgula. A cada três algarismos costumamos colocar um ponto para facilitar a leitura, como: "1.000,25".

Já nos Estados Unidos é ao contrário. Então o mesmo número ficaria como "1,000.25".

Caso a nossa aplicação precise ser usada em outros países, alcançando um público maior, precisamos de um modo que facilite a adaptação de itens como os dos exemplos acima. Assim, teremos apenas uma adaptação das mensagens do sistema ao invés de ter que desenvolver uma outra aplicação para um determinado país.

Chamamos a Internacionalização (internationalization) de i18n, pois são as primeiras e últimas letras da palavra com o número de letras entre elas.

# Language Tags e Localização

"Language Tags" é o nome que damos às marcações que usamos para identificar uma língua. Muitas também permitem que você especifique o país ou região que usa essa língua.

Um exemplo é a famosa "en-US", que indica o inglês usado nos Estados Unidos.

Outro que você provavelmente pode ter visto por aí é o "pt-BR", que indica o português do Brasil, diferente do "pt-PT", que indica o português de Portugal.

### React Intl

Biblioteca criada pelo Yahoo! para se trabalhar com internacionalização no React.

Instale executando:

```shell
$ npm install --save react-intl
```

Importe uma língua de "*react-intl/locale-data/{tag language}*" e registre-a com a função "*addLocaleData()*".

Utilize como container o componente *`<IntlProvider>`* , que recebe as propriedades "*locale*" e "*messages*".

### Formatações com o React Intl

```jsx
<FormattedNumber 
            value={123456789.12} 
            minimumFractionDigits={2}
            maximumFractionDigits={2} 
/>
<FormattedDate value={new Date()} />
<FormattedTime value={new Date()} />
<FormattedRelative value={new Date()} />
<FormattedMessage id="app.hi" description="hi message" defaultMessage="Hello web developers!" />
<FormattedMessage
            id='app.clicks'
            description='quantidade de cliques'
            defaultMessage='Olá, você tem {totalClicks, plural,
                =0 {nenhum clique}
                one {# clique}
                other {# cliques}
            }.'
            values={this.state}
        />
<FormattedMessage values={this.state} id="app.select" description="selecao de palavras" defaultMessage="
        {sexo, select,
            masculino {Ele}
            feminino {Ela}
            other {Alguém}
        } está vindo.
        " />
```

Exemplo: 

```jsx
import React, { Component } from 'react';
import './App.css';

import enLocaleData from 'react-intl/locale-data/en';
import jaLocaleData from 'react-intl/locale-data/ja';
import ptLocaleData from 'react-intl/locale-data/pt';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';

import messages from './i18n/messages';

addLocaleData([...enLocaleData, ...jaLocaleData, ...ptLocaleData]);

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentLang: 'pt'
    }

  }

  render() {
    const { state } = this;
    return (
      <div>
        <IntlProvider locale={state.currentLang} messages={messages[state.currentLang]} >
          <div>
            <FormattedMessage 
              id="app.hi"
              description="saudacao"
              defaultMessage="Hi"
            />
            <br />
            <FormattedMessage 
              id="app.bye"
              description="despedida"
              defaultMessage="Bye"
            />
          </div>
        </IntlProvider>
      </div>
    );
  }
}

export default App;
```

# Renderização no Servidor

Quando as aplicações web começaram a ser feitas, era comum a produção do HTML no servidor. Isso porque o JavaScript ainda era complicado e com poucas funcionalidades. E para piorar, as funcionalidades que o JavaScript tinha não funcionavam exatamente da mesma maneira em todos os navegadores.

Então, era muito melhor produzir o HTML no servidor e enviá-lo ao cliente. Caso o cliente fizesse alguma ação, esta ação era enviada ao servidor e o servidor enviava uma tela nova para o cliente.

Mas isso também não é muito prático, e é bem desconfortável ter a tela inteira sendo atualizada e baixada a cada pequena ação.

Então surgiu o AJAX, onde fazemos requisições assíncronas com JavaScript e atualizamos apenas uma pequena parte da aplicação.

Com a evolução do JavaScript foram surgindo bibliotecas e frameworks para desenvolvermos aplicações inteiras no lado do cliente. Isso revolucionou o desenvolvimento web.

Porém, nem tudo são flores com essas aplicações feitas inteiramente com JavaScript. Pense nos motores de busca como Google ou redes sociais como Facebook. Eles possuem códigos que entram em nossas páginas e fazem uma leitura do HTML.

As aplicações modernas geram o HTML pelo JavaScript assim que chegam no cliente, então certos serviços que não executam JavaScript enxergam nossas aplicações assim:

![](https://d2v0x26thbzlwf.cloudfront.net/prod/387/img/rId9on4xmuzh.qxa.png)

Isso mesmo! Um HTML vazio. Essa é a aparência de uma aplicação React. Caso a gente precise que serviços como motores de busca ou redes sociais enxerguem o conteúdo de nossas aplicações, precisamos que o servidor já envie o HTML pronto. Isso ajuda o SEO e, como o HTML já estará pronto, o usuário não precisa que a aplicação seja carregada e iniciada para enxergar os primeiros elementos na tela, passando a impressão de que a página carregou mais rapidamente.

Mas não queremos voltar a fazer nossas aplicações inteiramente no servidor. Então a solução seria poder iniciar a criação do HTML que seria feito pelo nosso framework/biblioteca no cliente já no servidor. Ao carregar tudo no navegador, a aplicação continua com o seu comportamento comum. Essa é a ideia do que chamamos de Aplicações Universais!

Então, entre as vantagens temos:

* Performance - a aplicação já virá com o HTML preparado, fazendo parecer que ela iniciou mais rapidamente;
* SEO - os motores de busca poderão ler o conteúdo do HTML ao invés de ver um arquivo vazio;
* Crawlers de Redes Sociais - redes sociais poderão ler as meta tags com informações das nossas páginas.

Resumindo: aprenderemos a renderizar nossa aplicação React no servidor. Assim que a aplicação terminar de carregar, ela se torna uma aplicação React comum como conhecemos, com as views sendo geradas no próprio cliente.

### Aplicação Universal

Aplicação que tem seu código gerado tanto no cliente quanto no servidor.

### Electrode

Ferramenta para criar aplicações universais com React desenvolvida pelo Walmart.

Instale com o comando:

```shell
$ npm install -g electrode-ignite xclap-cli
```

E gere uma nova aplicação com:

```shell
$ ignite generate-app
```

Inicie um servidor com:

```shell
$ clap dev
```

E faça build com:

```shell
$ clap build
```