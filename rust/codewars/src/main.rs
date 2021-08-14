fn reverse_words(str: &str) -> String {
    let mut res = String::with_capacity(str.len() + 1);
    for sl in str.split(' ') {
        res.extend(sl.chars().rev();
        res.push(' ');
    }
    
    res.pop();

    res
}
// "Test String".to_string()
// fn reverse_words(str: &str) -> String {
//     let mut res = String::with_capacity(str.len() + 1);
//     for sl in str.split(' ') {
//         res.extend(sl.chars().rev());
//         res.push(' ');
//     }
    
//     res.pop();
    
//     res
// }

    assert_eq!(reverse_words("The quick brown fox jumps over the lazy dog."), "ehT kciuq nworb xof spmuj revo eht yzal .god");
    assert_eq!(reverse_words("apple"), "elppa");
    assert_eq!(reverse_words("a b c d"),"a b c d");
    assert_eq!(reverse_words("double  spaced  words"), "elbuod  decaps  sdrow");

// //Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4





// ________________TO DO________________

// //Bouncing Balls
// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

// //Roman Numerals Encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b

// ________________DONE_________________
// _____8kyu
// Convert a Boolean to a String
// https://www.codewars.com/kata/551b4501ac0447318f0009cd
