import * as THREE from 'three';
import { Renderer } from "./components/Renderer";
import { Camera} from "./components/Camera";
import { player } from "./components/Player";
import "./style.css";
import {map, initializeMap} from "./components/Map";

// Scene
const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

// Lights
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);

// Camera
const camera = new Camera();
scene.add(camera);

// Game
initializeGame();

function initializeGame() {
    initializeMap();
}

// Renderer
const renderer = new Renderer();
renderer.render(scene, camera);