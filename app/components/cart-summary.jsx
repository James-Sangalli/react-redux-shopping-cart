import React, {Component} from 'react'
import {connect} from 'react-redux'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
    const wishlist = this.props.products.filter(p => {
        return this.props.wishlist.includes(p.get('id'))
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
            <h4>Wishlist</h4>
            <div className='wishlist'>
                {wishlist.map((wish, idx) => {
                    const number = Math.max(this.props.wishlist.reduce((n, val) => { return n + (val === wish.get("id")) }) - 1, 1);
                    return <div key={idx}>{ number + "x " + wish.get('name') + " ($" + number * parseInt(wish.get('price')) + ")" }</div>
                })}
            </div>
            <br/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart'),
    wishlist: state.get('wishlist')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)
