import { useState } from 'react';

export const useActiveSquare = () => {
  const [activeSquares, setActiveSquares] = useState(new Set<number>([]));

  const onToggleActiveSquare = (index: number) => {
    const hasReachedLimit = activeSquares.size === 5;
    const isActive = activeSquares.has(index);

    if (hasReachedLimit && !isActive) {
      setActiveSquares(new Set<number>([]));

      return;
    }

    if (isActive) {
      setActiveSquares((prev) => {
        prev.delete(index);

        return new Set(prev);
      });
    } else {
      setActiveSquares((prev) => {
        prev.add(index);

        return new Set(prev);
      });
    }
  };

  const isSquareActive = (index: number) => {
    const isSquareActive = activeSquares.has(index);

    return isSquareActive;
  };

  return {
    onToggleActiveSquare,
    isSquareActive,
  };
};
