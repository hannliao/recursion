function mergeSort(array) {
  if (array.length === 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];

  while (left.length > 0 && right.length > 0) {
    let smallest = left[0] <= right[0] ? left.shift() : right.shift();
    merged.push(smallest);
  }

  /* return new array concatenating all elements in merged 
  and remaining elements in non-empty left or right array */
  if (left.length == 0) {
    return [...merged, ...right];
  } else {
    return [...merged, ...left];
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
