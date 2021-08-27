let dota = (available, bans, players) => {
    let pool = available - bans;
    return (factorial(pool) / (factorial(players) * factorial(pool - players)))
}

function factorial(num) {
    if (num < 0) return -1
    else if (num == 0) return 1
    else return (num * factorial(num - 1));
}

console.log(dota(121, 0, 5));



// 121 heroes
// 5 unique heroes on a team
// How many matchups possible?

//combinatorics 
// https://corporatefinanceinstitute.com/resources/knowledge/other/combination/