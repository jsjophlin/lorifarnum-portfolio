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
                  field_component
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

        function getSlug(node) {
          const { field_component, full_slug } = node

          if (field_component === "project") {
            return `/${full_slug}`
          } else if (field_component === "page") {
            return full_slug === "home" ? "/" : `/${full_slug}`
          } else {
            return null
          }
        }

        entries.forEach(({ node }) => {
          const pagePath = getSlug(node)

          // If we have a matched slug
          if (pagePath) {
            createPage({
              path: pagePath,
              component: storyblokEntry,
              context: {
                uuid: node.uuid,
              },
            })
          }
        })
      })
    )
  })
}
