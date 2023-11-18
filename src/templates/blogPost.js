import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/nav'
import * as styles from './blogPost.module.css'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div id="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terrence Eisenhower - Developer</title>
        <link rel="canonical" href="https://www.teisenhower.dev/" />
        <meta name="author" content="Terrence Eisenhower" />
        <meta
          name="keywords"
          content="web, developer, development, html, css, js, php, react, gatsby, blog"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@teisenhower" />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:description" content={post.frontmatter.excerpt} />
        <meta name="twitter:image" content="https://s3.amazonaws.com/teisenhower.dev/readme-assets/T-icon.png" />
      </Helmet>
      <Layout>
        <Nav />
        <div id={styles.header}>
          <h1 className={`${styles.blogTitle} white`}>
            {post.frontmatter.title}
          </h1>
        </div>
        <h4 className={`${styles.blogDate} orange`}>
          {post.frontmatter.longdate}
        </h4>
        <div
          id={styles.blogPost}
          className="white"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        longdate
      }
      excerpt
    }
  }
`
