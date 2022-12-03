const knightTravel = [
  [1,2],
  [1,-2],
  [2,1],
  [2,-1],
  [-1,2],
  [-1,-2],
  [-2,1],
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

const board = {};

function createBoard() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let key = `${i},${j}`;
      board[key] = calculateMoves([i,j]);
    }
  }
}

createBoard();
// console.log(board);
// let firstMove = board['0,0'][0];
// console.log(firstMove.toString());
// console.log(board[`${firstMove}`]);

// const start = [0,0];
// const end = [7,7];
// let position;
// let path;
// let queue = [[start, [start]]];
// while (true) {
//   // console.log(queue[0]);
//   let current = queue.shift();
//   position = current[0];
//   path = current[1];
//   if (`${position}` === `${end}`) {
//     break;
//   }
//   let nextMoves = board[`${position}`];
//   for (let move of nextMoves) {
//     queue.push([move, [...path, move]]);
//   }
// }



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

console.log(findShortestPath([0,0], [3,3]));



// const knightTravel = [
//   [1,2],
//   [1,-2],
//   [2,1],
//   [2,-1],
//   [-1,2],
//   [-1,-2],
//   [-2,1],
//   [-2,-1]
// ];

// let visitedSquares = [];

// function isOnBoard(position) {
//   if (position[0] > 7 || position[1] > 7) return false;
//   if (position[0] < 0 || position[1] < 0) return false;
//   return true;
// }

// function isSamePosition(a, b) {
//   if (a[0] === b[0] && a[1] === b[1]) return true;
//   return false;
// }

// function calculateMoves(position) {
//   let possibleMoves = knightTravel.map(move => [position[0] + move[0], position[1] + move[1]]);
//   let validMoves = possibleMoves.filter(position => isOnBoard(position));
  // validMoves = validMoves.filter(move => {
  //   for (let i = 0; i < visitedSquares.length; i++) {
  //     if (isSamePosition(move, visitedSquares[i])) return false;
  //   }
  //   return true;
  // });
//   return validMoves;
// }

// const Node = (position) => {
//   const children = calculateMoves(position);
//   return { position, children };
// }

// function buildTree(node) {
  // for (let i = 0; i < visitedSquares.length; i++) {
  //   if (isSamePosition(node.position, visitedSquares[i])) return;
  // }
  // visitedSquares.push(node.position);
  // for (let i = 0; i < node.children.length; i++) {
  //   node.children[i] = Node(node.children[i]);
  //   buildTree(node.children[i]);
  // }
// }

// function buildTreeIter(position) {
//   let queue = calculateMoves(position);
//   console.log(queue);

// }


// let start = Node([0,0]);
// let startingPos = [0,0];
// buildTreeIter(startingPos);

// let queue = [start];
// let lastMove = [];
// let path = [];

// function levelOrder(end) {
//   let current = queue.shift();
//   console.log(current.position);
//   if (isSamePosition(current.position, end)) {
//     lastMove.push(current.position);
//     return;
//   }
//   console.log(`Position: ${current.position}`);
//   console.log('Children:')
//   for (let i = 0; i < current.children.length; i++) {
//     queue.push(current.children[i])
//     console.log(`${current.children[i].position}`)
//   }
//   console.log('*********************end************************');
//   levelOrder(end);
//   console.log(current.position);
//   for (let i = 0; i < current.children.length; i++) {
//     if (isSamePosition(current.children[i].position, lastMove[0])) {
//       console.log(`>>>>>>${current.position}`)
//       path.push(lastMove[0]);
//       lastMove[0] = current.position;
//     }
//   }
// }

// console.log(levelOrder([4,2]));
// path.push(start.position)
// console.log(start.position);
// console.table(start.children);
// console.log(path);