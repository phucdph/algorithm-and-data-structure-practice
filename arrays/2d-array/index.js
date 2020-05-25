// https://www.hackerrank.com/challenges/2d-array/problem

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

const caculateSumHourClass = (arr, i, j) => {
  return (
    arr[i][j] +
    arr[i][j + 1] +
    arr[i][j + 2] +
    arr[i + 1][j + 1] +
    arr[i + 2][j] +
    arr[i + 2][j + 1] +
    arr[i + 2][j + 2]
  );
};

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      const s = caculateSumHourClass(arr, i, j);
      max = s > max ? s : max;
    }
  }
  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map(arrTemp => parseInt(arrTemp, 10));
  }

  let result = hourglassSum(arr);

  ws.write(result + "\n");

  ws.end();
}
