// ------------------ Linked Lists - Merge Sort ------------------
// https://www.codewars.com/kata/55e5fa3501fd9c3f4d000050/train/javascript

// Could not understand what was being asked for. I was on the right track,
// but would not have gotten the throwing error message which I think was a mistake 
// on the author's part. Correct solution that I was aiming for:
function mergeSort(list) {
    if(!list || !list.next) return list;
    let front = new Node(), back = new Node();
    frontBackSplit(list, front, back);
    return sortedMerge(mergeSort(front), mergeSort(back));
}

// ---------- My 15 Merge Sort ----------
// function mergeSort(list) {
//     if (!list || !list.next) throw 'Error'
//     let a = new Node();
//     let b = new Node();

//     frontBackSplit(list, a, b);
//     console.log("Hey:",a,b);
//     //Sort a
//     //Sort b
//     let head = sortedMerge(a, b);
//     head.next = sortedMerge(a, b);
//     return head 
// }

//Recursive sortedMerge solution
function sortedMerge(a, b) {
    if(!a) return b;
    if(!b) return a;
    return a.data < b.data ? new Node(a.data, sortedMerge(a.next, b)) : new Node(b.data, sortedMerge(a, b.next));
}

//Cleaner frontBackSplit from codewars
function frontBackSplit(source, front, back) {
    let cnt = 0;
    let node = source;
    while (node) {
      cnt++;
      node = node.next;
    }
    let frontLength = Math.ceil(cnt / 2);

    node = source;
    for (let i = 0; i < frontLength - 1; i++) {
        node = node.next;
    }
    back.data = node.next.data;
    back.next = node.next.next;
    node.next = null;
    front.data = source.data;
    front.next = source.next;
}

// ---------- Node Class ----------
function Node(data) {
    this.data = data === undefined ? null : data;
    this.next = null;
}
// Testing
function buildOnetoSix() {
    return push(push(push(push(push(push(null, 2), 4), 6), 1), 5), 3);
}
function push(next, data) {
    let push = new Node();
    push.data = data;
    push.next = next;
  
    return push
}

console.log(mergeSort(buildOnetoSix()), '1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null');

// Write a MergeSort() function which recursively sorts a list in ascending order.
// Note that this problem requires recursion. Given FrontBackSplit() and SortedMerge(), 
// you can write a classic recursive MergeSort(). Split the list into two smaller lists,
// recursively sort those lists, and finally merge the two sorted lists together into a single sorted list. 

// var list = 4 -> 2 -> 1 -> 3 -> 8 -> 9 -> null
// mergeSort(list) === 1 -> 2 -> 3 -> 4 -> 8 -> 9 -> null
// FrontBackSplit() and SortedMerge() need not be redefined. You may call these functions in your solution.

// These function names will depend on the accepted naming conventions of language you are using.
// In JavaScript, it is frontBackSplit(), etc.

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
// Linked Lists - Sorted Merge                      
// Linked Lists - Merge Sort                        <-- Here
// Linked Lists - Sorted Intersect
// Linked Lists - Iterative Reverse
// Linked Lists - Recursive Reverse