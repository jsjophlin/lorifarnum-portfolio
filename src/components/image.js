import React from "react"
import SbEditable from "storyblok-react"

const Image = ({ blok }) => (
  <SbEditable content={blok}>
    <div className="image">
      <figure>
        <img src={blok.image} alt={blok.image_alt} />
        {blok.caption && <figcaption>{blok.caption}</figcaption>}
      </figure>
    </div>
  </SbEditable>
)

export default Image
