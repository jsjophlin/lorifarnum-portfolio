import { graphql, useStaticQuery } from "gatsby"

const useProjectsPrint = () => {
  const { allStoryblokEntry } = useStaticQuery(
    graphql`
      query PROJECTS_PRINT_QUERY {
        allStoryblokEntry(
          filter: { tag_list: { eq: "print" } }
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

export default useProjectsPrint
