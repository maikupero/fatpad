//net suggestion
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    console.log(x && x.length)
    return (x && x.length) === (o && o.length);
  } 

  //mine
function XO(str) {
    p = str.toLowerCase();
    counter = 0; 
    for (let i = 0; i < p.length; i++) {
        p[i] == 'x' ? counter -= 1 : p[i] == 'o' ? counter += 1 : {};
    }
    return counter == 0 ? true : false
}

console.log(XO('xoapoariwox') == false)  
console.log(XO('xoapoariwx') == true) 

//Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false