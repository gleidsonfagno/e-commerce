const resultSearch = document.getElementById("result-search")
const buttons = document.getElementById("btn-search")
const ListItem = document.querySelectorAll(".card-item")
const allSlides = document.querySelectorAll(".card-item .swiper-slide")

let inputSearch = document.getElementById("input-search-js")
let textSearch = inputSearch.value.trim()

const notFoundContent = document.querySelectorAll(".not-found")

buttons.addEventListener("click", (event) => {
  // prevendo o evento de carregamenta da pagina apos o clique do button
  event.preventDefault()

  let found = false
  let inputSearch = document.getElementById("input-search-js")
  let textSearch = inputSearch.value.trim().toLocaleLowerCase()

  // inserindo o que o usario ta pesquisando
  if (textSearch) {
    resultSearch.textContent = `Você buscou por: ${textSearch}`
  } else {
    resultSearch.textContent = ""
  }

  //   Filtrando os slides
  allSlides.forEach((slide) => {
    const title = slide.querySelector("h3").textContent.toLocaleLowerCase()
    console.log(title)
    console.log(textSearch)
    const search = title.includes(textSearch)

    if (search) {
      slide.style.display = "block"
      
      found = true
    } else {
      slide.style.display = "none"
      //   notFoundContent.classList.remove("hidden-carde")
    }
  })

  //   Mostra ou esconde a mensagem "not found"
  notFoundContent.forEach((el) => {
      if (found) {
        el.classList.add("hiden-found")
      } else {
        el.classList.remove("hiden-found")
      }
  })
//   if (notFoundContent) {
//     notFoundContent.classList.toggle("hiden-found", found)
//   }

  console.log("Resultado da busca:", found)
})
