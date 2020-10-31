import React from 'react'
import { Link } from 'gatsby'
import Style from './blogItem.module.css'

export default ({ data, index }) => {
  const { title, longdate } = data.frontmatter
  const { slug } = data.fields
  return (
    <div id={index} className={Style.postItem}>
      <Link to={slug}>
        <p className={`${Style.blogTitle} white bold`}>{title}</p>
      </Link>
      <div className="orange">{longdate}</div>
      <hr />
    </div>
  )
}
