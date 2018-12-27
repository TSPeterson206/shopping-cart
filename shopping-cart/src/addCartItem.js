import React, { Component } from 'react'

class AddCartItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      qty:'',
      id:''
    }
  }

  // make sure that `this` is bound to the function, otherwise
  // it won't know what `this.state` is
  isPresent = (ele) => {
    console.log(ele, this.state.id)
    return ele.id === parseInt(this.state.id)
  }

  createItem = (event) => {
  event.preventDefault();
  
  // since `isPresent` is a method in the object, you should use this.
  const findIt = this.props.products.find(this.isPresent)

    const newItem = {
      // product is now set to whatever you have found.
      product: findIt,
      quantity: parseInt(this.state.qty)
    }

    console.log(newItem)

    // Invoke method that gets passed down
    // to add data to the cart
    this.props.addItemToCart(newItem)

    this.setState({qty:'', id:''})
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  render() {
  return (
    <div>
    <form onSubmit={this.createItem}>
      <label for="quantity">Quantity</label><br></br>
      <input type="number" name="qty" value={this.state.qty} onChange={this.handleChange} /><br></br>
      <label for="itemList">Item List</label><br></br>
      <select name="id" value={this.state.id}  onChange={this.handleChange}>
        {/* Add a default option */}
        <option>Select an Item...</option>
        {
          this.props.products.map(product => {
            return <option value={product.id}>{product.name} , {product.priceInCents}</option>
          })
        }
      </select>
      <input type="submit"></input>
    </form>
    </div>
  )
}
}
export default AddCartItem