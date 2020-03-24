import React from "react"
import style from "./layout.module.css"

const Layout = ({ children }) => {
  return <div id={style.main}>{children}</div>
}
export default Layout
