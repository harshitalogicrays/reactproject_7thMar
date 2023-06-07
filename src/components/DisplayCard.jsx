import React from "react";

const DisplayCard = ({product}) => {
  return (
    <>
      <div className="card col-3">    
        {/* <div className="card-header">Header Part</div> */}
        <img src={require(`../assets/images/${product.image}`)} className="card-img-top" style={{height:'100px'}} alt="..." />
        <div className="card-body">     
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}<br/>
          {product.qty}
          </p>
        <button type="button" className="btn btn-primary">Add to cart</button>
          </div>
          {/* <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div> */}
      </div>
    </>
  );
};

export default DisplayCard;
