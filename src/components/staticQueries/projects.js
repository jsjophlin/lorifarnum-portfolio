import { graphql, useStaticQuery } from "gatsby"

const useProjects = () => {
  const { allStoryblokEntry } = useStaticQuery(
    graphql`
      query PROJECT_QUERY {
        allStoryblokEntry(
          filter: { field_component: { eq: "project" } }
          sort: { fields: first_published_at, order: DESC }
        ) {
          edges {
            node {
              name
              content
              slug
              uuid
            }
          }
        }
      }
    `
  )
  return allStoryblokEntry.edges
}

export default useProjects
