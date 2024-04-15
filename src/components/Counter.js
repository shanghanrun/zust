import React from 'react'
import { countStore } from './../store';

const Counter = () => {
	const {count, increase, decrease} = countStore()
	function plus(){
		increase()
	}
	function minus(){
		decrease()
	}
  return (
	<div style={{margin:'10px'}}>
		<div>count: {count}</div>
		<button onClick={plus}>증가</button>
		<button onClick={minus}>감소</button>
	</div>
  )
}

export default Counter