import type { FC } from 'react';

import styles from './Square.module.css';

interface SquareProps {
  onAddSquare: () => void;
  onRemoveSquare: () => void;
  isSquareActive: boolean;
}

export const Square: FC<SquareProps> = ({
  isSquareActive,
  onAddSquare,
  onRemoveSquare,
}) => {
  const onClickHandler = isSquareActive ? onRemoveSquare : onAddSquare;

  return (
    <div
      className={`${styles['square']} ${
        isSquareActive ? styles['active'] : ''
      }`}
      onClick={onClickHandler}
    />
  );
};
