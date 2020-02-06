import React from "react"
import { Link } from "gatsby"
import logo from "../../static/img/logo.svg"
import styles from "./Nav.module.css"

const Nav = props => {
  const handleClickPrint = e => {
    console.log("Print")
  }

  const handleClickWeb = e => {
    console.log("Web")
  }

  return (
    <nav>
      <figure className={styles.logo}>
        <Link to={"/"}>
          <img src={logo} alt="Lori Farnum logo" />
        </Link>
      </figure>
      <ul className={styles.menu}>
        <li>
          <button onClick={handleClickPrint}>Print</button>
        </li>
        <li>
          <button onClick={handleClickWeb}>Web</button>
        </li>
        <li>
          <Link to="/logos">Logos</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
