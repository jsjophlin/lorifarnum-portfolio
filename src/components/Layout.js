import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import "../styles/theme.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
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
      <main>{children}</main>
      <footer className="flex justify-between">
        <ul className="flex">
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
        <div>All Content © Lori Farnum</div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
