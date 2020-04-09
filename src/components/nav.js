import React from "react"
// import style from "./nav.module.css"
import { Link } from "gatsby"
const Nav = ({ className }) => {
  console.log(className)

  return (
    <nav className={className}>
      <div className="siteName">
        <Link to="/">TEISENHOWER.DEV</Link>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/services">SERVICES</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
