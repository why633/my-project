// 1、引入createStore
// 2、创建store并导出
import { createStore } from 'redux'
import reducers from './reducers'

export default createStore(reducers)