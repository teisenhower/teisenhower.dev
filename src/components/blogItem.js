import React from "react"
import dummyImage from "../images/dummyImage.png"
import Style from "./blogItem.module.css"
export default ({ data, index }) => {
  const { title, date, thumbnail } = data.frontmatter
  return (
    <div id={index} className={Style.postItem}>
      <div className={Style.blogImageWrapper}>
        <span className={Style.blogImageOutline}></span>
        <img className={Style.blogImage} src={dummyImage} />
      </div>
      <div className="orange">{date}</div>
      <p className={Style.blogTitle + " white bold"}>{title}</p>
    </div>
  )
}
