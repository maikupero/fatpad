use rand::Rng;
use std::io;
use std::cmp::Ordering;

fn main() {
    println!("Welcome to GUESS JAM");

    let secret_number = rand::thread_rng().gen_range(1..101);

    // println!("Secret Number: {}", secret_number);

    loop {
        println!("GIMME YO GUESS");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("you suck gimme a real guess");
                continue;
            }
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("whimpy guess"),
            Ordering::Greater => println!("WAY over"),
            Ordering::Equal => {
                println!("ez");
                break;
            }
        }
    }
}
