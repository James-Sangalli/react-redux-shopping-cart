import {fromJS} from 'immutable'
import ActionTypes from './ActionTypes';

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti', price: '1'},
    {id: 2, name:'gold', price: '10'},
    {id: 3, name:'rake', price: '2'},
    {id: 4, name:'car', price: '100000'},
    {id: 5, name:'falcon', price: '5'}
  ],
  cart: [1,4],
  wishlist: [1]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return state.set('cart', state.get('cart').push(action.id))
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      const index = state.get('cart').indexOf(action.id);
      if(index > -1) {
        return state.set('cart', state.get('cart').delete(index));
      } else {
        return state;
      }
    case ActionTypes.ADD_PRODUCT_TO_WISHLIST:
      return state.set('wishlist', state.get('wishlist').push(action.id));
    case ActionTypes.CHECKOUT:
      return state.set('cart', state.get('cart').clear())
    default:
      return state
  }
}
