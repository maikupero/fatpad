// ------------------ TV Remote (wrap) ------------------
// https://www.codewars.com/kata/tv-remote-wrap

var tvRemote = function(word) {
    arrays = [
'abcde123'.split(''),       //0
'fghij456'.split(''),       //1
'klmno789'.split(''),       //2
'pqrst.@0'.split(''),       //3
'uvwxyz_/'.split(''),       //4
['',' '],                   //5
    ];
    x = [ [0,0] ];   
    caps = false;

    for (letter of word) {                                      
        if (letter.search(/[a-zA-Z]/) === -1) {                     //for symbols + space, skip caps lock
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
        if (Math.abs(x[i - 1][0]-x[i][0]) > 4) {       //if wrapping is efficient for x
            sum += (8 - Math.abs(x[i - 1][0]-x[i][0]));
        } else {
            sum += Math.abs(x[i - 1][0]-x[i][0]);
        } 
        if (Math.abs(x[i - 1][1]-x[i][1]) > 2) {        // //if wrapping is efficient for y
            sum += (6 - Math.abs(x[i - 1][1]-x[i][1]));
        } else {
            sum += Math.abs(x[i - 1][1]-x[i][1]);
        }
        sum += 1
    }
    return sum
}

console.log(`expected 16, returned ${tvRemote("e.Z")}`);
console.log(`expected 26, returned ${tvRemote("YOUR")}`);
console.log(`expected 45, returned ${tvRemote("Solution")}`);
console.log(`expected 30, returned ${tvRemote("Work")}`);
console.log(`expected 61, returned ${tvRemote("My Dude")}`);

// wrap if absy2 - y1 > 2, x > 4
// a	b	c	d	e	1	2	3
// f	g	h	i	j	4	5	6
// k	l	m	n	o	7	8	9
// p	q	r	s	t	.	@	0
// u	v	w	x	y	z	_	/
// aA	SP						
