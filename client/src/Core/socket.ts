import { DrawObject } from "../Render/draw_object";

export class SocketClient {

  public connection: any;
  private last_data: any;
  private game_settings: any;

  constructor(game_settings: any)
  {
    this.game_settings = game_settings;
      this.connection = new WebSocket('wss://localhost:8443/');

      this.connection.onmessage = function (event) {
          this.last_data = JSON.parse(event.data);
          const sendEvent:any = new Event(this.last_data.name);
          sendEvent.data = this.last_data.data;
          window.dispatchEvent(sendEvent);
      };
      
      this.configureEvents();
  }

  randomColor(max: number)
  {
      let r = parseInt((Math.random() * max).toFixed(0)), g = parseInt((Math.random() * max).toFixed(0)), b = parseInt((Math.random() * max).toFixed(0));
      return `rgba(${r},${g},${b}, 1)`;
  }
  
  // drawLevel(max, tile_size)
  // {
  //     if(this.level)
  //     {
  //         let scale = 0;
  //         for(let y = 0; y < max.height/tile_size; y++)
  //         {
  //             for(let x = 0; x < max.width/tile_size; x++)
  //             {
  //                 scale = this.level.noise[y][x];
  //                 if(scale < 100){
  //                     scale = 20;
  //                 }else if(scale > 150)
  //                 {
  //                     scale = 220;
  //                 }
  //                 window.world_ctx.fillStyle = `rgba(${scale},100,100,1)`;
  //                 window.world_ctx.fillRect(
  //                     x*tile_size,
  //                     y*tile_size,
  //                     tile_size,
  //                     tile_size
  //                 );
  //             }
  //         }
  //     }
  // }

  configureEvents()
  {
    this.game_settings.emitter.addEventListener(`spawn`, event => {
        this.game_settings.draw(new DrawObject('images/test.jpg'));
      });
  }

}