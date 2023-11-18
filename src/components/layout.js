import React from 'react'
import * as styles from './layout.module.css'

const Layout = ({ children }) => { return <div id={styles.main}>{children}</div> }
export default Layout
