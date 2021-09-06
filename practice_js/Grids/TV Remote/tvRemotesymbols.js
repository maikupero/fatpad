// ------------------ TV Remote (Symbols) ------------------
// https://www.codewars.com/kata/tv-remote-symbols

var tvRemote = function(word) {
    let keysets = [ 
        [
            ['a','b','c','d','e','1','2','3'],       //0
            ['f','g','h','i','j','4','5','6'],       //1
            ['k','l','m','n','o','7','8','9'],       //2
            ['p','q','r','s','t','.','@','0'],       //3
            ['u','v','w','x','y','z','_','/'],       //4
            ['aA#',' ','','','','','',''],           //5
        ],
        [ 
            'abcde123'.toUpperCase().split(''),       //0
            'fghij456'.toUpperCase().split(''),       //1
            'klmno789'.toUpperCase().split(''),       //2
            'pqrst.@0'.toUpperCase().split(''),       //3
            'uvwxyz_/'.toUpperCase().split(''),       //4
            ['aA#',' ','','','','','',''],            //5
        ],
        [   
            ['^','~','?','!','\'','"','(',')'],         //0
            ['-',':',';','+','&','%','*','='],          //1
            ['<','>','€','£','$','¥','¤','\\'],         //2
            ['[',']','{','}',',','.','@','§'],          //3
            ['#','¿','¡','','','','_','/'],             //4
            ['aA#',' ','','','','','','']               //5
        ]
    ];

    let last = [0,0,0];
    let current = [0,0,0];
    let shift = [0,5];
    let sum = 0;
    // console.log(word.split(''));
    for (let letter of word) {
        let found = false;
        // console.log(letter,'this is letter');
        for (let i = 0; i < keysets.length; i++) {                              //setting keysets to start with the last[2]array and loop back
            let offset = current[2];
            let z = (i + offset) % keysets.length;
            
            for (let row of keysets[z]) {
                if (row.indexOf(letter) >= 0) {                                  //check if letter is present   
                    current = [row.indexOf(letter), keysets[z].indexOf(row), z]; //current letter's coords
                    if (last[2] != current[2]) {                             //while switching keysets is necessary
                        if (Math.abs(last[0] - shift[0]) > 4) {                 //last x to 0
                            sum += (8 - Math.abs(last[0] - shift[0]));
                        } else {
                            sum += Math.abs(last[0] - shift[0]);
                        }
                        if (Math.abs(last[1] - shift[1]) > 2) {                 //last y to 5
                            sum += (6 - Math.abs(last[1] - shift[1]));
                        } else {
                            sum += Math.abs(last[1] - shift[1]);
                        }
                        last[0] = 0;
                        last[1] = 5;
                        while (last[2] != current[2]) {
                            last[2] === 2 ? last[2] = 0 : last[2] += 1;
                            sum += 1;
                        }
                    }                                                           //when on the same keyset
                    if (Math.abs(last[0] - current[0]) > 4) {       
                        sum += (8 - Math.abs(last[0] - current[0]));        //x value from last
                    } else {
                        sum += Math.abs(last[0] - current[0]);
                    } 
                    if (Math.abs(last[1] - current[1]) > 2) {        
                        sum += (6 - Math.abs(last[1] - current[1]));        //y value from last
                    } else {
                        sum += Math.abs(last[1] - current[1]);
                    }
                    last = current;
                    sum += 1;
                    console.log(letter,current,sum); 
                    found = true;
                }
            }
            if (found === true) {
                break
            }
        }
    }
    return sum
}
       
console.log(`expected 58, returned ${tvRemote("/13 5/")}`);
console.log(`expected 58, returned ${tvRemote("     ")}`);
console.log(`expected 58, returned ${tvRemote("My Dude")}`);
// console.log(`expected 19, returned ${tvRemote("DOES")}`);
// console.log(`expected 22, returned ${tvRemote("YOUR")}`);
// console.log(`expected 34, returned ${tvRemote("SOLUTION")}`);
// console.log(`expected 19, returned ${tvRemote("WORK")}`);
// console.log(`expected 38, returned ${tvRemote("{for}")}`);f
// console.log(`expected 71, returned ${tvRemote("Too Easy?")}`);
// console.log(`expected 34, returned ${tvRemote("\u00bfwork\u00bf")}`);

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