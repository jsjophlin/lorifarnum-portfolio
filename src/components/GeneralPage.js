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
      <header className="mt-12 mb-6">
        <Nav currentPage="general_page" />
      </header>
      <Layout>
        {body && ReactHtmlParser(Storyblok.richTextResolver.render(body))}
      </Layout>
    </SbEditable>
  )
}

export default GeneralPage
