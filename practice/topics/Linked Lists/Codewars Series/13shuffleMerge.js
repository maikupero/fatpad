// ------------------ Linked Lists - Shuffle Merge ------------------
// https://www.codewars.com/kata/linked-lists-shuffle-merge

// ---------- Node Class ----------
function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}

// ---------- For 13 Shuffle Merge ----------
// Take one from each, move to placeholder.
// Append placeholder to end of merged.
// If either is null, ignore it. If both are null, end it.
function shuffleMerge(first, second) {
    if (!first && !second) return null

    let merged = new Node();
    let placeholder = new Node();

    while (first || second) {
        if (!first) {
            placeholder = moveNode(second, new Node()).dest;
            second = second.next;
        } else {
            placeholder = moveNode(first, new Node()).dest;
            first = first.next;
            if (second) {
                placeholder.next = moveNode(second, placeholder.next).dest;
                second = second.next;
            }
        }
        
        !merged.data ? merged = placeholder : append(merged, placeholder);
    }

    return merged
}

// ---------- From 09 Move Node ----------
function Context(source, dest) {
    this.source = source;
    this.dest = dest;
}
function moveNode(source, dest) {
    return new Context(source.next, new Node(source.data, dest));
}

// ---------- From 07 Append ----------
function append(listA, listB) {
    let head = listA;
    while (head.next) {
        head = head.next;
    }
    head.next = listB;

    return listA
}

// Testing
function buildOnetoThree() {
    return push(push(push(null, 3), 2), 1);
}
function buildFourtoSix() {
    return push(push(push(null, 6), 5), 4);
}
function buildOne() {
    return push(null, 1);
}
function buildTwotoFour() {
    return push(push(push(null, 4), 3), 2);
}

function push(next, data) {
    let push = new Node();
    push.data = data;
    push.next = next;
  
    return push
}

console.log(shuffleMerge(buildOnetoThree(), buildFourtoSix()), 'front: 1 -> 4 -> 2 -> 5 -> 3 -> 6 -> null)');
console.log(shuffleMerge(buildOne(), buildTwotoFour()), 'front: 1 -> 2 -> 3 -> 4 -> null)');
console.log(shuffleMerge(buildOne(), null), 'front: 1 -> null)');

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
// Linked Lists - Shuffle Merge                     <-- Here
// Linked Lists - Sorted Merge
// Linked Lists - Merge Sort
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse