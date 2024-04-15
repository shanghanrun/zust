import React from 'react'
import { countStore } from '../store'

const Box = () => {
	const {count} = countStore()
  return (
	<div style={{border: '2px solid green', margin:'10px', width:'100px'}}>Box : {count}</div>
  )
}

export default Box