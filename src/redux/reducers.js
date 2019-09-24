// 1、引入combineReducers
// 2、定义状态对应的reducer
// 3、使用combineReducers合并状态并导出
import { combineReducers } from 'redux'

const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

const initState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}



// 创建状态
const productsReducer = function (state = [], action) {
  return state
}

const cartReducer = function (state = initState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }
    case UPDATE_CART: {
      return {
        ...state,
        cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
      }
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.product !== action.payload.product)
      }
    }
    default:
      return state
  }
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}
const reducers = combineReducers(allReducers)
export default reducers
