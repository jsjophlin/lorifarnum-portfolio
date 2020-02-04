import { graphql, useStaticQuery } from "gatsby"

const useLogos = () => {
  const { allStoryblokEntry } = useStaticQuery(
    graphql`
      query LOGOS_QUERY {
        allStoryblokEntry(filter: { field_component: { eq: "logo" } }) {
          edges {
            node {
              content
              field_component
              name
              slug
              published_at
              tag_list
            }
          }
        }
      }
    `
  )
  return allStoryblokEntry.edges
}

export default useLogos
