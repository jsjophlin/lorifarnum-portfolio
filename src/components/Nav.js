import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
import logo from "../../static/img/logo.svg"
import styles from "./Nav.module.css"

const Nav = ({ updateGrid }) => {
  const handleClickAll = e => {
    updateGrid("all")
  }

  const handleClickPrint = e => {
    updateGrid("print")
  }

  const handleClickWeb = e => {
    updateGrid("web")
  }

  return (
    <nav className={cn(styles.nav, "flex justify-between items-end my-8")}>
      <figure>
        <Link to={"/"} className="flex items-end">
          <img className="w-16 h-auto" src={logo} alt="Lori Farnum logo" />
          <span
            className={cn(styles.logo_text, "h5 text-brandBlue block ml-2")}
          >
            Lori Farnum
          </span>
        </Link>
      </figure>
      <div>
        <ul className={cn(styles.menu, "flex justify-end m-0")}>
          <li className="mr-8">
            <button onClick={handleClickAll}>All</button>
          </li>
          <li className="mr-8">
            <button onClick={handleClickPrint}>Print</button>
          </li>
          <li className="mr-8">
            <button onClick={handleClickWeb}>Web</button>
          </li>
          <li className="mr-8">
            <Link to="/logos">Logos</Link>
          </li>
          <li className="mr-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
