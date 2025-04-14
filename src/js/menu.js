const buttonMenu = document.querySelector(".menu-toggle")
const listButtoon = document.querySelector(".menu-toggle-li")
const content_menu = document.querySelector(".container-menu")

const categoryLinks = document.querySelector(".category-links")
const paragraph_category = document.querySelector(".category")

const buttonMobile = document.querySelector(".menu-mobile")

let menu = false

function OpenMenu() {
  if (!menu) {
    content_menu.style.display = "block"
    categoryLinks.style.display = "flex"
    paragraph_category.style.display = "none"
    menu = true
  } else {
    content_menu.style.display = "none"
    menu = false
  }
}

function OpenCategory() {
  if (!menu) {
    content_menu.style.display = "block"
    categoryLinks.style.display = "none"
    paragraph_category.style.display = "flex"
    menu = true
  } else {
    content_menu.style.display = "none"
    menu = false
  }
}



window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    content_menu.style.display = "none"
    return (menu = false)
  }
})

buttonMenu.addEventListener("click", () => {
  OpenMenu()
})

listButtoon.addEventListener("click", () => {
  OpenCategory()
})

buttonMobile.addEventListener("click", () => {
  OpenMenu()
})

// buttonMenu.addEventListener("mouseenter", () => {
//   OpenMenu();
// });

// listButtoon.addEventListener("mouseenter", () => {
//   OpenCategory();
// });

