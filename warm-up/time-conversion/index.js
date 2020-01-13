// https://www.hackerrank.com/challenges/time-conversion/problem

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
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  const hr = Number(s.slice(0, 2));
  const m = s.slice(8, 10);
  const newHr = m === "AM" ? hr : hr === 12 ? 12 : hr + 12;
  const strHr = (newHr === 12 && m === "AM" ? 0 : newHr).toString();
  return `${strHr.length === 1 ? "0" + strHr : strHr}${s.slice(2, 8)}`;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = timeConversion(s);

  ws.write(result + "\n");

  ws.end();
}
