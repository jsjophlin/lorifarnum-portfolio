import feature from "./feature"
import generalPage from "./general_page"
import grid from "./grid"
import home from "./home"
import image from "./image"
import logo from "./logo"
import page from "./page"
import project from "./project"
import teaser from "./teaser"
import componentNotFound from "./component_not_found"

const ComponentList = {
  feature: feature,
  general_page: generalPage,
  grid: grid,
  home: home,
  image: image,
  logo: logo,
  page: page,
  project: project,
  teaser: teaser,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return componentNotFound
  }
  return ComponentList[type]
}

export default Components
