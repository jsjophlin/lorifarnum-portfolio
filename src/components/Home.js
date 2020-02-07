import React from "react"
import SbEditable from "storyblok-react"
import cn from "classnames"
import Helmet from "react-helmet"
import Gallery from "react-photo-gallery"
import Components from "./Components.js"
import Layout from "./Layout"
import useProjects from "./staticQueries/projects"
import "../styles/masonry.css"

const Home = ({ blok, seo }) => {
  const projects = useProjects()
  const photos = []

  projects.forEach(({ node }) => {
    const { name, slug, uuid } = node
    const content = JSON.parse(node.content)
    const title = content.name
    const { _uid, image, dimensions, description } = content
    const thumbnail = image[0].image
    const re = /.+?(?=x)/
    const width = parseInt(re.exec(dimensions)[0])
    const height = parseInt(dimensions.substr(dimensions.indexOf("x") + 1))

    photos.push({
      src: thumbnail,
      width: width,
      height: height,
    })
  })

  const handleClick = e => {
    console.log(e.currentTarget)
  }

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Layout>
        <Gallery photos={photos} direction={"column"} onClick={handleClick} />
        {/* {projects ? (
          <div className="grid">
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
        )} */}
      </Layout>
    </SbEditable>
  )
}

export default Home
