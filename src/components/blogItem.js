import React from 'react'
import { Link } from 'gatsby'
import * as styles from './blogItem.module.css'

const BlogItem = ({ data, index }) => {
  const { title, longdate } = data.frontmatter
  const { slug } = data.fields
  return (
    <div id={index} className={styles.postItem}>
      <Link to={slug}>
        <p className={`${styles.blogTitle} white bold`}>{title}</p>
      </Link>
      <div className="orange">{longdate}</div>
      <hr />
    </div>
  )
}

export default BlogItem
