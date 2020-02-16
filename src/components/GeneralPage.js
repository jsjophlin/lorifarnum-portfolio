import React from "react"
import SbEditable from "storyblok-react"
import ReactHtmlParser from "react-html-parser"
import StoryblokClient from "storyblok-js-client"
import Helmet from "react-helmet"
import cn from "classnames"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import useLoriFarnumAvatar from "./staticQueries/loriFarnumAvatar"
import styles from "./GeneralPage.module.css"

let Storyblok = new StoryblokClient({
  accessToken: process.env.GATSBY_STORYBLOK_ACCESS_TOKEN,
})

const GeneralPage = ({ blok, slug }) => {
  const { body } = blok
  const loriFarnumAvatar = useLoriFarnumAvatar()

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className={`general_page ${slug}`} />
      </Helmet>
      <header className="mt-12 mb-20">
        <Nav currentPage="general_page" />
      </header>
      <Layout>
        {(slug === "about" || slug === "thank-you") && (
          <aside
            className={cn(
              styles.quote_container,
              "bg-brandBlue flex justify-around mb-16"
            )}
          >
            <div className="w-1/2">
              <Img
                fluid={loriFarnumAvatar.childImageSharp.fluid}
                alt="Lori Farnum's avatar"
                className={styles.avatar_image}
              />
            </div>
            <div
              className={cn(
                styles.blockquote_container,
                "w-1/2 flex flex-col justify-center items-center mb-0 px-2 xs:px-8"
              )}
            >
              <blockquote className="">
                <h2 className="text-white text-sm xs:text-xl md:text-3xl lg:text-6xl text-center font-normal">
                  Every great design begins with an even better story.
                </h2>
                <h6 className="uppercase text-white text-center text-xs md:text-xl mb-0">
                  – Lorinda Mamo
                </h6>
              </blockquote>
            </div>
          </aside>
        )}
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
          {body && (
            <div className="w-full md:w-2/3 lg:w-3/5 mr-0 md:mr-12">
              {ReactHtmlParser(Storyblok.richTextResolver.render(body))}
            </div>
          )}
          {slug === "about" && (
            <div className="w-full md:w-1/3 lg:w-2/5">
              <h2 className="text-center text-brandBlue">Let's chat</h2>
              <form
                className={cn(styles.form)}
                name="contact"
                method="post"
                action="/thank-you"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
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
