
const cartInfo = document.querySelector('.cart-info');
const buttons = document.querySelectorAll('.add-to-cart');
const cartCount = document.querySelector('.cart-count');

// função para adicionar o evento de clique nos botões de adicionar ao carrinho	
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // verifica se o valor do carrinho é um número
    const cartCountValue = parseInt(cartCount.textContent) || 0;
    cartCount.textContent = cartCountValue + 1;

    // adiciona a classe active ao carrinho
    cartInfo.classList.add('active');
    // remove a classe active após 2 segundos
    setTimeout(() => {
      cartInfo.classList.remove('active');
    }, 2000);
  });
});