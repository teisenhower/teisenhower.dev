import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./headshot.module.css"

const Headshot = () => {
  const data = useStaticQuery(graphql`
    query {
      fixedImage: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fixed(width: 504, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <div className={style.headshotWrapper}>
      <span className={style.headshotOutline}></span>
      <Img fixed={data.fixedImage.childImageSharp.fixed} />
    </div>
  )
}

export default Headshot
