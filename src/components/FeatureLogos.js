import React from "react"
import useFeaturedLogos from "./staticQueries/featuredLogos"
import { Link } from "gatsby"
import Carousel from "./Carousel"

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
      <span className="block relative overflow-hidden" style={style}>
        <Carousel items={logos} />
      </span>
    </Link>
  )
}

export default FeatureLogos
