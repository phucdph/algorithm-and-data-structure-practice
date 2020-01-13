// https://www.hackerrank.com/challenges/insertionsort1/problem

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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
  let i = arr.length - 1;
  let val = arr[i];

  while (val < arr[i - 1]) {
    arr[i] = arr[i - 1];
    console.log(...arr);
    i--;
  }
  arr[i] = val;
  console.log(...arr);
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  insertionSort1(n, arr);
}
