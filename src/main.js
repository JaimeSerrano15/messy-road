import * as THREE from 'three';
import { Renderer } from "./components/Renderer";
import { Camera} from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player, initializePlayer } from "./components/Player";
import "./style.css";
import {map, initializeMap} from "./components/Map";
import {animateVehicles} from "./animateVehicles";
import "./collectUserInput.js"
import {animatePlayer} from "./animatePlayer.js";
import {hitTest} from "./hitTest.js";

// Scene
const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

// Lights
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
player.add(dirLight);

// Camera
const camera = new Camera();
player.add(camera);

// restart button
const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

// Game
initializeGame();

document.querySelector("#restart")?.addEventListener("click", initializeGame);

function initializeGame() {
    initializePlayer();
    initializeMap();

    if (scoreDOM) scoreDOM.innerText = "0";
    if (resultDOM) resultDOM.style.visibility = "hidden";
}

// Renderer
const renderer = new Renderer();
renderer.setAnimationLoop(animate);

function animate() {
    animateVehicles();
    animatePlayer();
    hitTest();

    renderer.render(scene, camera);
}