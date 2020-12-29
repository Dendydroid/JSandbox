import * as Three from "three";

let tiles: any = [];

export function handleEvent(eventData: any) {
  

  const scene = new Three.Scene();
  const camera = new Three.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new Three.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 500;
  camera.position.x = 0;
  camera.position.y = -900;

  camera.rotation.y = -.2;
  camera.rotation.x = .2;

  // const geometry = new Three.PlaneGeometry( 5, 20, 32 );
  // const material = new Three.MeshBasicMaterial( {color: 0xffff00, side: Three.DoubleSide} );
  // const plane = new Three.Mesh( geometry, material );
  // scene.add( plane );
  const animate = function () {
    requestAnimationFrame(animate);
    for (let i = 0; i < tiles.length; i++)
    {
      // tiles[i].translate(0, 0, Math.cos(delta));
      if (tiles[i].noise_value > .5)
      {
        tiles[i].rotateY(.2 * .05);        
      } else {
        tiles[i].rotateY(.2 * -.05);        
        
      }
      
    }

    renderer.render(scene, camera);
  };

  document.body.appendChild(renderer.domElement);
  for (let z = 0; z < eventData.scene.active_level.noise.length; z++) {
    for (let x = 0; x < eventData.scene.active_level.noise[z].length; x++) {
      const tile: any = new Three.PlaneGeometry(eventData.scene.active_level.tile_size, eventData.scene.active_level.tile_size, 16);
      tile.noise_value = eventData.scene.active_level.noise[z][x].noise_value;
      tiles.push(tile);
      tile.translate(eventData.scene.active_level.noise[z][x].position.end.x, -eventData.scene.active_level.noise[z][x].position.end.z, eventData.scene.active_level.noise[z][x].noise_value * 50);

      const material = new Three.MeshBasicMaterial({ color: eventData.scene.active_level.noise[z][x].color, side: Three.DoubleSide });
      const plane = new Three.Mesh(tile, material);
      scene.add(plane);
    }
  }

  animate();

}