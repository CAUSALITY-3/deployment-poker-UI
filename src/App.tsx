import React, {useEffect, useState, useRef} from 'react';
// import io from 'socket.io-client';
import socket from './socket';
import './App.scss';
import JoinPage from './JoinPage';
import MainPage from './MainPage';


// const socket = io('http://localhost:9000', { transports: ["websocket"] });
// io(`ws://${WS_DOMAIN}:${WS_PORT}`, { transports: ["websocket"] });

function App() {
	// const size:string[] = ['S','M','L','XL']
	// let users:{id:string,name:string}[] = []
	// let cardValues:{name:string,value:string}[]=[]
	const [joinpage,setJoinpage]=useState<boolean>(true)
	const [user, setUser] = useState<object>({})
	const [name, setName] = useState<string>('')
	
	
	socket.on('userdata',(users:any)=>{
		setJoinpage(false)
	  })

	socket.on('nameAlready',(name:any)=>{
		setJoinpage(true)
		console.log(`${name} already taken, Please try another name`);
	})
	

	// const [cardSet, setCardSet] = useState<any>([])
	// const [inputval, setInput] = useState<string>('')
	
	

	return (
		<div>
			{/* <button>seturl</button> */}
			{joinpage ? <JoinPage setJoinpage={setJoinpage} setName={setName} name={name}/> : <MainPage user={user}/>}
		</div>
	)
}

export default App;
