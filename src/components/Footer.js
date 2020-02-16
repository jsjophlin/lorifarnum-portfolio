import React from "react"
import cn from "classnames"
import styles from "./Footer.module.css"

const date = new Date()
const year = date.getFullYear()

const Footer = () => (
  <footer
    className={cn(
      styles.footer,
      "flex flex-col md:flex-row md:justify-between mb-4"
    )}
  >
    <ul className="flex flex-wrap mb-4 md:mb-0">
      <li className="mr-4">
        <a
          className="hover:text-brandBlue"
          href="https://dribbble.com/lorifarnumdesign"
        >
          Dribble
        </a>
      </li>
      <li className="mr-4">
        <a
          className="hover:text-brandBlue"
          href="https://instagram/lorifarnumdesign"
        >
          Instagram
        </a>
      </li>
      <li className="mr-4">
        <a
          className="hover:text-brandBlue"
          href="https://facebook.com/lorifarnumdesign"
        >
          Facebook
        </a>
      </li>
      <li className="mr-4">
        <a
          className="hover:text-brandBlue"
          href="https://www.linkedin.com/in/lorifarnum/"
        >
          LinkedIn
        </a>
      </li>
      <li className="mr-4">
        <a className="hover:text-brandBlue" href="mailto:lori@lorifarnum.com">
          lori@lorifarnum.com
        </a>
      </li>
    </ul>
    <div className="text-body text-base">{`All Content © ${year} Lori Farnum`}</div>
  </footer>
)

export default Footer
