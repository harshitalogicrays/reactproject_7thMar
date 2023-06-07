import React from "react";
import DisplayProducts from "./DisplayProducts";
import DisplayCard from "./DisplayCard";

const ProductList = () => {
  let Products = [
    { id: 101, name: "product1", image: "a.jpg", price: 20000, qty: 20 },
    { id: 102, name: "product2", image: "b.jpg", price: 10000, qty: 10 },
    { id: 103, name: "product3", image: "c.jpeg", price: 30000, qty: 20 },
    { id: 104, name: "product4", image: "d.jpg", price: 20000, qty: 50 },
    { id: 105, name: "product5", image: "a.jpg", price: 10000, qty: 20 },
    { id: 106, name: "product6", image: "b.jpg", price: 25000, qty: 60 },
  ];
  let result = Products.map((product, index) => <DisplayProducts key={index} product={product}/>);
  let results = Products.map((product, index) => <DisplayCard key={index} product={product}/>);
  return (
    <React.Fragment>
      {/* <table className="table table-dark table-striped">
        <thead><tr>
            <th>Id</th><th>Name</th><th>Image</th><th>Price</th><th>Qty</th></tr></thead>
        <tbody> {result} </tbody>
      </table> */}
    
    <div className="container">
      <div class="row">
      {results}
      </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
