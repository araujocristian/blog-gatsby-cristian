/* import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BlogPost = () => {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = useStaticQuery(graphql`
    query Post($slug: String) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  )
}

export default BlogPost
 */

import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <>
      <h1>Title: {post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
