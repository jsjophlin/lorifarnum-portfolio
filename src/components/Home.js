import React, { useState, useCallback } from "react"
import SbEditable from "storyblok-react"
import Helmet from "react-helmet"
import Gallery from "react-photo-gallery"
import Layout from "./Layout"
import Nav from "./Nav"
import LinkedImage from "./LinkedImage"
import useProjects from "./staticQueries/projects"
import useProjectsPrint from "./staticQueries/projectsPrint"
import useProjectsWeb from "./staticQueries/projectsWeb"
import "../styles/masonry.css"

// React-photo-gallery: https://www.npmjs.com/package/react-photo-gallery
// Using this library to handle the tiling grid of images
const Home = props => {
  const projects = useProjects()
  const projectsPrint = useProjectsPrint()
  const projectsWeb = useProjectsWeb()
  const [grid, setGrid] = useState(formatPhotos(projects))

  function formatPhotos(projects) {
    const tempGrid = {
      photos: [],
      links: [],
    }

    projects.forEach(({ node }) => {
      const { slug } = node
      const content = JSON.parse(node.content)
      const { image, dimensions } = content
      const thumbnail = image[0].image
      const re = /.+?(?=x)/
      const width = parseInt(re.exec(dimensions)[0])
      const height = parseInt(dimensions.substr(dimensions.indexOf("x") + 1))

      tempGrid.photos.push({
        src: thumbnail,
        width: width,
        height: height,
      })
      tempGrid.links.push({
        slug: slug,
      })
    })

    return tempGrid
  }

  // Using react-photo-gallery's example here: https://codesandbox.io/s/o7o241q09
  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <LinkedImage
        key={key}
        direction="column"
        margin={"0"}
        index={index}
        slug={grid.links[index]}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [grid]
  )

  // Callback to update the grid based on menu choice in Nav
  const updateGrid = type => {
    if (type === "print") {
      setGrid(formatPhotos(projectsPrint))
    } else if (type === "web") {
      setGrid(formatPhotos(projectsWeb))
    } else {
      setGrid(formatPhotos(projects))
    }
  }

  return (
    <SbEditable content={props.blok}>
      <Helmet>
        <body className="home" />
      </Helmet>
      <header>
        <Nav updateGrid={updateGrid} />
      </header>
      <Layout>
        <Gallery
          photos={grid.photos}
          direction={"column"}
          renderImage={imageRenderer}
        />
      </Layout>
    </SbEditable>
  )
}

export default Home
