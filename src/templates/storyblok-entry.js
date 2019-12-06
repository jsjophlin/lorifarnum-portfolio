import React from "react"
import { graphql } from "gatsby"
import Components from "../components/Components.js"

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.data.storyblokEntry)
    story.content = JSON.parse(story.content)

    return { story }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let { content, name, full_slug, tag_list } = this.state.story

    return (
      <div>
        {React.createElement(Components(content.component), {
          key: content._uid,
          blok: content,
          name: name,
          full_slug: full_slug,
          tags: tag_list,
        })}
      </div>
    )
  }
}

export default StoryblokEntry

export const storyblokEntryQuery = graphql`
  query storyblokEntryQuery($uuid: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    storyblokEntry(uuid: { eq: $uuid }) {
      id
      name
      created_at
      uuid
      slug
      full_slug
      content
      is_startpage
      parent_id
      group_id
    }
  }
`
