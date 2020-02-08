import { graphql, useStaticQuery } from "gatsby"

const useProjectsWeb = () => {
  const { allStoryblokEntry } = useStaticQuery(
    graphql`
      query PROJECTS_WEB_QUERY {
        allStoryblokEntry(
          filter: { tag_list: { eq: "web" } }
          sort: { fields: first_published_at, order: DESC }
        ) {
          edges {
            node {
              name
              content
              slug
              uuid
              tag_list
            }
          }
        }
      }
    `
  )
  return allStoryblokEntry.edges
}

export default useProjectsWeb
