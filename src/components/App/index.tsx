import { useState } from 'react';

import { MatrixType } from '../../types';
import GridRow from '../GridRow';
import classes from './app.module.css';

function getEmptyMatrix(): MatrixType {
  return Array.from(Array(50), () => new Array(50).fill(0));
}

function generateRandomMatrix(): MatrixType {
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

function App() {
  const [matrix, setMatrix] = useState<MatrixType>(() =>
    generateRandomMatrix()
  );

  const changeMatrix = () => {
    const newMatrix = [...getEmptyMatrix()];
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix.length; col++) {
        const topCell =
          matrix[row - 1] === undefined ? 0 : matrix[row - 1][col];
        const bottomCell =
          matrix[row + 1] === undefined ? 0 : matrix[row + 1][col];
        const leftCell =
          matrix[row][col - 1] === undefined ? 0 : matrix[row][col - 1];
        const rightCell =
          matrix[row][col + 1] === undefined ? 0 : matrix[row][col + 1];

        const bottomLeftCell =
          matrix[row + 1] === undefined || col - 1 === -1
            ? 0
            : matrix[row + 1][col - 1];

        const bottomRightCell =
          matrix[row + 1] === undefined ||
          matrix[row + 1][col + 1] === undefined
            ? 0
            : matrix[row + 1][col + 1];

        const topLeftCell =
          row - 1 === -1 || col - 1 === -1 ? 0 : matrix[row - 1][col - 1];

        const topRightCell =
          row - 1 === -1 || matrix[row - 1][col + 1] === undefined
            ? 0
            : matrix[row - 1][col + 1];

        const sum =
          topCell +
          leftCell +
          rightCell +
          bottomCell +
          topLeftCell +
          topRightCell +
          bottomLeftCell +
          bottomRightCell;

        if (sum < 2) {
          newMatrix[row][col] = 0;
        } else if ((sum === 2 || sum === 3) && matrix[row][col] === 1) {
          newMatrix[row][col] = 1;
        } else if (sum > 3) {
          newMatrix[row][col] = 0;
        } else if (sum === 3 && matrix[row][col] === 0) {
          newMatrix[row][col] = 1;
        }
      }
    }
    setMatrix(newMatrix);
  };

  return (
    <div className={classes.app} onClick={changeMatrix} aria-hidden="true">
      Header
      {matrix.map((list, index) => (
        <GridRow key={index} list={list} />
      ))}
    </div>
  );
}

export default App;
