import loadable from "@loadable/component"

const ComponentList = {
  feature: "Feature",
  general_page: "GeneralPage",
  grid: "Grid",
  home: "Home",
  image: "Image",
  logo: "Logo",
  page: "Page",
  project: "Project",
  teaser: "Teaser",
}

const Components = type => {
  if (typeof ComponentList[type] === "undefined") {
    const ComponentNotFound = loadable(() => import("./ComponentNotFound"))
    return ComponentNotFound
  } else {
    const Component = loadable(() => import(`./${ComponentList[type]}`))
    return Component
  }
}

export default Components
