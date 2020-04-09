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

```jsx
<MeusComponentes.FunctionComponent />
```

Ou:

```jsx
const nome = "FunctionComponent";
const ComponenteEscolhido = MeusComponentes[nome];

<ComponenteEscolhido />
```

# Propriedades

Dados que passamos aos componentes pela tag (`<Component nome="Akira" />`).

Eles não podem ser alterados. São acessados pela propriedade "props".

# Propriedades e o Operador Spread

Você pode passar várias propriedades de uma só vez passando um objeto com o operador spread.

```jsx
<User {...dados}  />
```

# Estados

Dados internos de cada componente que podem ter seu valor alterado. São acessados pela propriedade "state".

# Alterando Estados

Utilize o método "`setState()`" para alterar os estados de um componente. Este método reexecuta o "`render()`" para atualizar a view, então não execute "`setState()`" dentro de "`render()`" para não causar um looping infinito.

```jsx
this.setState({
    time: 5
})
```

Ou

```jsx
this.setState(function(state, props){
    return {
        time: state.time + 1
    }
}
```

### Lista de Elementos

A maneira mais comum de se criar uma lista de elementos é usando o ".map()".

```jsx
<ul>
    {minhaLista.map( pessoa => 
        <li>
          {pessoa .nome} - {pessoa .idade} anos
        </li> 
    )}
</ul>
```

### Keys

Devemos criar chaves únicas para identificar cada elemento de uma lista.

```jsx
<ul>
    {minhaLista.map( pessoa => 
        <li key={pessoa.id}>
          {pessoa .nome} - {pessoa .idade} anos
        </li> 
    )}
</ul>
```

### Parâmetros de Funções

Podemos usar o ".bind()" para passar parâmetros para as funções

```jsx
<ul>
    {minhaLista.map( pessoa => 
        <li 
          onClick={this.sayMyName.bind(this, pessoa)} 
          key={pessoa.id} 
        >
          {pessoa .nome} - {pessoa .idade} anos
        </li> 
    )}
</ul>
```

### Fragmentos

Podemos utilizar Fragmentos para retornar vários elementos de uma só vez sem precisar criar Arrays ou elementos adicionais que servirão de containers.

```jsx
return <React.Fragment>
    <li key="0" >Karen</li>
    <li key="1" >Maria</li>
    <li key="2" >João</li>
</React.Fragment>
```

Também podemos escrever da forma simplificada:

```jsx
return <>
    <li key="0" >Karen</li>
    <li key="1" >Maria</li>
    <li key="2" >João</li>
</>
```

# O que são Elementos Filhos?

Até o momento nós só criamos componentes e os utilizamos na raiz da aplicação. Mas podemos ir além disso, pois o React permite que a gente trabalhe facilmente com elementos filhos.

Elementos filhos são os elementos que vão dentro das tags de outro elemento.

```jsx
<MeuComponente>
   <MeuTitulo />
</MeuComponente>
```

Até mesmo se você escrever um texto, esse texto será considerado filho do elemento no qual escrevemos.

```jsx
<MeuComponente>
   Texto
</MeuComponente>
```

Isso é muito útil quando queremos, por exemplo, permitir que parte de um componente tenha uma estrutura customizada. Ao invés de passar a estrutura do JSX por propriedade, passamos como elementos filhos entre as tags, deixando a aparência do código mais legível e similar ao HTML.

# A Saideira

Essa série continua!