import React from "react"
import SbEditable from "storyblok-react"
import Components from "./components.js"

const GeneralPage = ({ blok, seo }) => {
  return (
    <SbEditable content={blok}>
      <div>General page</div>
    </SbEditable>
  )
}

export default GeneralPage
