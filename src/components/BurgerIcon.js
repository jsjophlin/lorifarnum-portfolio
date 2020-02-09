import React from "react"
import cn from "classnames"
import "../styles/burger-menu.css"

const BurgerIcon = ({ className, status, updateNav }) => {
  const handleClick = e => {
    e.currentTarget.classList.toggle("change")
    e.currentTarget.classList.contains("change")
      ? updateNav(false)
      : updateNav(true)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        className,
        "burger_icon absolute top-0 right-0 z-20 cursor-pointer mt-2 mr-3"
      )}
    >
      <span className="bar1" />
      <span className="bar2" />
      <span className="bar3" />
    </button>
  )
}

export default BurgerIcon
