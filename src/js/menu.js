const button_menu = document.querySelector(".menu-toggle");
const li_buttoon = document.querySelector(".menu-toggle-li");
const content_menu = document.querySelector(".container-menu");

const category_links = document.querySelector(".category-links");
const paragraph_category = document.querySelector(".category");

let menu = false;

function OpenMenu() {
  if (!menu) {
    content_menu.style.display = "block";
    category_links.style.display = "flex";
    paragraph_category.style.display = "none";
    menu = true;
  } else {
    content_menu.style.display = "none";
    menu = false;
  }
}

function OpenCategory() {
  if (!menu) {
    content_menu.style.display = "block";
    category_links.style.display = "none";
    paragraph_category.style.display = "flex";
    menu = true;
  } else {
    content_menu.style.display = "none";
    menu = false;
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    content_menu.style.display = "none";
    return (menu = false);
  }
});

button_menu.addEventListener("click", () => {
  OpenMenu();
});

li_buttoon.addEventListener("click", () => {
  OpenCategory();
});

// button_menu.addEventListener("mouseenter", () => {
//   OpenMenu();
// });

// li_buttoon.addEventListener("mouseenter", () => {
//   OpenCategory();
// });
