import React from "react"
import { Link, graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.markdownRemark

  if (data === null) {
    return (
      <div>
        <h1>Page Not Found</h1>

        <Link to="/">
          <div>
            <span>If you lost, click here to go homepage </span>
          </div>
        </Link>
      </div>
    )
  }

  return <div>{post.frontmatter.title}</div>
}

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        keywords
        date
      }
      excerpt
      wordCount {
        words
      }
    }
  }
`
