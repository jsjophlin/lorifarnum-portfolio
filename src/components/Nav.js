import React, { useState } from "react"
import cn from "classnames"
import { Link } from "gatsby"
import BurgerIcon from "../components/BurgerIcon"
import logo from "../../static/img/logo.svg"
import styles from "./Nav.module.css"

const Nav = ({ updateGrid, currentPage }) => {
  const [status, setStatus] = useState(false)
  const handleLogoClick = e => {
    // Only update grid images if we are on the home page
    if (currentPage === "home") {
      e.preventDefault()
      updateGrid("all")
    }
  }

  const handleMenuClick = e => {
    const id = e.currentTarget.id
    const burgerIcon = document.getElementById("burgerIcon")

    // Only update grid images if we are on the home page
    if (currentPage === "home") {
      e.preventDefault()
      burgerIcon.classList.toggle("change")
      setStatus(!status)

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

  const updateNav = status => {
    setStatus(!status)
  }

  return (
    <nav
      className={cn(
        styles.nav,
        status ? styles.active : "",
        "flex justify-center md:justify-between items-center md:block"
      )}
    >
      <div className="flex justify-between items-end my-8 relative">
        <figure>
          <Link
            onClick={handleLogoClick}
            to={"/"}
            className="flex flex-col md:flex-row items-center md:items-end"
          >
            <img
              className="w-16 md:w-12 h-auto mb-2 md:mb-0 flex-shrink-0"
              src={logo}
              alt="Lori Farnum logo"
            />
            <span
              className={cn(
                styles.logo_text,
                "text-xl text-brandBlue block md:ml-2 flex-shrink-0 leading-none"
              )}
            >
              Lori Farnum
            </span>
          </Link>
        </figure>
        <div
          className={cn(
            styles.menu_container,
            "bg-blue-800 px-12 py-12 md:p-0 fixed md:relative top-0 left-0 w-full bottom-0 z-30"
          )}
        >
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
      </div>
      <BurgerIcon className="inline-block md:hidden" updateNav={updateNav} />
    </nav>
  )
}

export default Nav
