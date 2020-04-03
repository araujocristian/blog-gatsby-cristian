import React from "react"

import Layout from "../components/Layout/"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre mim | Cristian Araujo"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
    />
    <MainContent aboutPage>
      <h1>Sobre mim</h1>
      <p>
        Olá! Meu nome é Cristian Araujo de Jesus, nasci em Santo Amaro/BA, morei
        minha vida quase inteira em Salvador/BA mas hoje moro em São Paulo/SP.
        Atualmente sou Analista de Sistemas Sênior da{" "}
        <a
          href="https://www.zup.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZUP Innovation
        </a>
        , além de ser apaixonado por empreendedorismo, finanças e psicologia
        comportamental.
      </p>

      <p>
        Já fui colaborador em alguns projetos como{" "}
        <a
          href="https://bigdelivery.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          BigDelivery
        </a>
        ,{" "}
        <a
          href="https://www.bb.com.br/pbb/pagina-inicial/bb-digital/solucoes/app-bb#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          APP Banco do Brasil
        </a>{" "}
        e outros mais. Sou Técnico em Eletrônica pelo Instituto Federal da Bahia
        - IFBA, Técnico em Redes pelo SENAI/BA. Curso Engenharia da Computação
        na Universidade Federal da Bahia - UFBA e Gestão de Tecnologia da
        Informação na UNIDOM. <i>Ufa!</i>
      </p>

      <p>
        Sou muito comunicativo e sou o otimista da turma. No meu tempo livre,
        gosto aprender coisas novas e gostaria de compartilhar ainda mais tudo
        que estou aprendendo, por isso nasceu esse blog.
      </p>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML e Template Languages</li>
        <li>Design Responsivo (Mobile First)</li>
        <li>CSS</li>
        <li>Javascript (Design Patterns, Testes, ES6/7)</li>
        <li>ReactJS / Redux / Flux</li>
        <li>React Native</li>
        <li>Gatsby</li>
        <li>NodeJS</li>
        <li>Automatizadores (Grunt, Gulp, Webpack, Parcel)</li>
        <li>Linux</li>
        <li>Git</li>
        <li>Scrum e Kanban</li>
        <li>TDD e Continuous Integration</li>
        <li>O que eu não sei, estarei dispoto a aprender =)</li>
      </ul>

      <h2>Contato</h2>

      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>

      <SocialLinks aboutPage hideStyle />
    </MainContent>
  </Layout>
)

export default AboutPage
