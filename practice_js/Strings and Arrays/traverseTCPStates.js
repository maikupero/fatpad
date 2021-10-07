// ------------------ A Simplistic TCP Finite State Machine (FSM) ------------------
// https://www.codewars.com/kata/54acc128329e634e9a000362/train/javascript

// ------------------ Favorite solution from codewars ------------------
function traverseTCPStates(eventList) {
    let state = 'CLOSED';
    let ACTION = new Map([
        ['CLOSED:APP_PASSIVE_OPEN', 'LISTEN'],
        ['CLOSED:APP_ACTIVE_OPEN', 'SYN_SENT'],
        ['LISTEN:RCV_SYN', 'SYN_RCVD'],
        ['LISTEN:APP_SEND', 'SYN_SENT'],
        ['LISTEN:APP_CLOSE', 'CLOSED'],
        ['SYN_RCVD:APP_CLOSE', 'FIN_WAIT_1'],
        ['SYN_RCVD:RCV_ACK', 'ESTABLISHED'],
        ['SYN_SENT:RCV_SYN', 'SYN_RCVD'],
        ['SYN_SENT:RCV_SYN_ACK', 'ESTABLISHED'],
        ['SYN_SENT:APP_CLOSE', 'CLOSED'],
        ['ESTABLISHED:APP_CLOSE', 'FIN_WAIT_1'],
        ['ESTABLISHED:RCV_FIN', 'CLOSE_WAIT'],
        ['FIN_WAIT_1:RCV_FIN', 'CLOSING'],
        ['FIN_WAIT_1:RCV_FIN_ACK', 'TIME_WAIT'],
        ['FIN_WAIT_1:RCV_ACK', 'FIN_WAIT_2'],
        ['CLOSING:RCV_ACK', 'TIME_WAIT'],
        ['FIN_WAIT_2:RCV_FIN', 'TIME_WAIT'],
        ['TIME_WAIT:APP_TIMEOUT', 'CLOSED'],
        ['CLOSE_WAIT:APP_CLOSE', 'LAST_ACK'],
        ['LAST_ACK:RCV_ACK', 'CLOSED']
    ]);

    for (let event of eventList) {
        if (ACTION.has(`${state}:${event}`)) {
            state = ACTION.get(`${state}:${event}`);
        } else {
            return 'ERROR';
        }
    }
    return state;
}

// ------------------ My solution ------------------
//First started with a big if then tree, then was reminded of switch case.
//Had the thought of switch case in switch case but didn't really end up doing so.
function traverseTCPStates(eventList){
    let state = "CLOSED";

    for (let i in eventList) {
        // console.log(state, eventList[i]);
        switch (state) {
            case "CLOSED": 
                if (eventList[i] === "APP_PASSIVE_OPEN") {
                    state = "LISTEN";
                } else if (eventList[i] === "APP_ACTIVE_OPEN") {
                    state = "SYN_SENT";
                } else return "ERROR"
                break;
            case "LISTEN":
                if (eventList[i] === "RCV_SYN") {
                    state = "SYN_RCVD";
                } else if (eventList[i] === "APP_SEND") {
                    state = "SYN_SENT";
                } else if (eventList[i] === "APP_CLOSE") {
                    state = "CLOSED";
                } else return "ERROR"
                break;
            case "SYN_SENT":
                if (eventList[i] === "RCV_SYN") {
                    state = "SYN_RCVD";
                } else if (eventList[i] === "RCV_SYN_ACK") {
                    state = "ESTABLISHED";
                } else if (eventList[i] === "APP_CLOSE") {
                    state = "CLOSED";
                } else return "ERROR"
                break;
            case "SYN_RCVD":
                if (eventList[i] === "APP_CLOSE") {
                    state = "FIN_WAIT_1";
                } else if (eventList[i] === "RCV_ACK") {
                    state = "ESTABLISHED";
                } else return "ERROR"
                break;
            case "ESTABLISHED":
                if (eventList[i] === "APP_CLOSE") {
                    state = "FIN_WAIT_1";
                } else if (eventList[i] === "RCV_FIN") {
                    state = "CLOSE_WAIT";
                } else return "ERROR"
                break;
            case "CLOSE_WAIT":
                if (eventList[i] === "APP_CLOSE") {
                    state = "LAST_ACK";
                } else return "ERROR"
                break;
            case "LAST_ACK":
                if (eventList[i] === "RCV_ACK") {
                    state = "CLOSED";
                } else return "ERROR"
                break;
            case "FIN_WAIT_1":
                if (eventList[i] === "RCV_FIN") {
                    state = "CLOSING";
                } else if (eventList[i] === "RCV_FIN_ACK") {
                    state = "TIME_WAIT";
                } else if (eventList[i] === "RCV_ACK") {
                    state = "FIN_WAIT_2";
                } else return "ERROR"
                break;
            case "FIN_WAIT_2":
                if (eventList[i] === "RCV_FIN") {
                    state = "TIME_WAIT";
                } else return "ERROR"
                break;
            case "CLOSING":
                if (eventList[i] === "RCV_ACK") {
                    state = "TIME_WAIT";
                } else return "ERROR"
                break;
            case "TIME_WAIT":
                if (eventList[i] === "APP_TIMEOUT") {
                    state = "CLOSED";
                } else return "ERROR"
                break;
            default:
                console.log("ERROR");
                break;
        }
    }

    return state;
}

console.log(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","RCV_FIN"]), "Expect: CLOSE_WAIT");
console.log(traverseTCPStates(["APP_PASSIVE_OPEN",  "RCV_SYN","RCV_ACK"]), "Expect: ESTABLISHED");   
console.log(traverseTCPStates(["APP_ACTIVE_OPEN","RCV_SYN_ACK","RCV_FIN","APP_CLOSE"]), "Expect: LAST_ACK");
console.log(traverseTCPStates(["APP_ACTIVE_OPEN"]), "Expect: SYN_SENT");
console.log(traverseTCPStates(["APP_PASSIVE_OPEN","RCV_SYN","RCV_ACK","APP_CLOSE","APP_SEND"]), "Expect: ERROR");

// Automatons, or Finite State Machines (FSM), are extremely useful to programmers when it comes to software design. 
// You will be given a simplistic version of an FSM to code for a basic TCP session.
// The outcome of this exercise will be to return the correct state of the TCP FSM based on the array of events given.

// The input array of events will consist of one or more of the following strings:
// • APP_PASSIVE_OPEN
// • APP_ACTIVE_OPEN
// • APP_SEND
// • APP_CLOSE
// • APP_TIMEOUT
// • RCV_SYN
// • RCV_ACK
// • RCV_SYN_ACK
// • RCV_FIN
// • RCV_FIN_ACK

// The states are as follows and should be returned in all capital letters as shown:
// • CLOSED
// • LISTEN
// • SYN_SENT
// • SYN_RCVD
// • ESTABLISHED
// • CLOSE_WAIT
// • LAST_ACK
// • FIN_WAIT_1
// • FIN_WAIT_2
// • CLOSING
// • TIME_WAIT

// The input will be an array of events. Your job is to traverse the FSM as determined by the events, 
// and return the proper state as a string, all caps, as shown above.
// If an event is not applicable to the current state, your code will return "ERROR".

// Action of each event upon each state:
// (the format is INITIAL_STATE: EVENT -> NEW_STATE)
// CLOSED: APP_PASSIVE_OPEN -> LISTEN
// CLOSED: APP_ACTIVE_OPEN  -> SYN_SENT
// LISTEN: RCV_SYN          -> SYN_RCVD
// LISTEN: APP_SEND         -> SYN_SENT
// LISTEN: APP_CLOSE        -> CLOSED
// SYN_RCVD: APP_CLOSE      -> FIN_WAIT_1
// SYN_RCVD: RCV_ACK        -> ESTABLISHED
// SYN_SENT: RCV_SYN        -> SYN_RCVD
// SYN_SENT: RCV_SYN_ACK    -> ESTABLISHED
// SYN_SENT: APP_CLOSE      -> CLOSED
// ESTABLISHED: APP_CLOSE   -> FIN_WAIT_1
// ESTABLISHED: RCV_FIN     -> CLOSE_WAIT
// FIN_WAIT_1: RCV_FIN      -> CLOSING
// FIN_WAIT_1: RCV_FIN_ACK  -> TIME_WAIT
// FIN_WAIT_1: RCV_ACK      -> FIN_WAIT_2
// CLOSING: RCV_ACK         -> TIME_WAIT
// FIN_WAIT_2: RCV_FIN      -> TIME_WAIT
// TIME_WAIT: APP_TIMEOUT   -> CLOSED
// CLOSE_WAIT: APP_CLOSE    -> LAST_ACK
// LAST_ACK: RCV_ACK        -> CLOSED
// "EFSM TCP"