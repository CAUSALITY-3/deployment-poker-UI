import React from 'react'
import socket from './socket'
import './Estimate.scss'

const Estimate = (props:any) => {
    const clickHandler = () =>{
        socket.emit('estimation',props)
    }

  return (
    <div className='estimate-comtainer' onClick={clickHandler}>
        <h1>{props.value}</h1>
    </div>
  )
}

export default Estimate