// _________________________6 kyu_Bouncing Balls______________________________
https://www.codewars.com/kata/5544c7a5cb454edb3c000047



fn boolean_to_string(b: bool) -> String {

}


#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example() {
        assert_eq!(boolean_to_string(true), "true", "When we pass in true, we want the string \"true\" as output");
        assert_eq!(boolean_to_string(false), "false", "When we pass in false, we want the string \"false\" as output");
        assert_eq!(boolean_to_string(false), "false", "When we pass in false, we want the string \"false\" as output");
    }
}

// _________________________8 kyu_Convert a Boolean to a String______________________________
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.