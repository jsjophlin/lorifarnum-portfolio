import React from "react"
import SbEditable from "storyblok-react"
import ReactHtmlParser from "react-html-parser"
import StoryblokClient from "storyblok-js-client"

let Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
})

const GeneralPage = ({ blok }) => {
  const { title, body } = blok

  return (
    <SbEditable content={blok}>
      <h1>{title}</h1>
      <div className="body_content">
        {ReactHtmlParser(Storyblok.richTextResolver.render(body))}
      </div>
    </SbEditable>
  )
}

export default GeneralPage
