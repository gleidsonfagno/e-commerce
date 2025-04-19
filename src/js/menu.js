const buttonMenu = document.querySelector(".menu-toggle")
const listButtoon = document.querySelectorAll(".menu-category")
const contentMenu = document.querySelector(".container-menu")

const categoryLinks = document.querySelector(".category-links")
const paragraphCategory = document.querySelector(".category")

// butao para abrir o menu mobile
const buttonMobile = document.querySelector(".menu-mobile")
// botôes par exibir as categorias
// const categoryButtons = document.querySelectorAll(".accordion")

const panelContent = document.querySelector(".panel-content")


function OpenMenu() {
  if(contentMenu.classList.contains("hidden")){
    console.log("verdade")
    contentMenu.classList.remove('hidden');
    categoryLinks.classList.remove("hidden")
    paragraphCategory.style.display = "none"
  }
  else {
    contentMenu.classList.add('hidden');
  }
}


function OpenCategory() {
  contentMenu.classList.remove("hidden")
  categoryLinks.classList.add("hidden")
  paragraphCategory.style.display = "block"

}

function closeCategory() {
  contentMenu.classList.add("hidden")
  categoryLinks.classList.add("hidden")
  paragraphCategory.style.display = "block"
}


// abrir o todas as categorias
buttonMenu.addEventListener("click", () => {
  OpenMenu()
})

buttonMenu.addEventListener("mouseenter", () => {
  OpenMenu();
});

buttonMobile.addEventListener("click", () => {
  OpenMenu()
})
""
// abrir as categorias no nav
listButtoon.forEach(button => {
  button.addEventListener("mouseenter", () => {
    OpenCategory();
  });

  button.addEventListener("click", () => {
    OpenCategory();
  });
});

contentMenu.addEventListener("mouseleave", ()=> {
  closeCategory()
})
