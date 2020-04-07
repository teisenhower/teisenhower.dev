import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Nav from "../components/nav"
import BlogItem from "../components/blogItem"
import Style from "./blog.module.css"
export default ({ data }) => (
  <div id="main">
    <Layout>
      <Nav />
      <div id={Style.posts}>
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <BlogItem
            images={data.images.edges}
            key={index}
            data={node}
            index={index}
          ></BlogItem>
        ))}
      </div>
    </Layout>
    <Footer />
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            thumbnail
            longdate
          }
          fields {
            slug
          }
        }
      }
    }
    images: allS3Image {
      edges {
        node {
          file: localFile {
            image: childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          Key
        }
      }
    }
  }
`
