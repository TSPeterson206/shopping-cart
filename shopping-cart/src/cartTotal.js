import React, {
  Component
} from 'react'

class CartTotal extends Component {
  constructor(props) {
    super(props)
  }

  addThemUp = (arr) => {
    let acc = [];
    for (let i = 0; i < arr.length; i++) {
      acc.push(parseFloat(arr[i].product.priceInCents.replace('$', '')) * arr[i].quantity)
    }
    const newTotal = acc.reduce((a, b) => a + b)
    return (newTotal).toFixed(2);
  }
  render() {
    return ( 
      <div className="total">
      Total: $ {
        this.addThemUp(this.props.cartItemslist)
      } 
      </div>
    )
  }
}
export default CartTotal