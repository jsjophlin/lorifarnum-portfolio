import React from "react"
import SbEditable from "storyblok-react"
import Components from "./components.js"
import useProjects from "./staticQueries/projects"

const Home = ({ blok, seo }) => {
  const projects = useProjects()

  return (
    <SbEditable content={blok}>
      {projects ? (
        <section>
          {projects.map(({ node }) => {
            const { name, slug, uuid } = node
            const content = JSON.parse(node.content)

            return (
              <article key={uuid} className="project">
                {React.createElement(Components(content.component), {
                  key: content._uid,
                  blok: content,
                  isTeaser: true,
                })}
              </article>
            )
          })}
        </section>
      ) : (
        <div>No projects available to list.</div>
      )}
    </SbEditable>
  )
}

export default Home
