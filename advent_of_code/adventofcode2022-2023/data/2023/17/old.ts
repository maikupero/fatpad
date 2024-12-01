import { GridXY, coordsAlreadyFound, coordsAreLegal, coordsMatch, printGrid } from "../../../util.js"

// TYPES 
interface Block {
  location: GridXY,
  heatLoss: number,
}
interface Heading {
  coords: GridXY;
  enteredFrom: Direction;
  resetMovement: boolean;
}

interface Path {
  steps: GridXY[],
  current: GridXY,
  heatLost: number,
  movementLimit: number,
  enteredFrom: Direction,
}
type Direction = 'up' | 'down' | 'left' | 'right';
type CrucibleDirection = 'straight' | 'left' | 'right';
type City = Block[][];

function cityAt(coords: GridXY, city: City): Block {
  return city[coords.y][coords.x]
}

// READ THE DATA
function convertDataIntoBlocks(data: string[]): City {
  const res: City = [];
  data.forEach((line: string, y: number) => {
    const lineOfBlocks: Block[] = [];
    line.split("").forEach((char: string, x: number) => {
      lineOfBlocks.push({
        location: {y, x},
        heatLoss: parseInt(char),
      })
    })
    res.push(lineOfBlocks);
  })
  return res;
}
// USEFUL INFO

// PART 1 STUFF
function pathfind(path: Path, city: City, smallestPath: number[]) {
  // console.log(city[path.current.y][path.current.x])
  if (path.heatLost > smallestPath[0]) return; // just end if we're already over the current best path
  if (coordsMatch(path.current, {y: city.length - 1, x: city[0].length - 1})) {
    // allPaths.push(path); // break condition - path has reached the end.
    smallestPath[0] = Math.min(smallestPath[0], path.heatLost);
    // console.log('returning', path)
    return;
  }
  // console.log(path.steps.length)
  if (path.movementLimit < 3) { // only check paths going straight if we haven't moved 3 before turning yet.
    const continuingStraight: Path | undefined = updatePath(path, 'straight', city);
    continuingStraight && pathfind(continuingStraight, city, smallestPath); // if it can go straight, follow new path going forward.
  }
  const branchOffLeft: Path | undefined = updatePath(path, 'left', city); // if it can go left, follow new path going left.
  branchOffLeft && pathfind(branchOffLeft, city, smallestPath);
  const branchOffRight: Path | undefined = updatePath(path, 'right', city); // if it can go right, follow new path going right.
  branchOffRight && pathfind(branchOffRight, city, smallestPath);
  // otherwise, the path to this point basically ends. 
  // it creates 1-3 new paths, or is a path instance that reaches the end and returned.
}

function updatePath(path: Path, direction: CrucibleDirection, city: City): Path | undefined {
  // this function should be giving us the updated path based on path, direction, destination details. return undefined if illegal.
  const nextHeading: Heading = getNextHeading(path.current, path.enteredFrom, direction);
  if (
    !coordsAreLegal(nextHeading.coords, city) ||
    coordsAlreadyFound(path.steps, nextHeading.coords.y, nextHeading.coords.x) 
  ) return undefined; // this potential path goes out of bounds
  const updatedPath: Path = createUpdatedPath(path, nextHeading, city);
  return updatedPath;
}


function getNextHeading(current: GridXY, cameFrom: Direction, going: CrucibleDirection): Heading {
  switch (cameFrom) {
    case 'left': // confusing, but need to think.. from which direction are we entering current spot.
      switch (going) { // then, we can go 2/3 directions from there. 
        case 'straight': // each of those will mean we're coming from a new direction. 
          return {coords: {y: current.y, x: current.x + 1}, enteredFrom: 'left', resetMovement: false};
        case 'left': 
          return {coords: {y: current.y - 1, x: current.x}, enteredFrom: 'down', resetMovement: true};
        case 'right': 
          return {coords: {y: current.y + 1, x: current.x}, enteredFrom: 'up', resetMovement: true};
      }
    case 'right': 
      switch (going) {
        case 'straight': 
          return {coords: {y: current.y, x: current.x - 1}, enteredFrom: 'right', resetMovement: false};
        case 'left': 
          return {coords: {y: current.y + 1, x: current.x}, enteredFrom: 'up', resetMovement: true};
        case 'right': 
          return {coords: {y: current.y - 1, x: current.x}, enteredFrom: 'down', resetMovement: true};
      }
    case 'up':
      switch (going) {
        case 'straight': 
          return {coords: {y: current.y + 1, x: current.x}, enteredFrom: 'up', resetMovement: false};
        case 'left': 
          return {coords: {y: current.y, x: current.x + 1}, enteredFrom: 'left', resetMovement: true};
        case 'right': 
          return {coords: {y: current.y, x: current.x - 1}, enteredFrom: 'right', resetMovement: true};
      }
    case 'down':
      switch (going) {
        case 'straight': 
          return {coords: {y: current.y - 1, x: current.x}, enteredFrom: 'down', resetMovement: false};
        case 'left': 
          return {coords: {y: current.y, x: current.x - 1}, enteredFrom: 'right', resetMovement: true};
        case 'right': 
          return {coords: {y: current.y, x: current.x + 1}, enteredFrom: 'left', resetMovement: true};
      }
  }
}

function createUpdatedPath(pathToCopy: Path, nextHeading: Heading, city: City) {
  const copiedSteps: GridXY[] = [];
  pathToCopy.steps.forEach((step: GridXY) => {
    copiedSteps.push({...step});
  })
  copiedSteps.push({...pathToCopy.current})
  const res = {
    ...pathToCopy,
    steps: copiedSteps,
    current: {...nextHeading.coords},
    heatLost: pathToCopy.heatLost + cityAt(pathToCopy.current, city).heatLoss,
    movementLimit: nextHeading.resetMovement ? 1 : pathToCopy.movementLimit + 1,
    enteredFrom: nextHeading.enteredFrom,
  }
  return res;
}


// PART 2 STUFF

// Data is read into a simple string[] and sent in here to format for specific prompts
export const solve = (
  data: string[], 
  part: number, 
  showLogs: boolean,
) => {
  console.log(":)")

  const city: City = convertDataIntoBlocks([...data]);
  printGrid(city, 'heatLoss')

  const START = {y: 0, x: 0};
  const initialPath: Path = {
    steps: [],
    current: {...START},
    heatLost: 0, // you don't incur heat loss from the first block unless you return to it..? which we will not. 
    movementLimit: 0, // starting at 0, 0, didn't move to there.
    enteredFrom: 'left',
  }

  // const allPossiblePaths: Path[] = [];
  let smallestPath: number[] = [1000000];
  pathfind(initialPath, city, smallestPath);
  // allPossiblePaths.forEach((path: Path) => smallestPath = Math.min(smallestPath, path.heatLost))

  return smallestPath;
}