// ------------------ Linked Lists - Push & BuildOneTwoThree ------------------
// https://www.codewars.com/kata/linked-lists-push-and-buildonetwothree

//turns whatever data i get into nodes
function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  
}

function buildOneTwoThree() {
  
}

console.log(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
console.log(push(null, 1).next, null, "Should be able to create a new linked list with push().");
console.log(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
console.log(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");

console.log(buildOneTwoThree().data, 1, "First node should should have 1 as data.");
console.log(buildOneTwoThree().next.data, 2, "First node should should have 1 as data.");
console.log(buildOneTwoThree().next.next.data, 3, "Second node should should have 2 as data.");
console.log(buildOneTwoThree().next.next.next, null, "Third node should should have 3 as data.");

// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. 
// Try to use the push() function within your buildOneTwoThree() function.

// Here's an example of push() usage:

// var chained = null
// chained = push(chained, 3)
// chained = push(chained, 2)
// chained = push(chained, 1)
// push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
// The push function accepts head and data parameters, where head is either a node object or null/None/nil. 
// Your push implementation should be able to create a new linked list/node when head is null/None/nil.

// The buildOneTwoThree function should create and 
// return a linked list with three nodes: 1 -> 2 -> 3 -> null

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree            <-- Here
// Linked Lists - Length & Count
// Linked Lists - Get Nth Node
// Linked Lists - Insert Nth Node
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
