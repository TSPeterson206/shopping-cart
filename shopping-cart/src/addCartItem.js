import React, { Component } from 'react'

class AddCartItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      qty:'',
      id:''
    }
  }

  isPresent(ele) {
    return ele.id === this.state.id
  }

  createItem = (event) => {
  event.preventDefault();

  const findIt = this.props.products.find(isPresent)

    const newItem = {
      product: {
        id: this.state.id,
        name: findIt.name,
        priceInCents: findIt.priceInCents
      },
      quantity: parseInt(this.state.qty)
    }

    this.setState({qty:''})
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