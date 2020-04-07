import React from "react"
import style from "./nav.module.css"
import { Link } from "gatsby"
const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <div className="siteName">
        <Link to="/">TEISENHOWER.DEV</Link>
      </div>
      <ul>
        <li>
          <Link to="/blog">PROJECTS</Link>
        </li>
        <li>
          <Link to="/blog">ABOUT</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
