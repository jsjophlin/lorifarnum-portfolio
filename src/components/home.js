import React, { useEffect, useRef } from "react"
import SbEditable from "storyblok-react"
import cn from "classnames"
import Helmet from "react-helmet"
import Components from "./components.js"
import Layout from "./layout"
import useProjects from "./staticQueries/projects"
import Masonry from "masonry-layout"
import "../styles/masonry.css"

const Home = ({ blok, seo }) => {
  const projects = useProjects()
  const masonryRef = useRef()

  useEffect(() => {
    // Initialize masonry
    const masonry = new Masonry(masonryRef.current, {
      itemSelector: ".grid-item",
      columnWidth: 400,
      gutter: 10,
      stagger: 30,
    })
  })

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Layout>
        {projects ? (
          <div ref={masonryRef} className="grid">
            {projects.map(({ node }) => {
              const { slug, uuid } = node
              const content = JSON.parse(node.content)
              const { dimensions } = content

              return (
                <div
                  key={uuid}
                  className={cn(
                    `dimensions-${dimensions}`,
                    "project grid-item"
                  )}
                >
                  {React.createElement(Components(content.component), {
                    key: content._uid,
                    blok: content,
                    isTeaser: true,
                    slug: slug,
                  })}
                </div>
              )
            })}
          </div>
        ) : (
          <div>No projects available to list.</div>
        )}
      </Layout>
    </SbEditable>
  )
}

export default Home
