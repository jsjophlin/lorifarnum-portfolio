import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/global.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { title, description } = data

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <header>
        <figure>
          <span>Logo</span>
        </figure>
        <ul>
          <li>Print</li>
          <li>Web</li>
          <li>Logos</li>
          <li>About</li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <ul className="inner">
          <li>Dribble</li>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>lori@lorifarnum.com</li>
        </ul>
        <div>All Content © Lori Farnum</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
