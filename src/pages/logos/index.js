import React from "react"
import Helmet from "react-helmet"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import Nav from "../../components/Nav"
import useLogos from "../../components/staticQueries/logos"
import styles from "./index.module.css"

const LogosPage = () => {
  const logos = useLogos()

  return (
    <>
      <Helmet>
        <body className="logos" />
      </Helmet>
      <header className="mt-12 mb-10">
        <Nav currentPage="logos" />
      </header>
      <Layout>
        <SEO page="Logos" />
        {logos && (
          <ul className={styles.logos}>
            {logos.map(({ node }) => {
              const { name } = node
              const content = JSON.parse(node.content)
              const { _uid, title } = content
              const { image, image_alt } = content.image
                ? content.image[0]
                : null

              return (
                <li key={_uid} className="flex justify-center items-center">
                  {image && (
                    <figure className="w-full flex justify-center items-center">
                      <img
                        className="relative"
                        src={image}
                        alt={image_alt || title || name}
                      />
                    </figure>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </Layout>
    </>
  )
}

export default LogosPage
