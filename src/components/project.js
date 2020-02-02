import React from "react"
import PropTypes from "prop-types"
import SbEditable from "storyblok-react"
import Components from "./components.js"

const Project = ({ blok, isTeaser, slug }) => {
  const { description, image, name } = blok

  return (
    <SbEditable content={blok}>
      {!isTeaser && (
        <div className="project-meta">
          <h2>{name}</h2>
          <h3>{description}</h3>
        </div>
      )}
      {image &&
        image.map(node =>
          React.createElement(Components(node.component), {
            key: node._uid,
            blok: node,
            slug: `/projects/${slug}`,
          })
        )}
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
