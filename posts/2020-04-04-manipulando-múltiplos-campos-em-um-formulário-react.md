---
title: Manipulando múltiplos campos em um formulário React
description: Como manipular vários campos em um formulário React com apenas uma função.
date: '2020-04-04 04:36:32'
thumbnail: assets/img/manipulando-múltiplos-campos-em-um-formulário-react.png
category: react
background: '#2DA0C3'
---
Supondo que você tenha um formulário com vários tipos de entrada `input, textarea, select` e afins, podemos imaginar que deveríamos criar uma função de change para cada um deles.

Porem podemos melhorar isso criando apenas uma função global que recebe o evento e faz a mudança a partir do tipo.

# O componente

Temos o componente a seguir e precisamos controlar o estado a partir das mudanças dos campos do formulário.

```jsx
import React, { Component } from 'react';

class MyForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            fruit: 'orange',
            message: ''
        }

        this.fruits = [
            {'name': 'Apple', 'value': 'apple'},
            {'name': 'Banana', 'value': 'banana'},
            {'name': 'Orange', 'value': 'orange'}
        ];
    }

    render(){
        const { state } = this;
        return (
            <form>
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={state.name} onChange={} /> {state.name}
                    </label>
                </div>
                <div>
                    <label>
                        Fruit:
                        <select value={state.fruit} name="fruit" onChange={}>
                            {
                                this.fruits.map(fruit => <option value={fruit.value} >{fruit.name}</option>)
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea name="message" value={state.message} onChange={} />
                    </label>
                </div>
                <input type="submit" value="Enviar" />
            </form>
        )
    }
}

export default MyForm;
```

# A função

Podemos então criar uma função `handleChange` que receba como parâmetro um evento e a partir disso faça a mudança do estado correto.

```jsx
  handleChange(event) {
    const { type, name, checked, value } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: newValue,
    });
  }
```

> Foi necessário criar um verificador `type === "checkbox" ? checked : value;` para que nos casos onde o tipo é `checkbox` o valor seja pego corretamente.

# Resultado

Depois de criado precisamos colocar a função `handleChange` no `onChange` de cada componente.

>Não esquecer de dar um `bind` na função para trabalharmos com o contexto correto.

```jsx
import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      fruit: "orange",
      message: "",
    };

    this.fruits = [
      { name: "Apple", value: "apple" },
      { name: "Banana", value: "banana" },
      { name: "Orange", value: "orange" },
    ];

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { type, name, checked, value } = event.target;

    const newValue = type === "checkbox" ? checked : value;

    this.setState({
      [name]: newValue,
    });
  }

  render() {
    const { state } = this;
    return (
      <form>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={this.handleChange}
            />{" "}
            {state.name}
          </label>
        </div>
        <div>
          <label>
            Fruit:
            <select
              value={state.fruit}
              name="fruit"
              onChange={this.handleChange}
            >
              {this.fruits.map((fruit) => (
                <option value={fruit.value}>{fruit.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Message:
            <textarea
              name="message"
              value={state.message}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default MyForm;

```

# A Saideira

Para mais dicas como essa, não deixa de acompanhar o nosso blog e me seguir nas redes sociais! 

**Até a próxima!** 