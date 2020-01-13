// https://www.hackerrank.com/challenges/quicksort1/problem

"use strict";

const fs = require("fs");

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

// Complete the quickSort function below.
function quickSort(arr) {
  const pivot = arr[0];

  const { left, right, middle } = arr.reduce(
    (acc, value) => {
      switch (true) {
        case value < pivot: {
          acc.left.push(value);
          break;
        }
        case value === pivot: {
          acc.middle.push(value);
          break;
        }
        case value > pivot: {
          acc.right.push(value);
          break;
        }
      }
      return acc;
    },
    { left: [], right: [], middle: [] }
  );
  return [...left, ...middle, ...right];
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  let result = quickSort(arr);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
