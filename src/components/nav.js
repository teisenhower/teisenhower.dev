import React from "react"
import style from "./nav.module.css"
const Nav = ({ className }) => {
  return (
    <nav className={className}>
      <div className="siteName">TEISENHOWER.DEV</div>
      <ul>
        <li>PROJECTS</li>
        <li>ABOUT</li>
        <li>BLOG</li>
      </ul>
    </nav>
  )
}
export default Nav
