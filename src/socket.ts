import io from 'socket.io-client';


const port = "https://poker-api-ntag.onrender.com" 
const socket = io(port || 'http://192.168.1.4:9000', { transports: ["websocket"] });

export default socket;