import { SocketClient } from "./Core/socket";

import { Sandbox } from "./sandbox";

export var globalWindow = document.createElement('div');
globalWindow.style.display = "none";
document.body.appendChild(globalWindow);

// let sandbox: Sandbox = new Sandbox();

let socket = new SocketClient();

console.log("Running Client...");

