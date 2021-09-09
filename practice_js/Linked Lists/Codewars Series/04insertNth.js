// ------------------ Linked Lists - Insert Nth Node ------------------
// https://www.codewars.com/kata/linked-lists-insert-nth-node

// Post-submission

function insertNth(head, index, data) {
    if (index == 0) return push(head, data)
    head.next = insertNth(head.next, index - 1, data);

    return head;
}

// ---------- For 04 Insert Nth Node ----------
// function insertNth(head, index, data) {
//     if (head === null) return push(null, data)
//     let nth = head;
//     console.log(nth);

//     if (index === 0) return push(head, data)

//     while (index > 1) {
//         index -= 1;
//         nth = nth.next;
//         if (nth.next === null && index > 1) throw new Error
//     }
//     if (index === 1) nth.next = push(nth.next, data);
    
//     return head
// }

// // ---------- From 01 Push & Build ----------
function push(head, data) {
    let push = new Node();
    push.data = data;
    push.next = head;
  
    return push
}

function buildOneTwoThree() {
    return push(push(push(null, 3), 2), 1);
}

// // ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}
// console.log(buildOneTwoThree());
console.log(insertNth(buildOneTwoThree(), 1, 7), 'expected 1->7->2->3');

// Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

// InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. 
// Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. 
// InsertNth() should return the head of the list.

// insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
// insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
// You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.

// The push() and buildOneTwoThree() (build_one_two_three() in PHP) functions do not need to be redefined. 
// The Node class is also preloaded for you in PHP.



// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               <-- Here
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort
// Linked Lists - Append
// Linked Lists - Remove Duplicates
// Linked Lists - Move Node
// Linked Lists - Move Node In-place
// Linked Lists - Alternating Split
// Linked Lists - Front Back Split
// Linked Lists - Shuffle Merge
// Linked Lists - Sorted Merge
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse