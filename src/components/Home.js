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
  // Grab the user's choice from the previous page and save it, then clear local storage
  let currentImages = null
  if (typeof window !== "undefined") {
    currentImages = localStorage.getItem("lf_currentImages")
    localStorage.clear()
  }

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
      const baseUrl = "https://img2.storyblok.com"
      const urlTail = thumbnail.substr(thumbnail.indexOf(baseUrl) + 18)
      const modifiedUrl = `${baseUrl}/${width}x${height}${urlTail}`

      tempGrid.photos.push({
        src: modifiedUrl,
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

  // If we already have a user choice from a previous page, load it
  if (currentImages) {
    updateGrid(currentImages)
  }

  return (
    <SbEditable content={props.blok}>
      <Helmet>
        <body className="home" />
      </Helmet>
      <header>
        <Nav updateGrid={updateGrid} currentPage="home" />
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
