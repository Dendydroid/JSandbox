import { SocketClient } from "./Core/socket";
import { GameSettings } from "./game_settings";

let game_settings: GameSettings = new GameSettings();

let socket = new SocketClient(game_settings);

console.log("Running Client...");