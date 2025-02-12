import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets = [];

wss.on("connection", (sokcet) => {

    userCount++;
    console.log("user connected #" + userCount);

    sokcet.on("message", (message) => {
        console.log("message received " + message.toString());
        setTimeout(() => {
            sokcet.send( message.toString() + " from server" )
        }, 1000)

    })
})