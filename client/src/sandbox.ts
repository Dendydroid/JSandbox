import { globalWindow } from "./";
import * as Three from "three";
import { Vector3 } from "three";

export class Sandbox {
  constructor() {
  }

  public run() {
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new Three.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new Three.TorusGeometry();
    const material = new Three.MeshNormalMaterial();
    const cube = new Three.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      cube.rotation.y += .05;
      
      if (cube.position.y < 0) {
        cube.position.lerpVectors(cube.position, new Vector3(cube.position.x, cube.position.y + .1, cube.position.z), 1);
      } else if (cube.position.y > 5) {
        cube.position.lerpVectors(cube.position, new Vector3(cube.position.x, cube.position.y - .1, cube.position.z), 1);
      }
    }
    animate();
  }
}