import React from "react"
import cn from "classnames"
import useFeaturedLogos from "./staticQueries/featuredLogos"
import { Link } from "gatsby"
import Carousel from "./Carousel"
import styles from "./FeatureLogos.module.css"

const FeatureLogos = ({ style }) => {
  const featuredLogos = useFeaturedLogos()
  const logos = featuredLogos.map(({ node }) => {
    const content = JSON.parse(node.content)

    return {
      src: content.image ? content.image[0].image : null,
      alt: content.image ? content.image[0].image_alt : null,
      name: node.name,
    }
  })

  return (
    <Link to="/logos">
      <span
        className={cn(styles.logos_container, "block relative overflow-hidden")}
        style={style}
      >
        <span
          className={cn(
            styles.logos_container_inner,
            "absolute top-0 left-0 bottom-0 right-0 z-20"
          )}
        >
          <Carousel items={logos} />
        </span>
      </span>
    </Link>
  )
}

export default FeatureLogos
