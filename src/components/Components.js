import GeneralPage from "./GeneralPage"
import Home from "./Home"
import Image from "./Image"
import Page from "./Page"
import Project from "./Project"
import ComponentNotFound from "./ComponentNotFound"

const ComponentList = {
  general_page: GeneralPage,
  home: Home,
  image: Image,
  page: Page,
  project: Project,
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    return ComponentNotFound
  }

  return ComponentList[type]
}

export default Components
