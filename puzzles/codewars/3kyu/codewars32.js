function validateBattlefield(field) {
    let ships = [0,0,0,0]
    // [battleship,cruiser,destroyer,submarine] - we want [1,2,3,4] at the end

    for (let y in field) {    //for each x
        for (let x in y) {  //for each y in each x
            if (field[y][x] === 1) { //if a ship is found
                let a = x
                let b = y
                let ship_length = 0;
                while (field[a][b] === 1) {
                    ship_length += 1;
                    if (!diagonal_check(a, b)) return false
                    // a += direction or b += direction?
                }

                
                ship_type(direction_check(x, y)) ? ships[ship_type(n)] += 1 : false
            }
        }
    }
    // when find 1 check diagonals. if 1 is present, return false.
    // check for the direction (check up, down, left, right) the ship is facing. 
        // if > 1, return false.
        // else if 0, return 0; 
        // else return direction to go
    // check ship length (2 3 or 4). at each increment checking 
    // count the ship with ship_type(ship_length)

    return ships === [1,2,3,4]
}

let diagonal_check = (x, y) => (field[x+1][y+1] + field[x+1][y-1] + field[x-1][y+1] + field[x-1][y-1]) != 0

let direction_check = (x, y) => {
    
    let neighbors = 0;
    neighbors += field[x+1][y]
    neighbors += field[x-1][y]
    neighbors += field[x][y+1]
    neighbors += field[x][y-1]
    if (neighbors > 1) return false
    if (neighbors = 0) return sub
}

let ship_check = (x, y) => {
    //check diagonals first
    if ((field[x+1][y+1] + field[x+1][y-1] + field[x-1][y+1] + field[x-1][y-1]) != 0) return false
    //then check up down left right
}

let ship_type = (n) => {
    if (n === 1) return 3
    else if (n === 2) return 2
    else if (n === 3) return 1
    else if (n === 4) return 0
    else return false
}

console.log(validateBattlefield(
    [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
     [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
     [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
     [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]), 'expected "true"');


// Write a method that takes a field for well-known board game "Battleship" 
// as an argument and returns true if it has a valid disposition of ships, false otherwise. 
// Argument is guaranteed to be 10*10 two-dimension array. 
// Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// There must be: 
// 1 battleship (size of 4 cells), 
// 2 cruisers (size 3),
// 3 destroyers (size 2),
// 4 submarines (size 1) 
// Any additional ships are not allowed, as well as missing ships.

// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.
