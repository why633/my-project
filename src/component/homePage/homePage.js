import React from 'react'
export default class HomePage extends React.Component {
  render () {
    const creatStore = function (reducer, initState) {
      let state = initState;
      let listeners = [];

      /*订阅*/
      function subscribe (listener) {
        listeners.push(listener);
      }


      function dispatch (action) {
        state = reducer(state, action)
        /*通知*/
        for (let i = 0; i < listeners.length; i++) {
          const listener = listeners[i];
          listener();
        }
      }

      function getState () {
        return state;
      }
      return {
        subscribe,
        dispatch,
        getState
      }
    }
    const initState = {
      count: 0
    }
    // 按计划操作数据
    function reducer (state, action) {
      switch (action.type) {
        case 'ADD':
          return {
            ...state,
            count: state.count + 1
          }
        case 'REDUCE':
          return {
            ...state,
            count: state.count - 1
          }
        default:
          return state
      }
    }

    
    const store = creatStore(reducer, initState)
    // 订阅
    store.subscribe(() => {
      let state = store.getState()
      console.log(`count-- ${state.count}`)
    })
    // 改变数据
    store.dispatch({ type: 'ADD' })
    store.dispatch({ type: 'REDUCE' })
    store.dispatch({ type: 'ADD' })

    return (
      <div>HomePage</div>
    )
  }
}