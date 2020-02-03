require("./src/styles/global.css")

// Polyfill.io service to include detected features as needed
exports.onClientEntry = () => {
  return new Promise((resolve, reject) => {
    window.__polyfillio__ = () => {
      resolve()
    }

    const features = []

    if (!("Intl" in window)) {
      const locale = window.location.pathname.split("/")[1]
      features.push(`Intl.~locale.${locale}`)
    }

    if (!("fetch" in window)) {
      features.push("fetch")
    }

    if (!("IntersectionObserver" in window)) {
      features.push("IntersectionObserver")
    }

    // ... detect other missing features

    if (features.length) {
      const s = document.createElement("script")
      s.src = `https://cdn.polyfill.io/v2/polyfill.min.js?features=${features.join(
        ","
      )}&rum=1&flags=gated,always&callback=__polyfillio__`
      s.async = true
      s.onerror = reject
      document.head.appendChild(s)
    } else {
      resolve()
    }
  })
}
