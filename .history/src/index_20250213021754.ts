import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User{
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
    
    socket.on("disconnect", () => {
        allSockets = allSockets.filter(x => x !== socket);
    })
})