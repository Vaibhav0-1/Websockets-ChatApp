import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User{
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        console.log("message received " + message.toString())
        allSockets.forEach(s =>{
            s.send(message.toString() + " from server");
        })
    })
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x !== socket);
    })
})