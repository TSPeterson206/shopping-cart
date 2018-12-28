import React, { Component } from 'react'

class AddCartItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      qty:'',
      id:''
    }
  }

  isPresent = (ele) => {
    return ele.id === parseInt(this.state.id)
  }

  createItem = (event) => {
  event.preventDefault();
  
  const findIt = this.props.products.find(this.isPresent)

    const newItem = {
      product: findIt,
      quantity: parseInt(this.state.qty)
    }
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
    <form className="addItemForm"onSubmit={this.createItem}>
      <label for="quantity">Quantity</label><br></br>
      <input type="number" name="qty" value={this.state.qty} onChange={this.handleChange} /><br></br>
      <label for="itemList">Item List</label><br></br>
      <select name="id" value={this.state.id}  onChange={this.handleChange}>
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