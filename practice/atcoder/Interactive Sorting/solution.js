const rl = require("readline").createInterface(process.stdin,process.stdout);
const Main = (function*() {
  const gets = () => rl.once("line", s => Main.next(s));
  
  const n = yield gets();
  const [N, Q] = input.split(" ");
})()
Main.next();


  function Main(input) {
	

  const getScore = (letterObj, score) => {
    if (!letterObj.wins.length) return score;
    for (let loser of letterObj.wins) {
      score += getScore(loser, score + 1);
    }
    return score;
  }

  let sortedLetters = [];
  for (let i = 0; i < N; i++) {
    sortedLetters.push({
      c: String.fromCharCode(i + 65),
      score: 0,
      wins: [],
      loses: []
    })
  }

  console.log(sortedLetters);
  
  // Loop to check 0-1, 1-2, ... N-0
  for (let firstL = 0; firstL < N; firstL++) {
    let firstR = (firstL === N - 1) ? 0 : firstL + 1;
    let questionStr = `? ${sortedLetters[firstL].c} ${sortedLetters[firstR].c}`;
    let out = require("fs").createWriteStream("/dev/stdout"); 
    out.write(questionStr);
    console.log(questionStr);
    out.end();
    let ans = getAns(require("fs").readFileSync("/dev/stdin", "utf8"));
    console.log(ans);
    if (ans === '<') {
      sortedLetters[firstL].loses.push(sortedLetters[firstR]);
      sortedLetters[firstR].wins.push(sortedLetters[firstL]);
    } else {
      sortedLetters[firstR].loses.push(sortedLetters[firstL]);
      sortedLetters[firstL].wins.push(sortedLetters[firstR]);
    }
  }

  console.log(sortedLetters)
  for (let letter of sortedLetters) {
    getScore(letter);
  }
  
  console.log(sortedLetters);
}


// Don't edit this line!
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(require("fs").readFileSync("./input.txt", "utf8"));





import {createInterface} from 'readline';

const readline = require("readline").createInterface({
  input: process.stdin,
  // output: process.stdout,
});

const input = [];

readline.on('line', (line) => {
  input.push(line);
});

const getLine = async () => {
  while (input.length === 0) {
    await new Promise(resolve => setTimeout(resolve, 0));
  }
  return input.shift();
};

const close = () => {
  readline.close();
};

const main = async () => {
  const [N, Q] = (await getLine()).split(' ').map(elem => parseInt(elem));

  const s = [];
  for (let i = 0; i < N; ++i) {
    s.push(String.fromCharCode('A'.charCodeAt(0) + i));
  }

  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N - 1; ++j) {
      console.log(`? ${s[j]} ${s[j + 1]}`);
      const ans = await getLine();
      if (ans === '>') {
        const work = s[j];
        s[j] = s[j + 1];
        s[j + 1] = work;
      }
    }
  }
  console.log(`! ${s.join('')}`);

  close();
};

main();