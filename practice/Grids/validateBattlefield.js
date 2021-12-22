// ------------------ Battleship Field Validator ------------------
// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7

function validateBattlefield(field) {
    let ships = {
        '4': 0,
        '3': 0,
        '2': 0,
        '1': 0
    };

    let saved = [];
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
        if (saved.indexOf(y.toString() + x.toString()) != -1) continue //if already logged the ship's location, go next
            if (field[y][x] === 1) {
                console.log(y,x,'---found a ship here');
                let ship_length = 0;
                let a = x;
                let b = y; 
                let face = direction(a,b,field);
                if (face === 'illegal') return false
                if (face === 'sub') {
                    ship_length += 1;
                } else {
                    while (field[b][a] === 1) {
                        ship_length += 1;
                        if (!diagonals(a,b,field)) return false
                        saved.push(b.toString() + a.toString());
                        if (face === 'right') a += 1;
                        if (face === 'down') b += 1;
                    }
                }
                ships[ship_length.toString()] += 1
                console.log(ships);
            }
        }
    }

    return valid_check(ships);
}

let diagonals = (x, y, field) => {
    //always check downright, check the other diagonals conditionally depending on if at border or not.
    let arr = [];
    arr.push(field[y+1][x+1]);
    if (x > 0) arr.push(field[y+1][x-1]);
    if (y > 0) arr.push(field[y-1][x+1]);
    if (x > 0 && y > 0) arr.push(field[y-1][x-1]);

    for (let i of arr) {
        if (arr[i] === 1) return false
    }
    //if all diagonal directions are undefined or 0,
    return true
}

let direction = (x, y, field) => {
    let r = field[y][x+1];
    let d = field[y+1][x];

    if (r + d === 0) return 'sub'
    else if (r === 1 && d === 0) return 'right'
    else if (r === 0 && d === 1) return 'down'
    else return 'illegal'
}

let valid_check = (ships) => {
    let valid = {
        '4': 1,
        '3': 2,
        '2': 3,
        '1': 4
    }
    console.log(ships,'ships',valid,'valid');
    for (let x = 1; x < 5; x++) {
        if (ships[x.toString()] != valid[x.toString()]) return false
    }
    return true
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
    ]), 'expected true');

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
