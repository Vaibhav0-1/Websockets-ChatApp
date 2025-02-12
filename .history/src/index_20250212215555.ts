import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;

wss.on("connection", (sokcet) => {
    console.log("user Connected");
    userCount++;
    console.log("")

})