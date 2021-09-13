// ------------------ Linked Lists - Remove Duplicates ------------------
// https://www.codewars.com/kata/linked-lists-remove-duplicates

// ---------- For 08 Remove Duplicates ----------

// Don't need to make a cache.
function removeDuplicates(head) {
    if (!head || head.length === 1) return head
    let counter = head;
    while (counter.next) {
        counter.next.data === counter.data ? counter.next = counter.next.next : counter = counter.next
    }
    
    return head
}

// Still didn't work
// Try again. This time when it finds a duplicate it can enter a loop checking next next next until finding a new entry.
// function removeDuplicates(head) {
//     if (!head || head.length === 1) return head

//     let cache = [head.data];
//     let counter = head;
//     // console.log(counter.data);
//     while(counter.next) {
//         // If next is not a duplicate
//         if (cache.indexOf(counter.next.data) === -1) {
//             // console.log('not duplicate')
//             cache.push(counter.next.data);
//             counter = counter.next;
//         // If next is a duplicate but the last in the list
//         } else if (!counter.next.next) {
//             // console.log('end')
//             counter.next = null;
//         // Skip ahead till next unique data
//         } else {
//             // console.log('duplicate')
//             //while next is a repeat, keep setting next to next.
//             while (cache.indexOf(counter.next.data) != -1) {
//                 counter.next = counter.next.next;
//                 if (!counter.next) break
//             }
//         }
//     }
//     return head
// }

// Surprised, but max buffer size reached
// function removeDuplicates(head) {
//     if (!head || head.length === 1) return head

//     let cache = [head.data];
//     let counter = head;

//     while(counter.next) {
//         if (cache.indexOf(counter.next.data) === -1) {
//             cache.push(counter.next.data);
//             counter = counter.next;
//         } else if (!counter.next.next) {
//             counter.next = null;
//         } else {
//             counter.next = counter.next.next;
//         }
        
//         console.log(counter);
//     }

//     return head
// }

// I did it weirdly by building a new list without duplicate items
// What I need to do is go through the linked list and
// rewrite each item with a duplicate following so as to skip over it.
// function removeDuplicates(head) {
//     if (!head || head.length === 1) return head

//     let noDuplicates = push(null, head.data);
//     let cache = [head.data];
//     let counter = noDuplicates;

//     while (head.next) {
//         console.log(noDuplicates, cache)
//         // If next is not a duplicate      
//         if (cache.indexOf(head.next.data) === -1) {
//             head = head.next;
//             cache.push(head.data);
//             counter.next = push(null, head.data);
//             counter = counter.next;
//         // If the last node is a duplicate
//         } else if (!head.next.next) {
//             head.next = null;
//         // If next is a duplicate, skip it.
//         } else {
//             head = head.next.next;
//         }
//     }

//     return noDuplicates
// }

// // ---------- From 01 Push & Build ----------
function push(head, data) {
  let push = new Node();
  push.data = data;
  push.next = head;

  return push
}

function buildOneTwoTwo() {
//   return push(push(push(null, 2), 2), 1);
//   return push(push(push(push(null, 1), 1), 1), 1);
  return push(push(push(push(push(null, 4), 4), 3), 3), 3);

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