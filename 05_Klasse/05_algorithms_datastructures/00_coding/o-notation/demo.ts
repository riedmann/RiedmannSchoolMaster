const n = 10000;

for (let i = 0; i < n; i++) {
  // Some operation
  const temp = i * 2;
}

// O(n^2) + O(n) example
let result = Math.pow(n, 2) + n;
console.log("n^2:", Math.pow(n, 2));
console.log(`Result for n=n^2 + n}:`, result);

// O(n^3) + O(n^2) + O(n) example
let result1 = Math.pow(n, 3) + Math.pow(n, 2) + n;
console.log("n^3:", Math.pow(n, 3));
console.log(`Result for n=n^3 + n^2 + n:`, result1);
