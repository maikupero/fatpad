import { getDayInput } from "./constants/values.js";
import readline from "readline";
import nReadlines from 'n-readlines';

export interface GridXY {
  y: number,
  x: number,
}
export interface GridXYZ extends GridXY {
  z: number,
}

export const parseData = (AOCData: string, verbose = false) => {  
  const dataLines = new nReadlines(AOCData);
  let line;
  let lineNumber = 1;
  const res: string[] = [];

  while (line = dataLines.next()) {
    res.push(line.toString());
    lineNumber++;
  }

  return res;
}

export function isDigit(char: string) {
  return (
    char === '0' ||
    !!parseInt(char)
  )
}

export function isPrime(num: number) {
  //todo
}

export function greatestCommonDenominator(x: number, y: number): number {
  return (!y ? x : greatestCommonDenominator(y, x % y));
}
export function leastCommonDenominator(x: number, y: number): number {
  return (x * y) / greatestCommonDenominator(x, y);
}
export function getLeastCommonMultiple(...nums: number[]): number {
  return [...nums].reduce((a, b) => leastCommonDenominator(a, b));
}

export const timeDiff = (startTime) => {
  const endTime = Date.now();
  return endTime - startTime;
}

export const printGrid = (
  grid: any[][], 
  propToPrint?: string,
  conversion?: {convert: number | string, to: number | string},
) => {
  grid.forEach((line: any[]) => 
    console.log(...line.map((point: any) => {
      if (typeof point === 'string' || typeof point === 'number') {
        if (conversion) {
          return point === conversion.convert ? conversion.to : point
        } else {
          return point;
        }
      } else {
        if (propToPrint) {
          if (conversion) {
            return point[propToPrint] === conversion.convert ? conversion.to : point[propToPrint]
          } else {
            return point[propToPrint] ?? '?'
          }
        }
      }
    }))
  )
}
export function coordsAreLegal(coord: GridXY, grid: any[][]): boolean  {
  return (
    coord.y > -1 &&
    coord.x > -1 &&
    coord.y < grid.length &&
    coord.x < grid[0].length
  )
}
export function coordsMatch(current: GridXY, target: GridXY): boolean {
  return (
    current.y === target.y &&
    current.x === target.x
  )
}
export function coordsAlreadyFound(arr: GridXY[], y: number, x: number): boolean {
  return -1 !== arr.findIndex((coord) => coord.y === y && coord.x === x) 
}
export function getAdjacentCoords(
  location: GridXY, 
  grid: any[][],
  includeDiagonal?: boolean,
): GridXY[] {
  const result: GridXY[] = [];
  const coordsToCheckLegality: GridXY[] = [
    {y: location.y - 1, x: location.x},
    {y: location.y, x: location.x - 1},
    {y: location.y + 1, x: location.x},
    {y: location.y, x: location.x + 1},
  ]
  if (includeDiagonal) {
    coordsToCheckLegality.push({y: location.y - 1, x: location.x - 1});
    coordsToCheckLegality.push({y: location.y + 1, x: location.x - 1});
    coordsToCheckLegality.push({y: location.y - 1, x: location.x + 1});
    coordsToCheckLegality.push({y: location.y + 1, x: location.x + 1});
  }
  coordsToCheckLegality.forEach((coord: GridXY) => 
    coordsAreLegal(coord, grid) && result.push(coord)
  )
  return result;  
}
export function getDirectionCameFrom(from: GridXY, curr: GridXY) {
  if (from.y < curr.y) return 'up';
  if (from.y > curr.y) return 'down';
  if (from.x < curr.x) return 'left';
  if (from.x > curr.x) return 'right';
}

const getUserInput = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }))
}

export const retrieveCurrentDayFromUser = async () => {
  let dayInput: number = 0;
  while (dayInput < 1 || dayInput > 25) {
    const userInput = await getUserInput(getDayInput) as string;
    dayInput = parseInt(userInput);
  }
  return dayInput;
}

// https://stackoverflow.com/questions/18193953/waiting-for-user-to-enter-input-in-node-js
// https://www.npmjs.com/package/cli-interact