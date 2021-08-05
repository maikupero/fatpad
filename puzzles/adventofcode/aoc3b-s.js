import input from '../data/aoc3data.js';  

let path = function(input) {   
    let forest_Grid = input.split("\n");        //interpret our input data, lay out the forest

    let slide_Down = [1,1,1,1,2];                      //rate of descension  
    let slide_Across = [1,3,5,7,1];             //rate of traversion        
    
    let row = 0;                                //starting point y
    let x = 0;                                  //starting point x
    let trees = 0;                              //our counter for trees hit
    let total = [];

    for (let n in slide_Down) {
        x = 0;
        trees = 0;

        for (row = slide_Down[n]; row <= forest_Grid.length-1; row += slide_Down[n]) {  //going down x per y
            x += slide_Across[n];
            if (x > forest_Grid[row].length-1) {                         //account for wrapping
                x -= forest_Grid[row].length;
            }
            if (forest_Grid[row][x] === '#') {
                trees += 1;
                // console.log('tree here')
            }
            // console.log(row,'row','|||',x,'x');
        }
        total.push(trees);
        console.log(trees,'<trees',slide_Down[n],'slidedown',slide_Across[n],'slideacross',);
    }
    return total.reduce((a, b) => a * b)
}

console.log(path(input));