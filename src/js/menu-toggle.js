const button_menu = document.querySelector(".menu-toggle")
const content_menu = document.querySelector(".container-menu");

let menu = false

button_menu.addEventListener("click", () => {
    console.log("deucerto")
    if(!menu){
        content_menu.style.display = "block";
        menu = true
    }else {
        content_menu.style.display = "none";
        menu = false
    }
})