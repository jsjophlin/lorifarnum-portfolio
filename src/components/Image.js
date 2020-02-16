import React from "react"
import SbEditable from "storyblok-react"

const Image = ({ blok, slug }) => {
  const image = () => (
    <figure>
      <img src={blok.image} alt={blok.image_alt} className="mx-auto" />
      {blok.caption && <figcaption>{blok.caption}</figcaption>}
    </figure>
  )

  return (
    <SbEditable content={blok}>
      <div className="image">
        {slug ? <a href={slug}>{image()}</a> : image()}
      </div>
    </SbEditable>
  )
}

export default Image
