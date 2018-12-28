import React, { Component } from 'react';
import './App.css';
import Header from './cartHeader'
import Footer from './cartFooter'
import CartItems from './cartItems'
import AddCartItem from './addCartItem'
import CartTotal from './cartTotal';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: `$3.99` },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: `$4.99`},
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: `$19.99` },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: `$25.00` },
        { id: 44, name: 'Practical Copper Plate', priceInCents: `$10.00` },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: `$3.99` },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: `$29.99` },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: `$400.00` },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: `$39.90` },
      ],
      cartItemslist : [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: `$3.99` }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: `$4.99` }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: `$19.99` }, quantity: 1 },
      ]
    }
  }

  addItemToCart = (newItem) => {
    this.setState({
      cartItemslist: [...this.state.cartItemslist, newItem]
    })
  }

  render() {
    const year = 1921
    return (
      <div>
        <Header />
        <CartItems cartItemslist={this.state.cartItemslist} />
        <CartTotal cartItemslist={this.state.cartItemslist}
        getTheTotal={this.getTheTotal} />
        <AddCartItem 
          products={this.state.products} 
          cartItemslist={this.state.cartItemslist} 
          addItemToCart={this.addItemToCart}/>
        <Footer year={year} createItem={this.createItem}/>
      </div>
    );
  }
}

export default App;
