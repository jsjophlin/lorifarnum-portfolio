import React from "react"
import { Link } from "gatsby"

const cont = {
  overflow: "hidden",
  position: "relative",
}

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
}

const LinkedImage = ({ index, photo, margin, direction, top, left, slug }) => {
  if (direction === "column") {
    cont.position = "absolute"
    cont.left = left
    cont.top = top
  }

  return (
    <figure
      className="image"
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <Link to={`/projects/${slug.slug}`}>
        <img alt="image" style={imgStyle} {...photo} />
      </Link>
    </figure>
  )
}

export default LinkedImage
