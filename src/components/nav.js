import React from "react"
import { Link } from "gatsby"
import logo from "../../static/img/logo.svg"
import styles from "./nav.module.css"

const Nav = props => {
  return (
    <nav>
      <figure className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} alt="Lori Farnum logo" />
        </Link>
      </figure>
      <ul className={styles.menu}>
        <li>Print</li>
        <li>Web</li>
        <li>Logos</li>
        <li>About</li>
      </ul>
    </nav>
  )
}

export default Nav
