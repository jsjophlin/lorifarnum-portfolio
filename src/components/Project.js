import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import SbEditable from "storyblok-react"
import Img from "gatsby-image"
import Components from "./Components.js"
import Layout from "./Layout"
import Nav from "./Nav"
import useProjectBgImage from "../components/staticQueries/projectBgImage"
import styles from "./Project.module.css"

const Project = ({ blok, isTeaser, tags }) => {
  const projectBgImage = useProjectBgImage()
  const { description, image, link, name } = blok
  const primaryImage = image ? (image.length === 1 ? image[0] : image[1]) : null
  const type = {
    isWeb: tags ? tags.includes("web") : null,
    isPrint: tags ? tags.includes("print") : null,
    isLogo: tags ? tags.includes("logo") : null,
  }
  const finalLink = link ? link.url || link.cached_url : null

  return (
    <SbEditable content={blok}>
      <header className="mt-12 mb-10">
        <Nav currentPage="project" />
      </header>
      <Layout>
        <div className="relative">
          <div className={cn(styles.content, "relative z-20")}>
            <div className={cn(styles.hero_spacer, "float-left h-0")} />
            <div className="bg-actualWhite py-10">
              {!isTeaser && (
                <div className="project-meta">
                  <div className="titles flex flex-col">
                    {finalLink ? (
                      <a
                        className={cn(styles.link, "order-2")}
                        href={finalLink}
                      >
                        <h1 className="text-center text-brandBlue">{name}</h1>
                      </a>
                    ) : (
                      <h1 className="text-center text-brandBlue order-2">
                        {name}
                      </h1>
                    )}
                    <h5 className="text-center text-brandBlue uppercase order-1 text-xs">
                      <span>
                        {type.isWeb
                          ? "Web design"
                          : type.isPrint
                          ? "Print design"
                          : ""}
                      </span>
                      {type.isLogo && <span> & Logo</span>}
                    </h5>
                  </div>
                  {description && <h3>{description}</h3>}
                </div>
              )}
              {primaryImage &&
                React.createElement(Components(primaryImage.component), {
                  key: primaryImage._uid,
                  blok: primaryImage,
                  slug: finalLink,
                })}
            </div>
            <div className={cn(styles.hero_spacer_clear, "table")} />
          </div>
          <div className={cn(styles.bg_image, "absolute top-0 w-full z-10")}>
            <Img
              fluid={projectBgImage.childImageSharp.fluid}
              alt="Project background image"
            />
          </div>
        </div>
      </Layout>
    </SbEditable>
  )
}

Project.defaultProps = {
  isTeaser: false,
}
Project.propTypes = {
  blok: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.array,
    name: PropTypes.string,
    services: PropTypes.array,
  }),
  isTeaser: PropTypes.bool,
}

export default Project
