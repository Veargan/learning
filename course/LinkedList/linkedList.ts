import { Node } from './node';

export class LinkedList {
    private head: Node;

    constructor(node?: Node) {
        this.head = node || null;
    }

    public append(value: any) : void {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;        
    }

    public unshift(value: any) : void {
        let newHead = new Node(value);
        if (!this.head) {
            this.head = newHead;
            return;
        }
        newHead.next = this.head;
        this.head = newHead;
    }

    public addByPos(pos: Number, value: any) : void {
        if (!this.head || pos < 0 || (pos > this.size())) {
            return;
        }
        if (pos === 0) {
            this.unshift(value);
            return;
        }
        let currentNode = this.head;
        let newNode = new Node(value);
        for (let i = 1; i < pos; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    public shift() : Number {
        if (!this.head) {
            return;
        }
        let result = 0;
        result = this.head.value;
        this.head = this.head.next;
        return result;
    }

    public pop() : Number {
        if (!this.head) {
            return;
        }
        let result = 0;
        let currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        result = currentNode.value;
        currentNode = null;
        return result;
    }

    public deleteByValue(value: any) : void {
        if (!this.head) {
            return;
        } else if (this.head.value === value) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                this.head = null;                
            }
            return;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            if (currentNode.value === value) {
                
            }
        }
    }

    public deleteByPos(pos: Number) : Number {
        if (!this.head || pos < 0 || (pos > this.size())) {
            return;
        }
        let result = 0;
        if (pos === 0) {
            result = this.head.value;
            this.head = this.head.next;
            return result;
        }
        let currentNode = this.head;
        for (let i = 1; i < pos; i++) {
            currentNode = currentNode.next;
        }
        result = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        return result;
    }

    public size() : Number {
        let result = 0;
        let currentNode = this.head;
        while(currentNode) {
            currentNode = currentNode.next;
            result++;
        }
        return result;
    }

    public toArray() : any[] {
        if (!this.head) {
            return;
        }
        let result = [];
        let currentNode = this.head;
        while(currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }
}
