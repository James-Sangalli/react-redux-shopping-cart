import React from 'react'
import { Router, Route } from 'react-router'

import ProductList from './product-list.jsx'
import ProductDetail from './product-detail.jsx'
import Checkout from './checkout.jsx';

export default (
  <Router>
    <Route path='/' component={ProductList} />
    <Route path='/products/:id' component={ProductDetail}/>
    <Route path='/checkout' component={Checkout}/>
  </Router>
)
