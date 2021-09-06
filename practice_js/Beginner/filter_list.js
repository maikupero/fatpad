// ------------------ List Filtering ------------------
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    return l.filter(x => typeof x != 'string')
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]))


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// In this kata you will create a function that takes a list of 
// non-negative integers and strings and returns a new list with the strings filtered out.
// Example:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]