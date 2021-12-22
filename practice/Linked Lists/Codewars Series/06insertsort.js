// ------------------ Linked Lists - Insert Sort ------------------
// https://www.codewars.com/kata/linked-lists-insert-sort

// ---------- For 06 Insert Sort ----------
function insertSort(head) {
    let current = head;
    head = null;

    while (current) {
        head = sortedInsert(head, current.data);
        current = current.next;
    }
    
    return head
}

// ---------- From 05 Sorted Insert ----------
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

// // ---------- From 01 Push & Build ----------
function push(head, data) {
    let push = new Node();
    push.data = data;
    push.next = head;
  
    return push
}

function buildOneTwoThree() {
    return push(push(push(null, 2), 1), 3);
}

// // ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

console.log(insertSort(buildOneTwoThree()), 'expected 1->2->3->null');

// Write an InsertSort() function which rearranges nodes in a linked list so they are sorted 
// in increasing order. You can use the SortedInsert() function that you created in the 
// "Linked Lists - Sorted Insert" kata below. The InsertSort() function takes the head 
// of a linked list as an argument and must return the head of the linked list.

// var list = 4 -> 3 -> 1 -> 2 -> null
// insertSort(list) === 1 -> 2 -> 3 -> 4 -> null

// If the passed in head node is null or a single node, return null or the single node, respectively. 
// You can assume that the head node will always be either null, a single node, 
// or a linked list consisting of multiple nodes.

// The push() and buildOneTwoThree() functions do not need to be redefined.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort                     <-- Here
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