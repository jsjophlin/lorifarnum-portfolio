import { graphql, useStaticQuery } from "gatsby"

const useCategories = () => {
  const { allStoryblokEntry } = useStaticQuery(
    graphql`
      query CATEGORIES_QUERY {
        allStoryblokEntry(filter: { field_component: { eq: "category" } }) {
          edges {
            node {
              uuid
              name
              slug
              full_slug
              field_image_string
              content
            }
          }
        }
      }
    `
  )
  return allStoryblokEntry.edges
}

export default useCategories
