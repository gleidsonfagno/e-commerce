const resultSearch = document.getElementById("result-search")
const allButtons = document.querySelectorAll("#btn-search")
const allInputs = document.querySelectorAll("#input-search-js")
const allSlides = document.querySelectorAll(".card-item .swiper-slide")
const notFoundContent = document.querySelectorAll(".not-found")


allButtons.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.preventDefault()

    // Usa o índice do botão pra pegar o input correspondente (desktop ou mobile)
    const input = allInputs[index]
    const textSearch = input.value.trim().toLocaleLowerCase()

    let found = false

    if (textSearch) {
      resultSearch.textContent = `Você buscou por: ${textSearch}`
    } else {
      resultSearch.textContent = ""
    }

    allSlides.forEach((slide) => {
      const title = slide.querySelector("h3").textContent.toLocaleLowerCase()
      const search = title.includes(textSearch)

      if (search) {
        slide.style.display = "block"
        found = true
      } else {
        slide.style.display = "none"
      }
    })

    notFoundContent.forEach((el) => {
      if (found) {
        el.classList.add("hiden-found")
      } else {
        el.classList.remove("hiden-found")
      }
    })

    console.log("Resultado da busca:", found)
  })
})
