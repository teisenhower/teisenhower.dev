import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Nav from "../components/nav"
import Img from "gatsby-image"
import Style from "./blogPost.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  const images = data.images.edges
  return (
    <div id="main">
      <Layout>
        <Nav />
        <div className={Style.blogImageWrapper}>
          <span className={Style.blogImageOutline}></span>
          <Img
            className={Style.headerImage}
            fluid={
              images[
                images.findIndex(i => i.node.Key === post.frontmatter.thumbnail)
              ].node.file.image.fluid
            }
          />
        </div>
        <div id={Style.header}>
          <h1 className={Style.blogTitle + " white"}>
            {post.frontmatter.title}
          </h1>
          <h1 className={Style.blogDate + " orange"}>
            {post.frontmatter.longdate}
          </h1>
        </div>
        <div
          id={Style.blogPost}
          className="white"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
      <Footer />
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        thumbnail
        date
        longdate
      }
    }
    images: allS3Image {
      edges {
        node {
          file: localFile {
            image: childImageSharp {
              fluid(quality: 100, maxWidth: 1500) {
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
