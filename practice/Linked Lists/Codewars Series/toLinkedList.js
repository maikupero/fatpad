// Got annoyed at buildOneTwoThree
// Decided to build a builder: 


//Gives a linked list with first item as head node
function toLinkedList(...listitems) {
    let head = null;
    for (let x = listitems.length-1; x >= 0; x--) {
        head = push(head, listitems[x]);
    }
    return head
}

// Gives a linked list with last item as the head node
function toLinkedList(...listitems) {
    let head = null;
    for (let x of listitems) {
        head = push(head, x);
    }
    return head
}

function push(head, data) {
    let push = new Node();
        push.data = data;
        push.next = head;
    
    return push
}

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
}

console.log(toLinkedList(1,4,5));

