use std::io;

fn main() {
    println!("Welcome to GUESS JAM");

    println!("GIMME YO GUESS");

    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);
}
