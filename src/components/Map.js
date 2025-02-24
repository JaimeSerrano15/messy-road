import * as THREE from 'three';
import { Grass } from './Grass';

export const metadata = [
    {
        type: "forest",
        trees: [
            { tileIndex: -3, height: 10 },
            { tileIndex: 2, height: 30 },
            { tileIndex: 5, height: 50 },
        ]
    }
];

export const map = new THREE.Group();

export function initializeMap() {
    const grass = Grass(0);
    map.add(grass);
}