import React, { Component } from 'react'
import CartItem from './cartItem';

class CartItems extends Component {
constructor(props) {
  super(props)
}


render() {
  return (
    <div className="container items">
  <h1>Cart Items</h1>
  <div className="list-group">
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-8">Product</div>
        <div className="col-md-2">Price</div>
        <div className="col-md-2">Quantity</div>
      </div>
    </div>
    { 
      this.props.cartItemslist.map(cartItem => {
        return <CartItem name={cartItem.product.name} priceInCents={cartItem.product.priceInCents} quantity={cartItem.quantity}/>
      }
      )
    }
  </div>
</div>
  )
}
}
export default CartItems