import React, { Component } from 'react'

class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
  return (<div>
    <nav className="navbar navbar-dark bg-primary">
<a className="navbar-brand" href="#">Shopping Cart</a>
</nav>
</div>
  )
}
}
export default Header