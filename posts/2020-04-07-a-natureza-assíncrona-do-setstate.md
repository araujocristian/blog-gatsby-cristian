---
title: A natureza assíncrona do setState()
description: >-
  O console.log é muito usado para fazer uma depuração, porem ele não funciona
  muito bem quando o assunto são funções assíncronas.
date: '2020-04-07 12:29:38'
category: react
background: '#2DA0C3'
---
Usar o `console.log()` para imprimir valores é um item comum na depuração. No entanto, isso não funciona muito bem quando o código é executado de forma assíncrona. Um exemplo é o código a seguir:

```jsx
handleCounterIncrement = () => {
  const { counter } = this.state;
  console.log(`Before update: ${counter}`);
  this.setState({ counter: counter + 1 });
  console.log(`After update: ${counter}`);
};
```

Você com certeza já deve ter visto algo assim não é? E por que isso não funciona? As chamadas `setState()` são assíncronas. Não há garantia de que o código fornecido seja executado em ordem. Isso pode levar a resultados como este:

![Chamando console.log(state) antes e depois de setState()](https://miro.medium.com/max/722/1*xJljheGz6VjwwjyF-6zAqQ.jpeg "Chamando console.log(state) antes e depois de setState()")

As duas chamadas do `console.log()` são executadas antes da execução de `setState()`. Assim, ele imprime o valor do estado anterior duas vezes. Se você deseja verificar o valor do seu estado antes e depois de chamar `setState()`, passe uma função de callback como segundo parâmetro dentro de `setState()`.

```jsx
handleCounterIncrement = () => {
  const { counter } = this.state;
  console.log(`before update: ${counter}`);
  this.setState({ counter: counter + 1 }, () => {
  console.log(`after update: ${this.state.counter}`);});
};
```

A função de callback será executado após a conclusão de `setState()`, fornecendo um comportamento síncrono para o seu `console.log()`.

![Resultado com callback no setState()](https://miro.medium.com/max/718/1*8n1lNRbNSyX0_oOhrWZXxA.jpeg "Resultado com callback no setState()")

# A Saideira

Esse artigo foi inspirado num artigo do [Jeremy Aw](https://medium.com/@jeremyinelysium), recomendo muito da uma olhada nas postagens dele! 

**Até a próxima!**