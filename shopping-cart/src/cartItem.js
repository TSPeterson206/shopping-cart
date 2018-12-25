import React, { Component } from 'react'

class CartItem extends Component {
  constructor(props) {
super(props)
  }
  render () {
  return (
  <div className="collection-item">
  <div className="row">
    <div className="col-md-8">{this.props.name}</div>
    <div className="col-md-2">{this.props.priceInCents}</div>
    <div className="col-md-2">{this.props.quantity}</div>
  </div>
</div>
)
}
}
export default CartItem