import { GridXY, coordsAlreadyFound, coordsAreLegal, coordsMatch, getAdjacentCoords, getDirectionCameFrom, printGrid } from "../../../util.js"

// TYPES 
interface Block {
  location: GridXY;
  heatLoss: number;
  bestPathHere: Path
  checkedAllAdjacent: boolean;
}
interface Path {
  moveLimit: number | undefined;
  heatLost: number | undefined;
  cameFrom: Direction | undefined;
}

type City = Block[][];
type Direction = 'up' | 'down' | 'left' | 'right';
type CrucibleDirection = 'straight' | 'left' | 'right';
const directions: Direction[] = ['up', 'down', 'left', 'right'];

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
        checkedAllAdjacent: false,
        bestPathHere: {
          moveLimit: undefined,
          heatLost: undefined,
          cameFrom: undefined,
        },
      })
    })
    res.push(lineOfBlocks);
  })
  return res;
}
// USEFUL INFO

// PART 1 STUFF
function updateBestPathHere(coords: GridXY, city: City) {
  const currentBlock: Block = cityAt(coords, city);
    const possiblePaths: Path[] = [];
    let checked: number = 0;
    for (let adjacent of getAdjacentCoords(coords, city)) { // this will only get legal coords (on the grid)
      // if (coords.y === 0 && coords.x === 4 || coords.y === 1 && coords.x === 4) {
      //   console.log(adjacent)
      // }
      const blockToCheck: Block = cityAt(adjacent, city);
      const pathFromBlock: Path = getPathHere(blockToCheck, currentBlock);
      if (
        blockToCheck.location.y === 0 && blockToCheck.location.x === 0 ||
        pathFromBlock.cameFrom !== blockToCheck.bestPathHere.cameFrom || 
        blockToCheck.bestPathHere.moveLimit !== 3
      ) {
        checked++;
        possiblePaths.push(getPathHere(blockToCheck, currentBlock));
      }
    }
    if (checked === getAdjacentCoords(coords, city).length) {
      currentBlock.checkedAllAdjacent = true;
    }

    let mostEfficientPathHeatLoss: number = 100000;
    let bestIdx: number = 0;
    possiblePaths.forEach((path, i) => {
      if (path.heatLost! < mostEfficientPathHeatLoss) {
        mostEfficientPathHeatLoss = path.heatLost!;
        bestIdx = i;
      }
    })

    if (possiblePaths.length > 0) {
      currentBlock.bestPathHere.cameFrom = possiblePaths[bestIdx].cameFrom;
      currentBlock.bestPathHere.heatLost = possiblePaths[bestIdx].heatLost;
      currentBlock.bestPathHere.moveLimit = possiblePaths[bestIdx].moveLimit;
    }
}

function getPathHere(from: Block, curr: Block): Path {
  let heatLost: number = from.bestPathHere.heatLost! + from.heatLoss;
  let cameFrom: Direction = getDirectionCameFrom(from.location, curr.location)!;
  let moveLimit: number = 
    from.bestPathHere.cameFrom === cameFrom
      ? from.bestPathHere.moveLimit! + 1
      : 1

  return {
    moveLimit,
    heatLost,
    cameFrom,
  }
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

  // update start block
  city[0][0].bestPathHere.cameFrom = undefined;
  city[0][0].bestPathHere.heatLost = 0;
  city[0][0].bestPathHere.moveLimit = 0;
  city[0][0].checkedAllAdjacent = true;

  // going in diagonals from leftBound to equal upperBound, update most efficient path here for each block.
  while (!city[city.length-1][city[0].length-1].bestPathHere.heatLost) {
    for (let i = 1; i < city.length; i++) { // skip 0,0 
      let tempY: number = i;
      let tempX: number = 0;
      while (tempY > -1) {
        updateBestPathHere({y: tempY, x: tempX}, city);
        tempY--;
        tempX++;
      }
    }
    
  
    for (let i = 1; i < city.length; i++) {
      let tempY = i;
      let tempX = city[0].length - 1;
      while (tempY < city.length) {
        updateBestPathHere({y: tempY, x: tempX}, city);
        tempY++;
        tempX--;
      }
    }
  }
  return city[city.length - 1][city[0].length - 1].bestPathHere.heatLost;
}