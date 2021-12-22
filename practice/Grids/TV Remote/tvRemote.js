// ------------------ TV Remote ------------------
// https://www.codewars.com/kata/5a5032f4fd56cb958e00007a

//bros

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

//me
var tvRemote = function(word) {
    a = 'abcde123'.split('')    //0
    f = 'fghij456'.split('')    //1
    k = 'klmno789'.split('')   //2
    p = 'pqrst.@0'.split('')    //3
    u = 'uvwxyz_/'.split('')     //4

    array = [a, f, k, p, u];

    x = [];

    for (letter of word.split('')) {
        if (a.indexOf(letter) >= 0) {
            x.push(a.indexOf(letter));
            x.push(0);
        } else if (f.indexOf(letter) >= 0) {
            x.push(f.indexOf(letter));
            x.push(1);
        } else if (k.indexOf(letter) >= 0) {
            x.push(k.indexOf(letter));
            x.push(2);
        } else if (p.indexOf(letter) >= 0) {
            x.push(p.indexOf(letter));
            x.push(3);
        } else if (u.indexOf(letter) >= 0) {
            x.push(u.indexOf(letter));
            x.push(4);
        }
    }

    sum = x[0] + x[1] + 1;
    for (let i = 2; i < x.length; i = i + 2) {
            sum = sum + 1 + (Math.abs(x[i] - x[i - 2]) + Math.abs(x[i + 1] - x[i - 1]));
        }
    return sum
}
  

console.log(`expected 8, returned ${tvRemote("bad")}`)
console.log(`expected 16, returned ${tvRemote("does")}`)
console.log(`expected 33, returned ${tvRemote("solution")}`)
console.log(`expected 39, returned ${tvRemote("pizza/")}`)

// My TV remote control has arrow buttons and an OK button.

// I can use these to move a "cursor" on a logical screen keyboard to type "words"...

// The screen "keyboard" layout looks like this

// a	b	c	d	e	1	2	3           0 1 2 3 4 5 6 7
// f	g	h	i	j	4	5	6           1 2 3 4 5 6 7 8
// k	l	m	n	o	7	8	9           2 3 4 5 6 7 8 9
// p	q	r	s	t	.	@	0           3 4 5 6 7 8 9 10
// u	v	w	x	y	z	_	/           4 5 6 7 8 9 1011
// Kata task
// How many button presses on my remote are required to type a given word?

// Notes
// The cursor always starts on the letter a (top left)
// Remember to also press OK to "accept" each character.
// Take a direct route from one character to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// A "word" (for the purpose of this Kata) is any sequence of characters available on my virtual "keyboard"
// Example
// word = codewars

// c => a-b-c-OK = 3
// o => c-d-e-j-o-OK = 5
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// w => e-j-o-t-y-x-w-OK = 7
// a => w-r-m-h-c-b-a-OK = 7
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 3 + 5 + 4 + 2 + 7 + 7 + 6 + 2 = 36

// https://www.codewars.com/kata/5a5032f4fd56cb958e00007a