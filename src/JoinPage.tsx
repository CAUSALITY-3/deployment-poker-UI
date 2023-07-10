import React, { useState } from 'react'
import socket from './socket';
import './JoinPage.scss'

const JoinPage = (props:any) => {
    const vai = ''

    const submitHandler = () => {
        // props.setJoinpage(false)
        socket.emit("joinpage",props.name)
    }
    const getInputVal = (event:any) =>{
        props.setName(event?.target.value)
    }

  return (
      <>
        <div className='joinpage-container'>
            <div className='joinpage-center-div'>
                <div className="joinpage-h1-div">
                    <h1 className='joinpage-h1'>Sherlock Poker</h1>
                </div>
                <div className="joinpage-form">
                    <div className="joinpage-form-content">
                        <input type="text" placeholder='name' className='joinpage-form-name-room' required onChange={getInputVal}/>
                    </div>
                    <div className="joinpage-form-content">
                        <input type="text" placeholder='room' className='joinpage-form-name-room' disabled value={vai} />
                    </div>
                    <div className="joinpage-form-content">
                        <button className="joinpage-form-button" onClick={submitHandler} >JOIN</button>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
}

export default JoinPage