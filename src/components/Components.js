import Feature from "./feature"
import GeneralPage from "./general_page"
import Grid from "./grid"
import Home from "./home"
import Image from "./image"
import Logo from "./logo"
import Page from "./page"
import Project from "./project"
import Teaser from "./teaser"
import ComponentNotFound from "./component_not_found"

const ComponentList = {
  feature: Feature,
  general_page: GeneralPage,
  grid: Grid,
  home: Home,
  image: Image,
  logo: Logo,
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
