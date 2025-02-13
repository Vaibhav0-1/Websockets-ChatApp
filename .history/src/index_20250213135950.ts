import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User{
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message.toString());// str to obj
        if(parsedMessage.type === "join"){
            console.log("user joined room " + parsedMessage.payload.roomId)
            
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId
            })
        }

        if(parsedMessage.type == "chat"){
            //const currentUserRoom = allSockets.find((x) => x.socket == socket)?.room
            //what is the room of this user 
            let currentUserRoom = null;
            for(let i=0; i<allSockets.length; i++){
                if(allSockets[i].socket == socket){
                    currentUserRoom =allSockets[i].room;
                }
            }
            //for everyone else you send this message 
            for(let i=0; i<allSockets.length; i++){
                if(allSockets[i].room == currentUserRoom){
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }

    })
    
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x.socket !== socket);
    })
})
