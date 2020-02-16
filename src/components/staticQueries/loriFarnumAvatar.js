import { graphql, useStaticQuery } from "gatsby"

const useLoriFarnumAvatar = () => {
  const { file } = useStaticQuery(
    graphql`
      query LORI_FARNUM_AVATAR_QUERY {
        file(relativePath: { eq: "lori-farnum-avatar.png" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return file
}

export default useLoriFarnumAvatar
