import React from "react"
import Style from "./blogItem.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ images, data, index }) => {
  const { title, longdate, thumbnail } = data.frontmatter
  const { slug } = data.fields
  return (
    <div id={index} className={Style.postItem}>
      <div className={Style.blogImageWrapper}>
        <span className={Style.blogImageOutline}></span>
        <Link to={slug}>
          <Img
            className={Style.blogImage}
            fluid={
              images[images.findIndex(i => i.node.Key == thumbnail)].node.file
                .image.fluid
            }
          />
        </Link>
      </div>
      <div className="orange">{longdate}</div>
      <p className={Style.blogTitle + " white bold"}>{title}</p>
    </div>
  )
}
