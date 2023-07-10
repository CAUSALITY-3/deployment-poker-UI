import React, { useEffect, useState } from 'react'
import Card from './Card'
import socket from './socket'
import './MainPage.scss'
import Estimate from './Estimate'

const MainPage = (props:any) => {
  // const data = [{name:"Sukumar Azheekode", value:"M",mode:false},{name:"Akash", value:"L",mode:false},{name:"Arun", value:"S",mode:false},{name:"Sevag", value:"XS",mode:false},
  // {name:"Vishal", value:"XL",mode:true},{name:"Abin", value:"M",mode:false},{name:"Akash", value:"L",mode:false},{name:"Arun", value:"S",mode:false},{name:"Sevag", value:"XS",mode:false},
  // {name:"Vishal", value:"XL",mode:false},{name:"Leonardo Davinchi koottumpurath", value:"M",mode:true},{name:"Akash", value:"L",mode:false},{name:"Arun", value:"S",mode:false},{name:"Sevag", value:"XS",mode:false},
  // {name:"Vishal", value:"XL",mode:false},{name:"Abin", value:"M",mode:false},{name:"Akash", value:"L",mode:false},{name:"Arun", value:"S",mode:false},{name:"Sevag", value:"XS",mode:false},
  // {name:"Vishal", value:"XL",mode:true},]

// const user = {name:"Abin", value:"M",mode:false}
const Tshirt=['XS','S','M','L','XL','XXL','?']
const storyPoints = ['0','1','2','3','5','8','13','21']

const [showCard, setShowCard] = useState<boolean>(true)
const [userMode, setUserMode] = useState<boolean>(false)
const [userslis, setuserslis] = useState<any>([])


// socket.on('userdata',(user:any)=>{
//   props.setUser(user)
// })
// useEffect(()=>{
//   props.setUser(props.user)
// })
socket.on('usersdata',(users:any)=>{
  setuserslis(users)
  console.log(users)
})

const nonspec=userslis.filter((elements:any)=>!elements.mode)
const spec=userslis.filter((elements:any)=>elements.mode)

const UserModeHandler = () =>{
  setUserMode(!userMode)
  console.log({user:props.user,userMode})
  socket.emit('userMode', {user:props.user,userMode})
}

  return (
    <div className='mainpage-container'>
        <div className="mainpage-boxes box1">
            <div className="box1-left">
              <button onClick={()=>setShowCard(!showCard)}>Show</button>
              <h1>{props.user.name}</h1>
            </div>
        </div>
        <div className="mainpage-boxes box2">
            <div className="mainpage-boxes box2-top">
            {Tshirt.map((item:any)=>(
              <Estimate value = {item} name={props.user} />))}
            </div>
            <div className="mainpage-boxes box2-middle">
              {nonspec.map((item:any)=>(
              <Card item = {item} showCard={showCard} userMode={userMode}/>))}
            </div>
            <div className="mainpage-boxes box2-bottom"></div>
        </div>
        <div className="mainpage-boxes box3">
        <button onClick={UserModeHandler}>Mode</button>
        {spec.map((item:any)=>(
              <Card item = {item} showCard={showCard} userMode={true}/>))}
        </div>
    </div>
  )
}

export default MainPage