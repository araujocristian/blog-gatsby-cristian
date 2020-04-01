import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = props => {
  return (
    <Layout>
      <SEO title="Search | Cristian Araujo" />
      <Search />
    </Layout>
  )
}

export default SearchPage
