import { Server } from "./server";
require('dotenv').config();

const server = new Server();

server.listen((clientPort, socketPort) => {
  console.log(`Server is listening on https://localhost:${clientPort}\nSocket is listening on https://localhost:${socketPort}`);
});
