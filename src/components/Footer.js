import React from "react"

const Footer = () => (
  <footer className="flex flex-col md:flex-row md:justify-between mb-4">
    <ul className="flex flex-wrap mb-4 md:mb-0">
      <li className="mr-4">
        <a href="https://www.dribble.com">Dribble</a>
      </li>
      <li className="mr-4">
        <a href="https://www.instagram.com">Instagram</a>
      </li>
      <li className="mr-4">
        <a href="https://www.facebook.com">Facebook</a>
      </li>
      <li className="mr-4">
        <a href="mailto:lori@lorifarnum.com">lori@lorifarnum.com</a>
      </li>
    </ul>
    <div className="text-body text-base">All Content © Lori Farnum</div>
  </footer>
)

export default Footer
