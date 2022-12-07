import { fileTextToArray } from '../../utils/fileTextToArray.mjs';
import { getGamePoints } from '../getGamePoints.mjs';

const gameMoves = await fileTextToArray({
  fileName: '../game-input.txt'
});

console.log(gameMoves.reduce((acc, val) => {
  const [playerOneMove, playerTwoMove] = val.split(" ");
  
  return acc + getGamePoints(playerOneMove, playerTwoMove);
}, 0));