import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import { MainContent } from "../components/Post/styled"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found | Cristian Araujo" />

    <MainContent>
      <h1>404!</h1>
      <p>Ops... Não tem nada por aqui.</p>
    </MainContent>
  </Layout>
)

export default NotFoundPage
