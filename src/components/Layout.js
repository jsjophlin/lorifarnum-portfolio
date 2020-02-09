import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/Seo"
import Helmet from "react-helmet"
import Footer from "./Footer"
import "../styles/theme.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <SEO />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:500,600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main className="mb-12">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
