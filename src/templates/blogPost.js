import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Style from './blogPost.module.css'
import Newsletter from '../components/newsletter'

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
        <div id={Style.header}>
          <h1 className={`${Style.blogTitle} white`}>
            {post.frontmatter.title}
          </h1>
        </div>
        <h4 className={`${Style.blogDate} orange`}>
          {post.frontmatter.longdate}
        </h4>
        <div
          id={Style.blogPost}
          className="white"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <section id={Style.newsletter}>
          <h3>Subscribe to the newsletter!</h3>
          <Newsletter />
        </section>
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
