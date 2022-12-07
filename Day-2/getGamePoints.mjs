const ROCK_POINTS = 1; 
const PAPER_POINTS = 2;
const SCISSORS_POINTS = 3;

const DRAW_POINTS = 3;
const WIN_POINTS = 6;
const LOSE_POINTS = 0;

const playerTwoPointMap = {
  X: ROCK_POINTS,
  Y: PAPER_POINTS,
  Z: SCISSORS_POINTS
};

const winLoseMap = {
  X: {
    A: DRAW_POINTS + ROCK_POINTS,
    B: LOSE_POINTS + ROCK_POINTS,
    C: WIN_POINTS + ROCK_POINTS,   
  },
  Y: {
    A: WIN_POINTS + PAPER_POINTS,
    B: DRAW_POINTS + PAPER_POINTS,
    C: LOSE_POINTS + PAPER_POINTS,
  },
  Z: {
    A: LOSE_POINTS + SCISSORS_POINTS,
    B: WIN_POINTS + SCISSORS_POINTS,
    C: DRAW_POINTS + SCISSORS_POINTS,
  }
};

const thrownResultMap = {
  X: {
    A: LOSE_POINTS + SCISSORS_POINTS,
    B: LOSE_POINTS + ROCK_POINTS,
    C: LOSE_POINTS + PAPER_POINTS,
  },
  Y: {
    A: DRAW_POINTS + ROCK_POINTS,
    B: DRAW_POINTS + PAPER_POINTS,
    C: DRAW_POINTS + SCISSORS_POINTS,
  },
  Z: {
    A: WIN_POINTS + PAPER_POINTS,
    B: WIN_POINTS + SCISSORS_POINTS,
    C: WIN_POINTS + ROCK_POINTS,
  }
};

export function getGamePoints(playerOneMove, playerTwoMove) {
  return winLoseMap[playerTwoMove][playerOneMove];
}

export function getThrownPoints(playerOneMove, wantedResult) {
  return thrownResultMap[wantedResult][playerOneMove];
}

