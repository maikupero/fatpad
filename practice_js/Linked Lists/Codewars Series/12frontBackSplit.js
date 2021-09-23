// ------------------ Linked Lists - Front Back Split ------------------
// https://www.codewars.com/kata/linked-lists-front-back-split

// ---------- Node Class ----------
function Node(data) {   
    this.data = data;
    this.next = null;
}

// ---------- From 02 Length ----------
function node_length(head) {
    let length = 0;
    let counter = head;
    while (counter != null) {
        counter = counter.next
        length += 1;
    }
    return length
}

// ---------- For 12 FrontBack Split ----------
function frontBackSplit(source, front, back) {
    // Get length of list & break point
    let length = node_length(source);
    let breakpoint = length / 2;

    // Exception Cases
    if (length < 2 || source === null || front === null || back === null) throw "Error"

    // Splitter
    front.data = source.data;
    front.next = source.next;
    let counter = front;

    // Get back list
    while (length > breakpoint) {
        counter = counter.next;
        length -= 1;
    }
    back.data = counter.data;
    back.next = counter.next; 

    // Cut front list
    let cutter = front;
    while (breakpoint > 1) {
        cutter = cutter.next;
        breakpoint -= 1;
    }
    cutter.next = null;
}

// Testing
function buildOnetoSix() {
    return push(push(push(push(push(push(null, 6), 5), 4), 3), 2), 1);
}
function push(next, data) {
    let push = new Node();
    push.data = data;
    push.next = next;
  
    return push
}

console.log(frontBackSplit(buildOnetoSix(), new Node(null), new Node(null)), 'front: 1 -> 2-> 3 -> null || back: 4 -> 5 -> 6 -> null');

// Write a FrontBackSplit() function that takes one list and splits it into two sublists — one for the front half, and one for the back half. If the number of elements is odd, the extra element should go in the front list. For example, FrontBackSplit() on the list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null. Getting this right for all the cases is harder than it looks. You will probably need special case code to deal with lists of length < 2 cases.

// var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
// var front = new Node()
// var back = new Node()
// frontBackSplit(source, front, back)
// front === 1 -> 3 -> 7 -> 8 -> null
// back === 11 -> 12 -> 14 -> null
// You should throw an error if any of the arguments to FrontBackSplit are null or if the source list has < 2 nodes.

// Hint. Probably the simplest strategy is to compute the length of the list, then use a for loop to hop over the right number of nodes to find the last node of the front half, and then cut the list at that point. There is a trick technique that uses two pointers to traverse the list. A "slow" pointer advances one nodes at a time, while the "fast" pointer goes two nodes at a time. When the fast pointer reaches the end, the slow pointer will be about half way. For either strategy, care is required to split the list at the right point.



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
// Linked Lists - Alternating Split                   
// Linked Lists - Front Back Split                      <-- Here
// Linked Lists - Shuffle Merge
// Linked Lists - Sorted Merge
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse