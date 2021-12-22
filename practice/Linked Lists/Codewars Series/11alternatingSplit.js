// ------------------ Linked Lists - Alternating Split ------------------
// https://www.codewars.com/kata/linked-lists-alternating-split

// ---------- For 11 Alternating Split ----------
function Node(data) {
    this.data = data;
    this.next = null;
}

function Context(first, second) {
    this.first = first;
    this.second = second;
}

function alternatingSplit(head) {
    if (!head || !head.next) throw "Null or Single Node"

    let first = new Node(head.data);
    let first_counter = first;
    head = head.next;
    let second = new Node(head.data);
    let second_counter = second;
    
    while (head.next != null) {
        first_counter.next = new Node(head.next.data);
        first_counter = first_counter.next;
        head = head.next;

        if (head.next != null) {
            second_counter.next = new Node(head.next.data);
            second_counter = second_counter.next;
            head = head.next;
        }
    }

    return new Context(first, second)
}  

// Testing Suite
function buildOnetoSix() {
    return push(push(push(push(push(push(null, 6), 5), 4), 3), 2), 1);
}
function push(next, data) {
    let push = new Node();
    push.data = data;
    push.next = next;
  
    return push
}
  
console.log(alternatingSplit(buildOnetoSix()), 'first: 1 -> 3 -> null || second: 2 -> null');

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