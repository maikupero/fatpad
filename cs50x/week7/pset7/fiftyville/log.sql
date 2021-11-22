-- Keep a log of any SQL queries you execute as you solve the mystery.

-- What we know:
-- Where: Chamberlin Street
-- When: July 28, 2020
-- Who: ? Accomplice: ? Escaped to: ?

-- First, gotta find out what I'm working with.
.schema;
.tables;
-- I'll keep the tables and their columns listed below for reference while I work.

-- Next we'll try the sample query given in the walkthrough to see what I get.
SELECT description FROM crime_scene_reports WHERE month = 7 AND day = 28 AND street = "Chamberlin Street";
-- Theft of the CS50 duck took place at 10:15am at the Chamberlin Street courthouse.
-- Interviews were conducted today with three witnesses who were present at the time —
-- each of their interview transcripts mentions the courthouse.

-- Following that, I can check for interviews from that day containing courthouse in their contents.
-- Also keeping 10:15 AM in mind.
SELECT transcript FROM interviews WHERE month = 7 AND day = 28 AND transcript LIKE "%courthouse%";
-- I want to make sure I'm working with 3 interviews here.
SELECT COUNT(transcript) FROM interviews WHERE month = 7 AND day = 28 AND transcript LIKE "%courthouse%";
-- Confirmed. Witness 1:
-- Sometime within ten minutes of the theft, I saw the thief get into a car in the courthouse parking lot and drive away. If you have security footage from the courthouse parking lot, you might want to look for cars that left the parking lot in that time frame.
-- Witness 2:
-- I don't know the thief's name, but it was someone I recognized. Earlier this morning, before I arrived at the courthouse, I was walking by the ATM on Fifer Street and saw the thief there withdrawing some money.
-- Witness 3:
-- As the thief was leaving the courthouse, they called someone who talked to them for less than a minute. In the call, I heard the thief say that they were planning to take the earliest flight out of Fiftyville tomorrow. The thief then asked the person on the other end of the phone to purchase the flight ticket.
-- Takeaways:
-- 1: Within ten minutes, check security footage for cars that left the parking lot.
-- 2: Earlier that morning thief withdrew money from the ATM on Fifer Street.
-- 3: When leaving the courthouse, thief called someone and talked for less than a minute.
--  "planning to take the earliest flight out of Fiftyville tomorrow."
--  asked the person on the other end of the phone to purchase the flight ticket.

-- Witness 1's rabbithole
-- Gotta check security footage from 10:15 - 10:25
SELECT license_plate FROM courthouse_security_logs WHERE month = 7 AND day = 28 AND minute BETWEEN 15 AND 25;
-- Well we got a big list of license plates. Gonna check activity as well out of curiosity.
SELECT license_plate, activity FROM courthouse_security_logs WHERE month = 7 AND day = 28 AND minute BETWEEN 15 AND 25;
-- Bingo. Saving only the exits.
SELECT license_plate FROM courthouse_security_logs WHERE month = 7 AND day = 28 AND minute BETWEEN 15 AND 25 AND activity="exit";
-- Log of cars that exited the scene from 10:15 - 10:25
-- D965M59
-- HW0488P
-- HOD8639
-- 5P2BI95
-- 94KL13X
-- 6P58WS2
-- 4328GD8
-- G412CB7
-- L93JTIZ
-- 322W7JE
-- 0NTHK55
-- NAW9653
-- 94MV71O
-- 13FNH73
-- V47T75I
-- R3G7486

-- Witness 2's rabbithole
-- Check withdraws from ATM on Fifer street on that day before 10:15. Can't choose time. So that day.
SELECT account_number, amount FROM atm_transactions WHERE transaction_type="withdraw" AND atm_location="Fifer Street" AND month=7 AND day=28;
-- Just occurred to me to check for the year too.
SELECT account_number, amount FROM atm_transactions WHERE transaction_type="withdraw" AND atm_location="Fifer Street" AND year=2020 AND month=7 AND day=28;
-- Identical results so I won't need to worry about that anymore, nor go back to previous queries.
-- 28500762 | 48
-- 28296815 | 20
-- 76054385 | 60
-- 49610011 | 50
-- 16153065 | 80
-- 25506511 | 20
-- 81061156 | 30
-- 26013199 | 35


-- Witness 3's rabbithole

-- After 10:15, <1 minute phone call.
-- Check format for duration column.
SELECT duration FROM phone_calls WHERE month = 7 AND day = 28;
-- Seems to be in seconds, so <60.
SELECT caller, receiver FROM phone_calls WHERE month = 7 AND day = 28 AND duration < 60;
-- caller | receiver
-- (130) 555-0289 | (996) 555-8899
-- (499) 555-9472 | (892) 555-8872
-- (367) 555-5533 | (375) 555-8161
-- (499) 555-9472 | (717) 555-1342
-- (286) 555-6063 | (676) 555-6554
-- (770) 555-1861 | (725) 555-3243
-- (031) 555-6622 | (910) 555-3251
-- (826) 555-1652 | (066) 555-9701
-- (338) 555-6650 | (704) 555-2131

--  "planning to take the earliest flight out of Fiftyville tomorrow."
SELECT id, hour, minute, destination_airport_id FROM flights WHERE origin_airport_id = "Fiftyville" AND month = 7 AND day = 28 ORDER BY hour, minute;
-- Yielded nothing, so let's check on that airport id.
SELECT id, abbreviation FROM airports WHERE city="Fiftyville";
-- Got it: 8 | CSF
SELECT id, hour, minute, destination_airport_id FROM flights WHERE origin_airport_id = 8 AND month = 7 AND day = 28 ORDER BY hour, minute;
-- id | hour | minute | destination_airport_id
-- 6 | 13 | 49 | 5
-- 35 | 16 | 16 | 4
-- 34 | 17 | 20 | 5
-- 1 | 17 | 50 | 7
-- 17 | 20 | 16 | 4
-- So our first flight out of fiftyville is flight id 6. at 1:49PM, headed for airport id 5.
SELECT full_name, city, abbreviation FROM airports WHERE id=5;
-- Dallas/Fort Worth International Airport | Dallas | DFS

-- asked the person on the other end of the phone to purchase the flight ticket.
-- We need to find some links between phones, atm_transactions, and people.
-- So let's recoup and get some perspective: Triple Rabbithole takeaways.
-- Witness 1: Cars that left the scene between 10:15-10:25
-- D965M59
-- HW0488P
-- HOD8639
-- 5P2BI95
-- 94KL13X
-- 6P58WS2
-- 4328GD8
-- G412CB7
-- L93JTIZ
-- 322W7JE
-- 0NTHK55
-- NAW9653
-- 94MV71O
-- 13FNH73
-- V47T75I
-- R3G7486

-- Witness 2: ATM withdrawals before 10:15.
-- account # | amount
-- 28500762 | 48
-- 28296815 | 20
-- 76054385 | 60
-- 49610011 | 50
-- 16153065 | 80
-- 25506511 | 20
-- 81061156 | 30
-- 26013199 | 35

-- Witness 3: After 10:15, <1 minute phone calls., and flight.
-- caller | receiver
-- (130) 555-0289 | (996) 555-8899
-- (499) 555-9472 | (892) 555-8872
-- (367) 555-5533 | (375) 555-8161
-- (499) 555-9472 | (717) 555-1342
-- (286) 555-6063 | (676) 555-6554
-- (770) 555-1861 | (725) 555-3243
-- (031) 555-6622 | (910) 555-3251
-- (826) 555-1652 | (066) 555-9701
-- (338) 555-6650 | (704) 555-2131
-- Flew from Fiftyville, flight id 6. at 1:49PM, headed for airport id 5.
-- Dallas/Fort Worth International Airport | Dallas | DFS

-- Culprit candidates based on outgoing calls:
SELECT name

FROM people

WHERE phone_number IN (
SELECT caller FROM phone_calls WHERE month = 7 AND day = 28 AND duration < 60);
-- Bobby
-- Roger
-- Victoria
-- Madison
-- Russell
-- Evelyn
-- Ernest
-- Kimberly

-- Accomplice candidates based on received calls:
SELECT name

FROM people

WHERE phone_number IN (
SELECT receiver FROM phone_calls WHERE month = 7 AND day = 28 AND duration < 60);
-- James
-- Larry
-- Anna
-- Jack
-- Melissa
-- Jacqueline
-- Philip
-- Berthold
-- Doris

-- Culprit candidates based on license plate:
SELECT name

FROM people

WHERE license_plate IN (
SELECT license_plate FROM courthouse_security_logs WHERE month = 7 AND day = 28 AND minute BETWEEN 15 AND 25 AND activity="exit"
);
-- Jordan
-- Patrick
-- Amber
-- Brandon
-- Elizabeth
-- Roger
-- Danielle
-- Wayne
-- Russell
-- Michael
-- Evelyn
-- Vincent
-- Ethan
-- Ernest
-- Sophia
-- Jeremy

-- I can combine the license plate and outgoing phone results.
SELECT name

FROM people

WHERE phone_number IN (
SELECT caller FROM phone_calls WHERE month = 7 AND day = 28 AND duration < 60)
AND license_plate IN (
SELECT license_plate FROM courthouse_security_logs WHERE month = 7 AND day = 28 AND minute BETWEEN 15 AND 25 AND activity="exit"
);
-- Roger
-- Russell
-- Evelyn
-- Ernest

-- I can narrow this down further with bank account info. So get their ids first using the last query.
SELECT id FROM people WHERE phone_number IN (
SELECT caller FROM phone_calls WHERE month = 7 AND day = 28 AND duration < 60)
AND license_plate IN (
SELECT license_plate FROM courthouse_security_logs WHERE month = 7 AND day = 28 AND minute BETWEEN 15 AND 25 AND activity="exit");
-- 398010
-- 514354
-- 560886
-- 686048
-- Get the matching account numbers for these 4 people.
SELECT account_number, person_id FROM bank_accounts WHERE person_id IN (398010, 514354, 560886, 686048);
-- 49610011 | 686048
-- 26013199 | 514354
-- Interesting... only two of them have bank accounts?
SELECT * FROM bank_accounts WHERE person_id IN (398010, 514354, 560886, 686048);
-- Okay. Well.
-- Check the transactions and see if both made transactions at that time at that ATM.
SELECT *
FROM atm_transactions
WHERE account_number IN (49610011, 26013199) AND month = 7 AND day = 28;
-- id | account_number | year | month | day | atm_location | transaction_type | amount
-- 267 | 49610011 | 2020 | 7 | 28 | Fifer Street | withdraw | 50
-- 336 | 26013199 | 2020 | 7 | 28 | Fifer Street | withdraw | 35
-- Didn't really get me anything. Where else can I look..

-- They both made a phone call, drove a car, and took money out from the ATM. But who did they call?
SELECT *
FROM phone_calls
WHERE month = 7
AND day = 28
AND duration < 60
AND caller IN (
SELECT phone_number FROM people WHERE id IN (686048, 514354));
id | caller | receiver | year | month | day | duration
-- 233 | (367) 555-5533 | (375) 555-8161 | 2020 | 7 | 28 | 45
-- 255 | (770) 555-1861 | (725) 555-3243 | 2020 | 7 | 28 | 49


SELECT name FROM people WHERE id IN (686048, 514354);
SELECT * FROM people WHERE phone_number IN ('(375) 555-8161', '(725) 555-3243');
-- CULPRITS - ACCOMPLICE pairs
-- id | name | phone_number | passport_number | license_plate
-- 686048 | Ernest | (367) 555-5533 | 5773159633 | 94KL13X
-- 864400 | Berthold | (375) 555-8161 |  | 4V16VO0
-- 514354 | Russell | (770) 555-1861 | 3592750733 | 322W7JE
-- 847116 | Philip | (725) 555-3243 | 3391710505 | GW362R6
-- Ernest called Berthold
-- Russell called Philip


SELECT passport_number, seat FROM passengers WHERE flight_id = 6;
-- 3835860232 | 9A
-- 1618186613 | 2C
-- 7179245843 | 3B
-- 1682575122 | 4B
-- 7597790505 | 5D
-- 6128131458 | 6B
-- 6264773605 | 7D
-- 3642612721 | 8A
SELECT passport_number
FROM passengers
WHERE flight_id = 6
AND passport_number IN (5773159633, 3592750733, 3391710505);
-- They... weren't on this flight? Okay. Backtrack a bit.
SELECT passport_number FROM passengers WHERE flight_id = 6;
-- 3835860232
-- 1618186613
-- 7179245843
-- 1682575122
-- 7597790505
-- 6128131458
-- 6264773605
-- 3642612721

SELECT name FROM people WHERE passport_number IN (3835860232, 1618186613, 7179245843, 1682575122, 7597790505, 6128131458, 6264773605, 3642612721);
-- Rebecca
-- Carol
-- Jean
-- Amanda
-- Sophia
-- Daniel
-- Nicole
-- Joyce

-- Original culprits list:
-- Bobby
-- Roger
-- Victoria
-- Madison
-- Russell
-- Evelyn
-- Ernest
-- Kimberly

-- And these don't match. So. Looking back, turns out I neglected to read earliest flight out... "TOMORROW"
SELECT id, hour, minute, destination_airport_id FROM flights WHERE origin_airport_id = 8 AND month = 7 AND day = 29 ORDER BY hour, minute;
-- id | hour | minute | destination_airport_id
-- 36 | 8 | 20 | 4
-- 43 | 9 | 30 | 1
-- 23 | 12 | 15 | 11
-- 53 | 15 | 20 | 9
-- 18 | 16 | 0 | 6
SELECT id
FROM flights
WHERE month = 7 AND day = 29 AND hour = 8 AND minute = 20
AND destination_airport_id = 4;
-- Flight id 36, departing Fiftyville at 8:20, July 29th.
SELECT passport_number FROM passengers WHERE flight_id = 36;
SELECT id, name, phone_number FROM people WHERE passport_number IN (7214083635,
1695452385,
5773159633,
1540955065,
8294398571,
1988161715,
9878712108,
8496433585);
-- Passengers aboard flight id 36
-- id | name | phone_number
-- 395717 | Bobby | (826) 555-1652
-- 398010 | Roger | (130) 555-0289
-- 449774 | Madison | (286) 555-6063
-- 467400 | Danielle | (389) 555-5198
-- 560886 | Evelyn | (499) 555-9472
-- 651714 | Edward | (328) 555-1152
-- 686048 | Ernest | (367) 555-5533
-- 953679 | Doris | (066) 555-9701

Culprit candidates based on phone calls:
Bobby, Roger, Victoria, Madison, Russell, Evelyn, Ernest, Kimberly

Culprit Candidates based on phone calls + license plate:
Roger, Russell, Evelyn, Ernest

Culprit candidates based on phone calls + license plate + flight_id 36:
Roger, Evelyn, Ernest

Culprit candidates based on calls + plate + flight36 + atm
SELECT id FROM people WHERE name IN ('Roger', 'Evelyn', 'Ernest');
SELECT account_number FROM bank_accounts WHERE person_id IN (398010, 560886, 686048);
-- 49610011.

-- Only. Check atm transactions.
SELECT atm_location, transaction_type, amount
FROM atm_transactions
WHERE account_number = 49610011
AND month = 7 AND day = 28;
-- Fifer Street | withdraw | 50

-- Got him. Name is?
SELECT name, phone_number
FROM people
WHERE id = (SELECT person_id FROM bank_accounts WHERE account_number = 49610011);
-- Ernest. Ya bastard.

-- Who helped you do it?
SELECT receiver
FROM phone_calls
WHERE caller = '(367) 555-5533'
AND month = 7 AND day = 28
AND duration < 60;

-- (375) 555-8161
SELECT name FROM people WHERE phone_number is '(375) 555-8161';
-- Berthold. Unbelievable.

SELECT city
FROM airports
WHERE id = (
SELECT destination_airport_id FROM flights WHERE id = 36);
-- Heathrow Airport, London