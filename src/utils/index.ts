import { MatrixType } from '../types';

export function getEmptyMatrix(): MatrixType {
  return Array.from(Array(50), () => new Array(50).fill(0));
}

export function generateRandomMatrix(): MatrixType {
  const newMatrix = getEmptyMatrix();
  const matrix = newMatrix.map((array) =>
    array.map(() => {
      const num = Math.ceil(Math.random() * 10);
      if (num % 2 === 0) return 0;
      return 1;
    })
  );
  return matrix;
}
