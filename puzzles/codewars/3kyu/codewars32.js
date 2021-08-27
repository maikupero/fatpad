function validateBattlefield(field) {
    // [battleship,cruiser,destroyer,submarine] - we want [1,2,3,4] at the end
    let ships = [0,0,0,0]
    let ships = {
        '4': 0,
        '3': 0,
        '2': 0,
        '1': 0
    };
    //so we don't find & count the same ship multiple times
    let saved = [];

    for (let y in field) {    //for each y
        for (let x in y) {  //for each x in each y
            if (saved.indexOf([x,y]) != -1) continue //if already logged the ship's location
            if (field[y][x] === 1) { //if a new ship is found
                let direction = directional_check(a, b, field);
                switch (direction) {
                    case 'illegal': return false
                    case 'right':
                        while (field[a][b] === 1) {
                            a += 1;
                            ship_length += 1;
                            savedX.push(a);
                            savedY.push(b);
                        }
                        break;
                    case 'down':
                        while (field[a][b] === 1) {
                            b += 1;
                            ship_length += 1;
                            savedX.push(a);
                            savedY.push(b);
                        }
                        break;
                }
                ships[count_ship(ship_length)] += 1;
            }
        }
    }
    return ships === [1,2,3,4]
}

let directional_check = (x, y, field) => {
    let a = x;
    let b = y;
    let ship_length = 1;
    let right = field[x+1][y];
    let down = field[x][y+1];
    if ((field[x-1][y+1] + field[x-1][y] + field[x-1][y-1] + field[x][y-1] + field[x+1][y-1] + field[x+1][y+1]) != 0) return 'illegal'// confirm no neighbors besides down/right
    if (right + down === 0) return 1
    else if (right === 1 && down === 0) {
        return 'right'
    } else if (right === 0 && down === 1) {
        return 'down'
    } else return 'illegal'
}

let count_ship = (n) => ships[n.toString()] += 1

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
