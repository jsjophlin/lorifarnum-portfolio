import React from "react"
import Components from "./Components.js"
import SEO from "./Seo"

const Page = ({ blok, slug }) => {
  const core_page = blok.core_page ? blok.core_page[0] : null
  const page = slug.replace(/^\w/, c => c.toUpperCase())

  return (
    <>
      <SEO page={page} />
      {core_page &&
        React.createElement(Components(core_page.component), {
          key: blok._uid,
          blok: core_page,
          seo: blok.seo,
          slug: slug,
        })}
      {blok.body &&
        blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
    </>
  )
}

export default Page
