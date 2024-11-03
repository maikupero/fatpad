function testSomething() {
  let emptyString = "";
  console.log(emptyString.length === "");
  console.log(emptyString.length !== "");
  console.log(emptyString.length == "");
  console.log(emptyString.length != "");
  console.log(emptyString == emptyString.length);
  console.log(emptyString, emptyString.length)
}



// function* yieldAndReturn() {
//   yield "Y";
//   let x = 1;
//   let y = +"1";
//   yield typeof x === typeof y;
//   yield "R";
//   yield "unreachable";
// }
  
// const gen = yieldAndReturn();

// let res = undefined;
// let endLoop = false;
// while (!endLoop) {
//   let results = gen.next();
//   let {value: res, done} = results;
//   console.log(res, done);
//   endLoop = done;
// }

testSomething();