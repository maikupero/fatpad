let longestPalindrome = function(s) {
    let palindrome = '';

    if (s.length === 1) {
        return s
    } else if ((s.length === 2) && (s[0] === s[1])) {
        return s
    } else if ((s.length === 2) && (s[0] != s[1])) {
        return s[0]
    } else {
        for (let letter in s) {
            for (let pointer = s.length - 1; pointer >= letter; pointer -= 1) {
                if (s.substring(letter,pointer+1).length <= palindrome.length) {
                    break;
                } else if (isPalindrome(s.substring(letter,pointer+1))) {
                    palindrome = s.substring(letter,pointer+1);
                    break;
                } else {
                    continue;
                }
            }
        }
    }

    return palindrome
}

let isPalindrome = function(substring) {
    //tests if substring is a palindrome
    let pointer = substring.length-1;

    for (let x in substring) {
        if (substring[x] != substring[pointer]) {
            return false
        }       
        pointer -= 1;
        if (pointer <= x) {
            return true
        } 
    }
}

// console.log(longestPalindrome("aacabdkacaa"),"aca");
// console.log(longestPalindrome("babad"),"bab or aba");
// console.log(longestPalindrome("ccc"),"ccc");
// console.log(longestPalindrome("ccccc"),"ccccc");
// console.log(longestPalindrome("cbbd"),"bb");
// console.log(longestPalindrome("xnanabcdedcba"),"abcdedcba");
// console.log(longestPalindrome("xa"),"x or a");
// console.log(longestPalindrome("x"),"x");
// console.log(longestPalindrome("xnanabcdedcbaxnanabcdefedcbaxnanabcdedcba"),"abcdefedcba");
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));

// ATTEMPT 1
// var longestPalindrome = function(s) {
//     let pointer = 0;
//     let max_Length = 0;
//     let final_String_Head = '';
//     let final_String_Tail = '';
//     let final_String = '';
//     let possible = '';
//                 //ccc
//     for (let letter = 0; letter < s.length; letter++) {            //for each letter in the string
//         if (s.indexOf(s[letter], letter+1) === -1 && s.length > 1) {               //skipping unique letters
//             continue
//         }
//             pointer = letter;   
//             for (let tail = s.length-1; tail >= pointer; tail -= 1) {   
//                 if (s[pointer] === s[tail]) {
//                     if (pointer === tail) {
//                         final_String_Head += s[pointer];
//                         break
//                     } else {
//                     final_String_Head += s[pointer];
//                     final_String_Tail += s[tail];
//                     pointer += 1;
//                     }
//                 } else {
//                     final_String_Head = '';
//                     final_String_Tail = '';
//                     continue
//                 }
//                 console.log(final_String_Head,final_String_Tail);
//             }
//         possible = final_String_Head.concat(final_String_Tail.split('').reverse().join(''));
//         console.log('possible!!',possible);
//         if (possible.length < max_Length) {            //ignore anything shorter than current max length
//             final_String_Head = '';
//             final_String_Tail = '';
//             continue
//         } else if (possible.length > s.length / 2) {
//             return possible
//         } else {
//             max_Length = possible.length;
//             final_String = possible;
//         }
//     }
//     if (final_String === '')
//         return s[0];
//     return final_String
// }

// Given a string s, return the longest palindromic substring in s.
// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.