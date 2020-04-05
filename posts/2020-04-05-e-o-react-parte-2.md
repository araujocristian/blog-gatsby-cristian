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

# Criando componentes com funções

Crie uma função com o nome do componente e retorne os elementos.

```jsx
function FunctionComponent(){
   return <h1>Ola Web Developers!</h1>;
}
```

# Criando componentes com classes

Crie uma classe estendendo a classe Component fornecida pelo React. Retorne os elementos no método "render()".

```jsx
class ClassComponent extends React.Component {
  render() {
    return <h1>Ola web developers!</h1>;
  }
}
```

# Utilizando componentes

Chame o componente pelo nome como se fosse uma tag. Todas as tags devem ser fechadas.

```jsx
<ClassComponent></ClassComponent>
```

ou

```jsx
<ClassComponent />
```

### Acessando componentes de Objetos

Podemos ter componentes dentro de objetos:

```jsx
const MeusComponentes = {
   FunctionComponent: function(){
      return <h1>Ola web developers!</h1>
   }
}

```

Para acessar:

```
<MeusComponentes.FunctionComponent />
```

Ou:

```
const nome = "FunctionComponent";
const ComponenteEscolhido = MeusComponentes[nome];

<ComponenteEscolhido />
```



# A Saideira

Essa série continua!