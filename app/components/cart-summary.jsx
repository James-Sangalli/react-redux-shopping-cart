import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router";

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    return (
        <div id='cart'>
            <h4>Shopping Cart</h4>
            <div className='products'>
                {products.map((product, idx) => {
                    const number = Math.max(this.props.cart.reduce((n, val) => { return n + (val === product.get("id")) }) - 1, 1);
                    return <div key={idx}>{ number + "x " + product.get('name') + " ($" + number * parseInt(product.get('price')) + ")" }</div>
                })}
            </div>
            <br/>
            <Link to={'/checkout'}>Checkout</Link>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)
