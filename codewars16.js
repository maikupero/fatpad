var tvRemote = function(word) {
    let keysets = [ 
        [
            ['a','b','c','d','e','1','2','3'],       //0
            ['f','g','h','i','j','4','5','6'],       //1
            ['k','l','m','n','o','7','8','9'],       //2
            ['p','q','r','s','t','.','@','0'],       //3
            ['u','v','w','x','y','z','_','/'],       //4
            ['aA#','SP','','','','','',''],          //5
        ],
        [ 
            'abcde123'.toUpperCase().split(''),       //0
            'fghij456'.toUpperCase().split(''),       //1
            'klmno789'.toUpperCase().split(''),       //2
            'pqrst.@0'.toUpperCase().split(''),       //3
            'uvwxyz_/'.toUpperCase().split(''),       //4
            ['aA#','SP','','','','','',''],           //5
        ],
        [   
            ['^','~','?','!','\'','"','(',')'],          //0
            ['-',':',';','+','&','%','*','='],           //1
            ['<','>','€','£','$','¥','¤','\\'],          //2
            // Array.from(String.raw`<>Hi€£$¥¤\\`), <-- returned two instances of \\ for some reason
            ['[',']','{','}',',','.','@','§'],           //3
            ['#','¿','¡','','','','_','/'],             //4
            ['aA#','SP','','','','','','']              //5
        ]
    ];
    let next = 0;
    let shift = [0,5];
    let coords = [ [0,0,0] ];  

    for (let letter of word) {          //My Dude
        for (let z of keysets) {
            for (let row of z) {
                if (row.indexOf(letter) >= 0) {             
                    next = [row.indexOf(letter), z.indexOf(row), keysets.indexOf(z)];
                    coords.push(next);
                    break
                }
            }
        }
    }

    console.log(keysets[1][2][2]);
    console.log(coords);

    let sum = 0;
    for (let i = 1; i < coords.length; i++) {
        if (Math.abs(coords[i - 1][0]-coords[i][0]) > 4) {       //if wrapping is efficient for coords
            sum += (8 - Math.abs(coords[i - 1][0]-coords[i][0]));
        } else {
            sum += Math.abs(coords[i - 1][0]-coords[i][0]);
        } 
        if (Math.abs(coords[i - 1][1]-coords[i][1]) > 2) {        // //if wrapping is efficient for y
            sum += (6 - Math.abs(coords[i - 1][1]-coords[i][1]));
        } else {
            sum += Math.abs(coords[i - 1][1]-coords[i][1]);
        }
        sum += 1
    }
    return sum
}
        
console.log(`expected ?, returned ${tvRemote("My Dude")}`);
    //     //if letter in kb[0]
    //     if 
    //     //if letter in kb[1]
    //     //if letter in kb[2]
    //     if (letter === letter.toLowerCase() && caps === 0) {
    //         for (row of arrays) {                       
    //             if (row.indexOf(letter) >= 0) {
    //                 coords = [row.indexOf(letter), arrays.indexOf(row)];
    //                 x.push(coords);
    //                 break
    //             }
    //         }
    //     }                                    
    //     if (letter.search(/[a-zA-Z]/) === -1) {                     //for symbols + space, skip caps lock
    //         for (row of arrays) {                       
    //             if (row.indexOf(letter) >= 0) {
    //                 coords = [row.indexOf(letter), arrays.indexOf(row)];
    //                 x.push(coords);
    //                 break
    //             }
    //         }
    //     } else {                                                          //for letters
    //         if (letter === letter.toUpperCase() && caps === false) {
    //             coords = [0,5];                                             //CAPS LOCK ON  
    //             x.push(coords); 
    //             caps = true;
    //         } else if (letter === letter.toLowerCase() && caps === true) {
    //             coords = [0,5];                                             //CAPS LOCK OFF
    //             x.push(coords);
    //             caps = false;
    //         }
    //         letter = letter.toLowerCase();                                  //treat as if lower case to find on keyboard
    //         for (row of arrays) {                       
    //             if (row.indexOf(letter) >= 0) {
    //                 coords = [row.indexOf(letter), arrays.indexOf(row)];
    //                 x.push(coords);
    //                 break
    //             }
    //         }
    //     }
    // }
//     console.log(x);
//     sum = 0;

//     for (i = 1; i < x.length; i++) {
//         if (Math.abs(x[i - 1][0]-x[i][0]) > 4) {       //if wrapping is efficient for x
//             sum += (8 - Math.abs(x[i - 1][0]-x[i][0]));
//         } else {
//             sum += Math.abs(x[i - 1][0]-x[i][0]);
//         } 
//         if (Math.abs(x[i - 1][1]-x[i][1]) > 2) {        // //if wrapping is efficient for y
//             sum += (6 - Math.abs(x[i - 1][1]-x[i][1]));
//         } else {
//             sum += Math.abs(x[i - 1][1]-x[i][1]);
//         }
//         sum += 1
//     }
//     return sum
// }


// Keypad Mode 1 = alpha-numeric (lowercase)	Keypad Mode 3 = symbols
// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/
// aA#	SP						
// ^	~	?	!	'	"	(	)
// -	:	;	+	&	%	*	=
// <	>	€	£	$	¥	¤	\
// [	]	{	}	,	.	@	§
// #	¿	¡				_	/
// aA#	SP						
// aA# is the SHIFT key. Pressing this key cycles through THREE keypad modes.
// Mode 1 = alpha-numeric keypad with lowercase alpha (as depicted above)
// Mode 2 = alpha-numeric keypad with UPPERCASE alpha
// Mode 3 = symbolic keypad (as depicted above)
// SP is the space character
// The other (solid fill) keys in the bottom row have no function
// Special Symbols
// For your convenience, here are Unicode values for the less obvious symbols of the Mode 3 keypad

// ¡ = U-00A1	£ = U-00A3	¤ = U-00A4	¥ = U-00A5
// § = U-00A7	¿ = U-00BF	€ = U-20AC	
// Kata task
// How many button presses on my remote are required to type the given words?

// Notes
// The cursor always starts on the letter a (top left)
// The inital keypad layout is Mode 1
// Remember to also press OK to "accept" each letter
// Take the shortest route from one letter to the next
// The cursor wraps, so as it moves off one edge it will reappear on the opposite edge
// Although the blank keys have no function, you may navigate through them if you want to
// Spaces may occur anywhere in the words string
// Do not press the SHIFT key until you need to. For example, with the word e.Z, the SHIFT change happens after the . is pressed (not before). In other words, do not try to optimize total key presses by pressing SHIFT early.
// Example
// words = Too Easy?

// T => a-aA#-OK-U-V-W-X-Y-T-OK = 9
// o => T-Y-X-W-V-U-aA#-OK-OK-a-b-c-d-e-j-o-OK = 16
// o => o-OK = 1
// space => o-n-m-l-q-v-SP-OK = 7
// E => SP-aA#-OK-A-3-2-1--E-OK = 8
// a => E-1-2-3-A-aA-OK-OK-a-OK = 9
// s => a-b-c-d-i-n-s-OK = 7
// y => s-x-y-OK = 3
// ? => y-x-w-v-u-aA#-OK-OK-^-~-?-OK = 11
// Answer = 9 + 16 + 1 + 7 + 8 + 9 + 7 + 3 + 11 = 71
