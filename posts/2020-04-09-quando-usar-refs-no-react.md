---
title: Quando usar Refs no React?
description: >-
  Ao conhecer os "refs" pensamos que é algo ótimo e que deve ser usado a todo
  momento para facilitar o acesso de elementos e componentes. Porém, isso é um
  erro grave.
date: '2020-04-09 01:27:19'
thumbnail: assets/img/quando-usar-refs-no-react.png
category: react
background: '#2DA0C3'
---
Ao conhecer os "refs" pensamos que é algo ótimo e que deve ser usado a todo momento para facilitar o acesso de elementos e componentes. Porém, isso é um erro grave.

Ficar criando referências é algo custoso e consome memória. É muito mais simples, leve e até melhor para a manutenção e reutilização de código se você utilizar refs apenas em situações em que não há outra solução, como:

* Executar "focus()" em um `<input>`;
* Dar "play" ou "pause" em um `<vídeo>`;
* Acessar o elemento `<canvas>` para desenhar;
* Disparar animações imperativas;
* Acessar elementos criados por uma outra biblioteca ou framework.

Fora essas situações, normalmente podemos evitar o uso de refs.

Por exemplo, ao invés de acessar o estado de um componente filho para alterar um dado dele, você pode passar dados ao filho pelas suas propriedades.

O elemento `<dialog>` do HTML exibe uma modal. Se você acessá-lo, poderá exibi-lo executando o método "showModal()" e escondê-lo executando "close()".

Porém, o `<dialog>` também pode ser controlado pelo atributo "open". Então é melhor criar uma variável no "state" para controlar o atributo "open" ao invés de criar um "ref" para executar "showModal()" e "close()".

# A Saideira

Esse post foi inspirado no conteúdo lá da [TreinaWeb](https://www.treinaweb.com.br/). Recomendo o material deles!