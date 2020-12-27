import express, {Application} from "express";
import {createServer, Server as HTTPServer} from "https";
import fs from 'fs';
import path from "path";
import {Server as SocketServer} from 'ws';
import { Helpers } from './Core/helpers';
// import { GameObject } from './Core/gameobject';
import { Level } from "./Core/level";

/**
 * Websocket Server
 */
export class Server {

    readonly socketHttpServer: HTTPServer;
    readonly clientHttpServer: HTTPServer;
    readonly credentials: { key: string, cert: string };
    readonly socketServer: Application;
    readonly clientServer: Application;
    private WSS: SocketServer;
    private settings: any;

    private connections: any[] = [];

    private gameObjects: any[] = [];

    constructor() {
        this.credentials = {
            key: fs.readFileSync(path.join(__dirname, process.env.CERT_KEY_PATH), 'utf8'),
            cert: fs.readFileSync(path.join(__dirname, process.env.CERT_PATH), 'utf8')
        };

        this.socketServer = express();
        this.clientServer = express();

        this.socketHttpServer = createServer(this.credentials, this.socketServer);

        this.clientHttpServer = createServer(this.credentials, this.clientServer);

        this.WSS = new SocketServer({
            server: this.socketHttpServer,
        });

        let _this = this;

        this.WSS.on('connection', function connection(ws) {
            console.log('new connection');
            _this.handleSocket(ws);
        });

        this.configureSocket();
        this.configureClient();

        this.configureRoutes();
    }

    // private addZero(num) {
    //     return num > 9 ? num + "" : `0${num}`;
    // }

    private configureSocket(): void {

        this.settings = {
            SOCKET_PORT: process.env.SOCKET_PORT,
            CLIENT_PORT: process.env.CLIENT_PORT,
        };
    }

    private configureClient(): void {

    }

    private configureRoutes(): void {

        this.clientServer.use(express.static(path.join(__dirname, "../client/public")));

        // this.app.use(bodyParser.urlencoded({ extended: false }));
        //
        // // for parsing application/json
        // this.app.use(bodyParser.json());
        //
        // this.app.post("/command",async (req, res) => {
        // });

        this.clientServer.get("/", (req, res) => {
            res.sendFile("index.html");
        });

    }

    private handleSocket(ws) {
        if (!Helpers.containsObject(this.connections, ws))
        {
            let data = {
                name: 'spawn',
                gameobject: {}
            };
            ws.send(JSON.stringify(data));
        }
    }


    // STARTING HTTP SERVER
    public listen(callback: (clientPort: number, socketPort: number) => void): void {
        this.socketHttpServer.listen(this.settings.SOCKET_PORT, () => {
        });

        this.clientHttpServer.listen(this.settings.CLIENT_PORT, () => {
        });

        callback(this.settings.CLIENT_PORT, this.settings.SOCKET_PORT);
    }
}
