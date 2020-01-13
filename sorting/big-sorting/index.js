// https://www.hackerrank.com/challenges/big-sorting/problem

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

const comparator = (a, b) => {
  const formatedA = a.replace(/^0+/, "");
  const formatedB = b.replace(/^0+/, "");
  if (formatedA.length > formatedB.length) return 1;
  if (formatedA.length < formatedB.length) return -1;
  for (let i = 0; i < formatedA.length; i++) {
    if (formatedA[i] > formatedB[i]) return 1;
    if (formatedA[i] < formatedB[i]) return -1;
    if (i === formatedA.length - 1) return 0;
  }
};

// Complete the bigSorting function below.
function bigSorting(unsorted) {
  return unsorted.sort(comparator);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  let unsorted = [];

  for (let i = 0; i < n; i++) {
    const unsortedItem = readLine();
    unsorted.push(unsortedItem);
  }

  let result = bigSorting(unsorted);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
