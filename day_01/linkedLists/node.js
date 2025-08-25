class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //insert something at the start
    insertAtHead(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        console.log(newNode);
    }

    //insert something at the end
    insertAtEnd(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next) current = current.next;
        current.next = newNode;
    }

    //searcdh for a value
    search(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) return true;
            current = current.next;
        }
        return false;
    }
}

let ll = new LinkedList()
ll.insertAtHead(10);
// ll.insertAtHead(20);
ll.insertAtEnd(30);
console.log(ll.search(20)); //true
console.log(ll.search(40)); //false