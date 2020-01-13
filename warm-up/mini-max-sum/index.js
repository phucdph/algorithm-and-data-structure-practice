// https://www.hackerrank.com/challenges/mini-max-sum/problem

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sum = arr.reduce((acc, value) => acc + value, 0);
  let min = sum;
  let max = 0;
  for (let i = 0; i < 5; i++) {
    const value = sum - arr[i];
    if (value > max) max = value;
    if (value < min) min = value;
  }
  console.log(min, max);
}

function main() {
  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
