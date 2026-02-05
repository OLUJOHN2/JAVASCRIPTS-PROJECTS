function knightMoves(start, end) {
  const boardSize = 8;

  const possibleMoves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  function isValidMove(x, y) {
    return x >= 0 && x < boardSize && y >= 0 && y < boardSize;
  }

  const queue = [];
  const visited = new Set();

  queue.push({
    position: start,
    path: [start],
  });

  visited.add(start.toString());

  while (queue.length > 0) {
    const current = queue.shift();
    const [x, y] = current.position;

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${current.path.length - 1} moves! Here's your path:`);
      current.path.forEach(square => console.log(square));
      return current.path;
    }

    for (let move of possibleMoves) {
      const newX = x + move[0];
      const newY = y + move[1];

      if (isValidMove(newX, newY)) {
        const newPosition = [newX, newY];
        const key = newPosition.toString();

        if (!visited.has(key)) {
          visited.add(key);
          queue.push({
            position: newPosition,
            path: [...current.path, newPosition],
          });
        }
      }
    }
  }

  return null;
}

// Example tests
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
