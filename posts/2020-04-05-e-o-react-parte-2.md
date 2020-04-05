---
title: E o React? Parte 2
description: Um resumo sobre o que é React pela TreinaWeb.
date: '2020-04-05 02:06:16'
thumbnail: assets/img/e-o-react.png
category: react
background: '#2DA0C3'
---
A primeira parte desse tutorial pode ser encontrada aqui: [E o React? Parte 1](https://araujocristian.codes/e-o-react/)

Continuando a nossa saga sobre React do curso da TreinaWeb, vamos desmistificar os componentes.

# O que são Componentes?

Os componentes são elementos de interface, assim como inputs e buttons. Eles têm uma aparência e comportamento próprios. Podemos configurá-los, passar valores e o que mais precisarmos.

Mas, para criar aplicações, temos que criar elementos de interface mais complexos, como menus, modais, sliders, etc.

E se pudéssemos criar nossos próprios elementos para poder reutilizá-los em qualquer lugar?

Imagine que queremos um componente que seja uma simples caixa de texto, mas que logo abaixo ela exiba o total de caracteres digitados. Podemos, por exemplo, criar este componente, e então reutilizá-lo em qualquer parte da nossa aplicação e até em outras aplicações.

Poderíamos chamá-lo de TextCounter. Para utilizá-lo, bastaria escrever o simples código:

```jsx
<TextCounter />
```

Bem simples não? Dentro dele já está todo o seu comportamento, então a partir do momento em que um componente está pronto, não precisamos mais nos preocupar em como ele funciona. Apenas o chamamos.

# A Saideira

Essa série continua!