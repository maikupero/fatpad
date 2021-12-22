//Building Range function alalala python

//For range up to target number i.e. pyRange(5) should yield 0,1,2,3,4
//One argument to specify the end point

// function pyRange(end) {
//     let count = end-1;
//     let head = null;
//     while (count >= 0) {
//         head = push(head, count);
//         count -= 1;
//     }

//     return head
// }

//If two arguments, specify start and end. 
// pyRange(5,10) should yield 5,6,7,8,9
// pyRange(10,5) should yield, 10,9,8,7,6

// function pyRange(start, end) {
//     //If only end point is given
//     if (end === undefined) {
//         end = start;
//         start = 0;
//     }

//     let head = null;
//     //Ascending Order, else Descending Order
//     if (end > start) {
//         let count = end - 1;
//         while (count >= start) {
//             head = push(head, count);
//             count -= 1;
//         }
//     } else {
//         let count = end + 1;
//         while (count <= start) {
//             head = push(head, count);
//             count += 1;
//         }
//     }

//     return head
// }

//If three arguments, third specifies increment for each step.
//i.e. Range(10,0,-1) 10,9,8,7,6,5,4,3,2,1
//Implement Defaults of 0 for start and 1 for increment
function pyRange(start, end, increment) {
    //If only end point is given
    if (end === undefined) {
        end = start;
        start = 0;
    }

    //If no increment given
    if (increment === undefined) { 
        increment = 1;
    }

    let head = null;
    increment = Math.abs(increment);

    //Ascending Order, else Descending Order
    if (end > start) {
        let count = end - ((end - start) % increment);
        while (count >= start) {
            head = push(head, count);
            count -= increment;
        }
    } else if (start > end) {
        let count = end + ((start - end) % increment);
        while (count <= start) {
            head = push(head, count);
            count += increment;
        }
    }

    return head
}

// Standard Stuff
function push(head, data) {
    let push = new Node();
        push.data = data;
        push.next = head;
    
    return push
}

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

// pyRange(end)
// pyRange(start, end)
// pyRange(start, end, increment)

console.log(pyRange(3));
console.log(pyRange(2,5));
console.log(pyRange(5,2));
console.log(pyRange(2,10,3));
console.log(pyRange(10,2,-3));
console.log(pyRange(20,12,4));
console.log(pyRange(20,20));