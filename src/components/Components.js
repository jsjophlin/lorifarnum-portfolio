import Feature from "./Feature"
import GeneralPage from "./GeneralPage"
import Grid from "./Grid"
import Home from "./Home"
import Image from "./Image"
import Logo from "./Logo"
import Page from "./Page"
import Project from "./Project"
import Teaser from "./Teaser"
import ComponentNotFound from "./ComponentNotFound"

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
