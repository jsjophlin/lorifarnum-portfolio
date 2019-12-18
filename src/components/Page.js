import React from "react"
import Components from "./components.js"

const Page = ({ blok }) => {
  const core_page = blok.core_page[0]

  return (
    <>
      {core_page &&
        React.createElement(Components(core_page.component), {
          key: blok._uid,
          blok: core_page,
          seo: blok.seo,
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
