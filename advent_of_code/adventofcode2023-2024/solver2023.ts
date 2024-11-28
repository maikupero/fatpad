import { bigAsteriskDivider, reverseAsteriskDivider } from './constants/formatting.js';
import { parseData, retrieveCurrentDayFromUser } from './util.js';
import { LASTCOMPLETEDAY } from './constants/values.js';

const args = process.argv;
const currentDay = args.length < 3 
  ? await retrieveCurrentDayFromUser()
  : parseInt(args[2]); 

const answerFormatter = (currentDay) => {
  if (1 > currentDay || currentDay > LASTCOMPLETEDAY) {
    console.error("Invalid day! Or incomplete, sorry.");
    return;
  }

  const currentDateFormatted = currentDay < 10
    ? `0${currentDay}`
    : `${currentDay}`

  const example1Path = `./data/2023/${currentDateFormatted}/example1.txt`;
  console.log('example1Path', example1Path);
  const example2Path = `./data/2023/${currentDateFormatted}/example2.txt`;
  console.log('example2Path', example2Path);
  const inputPath = `./data/2023/${currentDateFormatted}/input.txt`;
  console.log('inputPath', inputPath);
  const solutionPath = `./data/2023/${currentDateFormatted}/solution.ts`;
  console.log('solutionPath', solutionPath);


  import(solutionPath)
  .then((solution) => {
    console.log(bigAsteriskDivider);
    const example1Data: string[] = parseData(example1Path);
    const example2Data: string[] = parseData(example2Path);
    const inputData: string[] = parseData(inputPath);

    console.log("Example 1:", solution.solve(example1Data, 1, true));
    console.log("   Part 1:", solution.solve(inputData, 1, false));
    if (example2Data.length) {
      console.log("------------------")
      console.log("Example 2:", solution.solve(example2Data, 2, false));
      console.log("   Part 2:", solution.solve(inputData, 2, false));
    }

    console.log(reverseAsteriskDivider);
  })
}

answerFormatter(currentDay);