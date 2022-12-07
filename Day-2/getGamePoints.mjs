const playPointMap = {
  X: 1,
  Y: 2,
  Z: 3
}

const DRAW_POINTS = 3;
const WIN_POINTS = 6;
const LOSE_POINTS = 0;

const winLoseMap = {
  X: {
    A: DRAW_POINTS,
    B: LOSE_POINTS,
    C: WIN_POINTS     
  },
  Y: {
    A: WIN_POINTS,
    B: DRAW_POINTS,
    C: LOSE_POINTS
  },
  Z: {
    A: LOSE_POINTS,
    B: WIN_POINTS,
    C: DRAW_POINTS
  }
};

export function getGamePoints(playerOneMove, playerTwoMove) {
  return winLoseMap[playerTwoMove][playerOneMove] + playPointMap[playerTwoMove];
}