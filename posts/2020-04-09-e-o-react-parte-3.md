---
title: E o React? Parte 3
description: Um resumo sobre o que é React pela TreinaWeb.
date: '2020-04-09 07:43:34'
thumbnail: assets/img/e-o-react.png
category: react
background: '#2DA0C3'
---
A ultimas partes desse tutorial podem ser encontradas aqui:

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

Use o componente `<BrowserRouter> `como contêiner da aplicação.

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