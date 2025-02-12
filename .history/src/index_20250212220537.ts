import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;

wss.on("connection", (sokcet) => {

    userCount++;
    console.log("user connected #" + userCount);

    sokcet.on("message", (event) => {
        console.log("message recieved " + Message.toString());

    })
})