import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });



let allSockets: User[] = [];

wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("user connected #");

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