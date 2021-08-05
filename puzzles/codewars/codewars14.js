var tvRemote = function(word) {
        arrays = [
        'abcde123'.split(''),   //0
    'fghij456'.split(''),       //1
    'klmno789'.split(''),       //2
    'pqrst.@0'.split(''),       //3
    'uvwxyz_/'.split(''),       //4
    ];

    x = [
        [0,0]
    ];   
    caps = false;

    for (letter of word) {
        if (letter === ' ') {                                           //for spaces, insert a 1,5
            coords = [1,5];
            x.push(coords);                                          ///[^A-Za-z\s]/
        } else if (letter.search(/[a-zA-Z]/) === -1) {               //for symbols, skip caps lock
            for (row of arrays) {                       
                if (row.indexOf(letter) >= 0) {
                    coords = [row.indexOf(letter), arrays.indexOf(row)];
                    x.push(coords);
                    break
                }
            }
        } else {                                                          //for letters
            if (letter === letter.toUpperCase() && caps === false) {
                coords = [0,5];                                             //CAPS LOCK ON  
                x.push(coords); 
                caps = true;
            } else if (letter === letter.toLowerCase() && caps === true) {
                coords = [0,5];                                             //CAPS LOCK OFF
                x.push(coords);
                caps = false;
            }
            letter = letter.toLowerCase();                                  //treat as if lower case to find on keyboard
            for (row of arrays) {                       
                if (row.indexOf(letter) >= 0) {
                    coords = [row.indexOf(letter), arrays.indexOf(row)];
                    x.push(coords);
                    break
                }
            }
        }
    }
    console.log(x);
    sum = 0;

    for (i = 1; i < x.length; i++) {
        sum += 1 + Math.abs(x[i - 1][0]-x[i][0]) + Math.abs(x[i - 1][1]-x[i][1]);
    }

    return sum
}


console.log(`expected 16, returned ${tvRemote("e.Z")}`);
console.log(`expected 26, returned ${tvRemote("YOUR")}`);
console.log(`expected 49, returned ${tvRemote("Solution")}`);
console.log(`expected 30, returned ${tvRemote("Work")}`);
console.log(`expected 61, returned ${tvRemote("My Dude")}`);
//shittiest remote
// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/
// aA	SP						
// aA is the SHIFT key. Pressing this key toggles alpha characters between UPPERCASE and lowercase
// SP is the space character
// The other blank keys in the bottom row have no function

// How many button presses on my remote are required to type the given words?

// Notes
// The cursor always starts on the letter a (top left)
// The alpha characters are initially lowercase (as shown above)
// Remember to also press OK to "accept" each letter
// Take a direct route from one letter to the next
// The cursor does not wrap (e.g. you cannot leave one edge and reappear on the opposite edge)
// Although the blank keys have no function, you may navigate through them if you want to
// Spaces may occur anywhere in the words string.
// Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before)
// Example
// words = Code Wars

// C => a-f-k-p-u-aA-OK-U-P-K-F-A-B-C-OK = 14
// o => C-H-M-R-W-V-U-aA-OK-SP-v-q-l-m-n-o-OK = 16
// d => o-j-e-d-OK = 4
// e => d-e-OK = 2
// space => e-d-c-b-g-l-q-v-SP-OK = 9
// W => SP-aA-OK-SP-V-W-OK = 6
// a => W-V-U-aA-OK-u-p-k-f-a-OK = 10
// r => a-f-k-p-q-r-OK = 6
// s => r-s-OK = 2
// Answer = 14 + 16 + 4 + 2 + 9 + 6 + 10 + 6 + 2 = 69