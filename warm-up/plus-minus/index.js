// https://www.hackerrank.com/challenges/plus-minus/problem

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  const rate = 1 / arr.length;
  return arr
    .reduce(
      (acc, value) => {
        switch (true) {
          case value > 0: {
            acc[0] += rate;
            break;
          }
          case value < 0: {
            acc[1] += rate;
            break;
          }
          case value === 0: {
            acc[2] += rate;
            break;
          }
        }
        return acc;
      },
      [0, 0, 0]
    )
    .map(num => num.toFixed(6));
}

function main() {
  const n = parseInt(readLine(), 10);

  const arr = readLine()
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr).map(num => console.log(num));
}
