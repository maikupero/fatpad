// ------------------ Linked Lists - Length & Count ------------------
// https://www.codewars.com/kata/linked-lists-length-and-count

// At this point I got annoyed at the buildOneTwoThree and decided to build a toLinkedList and pyRange.

// ---------- For 02 Length & Count ----------
function length(head) {
    let length = 0;
    let counter = head;
    while (counter != null) {
        counter = counter.next
        length += 1;
    }
    return length
}
  
function count(head, data) {
    let counter = 0;
    while (head != null) {
        if (head.data === data) counter += 1;
        head = head.next;
    }
    return counter
}

// // ---------- From 01 Push & Build ----------
function push(head, data) {
    let push = new Node();
      push.data = data;
      push.next = head;
      return push
}
  
function buildOneTwoThree() {
      let list = push(push(push(null, 3), 2), 1);
      return list
}

// // ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

console.log(toLinkedList(1,4,5));
console.log(length(null), 'expected 0');
console.log(length(buildOneTwoThree()), 'expected 3');
console.log(count(buildOneTwoThree(), 1), 'expected 1');

// Implement Length() to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
// I've decided to bundle these two functions within the same Kata since they are both very similar.

// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   <-- Here
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