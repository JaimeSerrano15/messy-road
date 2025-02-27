import {calculateFinalPosition} from "./calculateFinalPosition.js";
import {minTileIndex, maxTileIndex} from "../constants.js";
import {metadata as rows} from "../components/Map.js";

export function endsUpInvalidPosition(currenPosition, moves) {
    // Calculate where the player would end up after the move
    const finalPosition = calculateFinalPosition(currenPosition, moves);

    // Detect if hit the edge of the board
    if (
        finalPosition.rowIndex === -1 ||
        finalPosition.tileIndex === minTileIndex - 1 ||
        finalPosition.tileIndex === maxTileIndex + 1
    ) {
        return false;
    }

    // Detect if hit a Tree
    const finalRow = rows[finalPosition.rowIndex - 1];
    return !(finalRow &&
        finalRow.type === "forest" &&
        finalRow.trees.some(
            (tree) => tree.tileIndex === finalPosition.tileIndex
        ));
}