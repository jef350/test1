let cartItems = {};

document.addEventListener('DOMContentLoaded', function () {
  const tocartbutton = document.querySelectorAll('.add-to-cart');
  const removecartbutton = document.querySelectorAll('.remove-from-cart');
  const quantity = document.querySelectorAll('.quantity');

  tocartbutton.forEach(button => {
    button.addEventListener('click', function () {
      tocart(this);
    });
  }); 

  removecartbutton.forEach(button => {
    button.addEventListener('click', function () {
      removecart(this);
    });
  });

  quantity.forEach(input => {
    input.addEventListener('change', function () {
      const productName = this.closest('li').querySelector('.product-name').innerText;
      updateQuantity(productName, this);
    });
  });
});

function tocart(button) {
  const article = button.closest('.artikelen');
  const productName = article.querySelector('.plaats').innerText;

  if (cartItems.hasOwnProperty(productName)) {
    cartItems[productName]++;
  } else {
    const productPrice = parseFloat(article.querySelector('.price-shop').innerText.replace(',', '.'));
    const quantity = 1;
    cartItems[productName] = quantity;
  }
  console.log('winkemand werkt');
  updatecart
();
}

function removecart(button) {
  const listItem = button.closest('li');
  const productName = listItem.querySelector('.product-name').innerText;

  removeall(productName);
  console.log('verwijderen werkt');
  updatecart
();
}

function removeall(productName) {
  if (cartItems.hasOwnProperty(productName)) {
    delete cartItems[productName];
  }
  console.log('ander verwijderen werkt');
}

function updateprice() {
  console.log('werkt');
  let newTotal = 0;
  for (const productName in cartItems) {
    if (cartItems.hasOwnProperty(productName)) {
      const productPrice = getprice(productName);
      const quantity = cartItems[productName];
      newTotal += productPrice * quantity;
    }
  }

  const totalPriceElement = document.getElementById('total-price');
  totalPriceElement.innerText = `Totaal: €${newTotal}`;
}

function updatecart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  for (const productName in cartItems) {
    if (cartItems.hasOwnProperty(productName)) {
      const productPrice = getprice(productName);
      const quantity = cartItems[productName];

      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <span class="product-name">${productName}</span> 
        <span class="product-price">€${productPrice}</span>
        <input type="number" class="quantity" value="${quantity}" min="1">
        <button class="remove-from-cart">X</button>
      `;

      listItem.querySelector('.remove-from-cart').addEventListener('click', function () {
        removecart(this);
      });

      listItem.querySelector('.quantity').addEventListener('change', function () {
        updateQuantity(productName, this);
      });

      cartList.appendChild(listItem);
    }
  }

  updateprice();
}

function updateQuantity(productName, input) {
  const newQuantity = parseInt(input.value, 10);

  if (cartItems.hasOwnProperty(productName)) {
    cartItems[productName] = newQuantity;
  }

  updateprice();
}

function getprice(productName) {
  const articles = document.querySelectorAll('.artikelen');
  for (let i = 0; i < articles.length; i++) {
    const articleProductName = articles[i].querySelector('.plaats').innerText;
    if (productName === articleProductName) {
      return parseFloat(articles[i].querySelector('.price-shop').innerText.replace(',', '.'));
    }
  }
  return 0;
}