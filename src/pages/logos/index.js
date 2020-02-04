import React from "react"
import cn from "classnames"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import useLogos from "../../components/staticQueries/logos"
import styles from "./index.module.css"

const LogosPage = () => {
  const logos = useLogos()

  return (
    <Layout>
      <SEO title="Logos by Lori Farnum" />
      <h1>Logos</h1>
      {logos && (
        <ul className={styles.logos}>
          {logos.map(({ node }, index) => {
            const { name, published_at, slug } = node
            const content = JSON.parse(node.content)
            const { _uid, feature, title } = content
            const { caption, image, image_alt } = content.image
              ? content.image[0]
              : null

            return (
              <li
                key={_uid}
                className="flex justify-center items-center bg-gray-200"
              >
                {image && (
                  <figure className="w-full">
                    <img src={image} alt={image_alt || title || name} />
                  </figure>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </Layout>
  )
}

export default LogosPage
