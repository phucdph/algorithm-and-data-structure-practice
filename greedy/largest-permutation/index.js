// https://www.hackerrank.com/challenges/largest-permutation/problem

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

// Complete the largestPermutation function below.
function largestPermutation(k, arr, idxMap) {
  for (let i = 0; i < arr.length && k; i++) {
    if (arr[i] === arr.length - i) continue;
    idxMap[arr[i]] = idxMap[arr.length - i];
    arr[idxMap[arr.length - i]] = arr[i];
    arr[i] = arr.length - i;
    k--;
  }
  return arr;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nk = readLine().split(" ");

  const n = parseInt(nk[0], 10);

  const k = parseInt(nk[1], 10);

  const { arr, idxMap } = readLine()
    .split(" ")
    .reduce(
      (acc, value, idx) => {
        acc.arr.push(Number(value));
        acc.idxMap[value] = idx;
        return acc;
      },
      { arr: [], idxMap: {} }
    );

  const result = largestPermutation(k, arr, idxMap);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
