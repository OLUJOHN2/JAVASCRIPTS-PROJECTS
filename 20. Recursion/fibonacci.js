// Using Iterative Solution
function fibs(n) {
  const result = [];

  if (n >= 1) result.push(0);
  if (n >= 2) result.push(1);

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// Using Recurvise Solution
function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const previous = fibsRec(n - 1);
  return [
    ...previous,
    previous[previous.length - 1] + previous[previous.length - 2]
  ];
}


// Testing both functions
console.log(fibs(8));
// [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibsRec(8));
// [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibs(0));
console.log(fibsRec(0));

console.log(fibs(1));
console.log(fibsRec(1));

console.log(fibs(2));
console.log(fibsRec(2));
