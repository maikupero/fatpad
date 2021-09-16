// ------------------ Linked Lists - Move Node ------------------
// https://www.codewars.com/kata/linked-lists-move-node

// ---------- Perfected -----------
function moveNode(source, dest) {
  return new Context(source.next, new Node (source.data, dest));
}

// ---------- For 09 Move Node ----------
function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

// function moveNode(source, dest) {
//   if (!source) throw 'Error'
//   dest = push(dest, source.data)
//   source = source.next;

//   return new Context(source, dest);
// }

// ---------- From 01 Push & Build ----------
function push(head, data) {
  let push = new Node();
  push.data = data;
  push.next = head;

  return push
}

function buildOneTwoThree() {
  return push(push(push(null, 3), 2), 1);
}
function buildFourFiveSix() {
    return push(push(push(null, 6), 5), 4);
}

// // ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

console.log(moveNode(buildOneTwoThree(), buildFourFiveSix()), '\nSource: 2 -> 3 -> null || Dest: 1 -> 4 -> 5 -> 6 -> null');

// Write a MoveNode() function which takes the node from the front of the source list and moves it 
// to the front of the destintation list. You should throw an error when the source list is empty. 
// For simplicity, we use a Context object to store and return the state of the two linked lists. 
// A Context object containing the two mutated lists should be returned by moveNode.

// MoveNode() is a handy utility function to have for later problems.

// var source = 1 -> 2 -> 3 -> null
// var dest = 4 -> 5 -> 6 -> null
// moveNode(source, dest).source === 2 -> 3 -> null
// moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null


// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort                     
// Linked Lists - Append                          
// Linked Lists - Remove Duplicates                 
// Linked Lists - Move Node                         <-- Here
// Linked Lists - Move Node In-place
// Linked Lists - Alternating Split
// Linked Lists - Front Back Split
// Linked Lists - Shuffle Merge
// Linked Lists - Sorted Merge
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse