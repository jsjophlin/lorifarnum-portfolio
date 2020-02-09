import React from "react"
import useFeaturedLogos from "./staticQueries/featuredLogos"
import styles from "./FeatureLogos.module.css"

const FeatureLogos = ({ style }) => {
  const featuredLogos = useFeaturedLogos()
  console.log(featuredLogos)
  return (
    <div className={styles.feature_logos} style={style}>
      <h2>Feature Logos</h2>
    </div>
  )
}

export default FeatureLogos
