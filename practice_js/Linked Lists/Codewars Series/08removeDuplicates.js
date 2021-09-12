// ------------------ Linked Lists - Remove Duplicates ------------------
// https://www.codewars.com/kata/linked-lists-remove-duplicates

// ---------- For 08 Remove Duplicates ----------
function removeDuplicates(head) {
    let search = head;
    let cache = [search.data];
    while (search) {
        if (cache.indexOf(search.next.data) != -1) {
            !search.next ? search.next = null : search.next = search.next.next
        } else {
            cache.push(search.next.data);
        }
        search = search.next;           
    }
    
    return head
}

// // ---------- From 01 Push & Build ----------
function push(head, data) {
  let push = new Node();
  push.data = data;
  push.next = head;

  return push
}

function buildOneTwoTwo() {
  return push(push(push(null, 2), 2), 1);
}


// // ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

console.log(removeDuplicates(buildOneTwoTwo()), 'expected 1->2->null');

// Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes 
// any duplicate nodes from the list. Ideally, the list should only be traversed once. 
// The head of the resulting list should be returned.

// var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
// removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
// If the passed in list is null/None/nil, simply return null.

// Note: Your solution is expected to work on long lists. 
// Recursive solutions may fail due to stack size limitations.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort                     
// Linked Lists - Append                          
// Linked Lists - Remove Duplicates                 <-- Here
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