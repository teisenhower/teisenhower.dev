import React from 'react'
import { Link } from 'gatsby'
import * as styles from './nav.module.css'
import Icons from './icon'

const Nav = () => {
  return (
    <nav className="alpha">
      <Link id={styles.teisenhower} to="/">
        @teisenhower
      </Link>
      <Icons />
    </nav>
  )
}
export default Nav
