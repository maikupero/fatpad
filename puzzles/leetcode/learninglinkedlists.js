/*
so a linked list is just 
data + pointer to the next data + pointer

nodes of two attributes: values and next pointers.
*/

class ListNode {
    constructor(val, next) {
        this.val = 0; 
        this.next = null; 
    };
};

let string_to_list = (string) => {
    let head = new ListNode(); 
    let current = head; 

    for (let x in string) { 
        current.val = string[x];
        if (x < string.length) {
            current.next = new ListNode();
            current = current.next;
        }// thanks brother i appreciate
    }

    return head
}

let print_list = (head) => {
    while (head.next != null) {
        console.log(head.val);  
        head = head.next;
    }
}

let headnode = string_to_list('Hello, world!');

// console.log(headnode, '<-- headnode');
print_list(headnode);


