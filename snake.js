//OO Model for snake game

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
    let x = +temp.split('-')[1];
    let y = +temp.split('-')[0];
    let newHeadVal;
    if (this.direction === 'E') {
      newHeadVal = `${y}-${x + 1}`;
    } else if (this.direction === 'W') {
      newHeadVal = `${y}-${x - 1}`;
    } else if (this.direction === 'S') {
      newHeadVal = `${y + 1}-${x}`;
    } else {
      newHeadVal = `${y - 1}-${x}`;
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
