import type { FC } from 'react';

import styles from './Square.module.css';

interface SquareProps {
  onToggleActiveSquare: () => void;
  isSquareActive: boolean;
}

export const Square: FC<SquareProps> = ({
  isSquareActive,
  onToggleActiveSquare,
}) => {
  return (
    <div
      className={`${styles['square']} ${
        isSquareActive ? styles['active'] : ''
      }`}
      onClick={onToggleActiveSquare}
    />
  );
};
