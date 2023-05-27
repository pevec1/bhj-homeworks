class Cart {
  constructor () {
    this.products = document.querySelectorAll('.products')
    this.product = []
    this.cart = document.querySelector('.cart__products')
    this.carts = document.querySelectorAll('.cart__product')
  }
  getProduct (i) {
    i--
    for (let product of this.products) {
      return product.children[i]
    }
  }
  getCartProduct (i) {
    this.buttonAdd(i).addEventListener('click', e => {
        let card = Array.from(this.cart.children)
        const productInCard = card.find((item, index, array) =>{
            return array[index].attributes["data-id"].value==i
        });
        if(productInCard) {
        
        let total = Number(productInCard.children[1].textContent) + Number(this.getQuantity(i))
        productInCard.children[1].textContent = total
        } else {
            let elem = document.createElement('div')
            elem.classList.add('cart__product')
            elem.setAttribute('data-id', i)
            elem.style.display = 'flex'
            elem.innerHTML = `<img class="cart__product-image" src="p.png">
                    <div class="cart__product-count">${this.getQuantity(i)}</div>`
            this.cart.appendChild(elem)
            elem.children[0].setAttribute('src', this.getProduct(i).children[1].src)   
        }
    })
  }
  getQuantity (i) {
    return this.getProduct(i).children[2].children[0].children[1].children[1]
      .innerText
  }
  setQuantity (i, val) {
    this.getProduct(
      i
    ).children[2].children[0].children[1].children[1].innerText = val
  }
  plusQuantity (i) {
    if (Number(this.getQuantity(i)) + 1 < 100)
      this.getProduct(
        i
      ).children[2].children[0].children[1].children[1].innerText =
        Number(this.getQuantity(i)) + 1
  }
  minusQuantity (i) {
    if (Number(this.getQuantity(i)) - 1 > 0)
      this.getProduct(
        i
      ).children[2].children[0].children[1].children[1].innerText =
        Number(this.getQuantity(i)) - 1
  }
  productInc (i) {
    return this.getProduct(i).children[2].children[0].children[1].children[2]
  }
  productDec (i) {
    return this.getProduct(i).children[2].children[0].children[1].children[0]
  }
  buttonAdd (i) {
    return this.getProduct(i).children[2].children[0].children[2]
  }
  test (i) {
    return this.getProduct(i).children[1].src
  }
  addProduct (i) {
    // console.log(this.getQuantity(i))
    // console.log(this.test(i))
    this.productInc(i).addEventListener('click', e => {
      //console.log(e)
      this.plusQuantity(i)
      //console.log(this.getQuantity(i))
    })
    this.productDec(i).addEventListener('click', e => {
      //console.log(e)
      this.minusQuantity(i)
      //console.log(this.getQuantity(i))
    })
  }
}

let product = new Cart()

product.addProduct(1)
product.addProduct(2)
product.addProduct(3)
product.addProduct(4)
product.getCartProduct(1)
product.getCartProduct(2)
product.getCartProduct(3)
product.getCartProduct(4)
