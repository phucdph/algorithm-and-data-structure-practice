// https://www.hackerrank.com/challenges/runningtime/problem

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

// Complete the runningTime function below.
function runningTime(a) {
  let count = 0;
  for (let i = 1; i < a.length; i++) {
    const tmp = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > tmp) {
      a[j + 1] = a[j];
      j = j - 1;
      count++;
    }
    a[j + 1] = tmp;
  }
  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  let result = runningTime(arr);

  ws.write(result + "\n");

  ws.end();
}
