// https://www.hackerrank.com/challenges/priyanka-and-toys/problem

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

// Complete the toys function below.
function toys(w) {
  const sorted = w.sort((a, b) => a - b);
  return sorted.reduce(
    (acc, value, idx) => {
      if (idx !== 0 && value > 4 + acc.prev) {
        acc.prev = value;
        acc.count++;
      }
      return acc;
    },
    { prev: sorted[0], count: 1 }
  ).count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const w = readLine()
    .split(" ")
    .map(wTemp => parseInt(wTemp, 10));

  let result = toys(w);

  ws.write(result + "\n");

  ws.end();
}
