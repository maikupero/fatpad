import input from '../data/aoc3data.js';  

let path = function(input) {   
    let forest_Grid = input.split("\n");                //interpret our input data, lay out the forest
    console.log(forest_Grid,forest_Grid.length);
    let row = 0;                                        //starting point y
    let x = 0;                                          //starting point x
    let trees = 0;                                      //our counter for trees hit

    // console.log(forest_Grid[0][3]);
    for (row = 1; row <= forest_Grid.length-1; row++) {              //going down 3x per 1y
        x += 3;
        if (x > forest_Grid[row].length-1) {                                  //account for wrapping
            x -= forest_Grid[row].length;
        }
        if (forest_Grid[row][x] === '#') {
            trees += 1;
        }
    }
    return trees
}   
console.log(path(input));

// --- Day 3: Toboggan Trajectory ---
// With the toboggan login problems resolved, you set off toward the airport. 
//While travel by toboggan might be easy, it's certainly not safe: 
//there's very minimal steering and the area is covered in trees. 
//You'll need to see which angles will take you near the fewest trees.

// Due to the local geology, trees in this area only grow on exact integer coordinates in a grid. 
//You make a map (your puzzle input) of the open squares (.) and trees (#) you can see. For example:

// ..##.......
// #...#...#..
// .#....#..#.
// ..#.#...#.#
// .#...##..#.
// ..#.##.....
// .#.#.#....#
// .#........#
// #.##...#...
// #...##....#
// .#..#...#.#

// These aren't the only trees, though; due to something you read about once 
//involving arboreal genetics and biome stability, the same pattern repeats to the right many times:

// ..##.........##.........##.........##.........##.........##.......  --->
// #...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
// .#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
// ..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
// .#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
// ..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....  --->
// .#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
// .#........#.#........#.#........#.#........#.#........#.#........#
// #.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
// #...##....##...##....##...##....##...##....##...##....##...##....#
// .#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#  --->

// You start on the open square (.) in the top-left corner and 
//need to reach the bottom (below the bottom-most row on your map).

// The toboggan can only follow a few specific slopes 
//(you opted for a cheaper model that prefers rational numbers); 
//start by counting all the trees you would encounter for the slope right 3, down 1:

// From your starting position at the top-left, check the position that is right 3 and down 1. 
//Then, check the position that is right 3 and down 1 from there, 
//and so on until you go past the bottom of the map.

// The locations you'd check in the above example are marked here with O 
//where there was an open square and X where there was a tree:

// ..##.........##.........##.........##.........##.........##.......  --->
// #..O#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
// .#....X..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
// ..#.#...#O#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
// .#...##..#..X...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
// ..#.##.......#.X#.......#.##.......#.##.......#.##.......#.##.....  --->
// .#.#.#....#.#.#.#.O..#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
// .#........#.#........X.#........#.#........#.#........#.#........#
// #.##...#...#.##...#...#.X#...#...#.##...#...#.##...#...#.##...#...
// #...##....##...##....##...#X....##...##....##...##....##...##....#
// .#..#...#.#.#..#...#.#.#..#...X.#.#..#...#.#.#..#...#.#.#..#...#.#  --->

// In this example, traversing the map using this slope would cause you to encounter 7 trees.
// Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?