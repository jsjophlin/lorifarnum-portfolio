import feature from "./Feature"
import generalPage from "./GeneralPage"
import grid from "./Grid"
import home from "./Home"
import image from "./Image"
import logo from "./Logo"
import page from "./Page"
import project from "./Project"
import teaser from "./Teaser"
import componentNotFound from "./ComponentNotFound"

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
