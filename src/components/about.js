import React from "react"
import SbEditable from "storyblok-react"
import Components from "./components.js"

const About = ({ blok }) => (
  <SbEditable content={blok}>
    <div>
      <h2>About</h2>
    </div>
  </SbEditable>
)

export default About
