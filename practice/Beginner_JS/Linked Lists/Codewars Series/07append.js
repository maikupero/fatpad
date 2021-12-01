// ------------------ Linked Lists - Append ------------------
// https://www.codewars.com/kata/55d17ddd6d7868493e000074/train/javascript

// ---------- For 07 Append ----------
function append(listA, listB) {
    if (!listA && !listB) return null
    if (!listA) return listB
    if (!listB) return listA

    let head = listA;
    while (head.next) {
        head = head.next;
    }
    head.next = listB;

    return listA
}

// // ---------- From 01 Push & Build ----------
function push(head, data) {
  let push = new Node();
  push.data = data;
  push.next = head;

  return push
}

function buildOneTwoThree() {
//   return push(push(push(null, 3), 2), 1);
return push(null, 3);

}
function buildFourFiveSix() {
    // return push(push(push(null, 6), 5), 4,);
    return push(null, 6);
}

// // ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

console.log(append(buildOneTwoThree(),buildFourFiveSix()), 'expected 1->2->3->4->5->6->null');

// Write an Append() function which appends one linked list to another. 
// The head of the resulting list should be returned.

// var listA = 1 -> 2 -> 3 -> null
// var listB = 4 -> 5 -> 6 -> null
// append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. 
// If one list is null/NULL/None/nil and the other is not, 
// simply return the non-null/NULL/None/nil list.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort                     
// Linked Lists - Append                          <-- Here
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