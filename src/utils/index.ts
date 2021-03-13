import { MatrixType } from '../types';

export function getEmptyMatrix() {
  return Array.from(Array(2500).fill(0));
}

export function generateRandomMatrix(): MatrixType {
  const newMatrix = getEmptyMatrix();
  const matrix = newMatrix.map((array) => {
    const num = Math.ceil(Math.random() * 10);
    if (num % 2 === 0) return 0;
    return 1;
  });
  return matrix;
}
