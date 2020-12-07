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
                    const number = itemCount(this.props.cart, product.get('id'));
                    return <div key={idx}>{ number + "x " + product.get('name') + " ($" + number * parseInt(product.get('price')) + ")" }</div>
                })}
            </div>
            <h4>Wishlist</h4>
            <div className='wishlist'>
                {wishlist.map((wish, idx) => {
                    const number = itemCount(this.props.wishlist, wish.get('id'));
                    return <div key={idx}>{ number + "x " + wish.get('name') + " ($" + number * parseInt(wish.get('price')) + ")" }</div>
                })}
            </div>
            <br/>
        </div>
    )
  }
}

function itemCount(items, id) {
    return items.filter((item) => {
        return item === id;
    }).size;
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
