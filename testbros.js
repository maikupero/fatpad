var tvRemote = function(word) {
        arrays = [
        'abcde123'.split(''),
    'fghij456'.split(''),
    'klmno789'.split(''),
    'pqrst.@0'.split(''),
    'uvwxyz_/'.split(''),
    ]

    x = [
        [0,0],
        ]
    // iterate through the letters in your word
    for (letter of word.split('')) { 
    //iterate through the rows in your keyboard
    for (row of arrays) {
        //is the letter in this row?
        if (row.indexOf(letter) >= 0) {
        //format your coordinates
        coords = [row.indexOf(letter), arrays.indexOf(row)];
        //push them
        x.push(coords);
        break;
        }
    }
    }

    sum = 0;

    for (i = 1; i < x.length; i++) {

    // console.log(x[coords + 1]);
    sum += 1 + Math.abs(x[i - 1][0]-x[i][0]) + Math.abs(x[i - 1][1]-x[i][1]);
    }

  
return sum
}


console.log(`expected 8, returned ${tvRemote("bad")}`)
console.log(`expected 16, returned ${tvRemote("does")}`)
console.log(`expected 33, returned ${tvRemote("solution")}`)
console.log(`expected 39, returned ${tvRemote("pizza/")}`)