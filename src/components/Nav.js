import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
import logo from "../../static/img/logo.svg"
import styles from "./Nav.module.css"

const Nav = ({ updateGrid, currentPage }) => {
  const handleLogoClick = e => {
    // Only update grid images if we are on the home page
    if (currentPage === "home") {
      e.preventDefault()
      updateGrid("all")
    }
  }

  const handleMenuClick = e => {
    const id = e.currentTarget.id

    // Only update grid images if we are on the home page
    if (currentPage === "home") {
      e.preventDefault()

      switch (id) {
        case "logosPrint":
          updateGrid("print")
          break
        case "logosWeb":
          updateGrid("web")
          break
        default:
          updateGrid("all")
          break
      }
    } else {
      // Save our choice in local storage to retrieve after new page loads (not on build server)
      if (typeof window !== "undefined") {
        switch (id) {
          case "logosPrint":
            localStorage.setItem("lf_currentImages", "print")
            break
          case "logosWeb":
            localStorage.setItem("lf_currentImages", "web")
            break
          default:
            localStorage.setItem("lf_currentImages", "all")
            break
        }
      }
    }
  }

  return (
    <nav className={cn(styles.nav, "flex justify-between items-end my-8")}>
      <figure>
        <Link onClick={handleLogoClick} to={"/"} className="flex items-end">
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
            <Link id="logosAll" onClick={handleMenuClick} to="/">
              All
            </Link>
          </li>
          <li className="mr-8">
            <Link id="logosPrint" onClick={handleMenuClick} to="/">
              Print
            </Link>
          </li>
          <li className="mr-8">
            <Link id="logosWeb" onClick={handleMenuClick} to="/">
              Web
            </Link>
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
