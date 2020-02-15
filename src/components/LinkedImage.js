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
  margin: marginAsString,
  direction,
  top,
  left,
  slug,
}) => {
  if (direction === "column") {
    cont.left = left
    cont.top = top
  }
  const marginAsNumber = parseInt(marginAsString)

  return (
    <>
      {index === 0 ? (
        <FeatureLogos
          style={{
            margin: marginAsNumber,
            height: photo.height,
            width: photo.width,
            ...cont,
          }}
        />
      ) : (
        <figure
          className={cn(
            styles.linked_image,
            direction === "column" ? "absolute" : "relative"
          )}
          style={{
            margin: marginAsNumber,
            height: photo.height,
            width: photo.width,
            ...cont,
          }}
        >
          <span className="block mx-auto overflow-hidden">
            <Link to={`/projects/${slug.slug}`}>
              <img alt={alt.alt} {...photo} />
            </Link>
          </span>
        </figure>
      )}
    </>
  )
}

export default LinkedImage
