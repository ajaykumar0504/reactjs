import React, { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6],            npm
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  const handleClick = (i) => {
    if (board[i] || winner) return; 
    const nextBoard = board.slice();
    nextBoard[i] = isXNext ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXNext(!isXNext);
  };

  const status = winner 
    ? `Winner: ${winner}` 
    : isDraw 
    ? "It's a Draw!" 
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  const styles = {
    container: { display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'sans-serif', marginTop: '50px' },
    board: { display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '5px' },
    cell: { width: '100px', height: '100px', fontSize: '24px', fontWeight: 'bold', cursor: 'pointer', backgroundColor: '#fff', border: '2px solid #333' },
    button: { marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }
  };

  return (
    <div style={styles.container}>
      <h2>{status}</h2>
      <div style={styles.board}>
        {board.map((value, i) => (
          <button key={i} style={styles.cell} onClick={() => handleClick(i)}>
            {value}
          </button>
        ))}
      </div>
      <button style={styles.button} onClick={() => { setBoard(Array(9).fill(null)); setIsXNext(true); }}>
        Restart Game
      </button>
    </div>
  );
}