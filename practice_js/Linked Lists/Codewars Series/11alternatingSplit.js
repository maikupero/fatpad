// ------------------ Linked Lists - Alternating Split ------------------
// https://www.codewars.com/kata/linked-lists-alternating-split

// ---------- From 09 Move Node ----------
function Node(data) {
    this.data = data;
    this.next = null;
}

function Context(first, second) {
    this.first = first;
    this.second = second;
}

function alternatingSplit(head) {
  // Your code goes here.
  // Remember to return the context.
}

// ---------- Perfected -----------
function moveNode(source, dest) {
    return new Context(source.next, new Node (source.data, dest));
}
  
// ---------- From 09 Move Node ----------
function Context(source, dest) {
    this.source = source;
    this.dest = dest;
}


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

// ---------- Defining a Node in a Linked List ----------
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
  
console.log(moveNode(buildOneTwoThree(), buildFourFiveSix()), '\nSource: 2 -> 3 -> null || Dest: 1 -> 4 -> 5 -> 6 -> null');

// Write an AlternatingSplit() function that takes one list and divides up its nodes to make two 
// smaller lists. The sublists should be made from alternating elements in the original list.
// So if the original list is a -> b -> a -> b -> a -> null then one sublist should be 
// a -> a -> a -> null and the other should be b -> b -> null.

// var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
// alternatingSplit(list).first === 1 -> 3 -> 5 -> null
// alternatingSplit(list).second === 2 -> 4 -> null

// For simplicity, we use a Context object to store and return the state of the two linked lists. 
// A Context object containing the two mutated lists should be returned by AlternatingSplit().
// If the passed in head node is null/None/nil or a single node, throw an error.

// Related Kata in order of expected completion (increasing difficulty):
// Linked Lists - Push & BuildOneTwoThree
// Linked Lists - Length & Count                   
// Linked Lists - Get Nth Node                      
// Linked Lists - Insert Nth Node               
// Linked Lists - Sorted Insert
// Linked Lists - Insert Sort                     
// Linked Lists - Append                          
// Linked Lists - Remove Duplicates                 
// Linked Lists - Move Node                         
// Linked Lists - Move Node In-place
// Linked Lists - Alternating Split                   <-- Here
// Linked Lists - Front Back Split
// Linked Lists - Shuffle Merge
// Linked Lists - Sorted Merge
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse