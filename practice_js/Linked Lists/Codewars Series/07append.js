// ------------------ Linked Lists - Append ------------------
// https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}
  
console.log(stringify(new Node(1, new Node(2, new Node(3)))), "1 -> 2 -> 3 -> null");
console.log(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))), "0 -> 1 -> 4 -> 9 -> 16 -> null");
console.log(stringify(null), "null");

// Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.

// Related Kata in order of expected completion (increasing difficulty):
//  Linked Lists - Push & BuildOneTwoThree
//  Linked Lists - Length & Count
//  Linked Lists - Get Nth Node
// Linked Lists - Insert Nth Node
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort
// Linked Lists - Append                     <-- Here
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