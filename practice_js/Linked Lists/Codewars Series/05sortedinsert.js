// ------------------ Linked Lists - Sorted Insert ------------------
// https://www.codewars.com/kata/linked-lists-sorted-insert

// ------------------ Linked Lists - Insert Nth Node ------------------
// https://www.codewars.com/kata/linked-lists-insert-nth-node

// ---------- For 05 Sorted Insert ----------
function sortedInsert(head, data) {
    if (!head || data <= head.data) return push(head, data)
    
    let current = head;
    while (current.next.data < data) {
        current = current.next;
        if (current.next === null) break
    }
    current.next = push(current.next, data);
    return head
}

  
// Post-submission 04
function insertNth(head, index, data) {
    if (index == 0) return push(head, data)
    head.next = insertNth(head.next, index - 1, data);

    return head;
}

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

console.log(sortedInsert(buildOneTwoThree(), 4), 'expected 1->2->3->4->null');


// Write a SortedInsert() function which inserts a node into the correct location 
// of a pre-sorted linked list which is sorted in ascending order. 
// SortedInsert takes the head of a linked list and data used to create a node as arguments. 
// SortedInsert() should also return the head of the list.

// sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
// sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
// sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
// The push() and buildOneTwoThree() functions do not need to be redefined.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               
// Linked Lists - Sorted Insert                     <-- Here
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