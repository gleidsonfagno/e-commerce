const ListItem = document.querySelectorAll(".card-item");
const resultSearch = document.getElementById("result-search");
const buttons = document.getElementById("btn-search");

async function getProducts(searchParams) {
  try {
    // se chamar a funçao sem parametro carrega os produtos normalmente
    const url = searchParams
      ? `https://dummyjson.com/products/search?q=${searchParams}`
      : `https://dummyjson.com/products`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const products = data.products;

    if (products.length === 0) {
      ListItem.forEach((list) => {
        list.innerHTML = `
        <div class="not-found ">
                <p>😕 Ops! Nenhum produto encontrado com esse nome.</p>
              </div>
        `;
      });
    }

    const item = products.map((product) => {
      return `
    <li class="swiper-slide ">
      <article class="card">
        <div class="card-img">
          <span>Novo</span>
          <img src="${product.thumbnail}" alt="${product.title}">
        </div>
  
        <div class="card-content">
          <h3>${product.title}</h3>
  
          <div class="card-price">
            <p> 
            <span>R$ ${product.price.toFixed(2)}</span>
             R$ ${((product.price * product.discountPercentage) / 100).toFixed(2)}
             </p>
            <span class="card-disont">
              ${product.discountPercentage}% off
            </span>
          </div>
  
          <p>Ou em até <span>6x de R$ ${(product.price - (product.price * product.discountPercentage) / 100 / 6).toFixed(2)} </span></p>
        </div>
  
        <div class="buy-button-card">
          <button class="add-to-cart">Comprar</button>
          <div class="counter hidden">
            <button class="decrease">−</button>
            <span class="quantity">1</span>
            <button class="increase">+</button>
          </div>
        </div>
      </article>
    </li>
    
    `;
    });
    //percorrendo os dois ul para inserir
    ListItem.forEach((list) => {
      list.innerHTML = item.join("");
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

buttons.addEventListener("click", (event) => {
  // prevendo o evento de carregamenta da pagina apos o clique do button
  event.preventDefault();

  let inputSearch = document.getElementById("input-search-js");
  let textSearch = inputSearch.value.trim();

  // inserindo o que o usario ta pesquisando
  if (textSearch) {
    resultSearch.textContent = `Você buscou por: ${textSearch}`;
  } else {
    resultSearch.textContent = "";
  }

  // chamado a função com paramentro digitado pelo usuario
  getProducts(textSearch);
});

// quando o html e carregado chama a função e mostra os dados da api sem parametros
window.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
