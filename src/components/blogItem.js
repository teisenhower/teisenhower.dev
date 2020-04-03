import React from "react"
import Style from "./blogItem.module.css"
import Img from "gatsby-image"

export default ({ images, data, index }) => {
  const { title, date, thumbnail } = data.frontmatter
  return (
    <div id={index} className={Style.postItem}>
      <div className={Style.blogImageWrapper}>
        <span className={Style.blogImageOutline}></span>
        <Img
          className={Style.blogImage}
          fluid={
            images[images.findIndex(i => i.node.Key == thumbnail)].node.file
              .image.fluid
          }
        />
      </div>
      <div className="orange">{date}</div>
      <p className={Style.blogTitle + " white bold"}>{title}</p>
    </div>
  )
}
