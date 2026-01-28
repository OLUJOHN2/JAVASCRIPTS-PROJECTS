function mergeSort(array) {
  // Base case
  if (array.length <= 1) {
    return array;
  }

  // Find the middle of the array
  const middle = Math.floor(array.length / 2);

  // Split the array into two halves
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements
  return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}

// Testing the function
console.log(mergeSort([]));
// []

console.log(mergeSort([73]));
// [73]

console.log(mergeSort([1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
// [0, 1, 1, 2, 3, 5, 8, 13]

console.log(mergeSort([105, 79, 100, 110]));
// [79, 100, 105, 110]
