import React from "react"
import cn from "classnames"
import "../styles/burger-menu.css"

const BurgerIcon = ({ className, updateNav }) => {
  const handleClick = e => {
    e.currentTarget.classList.toggle("change")
    e.currentTarget.classList.contains("change")
      ? updateNav(false)
      : updateNav(true)
  }

  return (
    <button
      onClick={handleClick}
      id="burgerIcon"
      className={cn(
        className,
        "burger_icon absolute top-0 right-0 z-40 cursor-pointer mt-4 mr-6"
      )}
    >
      <span className="bar1" />
      <span className="bar2" />
      <span className="bar3" />
    </button>
  )
}

export default BurgerIcon
