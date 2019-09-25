import React from 'react'
import { addToCart, deleteFromCart } from '../../redux/actions'
import { connect } from 'react-redux'

class Others extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      productList: [
        {
          product: 'Apple',
          quantity: '1',
          unitCost: '100'
        },
        {
          product: 'Bananan',
          quantity: '4',
          unitCost: '200'
        }
      ]
    }
  }
  handleAdd () {
    // this.addToCart('Juice 2L', 1, 250)
  }
  render () {
    let { cartList, addToCart, deleteFromCart } = this.props
    return (
      <div>
        Others
        <ul>
          <h3>购物车</h3>
          {
            cartList.map((item, index) => {
              return <li key={index}>{item.product}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => deleteFromCart(item.product)}>del</button> </li>
            })
          }
        </ul>
        <ul>
          <h3>商品列表</h3>
          {
            this.state.productList.map((item, index) => {
              return <li key={index}>{item.product}&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => addToCart(item.product, item.quantity, item.unitCost)}>add</button></li>
            })
          }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cartList: state.shoppingCart.cart,
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart (data) {
      dispatch(addToCart(data))
    },
    deleteFromCart (data) {
      dispatch(deleteFromCart(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Others)