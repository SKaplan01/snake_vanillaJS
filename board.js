//OO Model for board for snake game

class Board {
  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
    this.board = [];
    this.makeboard();
    this.makeHtmlBoard();
    this.snake = new Snake();
    this.insertSnake();
    this.timerId = this.moveSnake();
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
        cell.setAttribute('id', `${y}-${x}`);
        row.append(cell);
      }
      board.append(row);
    }
  }

  insertSnake() {
    let curr = this.snake.coords.head;
    while (curr) {
      let x = curr.val.split('-')[1];
      let y = curr.val.split('-')[0];
      this.board[y][x] = 1;
      let cell = document.getElementById(curr.val);
      cell.setAttribute('class', 'snake');
      curr = curr.next;
    }
  }

  insertApple() {}

  moveSnake() {
    let timerId = setInterval(() => {
      let tail = this.snake.coords.tail;
      let tailCell = document.getElementById(tail.val);
      tailCell.classList.remove('snake');
      this.snake.move();
      let newHead = document.getElementById(this.snake.coords.head.val);
      newHead.setAttribute('class', 'snake');
    }, this.snake.speed);
    return timerId;
  }

  checkMove() {}
}
