import React from "react";
import "./App.css";

function Cart(props) {
  return (
    <div className="container card m-1 text-center" style={{ width: "17rem" }}>

    
     <div className="float-end"> {props.product.sale ? <h6 className="badge bg-dark text-white position-absolute">Sale</h6> : ""}</div>

      <img src={props.product.image} className="card-img-top" alt="..." style={{height:"200px",width:"200px",padding:"1.5em"}}/>
      
      <div className="card-body">
        <h5 className="card-title">{props.product.title}</h5>
        <p className="d-flex justify-content-center small text-warning mb-2">

          {props.product.rating ? <div className="bi-star-fill"></div> : ""}
          {props.product.rating ? <div className="bi-star-fill"></div> : ""}
          {props.product.rating ? <div className="bi-star-fill"></div> : ""}
          {props.product.rating ? <div className="bi-star-fill"></div> : ""}
          {props.product.rating ? <div className="bi-star-fill"></div> : ""}
        </p>
        <p className="card-text">
          {" "}
          Rs:
          <span style={{ textDecoration: "line-through" }}>
            {props.product.price}
          </span>{" "}
          {props.product.price1}
        </p>
      </div>

      <button
        disabled={props.cartItems.some((obj) => obj.id === props.product.id)}
        onClick={() => props.handleCart(props.product)}
        className="btn btn-outline-dark mb-1 ">
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;