import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

//Displays an image, name, price and add to shopping cart button for all items in the store
class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="Product">
        <img src={window.location.origin + product.img} alt="" />
        <br />
        <span className="ProductName"> {product.name} - </span>
        <span> ${product.price.toFixed(2)}</span>
        <br />
        <Button onClick={() => this.props.handleAddItemClick(product)}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default Product;
