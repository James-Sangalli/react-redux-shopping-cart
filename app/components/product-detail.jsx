import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import ActionTypes from "../ActionTypes";

class ProductDetail extends Component {
  render() {
    const {id} = this.props.params
    const product = this.props.products.filter(p => p.get('id') == id ).first()
    const name = product.get('name')
    const addToCart = (e) => {
      e.preventDefault()
      this.props.addToCart(id)
    }
    const removeFromCart = (e) => {
      e.preventDefault()
      this.props.removeFromCart(id)
    }
    const addToWishList = (e) => {
      e.preventDefault()
      this.props.addToWishList(id)
    }
    return (
      <div className='product' id={id}>
        <div> Detailed view of a product {name}</div>
        <div><a href='' onClick={addToWishList}>Add to wishlist</a></div>
        <div><a href='' onClick={addToCart}>Add to Cart</a></div>
        <div><a href='' onClick={removeFromCart}>Remove from Cart</a></div>
        <div><Link to='/'>View all</Link></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (id) => {
      dispatch({
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        id: parseInt(id)
      })
    },
    removeFromCart: (id) => {
      dispatch({
        type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
        id: parseInt(id)
      })
    },
    addToWishList: (id) => {
      dispatch({
          type: ActionTypes.ADD_PRODUCT_TO_WISHLIST,
          id: parseInt(id)
      })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail)
