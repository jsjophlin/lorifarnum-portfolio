export default function formatPhotos(projects, spacer) {
  const tempGrid = {
    photos: [],
    links: [],
    alts: [],
  }
  // Holding a space at the beginning of the array for the logo carousel
  const dummyPhoto = {
    src: spacer,
    width: 548,
    height: 410,
  }
  const dummySlug = {
    slug: "/logos",
  }
  const dummyAlt = {
    alt: "Logo carousel",
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
    tempGrid.alts.push({
      alt: content.name,
    })
  })

  // Add the dummy objects to the beginning of the array
  tempGrid.photos.unshift(dummyPhoto)
  tempGrid.links.unshift(dummySlug)
  tempGrid.alts.unshift(dummyAlt)

  return tempGrid
}
