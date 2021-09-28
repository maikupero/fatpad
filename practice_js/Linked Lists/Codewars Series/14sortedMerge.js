// ------------------ Linked Lists - Sorted Merge ------------------
// https://www.codewars.com/kata/linked-lists-sorted-merge

// ---------- For 14 Sorted Merge ----------
function sortedMerge(first, second) {
    // Easy null cases
    if (!first) return second;
    if (!second) return first;

    let merged = new Node();
    let builder = merged;

    // Till one of the lists reaches its end, add the lower data to merged, go next.
    while (first && second) {
        if (first.data <= second.data) {
            builder.data = first.data;
            first = first.next;
        } else {
            builder.data = second.data;
            second = second.next;
        }        
        if (!first) builder.next = second;
        else if (!second) builder.next = first;
        else builder.next = new Node();
        builder = builder.next;
    }
    // In the event of only one list reaching the end, iterate through to build merged.
    while (builder.next) {
        builder = builder.next;
    }
    return merged;
}

// ---------- Node Class ----------
function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
// Testing
function buildOneTwoFour() {
    return push(push(push(null, 4), 2), 1);
}
function buildThreeFiveSix() {
    return push(push(push(null, 6), 5), 3);
}
function testA() {
    return push(push(push(null, 8), 3), 1);
}
function testB() {
    return push(push(push(null, 9), 4), 2);
}
function testC() {
    return push(null, 1);
}
function testD() {
    return push(push(null, 5), 4);
}

function push(next, data) {
    let push = new Node();
    push.data = data;
    push.next = next;
  
    return push
}

// console.log(sortedMerge(buildThreeFiveSix(), buildOneTwoFour()), '1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null)');
// console.log(sortedMerge(buildOne(), buildTwotoFour()), 'front: 1 -> 2 -> 3 -> 4 -> null)');
// console.log(sortedMerge(buildOne(), null), 'front: 1 -> null)');
// console.log(sortedMerge(testA(), testB()), "result should be 1 -> 2 -> 3 -> 4 -> 8 -> 9 -> null.");
// console.log(sortedMerge(testC(), testD()), "result should be 1 -> 4 -> 5 -> null.");


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
// Linked Lists - Front Back Split                      
// Linked Lists - Shuffle Merge                     
// Linked Lists - Sorted Merge                      <-- Here
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse