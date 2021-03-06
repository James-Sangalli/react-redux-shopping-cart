import reducer from '../app/reducer'
import {expect} from 'chai'
import ActionTypes from "../app/ActionTypes";

describe('Reducer', () => {
  describe('initial state', () => {
    it('has a default product list', () => {
      const state = reducer(undefined,{})
      expect(state.get('products').size).to.equal(5)
      expect(state.get('products').first().get('name')).to.equal('spaghetti')
    })
    it('has a cart with two items', () => {
      const state = reducer(undefined, {})
      expect(state.get('cart').size).to.equal(2)
    })
  })
  describe('cart', () => {
    it('adds a product to the shopping cart', () => {
      const state = reducer(undefined, {
        type: ActionTypes.ADD_PRODUCT_TO_CART,
        id: 3
      })
      expect(state.get('cart').size).to.equal(3)
      expect(state.get('cart')).to.include(3)
    })
  })
  describe('wishlist', () => {
    it('adds a product to the wishlist', () => {
      const state = reducer(undefined, {
        type: ActionTypes.ADD_PRODUCT_TO_WISHLIST,
        id: 2
      })
      expect(state.get('wishlist').size).to.equal(2)
      expect(state.get('wishlist')).to.include(2)
    })
  })

  describe('checkout', () => {
    it('checks out the cart (clears it)', () => {
      const state = reducer(undefined, {
        type: ActionTypes.CHECKOUT,
        id: 2
      })
      expect(state.get('cart') === undefined)
    })
  })

})
