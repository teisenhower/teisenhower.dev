require("prismjs/themes/prism-tomorrow.css")
function navUnderline() {
  const links = document.querySelectorAll("nav>ul>li>a")
  let timeoutID

  function underline() {
    window.clearTimeout(timeoutID)
    const underline = document.querySelector("span.navUnderline")
    const linkBox = this.getBoundingClientRect()
    const cords = {
      width: linkBox.width,
      top: linkBox.top + window.scrollY + linkBox.height,
      left: linkBox.left + window.scrollX,
    }
    underline.style.width = `${cords.width}px`
    underline.style.height = `${cords.height}px`
    underline.style.transform = `translate(${cords.left}px, ${cords.top}px)`
    underline.classList.add("active")
  }
  function clearUnderline() {
    const underline = document.querySelector("span.navUnderline")
    timeoutID = setTimeout(() => {
      underline.classList.remove("active")
    }, 400)
  }

  links.forEach(a => a.addEventListener("mouseenter", underline))
  links.forEach(a => a.addEventListener("mouseleave", clearUnderline))
}
exports.onInitialClientRender = () => {
  navUnderline()
  const underline = document.createElement("span")
  underline.classList.add("navUnderline")
  document.body.append(underline)
  const items = JSON.parse(localStorage.getItem("footerNav")) || []
  if (items.length == 0) {
    const item = {
      history: true,
    }
    items.push(item)
    localStorage.setItem("footerNav", JSON.stringify(items))
  }
}

exports.onRouteUpdate = () => {
  navUnderline()
}
