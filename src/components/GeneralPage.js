import React from "react"
import SbEditable from "storyblok-react"
import ReactHtmlParser from "react-html-parser"
import StoryblokClient from "storyblok-js-client"
import Helmet from "react-helmet"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

let Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
})

const GeneralPage = ({ blok }) => {
  const { body } = blok

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className="general_page" />
      </Helmet>
      <Nav currentPage="general_page" />
      <Layout>
        {body && (
          <div className="mx-4">
            {ReactHtmlParser(Storyblok.richTextResolver.render(body))}
          </div>
        )}
      </Layout>
    </SbEditable>
  )
}

export default GeneralPage
