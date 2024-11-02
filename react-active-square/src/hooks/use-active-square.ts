import { useState } from 'react';

export const useActiveSquare = () => {
  const [activeSquares, setActiveSquares] = useState(new Set<number>());

  const isSquareActive = (index: number) => activeSquares.has(index);

  const onAddActiveSquare = (index: number) => {
    setActiveSquares((prev) => {
      const hasIndex = isSquareActive(index);

      if (hasIndex) {
        return prev;
      }

      if (prev.size === 5) {
        return new Set();
      }

      prev.add(index);

      return new Set(prev);
    });
  };

  const onRemoveActiveSquare = (index: number) => {
    setActiveSquares((prev) => {
      prev.delete(index);

      return new Set(prev);
    });
  };

  return {
    onAddActiveSquare,
    onRemoveActiveSquare,
    isSquareActive,
  };
};
