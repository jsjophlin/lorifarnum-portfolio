import React from "react"
import SbEditable from "storyblok-react"
import { Link } from "gatsby"

const Image = ({ blok, slug }) => {
  const image = () => (
    <figure>
      <img src={blok.image} alt={blok.image_alt} />
      {blok.caption && <figcaption>{blok.caption}</figcaption>}
    </figure>
  )

  return (
    <SbEditable content={blok}>
      <div className="image">
        {slug ? <Link to={slug}>{image()}</Link> : image()}
      </div>
    </SbEditable>
  )
}

export default Image
