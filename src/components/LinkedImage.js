import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
import styles from "./LinkedImage.module.css"

const cont = {}

const LinkedImage = ({ photo, margin, direction, top, left, slug }) => {
  if (direction === "column") {
    cont.left = left
    cont.top = top
  }

  return (
    <figure
      className={cn(
        styles.linked_image,
        "overflow-hidden",
        direction === "column" ? "absolute" : "relative"
      )}
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
    >
      <Link to={`/projects/${slug.slug}`}>
        <img alt="image" {...photo} />
      </Link>
    </figure>
  )
}

export default LinkedImage
