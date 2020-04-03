import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Projects } from "../components/Projects"
// import Search from "../components/Search"

const SearchPage = props => {
  return (
    <Layout>
      <SEO title="Projetos | Cristian Araujo" />
      <Projects />
    </Layout>
  )
}

export default SearchPage
