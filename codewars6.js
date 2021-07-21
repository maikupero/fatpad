//bro's
function reverseWords(str){
    x = str.split(' ');
    y = [];
    while (x.length > 0) {
        word = x.shift();
        console.log(word);
        y.push(word);
    }
    return y.join(' ')
}
// pop takes victory out and sets word == victory, then push unto y
// shift push: queue  (make a line)    pop push: stack (pancakes)
// useful i.e. mtg with orders of priority. something happening in response to something else that needs to happen first.

//michael's
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

  console.log(reverseWords('The greatest victory'))
// //Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
