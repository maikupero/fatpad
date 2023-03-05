// parameter "input" gets all data
function Main(input) {
	const lines = input.split("\n");
  let nums = 0;
  let str = "";
  for (let line of lines) {
    const currentLine = line.split(" ");
    currentLine.forEach((content) => {
      Number.isInteger(parseInt(content)) 
        ? nums += parseInt(content)
        : str += content
    });
  };
  console.log(`${nums} ${str}`);
}
// Don't edit this line!
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
Main(require("fs").readFileSync("./input.txt", "utf8"));