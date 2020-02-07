import React from "react"
import SbEditable from "storyblok-react"
import Helmet from "react-helmet"
import Gallery from "react-photo-gallery"
import Layout from "./Layout"
import LinkedImage from "./LinkedImage"
import useProjects from "./staticQueries/projects"
import "../styles/masonry.css"

const Home = ({ blok, seo }) => {
  const projects = useProjects()
  const photos = []
  const links = []

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
    links.push({
      slug: slug,
    })
  })

  const imageRenderer = ({ index, left, top, key, photo }) => (
    <LinkedImage
      key={key}
      direction="column"
      margin={"0"}
      index={index}
      slug={links[index]}
      photo={photo}
      left={left}
      top={top}
    />
  )

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Layout>
        <Gallery
          photos={photos}
          direction={"column"}
          renderImage={imageRenderer}
        />
      </Layout>
    </SbEditable>
  )
}

export default Home
