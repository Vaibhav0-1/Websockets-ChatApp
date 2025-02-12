import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 

wss.on("connection", (sokcet) => {
    console.log("user Connected")
})