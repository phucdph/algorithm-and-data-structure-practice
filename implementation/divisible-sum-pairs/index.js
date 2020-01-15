// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

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

// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, a) {
  let c = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((a[i] + a[j]) % k === 0) c++;
    }
  }
  return c;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const ar = readLine()
    .split(" ")
    .map(arTemp => parseInt(arTemp, 10));

  let result = divisibleSumPairs(n, k, ar);

  ws.write(result + "\n");

  ws.end();
}
