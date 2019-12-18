import About from "./about"
import Feature from "./feature"
import Grid from "./grid"
import Home from "./home"
import Image from "./image"
import Page from "./page"
import Project from "./project"
import Teaser from "./teaser"
import ComponentNotFound from "./component_not_found"

const ComponentList = {
  about: About,
  feature: Feature,
  grid: Grid,
  home: Home,
  project_image: Image,
  page: Page,
  project: Project,
  teaser: Teaser,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
