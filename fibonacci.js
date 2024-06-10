function fibs(n) {
  if (n == 0) return [];
  if (n == 1) return [0];

  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

function fibsRec(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 2)[n - 3]];
}

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
