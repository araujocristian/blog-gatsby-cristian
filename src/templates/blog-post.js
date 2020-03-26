import React from "react"
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
