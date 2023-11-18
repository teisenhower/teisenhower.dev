import React from 'react'
import { graphql } from 'gatsby'
import './index.css'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BlogItem from '../components/blogItem'
import * as styles from './blog.module.css'
import Nav from '../components/nav'

const IndexPage = ({ data }) => {
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
      </Helmet>
      <Layout>
        <Nav />
        <div id={styles.posts}>
          {data.allMarkdownRemark.edges.map(({ node }, index) => {
            return (
              <BlogItem
                key={node.frontmatter.title}
                data={node}
                index={index}
              />
            )
          })}
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            longdate
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
