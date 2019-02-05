//Classes for Doubly LinkedList with tail

class Node {
  constructor(val, next = null, previous = null) {
    this.val = val;
    this.next = next;
    this.previous = previous;
  }
}

class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  //adds a new node to the end of the linked list and updates the tail
  append(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentTail = this.tail;
      currentTail.next = newNode;
      newNode.previous = currentTail;
    }
    this.tail = newNode;
    return this;
  }

  //removes a node from the end of the linked list and updates the tail
  //returns the removed node
  pop() {
    if (this.head === null) {
      throw new Error('Cannot pop from an empty linked list');
    }
    let removedNode = this.tail;
    if (!removedNode.previous) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.previous;
      this.tail.next = null;
    }
    removedNode.previous = null;
    removedNode.next = null;
    return removedNode;
  }

  //adds a new node to the start of the linked list and updates the head
  unshift(val) {
    let newNode = new Node(val);
    let next = this.head;
    this.head = newNode;
    this.head.next = next;
    if (next) {
      next.previous = newNode;
    }
    if (this.tail === null) {
      this.tail = newNode;
    }
    return this;
  }

  //removes a node from the start of the linked list and updates the head
  //returns the removed node
  shift() {
    let temp = this.head;
    if (temp === null) {
      throw new Error('Cannot remove from empty linked list');
    }
    this.head = temp.next;
    temp.next = null;
    if (this.head) {
      this.head.previous = null;
    }
    if (this.tail === temp) {
      this.tail = null;
    }
    return temp;
  }
}

module.exports = {
  LinkedList,
  Node
};

// let l = new LinkedList();
// l.append(5);
// l.append(4);
// l.append(3);
// // l.pop();
// // l.unshift(2);
// l.shift();
// console.log(l);
