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

### Acessando Elementos Filhos

Para acessar os elementos filhos de um componente acessamos "this.props.children".

Ao acessar um elemento filho podemos pegar o seu tipo pelo "type" e utilizar isso como se fosse uma tag. Assim poderemos modificar e adicionar propriedades.

```jsx
{
   this.props.children.map(element => <element.type {...element.props} ></element.type>)
}
```

### Referências - Refs

Referências servem para acessarmos elementos ou componentes. Criamos referências com "React.createRef()" e passamos na propriedade "ref" de um elemento ou componente.

```jsx
this.myRef = React.createRef();
<div ref={this.myRef} ></div>
```

Utilize refs apenas quando indispensável.

### Event Emitter

Podemos permitir a comunicação entre componentes com Event Emitters.

```jsx
import Events from 'events'; // importa o "events" do Node.js
const Channel = new Events.EventEmitter(); // instancia um emissor de eventos
```

Comece a ouvir eventos com "Channel.on(‘nomeDoEvento’, função)". Inicie os eventos no "componentDidMount()".

Pare de ouvir os eventos com "Channel.removeListener(‘nomeDoEvento’, função)". Faça isso no "componentWillUnmount ()".

### Capturando Erros dos Filhos

Podemos capturar erros vindos dos componentes filhos com o método "componentDidCatch(error, info)"  e com a função estática: 

```jsx
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
```

Use `static getDerivedStateFromError()`para renderizar uma UI alternativa após o erro ter sido lançado. Use `componentDidCatch()`para registrar informações do erro.

# Portais

Portais (Portals) nos permitem renderizar um elemento no lugar que quisermos, mesmo que este local esteja fora da nossa árvore de elementos ou fora da nossa aplicação React.

Um bom exemplo são os vídeos do Facebook. Quando estamos assistindo a um vídeo de um post e rolamos a página, um player flutuante com o nosso vídeo aparece, nos permitindo continuar assistindo o vídeo enquanto navegamos. O vídeo continua de onde parou.

![](https://d2v0x26thbzlwf.cloudfront.net/prod/384/img/rId82iacnnjf.lpa.png)

Poderíamos fazer isso com os Portais do React.

Em qualquer situação em que você precise renderizar um componente em qualquer outro lugar, seja dentro ou fora da sua aplicação, criar um Portal é uma boa solução.

### Criando Portais

Execute "ReactDOM.createPortal(element, container)".

O primeiro parâmetro é o componente a ser renderizado e o segundo é o elemento que receberá o componente.

# Contexto (Context)

Quando aprendemos a criar elementos filhos, vimos que podemos passar propriedades ao elementos para compartilhar dados. Porém, isso pode ser trabalhoso caso a gente precise compartilhar um certo grupo de dados entre vários componentes ao redor de toda a nossa aplicação.

Contextos (context) nos permitem passar dados aos componentes sem precisar passá-los manualmente pelas propriedades de cada componente.

### Usando Contextos

Crie um contexto com "React.createContext()". Você pode passar como parâmetro um valor inicial padrão.

```jsx
const MyContext = React.createContext();
```

A raiz da árvore de componentes que utilizarão esse contexto devem estar dentro de `<MyContext.Provider>`, o qual recebe uma propriedade "value" com os valores que serão passados aos componentes.

Os componentes que utilizarão o contexto devem receber este contexto em sua propriedade estática "contextType". Assim, em uma árvore com vários contextos, seu componente saberá de qual contexto pegar os dados.

# React DevTools

Ferramenta que nos permite analisar os componentes, suas propriedades e estados, facilitando debugar as aplicações feitas com React ou React Native.

### Instalação da Extensão para Navegadores

Você pode instalar a extensão para Chrome ou Firefox:

<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en>

<https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/>

### Instalação do pacote do NPM

Você também pode usar a React DevTools diretamente do Node.js. Para instalar, basta executar o comando "$ npm install -g react-devtools"

Execute no terminal o comando "$ react-devtools" e insira no `<head>` da sua aplicação a seguinte tag:

```jsx
<script src="http://localhost:8097"></script>
```

# A Saideira

Essa série continua!