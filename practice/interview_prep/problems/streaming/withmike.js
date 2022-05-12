// Given a file and assume you can only read the file using a given method read4, implement a method to read n characters. 
// Method read4:
// The API read4 reads four consecutive characters from file, then writes those characters into the buffer array buf4.
// The return value is the number of actual characters read.
// Note that read4() has its own file pointer, much like FILE *fp in C.
// Definition of read4:
//      parameter: char[] buf4
//      returns: int
// 
//  buf4[] is a destination, not a source. the results from read4 will be copied to buf4.

// Below is a high-level example of how read4 works:
//  First call of read4
// [a b c d] e  -> buf4 = "abcd" we read 4 characters from the file, hence read4 returns 4
//  Second call of read4
// a b c d [e ] -> buf4 = "e" we read 1 character from the file, hence read4 returns 1.
//  Third/fourth/etc. call of read4
// a b c d e -> buf4 = "" we read 0 characters from the file, hence read4 returns 0.
// 
// Method read:
// By using the read4 method, implement the method read that reads n characters from file and store it in the buffer array buf.
// Consider that you cannot manipulate file directly.
// The return value is the number of actual characters read.
// Definition of read:
//      paramaters: char[] buf, int n
//      returns: int
// 
//  buf[] is a destination, not a source. You will need to write the results to buf[].

function read(buf, n) {
    const buf4 = [];
    const buf = [];

    while (n > 0) {
        let i = read4(buf4);
        while ((i > 0) && (n > 0)) {
            buf.push(buf4.shift());
            i--;
            n--;
        }
    }

    return buf.length
}