---
title: Entendendo o Diffing Algorithm no React
description: >-
  Fazer alterações diretamente no DOM pode comprometer a performance da sua
  aplicação se não for feita corretamente. Vamos entender como evitar esses
  problemas.
date: '2020-04-08 10:44:05'
thumbnail: assets/img/entendendo-o-diffing-algorithm-no-react.png
category: react
background: '#2DA0C3'
---
Fazer alterações diretamente no DOM pode comprometer a performance da sua aplicação se não for feita corretamente. Outros problemas também podem ocorrer como, por exemplo, o gerenciamento de event listeners adicionados à elementos que estão sendo adicionados ou removidos.

Com o React não precisamos nos preocupar com nada disso, e ele ainda lida com as alterações do DOM de maneira inteligente utilizando um algoritmo que faz uma análise em um DOM Virtual para saber exatamente onde as alterações são necessárias. Assim o React acessa o DOM o menor número de vezes possível.

É importante entender como o React funciona, pois isso pode te ajudar a evitar certas situações que podem levar a perda de performance.

Quando executamos o método "render()", uma árvore de elementos é criada. Quando alteramos props ou state de um componente, o "render()" irá retornar algo diferente. A inteligência do React permite que ele faça uma diferenciação rápida, pois analisar totalmente o código gerado em uma aplicação apenas para acessar o DOM um número mínimo de vezes também não seria viável, pois milhares de comparações teriam que ser feitas.

# Comparando Elementos

Dois elementos diferentes provavelmente retornarão árvores de elementos diferentes.

O React primeiro compara os elementos que estão na raiz. Imagine a seguinte situação: temos um componente `<ListaUsuarios />` que é removido da tela e no lugar dele é inserido um componente chamado `<ListaProdutos />`.

Obviamente o "render()" desses dois componentes retornarão conteúdo diferente, então neste momento o React nem se preocupa mais em fazer comparações. A árvore em questão é apagada e uma nova é construída do zero.

Isso acontece com qualquer tipo de elemento.

Então:

```jsx
<div>
    <ListaProdutos />
</div>

<span>
    <ListaProdutos />
</span>
```

No exemplo acima mantivemos o componente `<ListaProdutos />`, mas o elemento a sua volta (`<div>` e `<span>`) são diferentes. Isso faria com que o React apagasse totalmente nosso `<ListaProdutos />` e criasse um novo, mesmo que as propriedades e estados de `<ListaProdutos />` não tivessem sido alterados.

### Elementos do mesmo tipo

Quando a comparação chega a um lugar onde os elementos são do mesmo tipo, o React analisa os seus atributos. Se os atributos diferem, apenas eles serão atualizados e o resto continua intocado.

```jsx
<div class="ativado" style={{color: ‘green’, fontSize: ‘14px’}}>
    <span>TreinaWeb</span>
<div>
<div class="desativado" style={{color: ‘red’, fontSize: ‘14px’}} >
    <span>TreinaWeb</span>
<div>
```

No exemplo acima temos o mesmo elemento (`div`), então apenas o que é diferente de atributo será alterado. O React é inteligente o suficiente para, inclusive, saber alterar apenas o "color" de "style" e manter o "fontSize" intocado.

Após fazer a diferenciação de um elemento, o React começa a verificar os elementos que estão dentro dele e o ciclo se reinicia, verificando se são elementos do mesmo tipo ou não.

### Componentes do mesmo tipo

Quando um componente é atualizado a sua instância continua a mesma, então métodos como o "constructor()" e "componentDIdMount()" não serão executados novamente, já que são eventos disparados apenas na inicialização.

Métodos de atualização, como o "componentWillReceiveProps()" e "componentWillUpdate()" são chamados. O "render()" é executado novamente para que seu conteúdo seja comparado ao estado anterior para poder ser atualizado também, e lá dentro todo esse ciclo também se reinicia.

### Diferença entre elementos filhos e chaves

Por padrão React irá analisar os elementos filhos e, ao encontrar uma diferença, fará as alterações necessárias.

Imagine a seguinte lista:

```jsx
<ul>
    <li>Maria</li>
    <li>João</li>
</ul>

<ul>
    <li>Maria</li>
    <li>João</li>
    <li>Karen</li>
</ul>
```

No exemplo acima o React verá que o elemento raiz (ul) é o mesmo, então saberá que não precisa alterar nada e irá verificar os elementos filhos.

Ao chegar nos filhos verá que os dois primeiros `<li>` são idênticos, então não precisarão de alterações também. Agora temos um novo elemento, então ele simplesmente será inserido no final. Bem simples não é mesmo?

Mas e se o novo item tivesse sido colocado no começo da lista?

```jsx
<ul>
    <li>Maria</li>
    <li>João</li>
</ul>

<ul>
    <li>Karen</li>
    <li>Maria</li>
    <li>João</li>
</ul>
```

Veja que agora o primeiro item é diferente do novo primeiro, o segundo é diferente do segundo e o João que antes já existia na lista agora será visto como um novo item, pois agora está em terceiro.

Isso fará com que o React pense que precisa fazer duas alterações e a inserção de um novo item (3 operações) ao invés de apenas inserir um item novo no começo (1 operação).

Então, como fazer para o React reconhecer que aqueles itens de antes eram os mesmos? É nesse momento que entram as chaves! Elas identificam cada um dos itens de uma lista como únicos e permitem que o React consiga identificar os itens.

```jsx
<ul>
    <li key="11" >Maria</li>
    <li key="22" >João</li>
</ul>

<ul>
    <li key="33" >Karen</li>
    <li key="11" >Maria</li>
    <li key="22" >João</li>
</ul>
```

Agora o React é capaz de saber que o elemento com a chave "33" é o novo primeiro item e que os demais apenas foram movidos. Ao comparar esses itens pela chave o React perceberá que eles não sofreram nenhuma alteração e os deixará intactos.

Se isso já é ótimo para essa lista simples com três itens, imagine em uma aplicação real, onde teremos listas muito maiores com componentes bem mais complexos!

Por isso que utilizar o îndice do elemento no Array como chave é ruim, pois o índice muda conforme modificamos o Array, fazendo com que essas chaves não tenham serventia nenhuma para o React reconhecer um elemento.

```jsx
<ul>
    <li key="0" >Maria</li>
    <li key="1" >João</li>
</ul>

<ul>
    <li key="0" >Karen</li>
    <li key="1" >Maria</li>
    <li key="2" >João</li>
</ul>
```

Veja que nesse exemplo estamos usando o índice dos elementos no Array. Eles acabaram ficando com a chave diferente. Maria antes tinha a chave 0 e agora está com a chave 1, fazendo o React reconhecer como um elemento diferente, o que o fará pensar que todos os elementos mudaram, tendo novamente que fazer três operações para atualizar os elementos.

Outro erro comum é utilizar números aleatórios, como os gerados por "Math.random()", como chave. Lembre-se que isso irá atrapalhar o funcionamento do React e prejudicando a performance da aplicação.