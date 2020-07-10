---
title: React Hooks
description: Uma apresentação dos hooks no React pela TreinaWeb.
date: '2020-04-15 10:00:30'
category: react
background: '#2DA0C3'
---
# O que são Hooks?

Vimos no curso de criação de componentes com React que podemos criar nossos componentes utilizando tanto classes quanto funções. Também vimos que os componentes criados por classes possuíam várias funcionalidades, enquanto os componentes criados por funções eram bem mais simples.

Podemos dizer de forma resumida que os Hooks nos permitem utilizar estados e outras funcionalidades do React dentro de componentes criados por funções, fazendo com que não precisemos criar classes.

Os Hooks estão disponíveis a partir da versão 16.8.0 do React e sua adição à biblioteca não afeta as aplicações já existentes. Também é importante saber que a equipe responsável pelo desenvolvimento do React não pensa em remover os componentes criados por classes, então você não precisa se preocupar em parar de usar classes ou mudar o código de aplicações já existentes.

A seguir vamos comparar os componentes criados por classes e os criados por funções utilizando Hooks. Também veremos suas vantagens e entenderemos quando devemos utilizá-los.

# Por que usar Hooks? Quais as vantagens?

Vamos ver as vantagens de utilizar Hooks ao invés de classes.

Acabamos de ver como o nosso código para algo bem simples ficou bem mais curto. Outro motivo importante, que também vimos, é não precisar mais usar o "this", que pode ser confuso e atrapalhar iniciantes em JavaScript. Mas essas duas coisas são detalhes.

Nos componentes criados por classes, temos os LifeCycles, que são métodos executados em determinados momentos no tempo de existência de um componente, como o "componentDidMount()" e "componentDidUpdate()". Se precisarmos que algumas regras do nosso componente sejam executadas nesses momentos, teremos que escrever essas regras juntas nesses métodos, deixando a lógica do nosso componente um pouco picotada e bagunçada.

Já nos componentes criados por funções, veremos que podemos organizar melhor a posição das nossas funções, já que não temos que ficar escrevendo dentro de determinados métodos. Teremos muito mais controle do fluxo de funcionamento de nosso componente.

Uma das principais vantagens que os Hooks trazem é a fácil reutilização de lógica. Os componentes são muito bons para reutilizar elementos visuais, mas até agora traziam problemas quando a gente precisasse reutilizar algo não-visual, pois o código ficava mais verboso, complexo, e nem era tão perfeito assim.

Já com os Hooks podemos reutilizar lógica de uma forma muito mais simples. Tem até sites que ensinam a criar Hooks muito interessantes e que podemos utilizar em vários projetos.

# Quando usar?

A própria equipe responsável pelo React encoraja que todos comecem a usar os Hooks, assim que você souber como usá-los.

Hooks apenas podem ser criados dentro de componentes criados com funções, eles não funcionam em componentes criados por classes. Mas isso não significa que você deve reescrever seus componentes. A ideia é que os seus novos componentes sejam criados por funções, e que os já existentes criados com classes continuem assim, pois não há intenções de remover as classes do React. Porém, a intenção é que cada vez mais pessoas utilizem Hooks como a principal forma de criar componentes no React.

Pense então no seguinte: use componentes para reutilizar interface, hooks para reutilizar lógica.

# useState

Vamos conhecer o Hook mais básico do React, o useState, que vai nos permitir trabalhar com estados em componentes funcionais.

Teremos uma explicação de como utilizá-los e depois veremos como o React lida com esses estados.

### Como usar?

```jsx
const [nome, setNome] = useState(valorInicial);
```

# useEfect

Agora nós vamos conhecer outro Hook básico do React, o useEffect. Ele nos permite executar efeitos colaterais (side effects) nos componentes funcionais, nos permitindo ter grande controle do que acontece na nossa aplicação.

Primeiro vamos ver o que são esses efeitos, como utilizar esse Hook, conhecer o Array de dependências, aprender a trabalhar com Event Listeners e os cuidados que precisamos tomar para evitar problemas com esse Hook.

### O que são efeitos?

O useEffect nos permite trabalhar com efeitos colaterais em nossa aplicação.

Um efeito colateral seria a consequência, algo que ocorre porque outra coisa aconteceu. Eles são muito úteis, pois se encaixam perfeitamente na natureza reativa do React: executar algo em resposta a outra coisa.

Então podemos usar esse Hook para executar um código quando o componente é criado (como o "componentDidMount"), a cada nova renderização ou reagir à alteração de uma ou mais variáveis.

Vamos entender melhor a seguir.

### Como usar?

Quando queremos executar uma função a cada renderização:

```jsx
useEffect(() => {
});
```

Quando queremos executar uma função apenas quando o componente for criado:

```jsx
useEffect(() => {
}, []);
```

Quando queremos executar uma função a cada alteração de determinadas variáveis:

```jsx
useEffect(() => {
}, [var1, var2 . . . ]);
```

Também podemos colocar uma função como retorno para ser executada quando o componente for removido/atualizado.

```jsx
useEffect(() => {
            return () => {
            }
}, [var1, var2 . . .]);
```

# useRef

Vamos conhecer o useRef, um[[[  Hook bem interessante que nos permite acessar elementos do DOM e também salvar alguns valores que podem ser úteis no fluxo dos nossos códigos.

### Como usar?

Passe a referência à propriedade "ref" do elemento ao qual quer ter acesso. O elemento estará dentro da propriedade "current":

```jsx
const elemento = useRef();
<div ref={elemento}></div>
```

Também podemos salvar qualquer coisa na propriedade current.

```jsx
const elemento = useRef();
element.current = 5;
```

# useContext

Um problema comum nas aplicações é o compartilhamento de dados entre os vários componentes. Para facilitar isso temos os contextos, que aprendemos a criar no curso de criação de componentes.

Agora nós vamos conhecer um Hook criado para facilitar a criação de contextos.

### Breve Revisão sobre Contextos

Contextos foram criados para se compartilhar dados entre nossos componentes do React. Isso evita o trabalho de ficar passando dados pelas propriedades dos componentes. Caso você tenha uma árvore muito grande de elementos, será trabalhoso ficar passando esses dados, e qualquer alteração no meio do caminho pode quebrar a sua aplicação.

Pense então nesses dados dentro dos contextos como dados globais, que podem ser acessados de qualquer lugar da aplicação, nos poupando de ficar passando cada propriedade para cada nível em nossa árvore manualmente.

Isso facilita muito o nosso trabalho quando precisamos que algum dado precise se dissipar por vários componentes e/ou níveis da nossa árvore de componentes. Um exemplo muito comum é quando criamos uma aplicação que pode ter o seu tema alterado. Imagine o trabalho para fazer todos os elementos do sistema ficarem sabendo se o usuário escolheu um tema claro ou escuro para que os componentes atualizem seu estilo. Outros exemplos clássicos que podemos citar também são os dados do usuário logado ou o idioma selecionado.