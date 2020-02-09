import React from "react"
import cn from "classnames"
import { Link } from "gatsby"
import FeatureLogos from "./FeatureLogos"
import styles from "./LinkedImage.module.css"

const cont = {}

const LinkedImage = ({
  alt,
  index,
  photo,
  margin,
  direction,
  top,
  left,
  slug,
}) => {
  if (direction === "column") {
    cont.left = left
    cont.top = top
  }

  return (
    <>
      {index === 0 ? (
        <FeatureLogos
          style={{ margin, height: photo.height, width: photo.width, ...cont }}
        />
      ) : (
        <figure
          className={cn(
            styles.linked_image,
            "overflow-hidden",
            direction === "column" ? "absolute" : "relative"
          )}
          style={{ margin, height: photo.height, width: photo.width, ...cont }}
        >
          <Link to={`/projects/${slug.slug}`}>
            <img alt={alt.alt} {...photo} />
          </Link>
        </figure>
      )}
    </>
  )
}

export default LinkedImage
