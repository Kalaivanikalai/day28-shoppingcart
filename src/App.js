import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import CartItem from "./CartItem";
import { useState } from 'react';

function App() {
  const[products,setdisable]=useState([
    {
      id:1,
      image:("https://m.media-amazon.com/images/I/61SSl5FKw9L._AC_UL480_FMwebp_QL65_.jpg"),
      title:"Fostelo",
      star:false,
      price:false,
      price1:800,
      sale:false,      
                
    },

    {
      id:2,
      image:("https://m.media-amazon.com/images/I/61-E3V2Xv1L._AC_UL480_FMwebp_QL65_.jpg"),
      title:"clementine",
      star:true,
      price:"1,799",
      price1:1450,
      sale:true,
      
    },
    
    {
      id:3,
      image:("https://m.media-amazon.com/images/I/61PBuqFlw5L._AC_UL480_FMwebp_QL65_.jpg"),
      title:"VISMIINTREND",
      star:false,
      price:"1900",
      price1:1500,
      sale:true,
    
    },
    {
      id:4,
      image:("https://m.media-amazon.com/images/I/713PyK91XHL._AC_UL480_FMwebp_QL65_.jpg"),
      title:"Lino Perros",
      star:true,
      price:"18900",
      price1:14500,
      sale:false,
     
    },
    
    {
      id:5,
      image:("https://m.media-amazon.com/images/I/61dGmPtqleS._AC_UL480_FMwebp_QL65_.jpg"),
      title:"EXOTIC",
      star:false,
      price:false,
      price1:1079,
      sale:true,
            
    },

    {
      id:6,
      image:("https://m.media-amazon.com/images/I/6151MAuWlzL._AC_UL480_FMwebp_QL65_.jpg"),
      title:"Lino Perros",
      star:false,
      price:false,
      price1:1780,
      sale:false,
       
    },
    {
      id:7,
      image:("https://m.media-amazon.com/images/I/81DuezKEUsL._AC_UL480_FMwebp_QL65_.jpg"),
      title:"EXOTIC",
      star:true,
      price:"10000",
      price1:8000,
      sale:true,
      
    },
    {
      id:8,
      image:("https://m.media-amazon.com/images/I/71UADtESccL._AC_UL480_FMwebp_QL65_.jpg"),
      title:"MARK & KEITH",
      star:true,
      price:false,
      price1:20000,
      sale:false,
    },
    {
      id:9,
      image:("https://m.media-amazon.com/images/I/816tE3jeAPL._AC_UL480_FMwebp_QL65_.jpg"),
      title:"Lino Perros Women's Artificial Leather Satchel (White)",
      star:true,
      price:false,
      price1:1598,
      sale:false,
    }
  ]);

  const [cartitems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

/* Cart items adding.. */
  let handleCart = (item) => {
    setCartItems([...cartitems, item]);
    setTotal(total + item.price1);
  };

/* Cart items removing.. */
  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
    cartitems.splice(itemIndex, 1);
    setCartItems([...cartitems]);
    setTotal(total - item.price1);
  };

  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#!">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbaprice2upportedContent" aria-controls="navbaprice2upportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbaprice2upportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">All Products</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                        <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i> {" "}Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill">{cartitems.length} {" "}</span>
                </button>
                <hr/>
            </form>   
        </div>
    </div>
</nav>


 <header class="bg-dark py-5">
 <div class="container px-4 px-lg-5 my-5">
     <div class="text-center text-white">
         <h1 class="display-4 fw-bolder">Shop in style</h1>
         <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
     </div>
 </div>
</header>

<section class="py-5">

<div className="float-end">
  <ol className="list-group list-group-numbered">
    {
      cartitems.map((item) => {
        return (
          <CartItem item={item} handleRemoveCart={handleRemoveCart}/>
        );
      })
    }
    <div className="row">
      <div className="col-lg-12 text-center">
        { 
          cartitems.length > 0 ? (
            <div className="col-lg-6 text-center">
              <h6>Total : {total}</h6>
            </div>
          ) : (
            <div className="col-lg-6 text-center">
              <h6></h6>
            </div>
          )
        }
      </div>
    </div>
  </ol>
</div>

  <div class="container px-4 px-lg-5 mt-5">
    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

    {
      products.map((product) => {
        return (
          <Cart key={product.id} product={product} cartItems={cartitems} handleCart={handleCart}/>
        );
      })
    }
    </div>
  </div>
</section>
<footer class="py-5 bg-dark">
  <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
</footer>
</>
  )
}

export default App;
