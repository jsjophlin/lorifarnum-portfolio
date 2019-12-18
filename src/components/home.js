import React from "react"
import SbEditable from "storyblok-react"
import Components from "./components.js"
import useProjects from "./staticQueries/projects"

const getProjects = (projects, allProjects) => {
  let results = []

  projects.forEach(project => {
    allProjects.forEach(({ node }) => {
      if (node.uuid === project) {
        results.push(node)
      }
    })
  })

  return results
}

const Home = ({ blok, seo }) => {
  const projects = useProjects()
  const matches = getProjects(blok.projects, projects)

  return (
    <SbEditable content={blok}>
      {matches.map((match, index) => {
        const node = JSON.parse(match.content)

        return (
          <div key={index} className="home">
            {React.createElement(Components(node.component), {
              key: node._uid,
              blok: node,
            })}
          </div>
        )
      })}
    </SbEditable>
  )
}

export default Home
