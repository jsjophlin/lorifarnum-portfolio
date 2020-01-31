import React from "react"
import PropTypes from "prop-types"
import SbEditable from "storyblok-react"
import Components from "./components.js"
import useCategories from "./staticQueries/categories"

const Project = ({ blok, isTeaser }) => {
  const { description, image, name, services } = blok
  const categories = useCategories()

  const getCategories = key =>
    categories.filter(({ node }) => node.uuid === key)[0].node

  return (
    <SbEditable content={blok}>
      <div className="project">
        {!isTeaser && (
          <div className="project-meta">
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h4>Services:</h4>
            {services && (
              <ul>
                {services.map(key => {
                  const {
                    content,
                    field_image_string,
                    full_slug,
                    name,
                    slug,
                    uuid,
                  } = getCategories(key)

                  return <li key={uuid}>{name}</li>
                })}
              </ul>
            )}
          </div>
        )}
        {image &&
          image.map(node =>
            React.createElement(Components(node.component), {
              key: node._uid,
              blok: node,
            })
          )}
      </div>
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
