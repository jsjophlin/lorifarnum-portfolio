import React from "react"
import SbEditable from "storyblok-react"
import Components from "./components.js"

const Project = ({ blok }) => {
  const { description, image, name, services } = blok

  return (
    <SbEditable content={blok}>
      <div className="project">
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Services:</h4>
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
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

export default Project
