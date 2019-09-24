import React from 'react'
import { addToCart, updateCart, deleteFromCart } from '../../redux/actions'
export default class HomePage extends React.Component {
  render () {
    // const creatStore = function (reducer, initState) {
    //   let state = initState;
    //   let listeners = [];

    //   /*订阅*/
    //   function subscribe (listener) {
    //     listeners.push(listener);
    //   }


    //   function dispatch (action) {
    //     state = reducer(state, action)
    //     /*通知*/
    //     for (let i = 0; i < listeners.length; i++) {
    //       const listener = listeners[i];
    //       listener();
    //     }
    //   }

    //   function getState () {
    //     return state;
    //   }
    //   /* 注意！！！只修改了这里，用一个不匹配任何计划的 type，来获取初始值 */
    //   dispatch({ type: Symbol() })
    //   return {
    //     subscribe,
    //     dispatch,
    //     getState
    //   }
    // }
    // let initState = {
    //   counter: {
    //     count: 0
    //   },
    //   info: {
    //     name: '前端九部',
    //     description: '我们都是前端爱好者！'
    //   }
    // }
    // // 按计划操作数据
    // function reducer (state, action) {
    //   switch (action.type) {
    //     case 'ADD':
    //       return {
    //         ...state,
    //         count: state.count + 1
    //       }
    //     case 'REDUCE':
    //       return {
    //         ...state,
    //         count: state.count - 1
    //       }
    //     default:
    //       return state
    //   }
    // }
    /*注意：counterReducer 接收的 state 是 state.counter*/
    // function counterReducer (state, action) {
    //   /*注意：如果 state 没有初始值，那就给他初始值！！*/
    //   if (!state) {
    //     state = initState;
    //   }
    //   switch (action.type) {
    //     case 'INCREMENT':
    //       return {
    //         count: state.count + 1
    //       }
    //     case 'DECREMENT':
    //       return {
    //         ...state,
    //         count: state.count - 1
    //       }
    //     default:
    //       return state;
    //   }
    // }
    // /*InfoReducer，一个子reducer*/
    // /*注意：InfoReducer 接收的 state 是 state.info*/
    // function InfoReducer (state, action) {
    //   if (!state) {
    //     state = initState;
    //   }
    //   switch (action.type) {
    //     case 'SET_NAME':
    //       return {
    //         ...state,
    //         name: action.name
    //       }
    //     case 'SET_DESCRIPTION':
    //       return {
    //         ...state,
    //         description: action.description
    //       }
    //     default:
    //       return state;
    //   }
    // }

    // function combineReducers (reducers) {
    //   /* reducerKeys = ['counter', 'info']*/
    //   const reducerKeys = Object.keys(reducers)
    //   /*返回合并后的新的reducer函数*/
    //   return function combination (state = {}, action) {
    //     /*生成的新的state*/
    //     const nextState = {}
    //     /*遍历执行所有的reducers，整合成为一个新的state*/
    //     for (let i = 0; i < reducerKeys.length; i++) {
    //       const key = reducerKeys[i]
    //       const reducer = reducers[key]
    //       /*之前的 key 的 state*/
    //       const previousStateForKey = state[key]
    //       /*执行 分 reducer，获得新的state*/
    //       const nextStateForKey = reducer(previousStateForKey, action)
    //       nextState[key] = nextStateForKey
    //     }
    //     return nextState;
    //   }
    // }
    // const reducer = combineReducers({
    //   counter: counterReducer,
    //   info: InfoReducer
    // });
    // const store = creatStore(reducer, initState)
    // const next = store.dispatch;
    // /*重写了store.dispatch*/
    // store.dispatch = (action) => {
    //   console.log('this state', store.getState());
    //   console.log('action', action);
    //   next(action);
    //   console.log('next state', store.getState());
    // }
    // // 订阅
    // store.subscribe(() => {
    //   let state = store.getState()
    //   console.log(`count-- ${state.counter.count}`)
    // })
    // // 改变数据
    // store.dispatch({ type: 'INCREMENT' })
    // store.dispatch({ type: 'DECREMENT' })

    return (
      <div>HomePage</div>
    )
  }
}