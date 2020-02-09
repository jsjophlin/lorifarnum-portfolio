import { graphql, useStaticQuery } from "gatsby"

const useFeaturedLogos = () => {
  const { allStoryblokEntry } = useStaticQuery(
    graphql`
      query FEATURED_LOGOS_QUERY {
        allStoryblokEntry(
          filter: {
            field_component: { eq: "logo" }
            field_feature_boolean: { eq: true }
          }
        ) {
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

export default useFeaturedLogos
