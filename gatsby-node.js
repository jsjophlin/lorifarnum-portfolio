const path = require("path")

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()
  config.node = {
    fs: "empty",
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve("src/templates/storyblok-entry.js")

    resolve(
      graphql(
        `
          {
            allStoryblokEntry {
              edges {
                node {
                  uuid
                  full_slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.allStoryblokEntry.edges
        entries.forEach((entry, index) => {
          let pagePath =
            entry.node.full_slug == "home" ? "" : `${entry.node.full_slug}/`

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              uuid: entry.node.uuid,
            },
          })
        })
      })
    )
  })
}
