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
import { formatPhotos } from "../helpers"
import { useMedia } from "../hooks"
import spacer from "../images/spacer.png"
import "../styles/masonry.css"

// React-photo-gallery: https://www.npmjs.com/package/react-photo-gallery
// Using this library to handle the tiling grid of images
const Home = ({ blok }) => {
  const projects = useProjects()
  const projectsPrint = useProjectsPrint()
  const projectsWeb = useProjectsWeb()
  const [grid, setGrid] = useState(formatPhotos(projects, spacer))
  const allPhotos = formatPhotos(projects, spacer)
  // Grab the user's choice from the previous page and save it, then clear local storage
  let currentImages = null
  if (typeof window !== "undefined") {
    currentImages = localStorage.getItem("lf_currentImages")
    localStorage.clear()
  }

  const mq = useMedia(
    // Media query
    ["(min-width: 769px)"],
    // Screen breakpoint
    [769],
    // Default screen size (smallest mobile)
    0
  )

  // Using react-photo-gallery's example here: https://codesandbox.io/s/o7o241q09
  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <LinkedImage
        key={key}
        direction="column"
        margin={mq === 769 ? "20" : "10"}
        index={index}
        slug={grid.links[index]}
        photo={photo}
        left={left}
        top={top}
        alt={allPhotos.alts[index]}
      />
    ),
    [grid, allPhotos]
  )

  // Callback to update the grid based on menu choice in Nav
  const updateGrid = type => {
    if (type === "print") {
      setGrid(formatPhotos(projectsPrint, spacer))
    } else if (type === "web") {
      setGrid(formatPhotos(projectsWeb, spacer))
    } else {
      setGrid(allPhotos)
    }
  }

  // If we already have a user choice from a previous page, load it
  if (currentImages) {
    updateGrid(currentImages)
  }

  return (
    <SbEditable content={blok}>
      <Helmet>
        <body className="home" />
      </Helmet>
      <header className="mt-12 mb-6">
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
