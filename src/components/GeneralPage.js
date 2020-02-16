import React from "react"
import SbEditable from "storyblok-react"
import ReactHtmlParser from "react-html-parser"
import StoryblokClient from "storyblok-js-client"
import Helmet from "react-helmet"
import cn from "classnames"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import styles from "./GeneralPage.module.css"

let Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
})

const GeneralPage = ({ blok, slug }) => {
  const { body } = blok

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className={`general_page ${slug}`} />
      </Helmet>
      <header className="mt-12 mb-10">
        <Nav currentPage="general_page" />
      </header>
      <Layout>
        <div className="flex flex-col md:flex-row">
          {body && (
            <div className="w-full md:w-2/3 lg:w-3/5 mr-0 md:mr-12">
              {ReactHtmlParser(Storyblok.richTextResolver.render(body))}
            </div>
          )}
          {slug === "about" && (
            <div className="w-full md:w-1/3 lg:w-2/5">
              <h2 className="text-center">Contact me</h2>
              <form
                className={cn(styles.form)}
                name="contact"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="contact" value="contact" />
                <input type="hidden" name="bot-field" />
                <p>
                  <label className="block mb-2">Your Name:</label>
                  <input type="text" name="name" />
                </p>
                <p>
                  <label className="block mb-2">Your Email:</label>
                  <input type="email" name="email" />
                </p>
                <p>
                  <label className="block mb-2">Message:</label>
                  <textarea name="message"></textarea>
                </p>
                <p>
                  <button
                    className="px-6 py-3 text-white bg-brandBlue hover:bg-blue-300 hover:text-blue-900 rounded-sm"
                    type="submit"
                  >
                    Submit
                  </button>
                </p>
              </form>
            </div>
          )}
        </div>
      </Layout>
    </SbEditable>
  )
}

export default GeneralPage
