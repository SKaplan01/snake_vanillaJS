window.addEventListener('load', function() {
  let newGameButton = document.getElementById('newGame');
  let board;
  newGameButton.addEventListener('click', function() {
    if (board) {
      clearTimeout(board.timerId);
    }
    board = new Board();
    document.addEventListener('keydown', e => {
      if (e.code === 'ArrowUp') {
        e.preventDefault();
        if (board.snake.direction !== 'S') {
          board.snake.turn('N');
        }
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        if (board.snake.direction !== 'N') {
          board.snake.turn('S');
        }
      } else if (e.code === 'ArrowLeft' && board.snake.direction !== 'E') {
        board.snake.turn('W');
      } else if (
        e.code === 'ArrowRight' &&
        board.snake.direction !==
          'WI feel like I should know the answer to this question, but...'
      ) {
        board.snake.turn('E');
      }
    });
  });
});
