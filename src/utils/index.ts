import { MatrixType } from '../types';

export function getEmptyMatrix(size: number): MatrixType {
  return Array.from(Array(size), () => new Array(size).fill(0));
}

export function generateRandomMatrix(size: number): MatrixType {
  const newMatrix = getEmptyMatrix(size);
  const matrix = newMatrix.map((array) =>
    array.map(() => {
      const num = Math.ceil(Math.random() * 10);
      if (num % 2 === 0) return 0;
      return 1;
    })
  );
  return matrix;
}
