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