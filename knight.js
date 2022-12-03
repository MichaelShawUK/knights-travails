const knightTravel = [
  [+1,+2],
  [+1,-2],
  [+2,+1],
  [+2,-1],
  [-1,+2],
  [-1,-2],
  [-2,+1],
  [-2,-1]
];

function isOnBoard(position) {
  if (position[0] > 7 || position[1] > 7) return false;
  if (position[0] < 0 || position[1] < 0) return false;
  return true;
}

function calculateMoves(position) {
  let possibleMoves = knightTravel.map(move => [position[0] + move[0], position[1] + move[1]]);
  let validMoves = possibleMoves.filter(position => isOnBoard(position));
  return validMoves;
}

function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let key = `${i},${j}`;
      board[key] = calculateMoves([i,j]);
    }
  }
}

function findShortestPath(start, end) {
  let position;
  let path;
  let queue = [[start, [start]]];
  while (true) {
    let current = queue.shift();
    position = current[0];
    path = current[1];
    if (`${position}` === `${end}`) {
      break;
    }
    let nextMoves = board[`${position}`];
    for (let move of nextMoves) {
      queue.push([move, [...path, move]]);
    }
  }
  return path;
}

function knightMoves(start, end) {
  const path = findShortestPath(start, end);
  console.log(`=> You made it in ${path.length} moves! Here's your path:`);
  console.log(...path);
}

const board = {};
createBoard();
knightMoves([3,3], [4,3]);
