import { handleEvent } from "../Test/handlers";
import { globalWindow } from "../";

export class SocketClient {

  public connection: any;
  private last_data: any;

  constructor()
  {
      this.connection = new WebSocket('wss://localhost:8443/');
      this.connection.onmessage = function (event) {
          this.last_data = JSON.parse(event.data);
          handleEvent(this.last_data);
      };
      
      this.configureEvents();
  }

  randomColor(max: number)
  {
      let r = parseInt((Math.random() * max).toFixed(0)), g = parseInt((Math.random() * max).toFixed(0)), b = parseInt((Math.random() * max).toFixed(0));
      return `rgba(${r},${g},${b}, 1)`;
  }
 
  configureEvents()
  {
  }

}