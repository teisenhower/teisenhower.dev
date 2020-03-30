import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./headshot.module.css"

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      fixedImage: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={style.headshotWrapper}>
      <span className={style.headshotOutline}></span>
      <Img fluid={data.fixedImage.childImageSharp.fluid} />
    </div>
  )
}

export default Headshot
