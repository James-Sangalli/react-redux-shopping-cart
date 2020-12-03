import React, {Component} from 'react'
import ProductSummary from './product-summary.jsx'
import {connect} from 'react-redux'
import {Link} from "react-router";

class ProductList extends Component {
  render() {
    const productSummaries = this.props.products.map( product => {
      return <ProductSummary key={product.get('id')} product={product} />
    })
    return <div id='productList'> { productSummaries } <Link to={'/checkout'}>Checkout</Link> </div>
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products')
  };
}

export default connect(mapStateToProps)(ProductList)
