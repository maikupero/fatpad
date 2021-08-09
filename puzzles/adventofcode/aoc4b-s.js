// NOTES
// there is definitely a cleaner way to do:
// • check += 1 everytime. i could probably flip it to if it doesnt work, 
//      break, otherwise continue till eventually just adding 1 to valid_Sum. 
// • little confusing with by_Category[1] and [0] all the time, could name it better for readability
// • that weird thing where i couldnt get it to split by two line breaks at first

import input from '../data/aoc4data.js';  


var passPorts = input => {
    let valid_Sum = 0;
    let check = 0;
    let passport_Data = input
        .replace(/\n/g,' ')         //replace all line breaks with spaces
        .replace(/(cid:(\d)*(\s))/g,'')     //replace all 'cid' bits since we're ignoring that
        .split(/\s{2}/)               //make arrays split by two spaces (line break spots)
        .map(x => x.split(/\s/));
    
    let by_Category;
    let eyecolors = ['amb','blu','brn','gry','grn','hzl','oth'];

    for (let passport of passport_Data) {
        check = 0;
        for (let info of passport) {
            by_Category = info.split(":");
            switch (by_Category[0]) {
                case 'byr':
                    if ((1920 <= by_Category[1]) && (by_Category[1] <= 2002)) {
                        check += 1;
                    };
                    break;
                case 'eyr':
                    if ((2020 <= by_Category[1]) && (by_Category[1] <= 2030)) {
                        check += 1;
                    };
                    break;
                case 'iyr':
                    if ((2010 <= by_Category[1]) && (by_Category[1] <= 2020)) {
                        check += 1;
                    };
                    break;
                case 'hgt':
                    switch (by_Category[1].slice(-2)) {
                        case 'cm': 
                            if ((150 <= by_Category[1].slice(0,3)) && (by_Category[1].slice(0,3) <= 193)) {
                                check += 1;
                            };
                            break;
                        case 'in':
                            if ((59 <= by_Category[1].slice(0,2)) && (by_Category[1].slice(0,2) <= 76)) {
                                check += 1;
                            };
                            break;
                    }
                    break;
                case 'hcl': 
                    if ((by_Category[1][0] === '#') && (by_Category[1].match(/[^0-9a-f#]/g) === null)) {
                        check += 1;
                    };
                    break;
                case 'ecl':
                    if (eyecolors.includes(by_Category[1])) {
                        check += 1;
                    };
                    break;
                case 'pid':
                    if (by_Category[1].length === 9) {
                        check += 1;
                    };
                    break;
                default:
                    console.log('you messed up somewhere bro');
            }
            console.log(check);
        }
        if (check === 7) {
            valid_Sum += 1;
        }
    }

    return valid_Sum
}

console.log(passPorts(input));

// EXAMPLE 
// `eyr:1972 cid:100
// hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

// iyr:2019
// hcl:#602927 eyr:1967 hgt:170cm
// ecl:grn pid:012533040 byr:1946

// hcl:dab227 iyr:2012
// ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

// hgt:59cm ecl:zzz
// eyr:2038 hcl:74454a iyr:2023
// pid:3556412378 byr:2007

// pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
// hcl:#623a2f

// eyr:2029 ecl:blu cid:129 byr:1989
// iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

// hcl:#888785
// hgt:164cm byr:2001 iyr:2015 cid:88
// pid:545766238 ecl:hzl
// eyr:2022

// iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`
// --- Part Two ---
// The line is moving more quickly now, but you overhear airport security talking about how passports with invalid data are getting through. Better add some data validation, quick!

// You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:








// cid (Country ID) - ignored, missing or not.
// Your job is to count the passports where all required fields are both present and valid according to the above rules. Here are some example values:

// byr valid:   2002
// byr invalid: 2003

// hgt valid:   60in
// hgt valid:   190cm
// hgt invalid: 190in
// hgt invalid: 190

// hcl valid:   #123abc
// hcl invalid: #123abz
// hcl invalid: 123abc

// ecl valid:   brn
// ecl invalid: wat

// pid valid:   000000001
// pid invalid: 0123456789
// Here are some invalid passports:

// eyr:1972 cid:100
// hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

// iyr:2019
// hcl:#602927 eyr:1967 hgt:170cm
// ecl:grn pid:012533040 byr:1946

// hcl:dab227 iyr:2012
// ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

// hgt:59cm ecl:zzz
// eyr:2038 hcl:74454a iyr:2023
// pid:3556412378 byr:2007
// Here are some valid passports:

// pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
// hcl:#623a2f

// eyr:2029 ecl:blu cid:129 byr:1989
// iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

// hcl:#888785
// hgt:164cm byr:2001 iyr:2015 cid:88
// pid:545766238 ecl:hzl
// eyr:2022

// iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
// Count the number of valid passports - those that have all required fields and valid values. Continue to treat cid as optional. In your batch file, how many passports are valid?

