// ------------------ Linked Lists - Get Nth Node ------------------
// https://www.codewars.com/kata/55befc42bfe4d13ab1000007/train/javascript

// ---------- For 03 Get Nth Node ----------
function getNth(node, index) {
    if (node === null) throw 'null input'
    let nth = node;
    while (index > 0) {
      index -= 1;
      nth = nth.next;
      if (nth.next === null && index > 0) throw 'Invalid Index'
  }

  return nth
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
// console.log(buildOneTwoThree());
console.log(getNth(buildOneTwoThree(), 4), 'expected 1');

// Implement a GetNth() function that takes a linked list and an integer index 
// and returns the node stored at the Nth index position. 
// GetNth() uses the C numbering convention that the first node is index 0, 
// the second is index 1, ... and so on. So for the list 42 -> 13 -> 666, 
// GetNth() with index 1 should return Node(13);

// getNth(1 -> 2 -> 3 -> null, 0).data === 1
// getNth(1 -> 2 -> 3 -> null, 1).data === 2

// The index should be in the range [0..length-1]. If it is not, 
// GetNth() should throw/raise an exception (ArgumentException in C#, 
// InvalidArgumentException in PHP). You should also raise an exception 
// (ArgumentException in C#, InvalidArgumentException in PHP) if the list is empty/null/None.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      <-- Here
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