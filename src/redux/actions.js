function addToCart (product, quantity, unitCost) {
  return {
    type: 'ADD_TO_CART',
    payload: { product, quantity, unitCost }
  }
}
function updateCart (product, quantity, unitCost) {
  return {
    type: 'UPDATE_CART',
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}
function deleteFromCart (product) {
  return {
    type: 'DELETE_FROM_CART',
    payload: {
      product
    }
  }
}
export { addToCart, updateCart, deleteFromCart }