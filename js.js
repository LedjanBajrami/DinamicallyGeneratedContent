$(document).ready(function() {

    const services = [
      {
        icon: "fa-solid fa-truck",
        title: "Fast Delivery",
        text: "Some quick example text to build on the card tokassare",
      },
      {
        icon: "fa-brands fa-fedex",
        title: "Free Shiping",
        text: "Some quick example text to build on the card tokassare",
      },
      {
        icon: "fa-solid fa-medal",
        title: "Best quality",
        text: "Some quick example text to build on the card tokassare",
      },
    ];
  
    for (let i = 0; i < services.length; i++) {
      const servicecard = `
      <div class="col-lg-4 ">
        <div class="card text-center px-4 py-5 cardas">
          <i class="${services[i].icon}"></i>
          <div class="card-body">
            <h5 class="card-title text-white">${services[i].title}</h5>
            <p class="card-text text-white">${services[i].text}</p>
          </div>
        </div>
      </div>
      `;
      $("#services-cards").append(servicecard);
    }
  
  });
  

  $(document).ready(function(){

    const products = [
      {
      photo:"images/kmisha.png",
      title:"Men's shirt",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },
    {
      photo:"images/2.png",
      title:"Men's shirt",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/3.png",
      title:"Women's Dress",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/4.png",
      title:"Women's Dress",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/5.png",
      title:"Women's Dress",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/6.png",
      title:"Women's Dress",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/7.png",
      title:"Women's Dress",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/8.png",
      title:"Men's shirt",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/9.png",
      title:"Men's shirt",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/10.png",
      title:"Men's shirt",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/11.png",
      title:"Men's shirt",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    },  {
      photo:"images/12.png",
      title:"Women's dress",
      qmimi:"75",
      icon2:"fa-sharp fa-solid fa-cart-shopping"
  
    }]; 
  
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    for (let i = 0; i < products.length; i++) {
      const productcard = `
        <div class="col-lg-4">
          <div class="card-container my-3">
            <div class="card card-product me-2 mb-2 p-3 pt-4">
              <img class="tesha my-0 mx-auto" src="${products[i].photo}" alt="" />
              <div class="card-body d-flex align-items-center justify-content-between">
                <h5 class="card-title">${products[i].title}</h5>
                <h7>$${products[i].qmimi}</h7>
                <div class="d-flex">
                  <button class="cart-button border-0 me-2" data-id="${i}"><i class="${products[i].icon2}"></i></button>
                  <button class="delete-button border-0" data-id="${i}"><i class="fa-sharp fa-solid fa-trash"></i></button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      $("#products-cards").append(productcard);
    }
  
    $(".cart-button").click(function() {
      const productId = $(this).data("id");
      const product = products[productId];
      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Product added to cart:", product);
      alert("Product added to cart!");
    });
  
    $(".delete-button").click(function() {
      const productId = $(this).data("id");
      const index = cartItems.findIndex(item => item.title === products[productId].title);
      if (index > -1) {
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log("Product removed from cart:", products[productId]);
        alert("Product removed from cart!");
      }
    });
  
 
  });
  $("#clear-cart").click(function() {

    localStorage.removeItem("cartItems");

   alert("Cart cleared!");
 });
  
  
