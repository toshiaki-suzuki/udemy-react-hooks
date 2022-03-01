import React, {useEffect, useState} from "react";

const App = (props) => {
  const [state, setState] = useState(props) // 引数にオブジェクトを渡せる
  const {name, price} = state

  useEffect(() => {
    console.log('This is like componentDidmount or componentDidUpdate.');
  })
  useEffect(() => {
    console.log('This is like componentDidmount.');
  }, [])
  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name])

  return (
    <>
      <p>現在の{name}は{price}円です。</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
    name:'サンプル',
    price:1000
  }

export default App;
