import { graphql, useStaticQuery } from "gatsby"

const useProjectBgImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query PROJECT_BG_IMAGE_QUERY {
        file(relativePath: { eq: "project-bg-dark.png" }) {
          childImageSharp {
            fluid(maxWidth: 1350, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return file
}

export default useProjectBgImage
