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

const Project = ({ blok, isTeaser, slug }) => {
  const projectBgImage = useProjectBgImage()
  const { description, image, name } = blok
  const primaryImage = image ? (image.length === 1 ? image[0] : image[1]) : null

  return (
    <SbEditable content={blok}>
      <header className="mt-12 mb-6">
        <Nav currentPage="project" />
      </header>
      <Layout>
        <div className="relative">
          <div className={cn(styles.content, "relative z-20")}>
            <div className={cn(styles.hero_spacer, "float-left h-0")} />
            <div className="bg-actualWhite py-10">
              {!isTeaser && (
                <div className="project-meta">
                  <h1 className="text-center text-brandBlue">{name}</h1>
                  {description && <h3>{description}</h3>}
                </div>
              )}
              {primaryImage &&
                React.createElement(Components(primaryImage.component), {
                  key: primaryImage._uid,
                  blok: primaryImage,
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
