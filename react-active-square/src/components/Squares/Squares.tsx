import type { FC } from 'react';

import styles from './Squares.module.css';
import { Square } from '../Square/Square';
import { useActiveSquare } from '../../hooks/use-active-square';

interface SquaresProps {
  rows: number;
  columns: number;
}

export const Squares: FC<SquaresProps> = ({ columns, rows }) => {
  const numOfSquares = columns * rows;

  const { isSquareActive, onToggleActiveSquare } = useActiveSquare();

  return (
    <div
      className={styles['squares']}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: numOfSquares }, (_, i) => (
        <Square
          key={i}
          isSquareActive={isSquareActive(i)}
          onToggleActiveSquare={() => onToggleActiveSquare(i)}
        />
      ))}
    </div>
  );
};
