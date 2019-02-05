//OO Model for snake game

class Board {
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.makeboard();
    this.makeHtmlBoard();
    this.snake = new Snake();
  }

  makeboard() {
    let row = [];
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        row.push(0);
      }
      this.board.push(row);
    }
  }

  makeHtmlBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    for (let y = 0; y < this.height; y++) {
      let row = document.createElement('tr');
      for (let x = 0; x < this.width; x++) {
        let cell = document.createElement('td');
        cell.setAttribute('id', `${x}-${y}`);
        row.append(cell);
      }
      board.append(row);
    }
  }
}

class Snake {
  constructor() {
    this.coords = new LinkedList();
    this.coords.append('1-2');
    this.coords.append('1-1');
    this.coords.append('1-0');
    this.direction = 'E';
    this.speed = 500;
  }

  turn(direction) {
    this.direction = direction;
  }

  grow() {
    let temp = this.coords.head.val;
    let x = +temp[0];
    let y = +temp[2];
    let newHeadVal;
    if (this.direction === 'E') {
      newHeadVal = `${x}-${y + 1}`;
    } else if (this.direction === 'W') {
      newHeadVal = `${x}-${y - 1}`;
    } else if (this.direction === 'S') {
      newHeadVal = `${x + 1}-${y}`;
    } else {
      newHeadVal = `${x - 1}-${y}`;
    }
    this.coords.unshift(newHeadVal);
    return this.coords;
  }

  move() {
    this.grow();
    this.coords.pop();
    return this.coords;
  }
}

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

window.addEventListener('load', function() {
  var newGameButton = document.getElementById('newGame');
  newGameButton.addEventListener('click', function() {
    new Board();
  });
});
