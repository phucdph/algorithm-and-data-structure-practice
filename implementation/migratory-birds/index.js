// https://www.hackerrank.com/challenges/migratory-birds/problem

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  const map = arr.reduce(
    (acc, value) =>
      acc[value] ? { ...acc, [value]: acc[value] + 1 } : { ...acc, [value]: 1 },
    {}
  );
  let maxKey = "";
  for (const key in map) {
    if (!maxKey) {
      maxKey = key;
    } else {
      if (map[maxKey] < map[key]) {
        maxKey = key;
      }
    }
  }
  return maxKey;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arrCount = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const result = migratoryBirds(arr);

  ws.write(result + "\n");

  ws.end();
}
