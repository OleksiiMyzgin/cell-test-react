import { useState, useEffect } from 'react';

import { MatrixType } from '../../types';
import { MATRIX_SIZE, MATRIX_CHANGE_SPEED } from '../../consts';
import { getEmptyMatrix, generateRandomMatrix } from '../../utils';
import GridRow from '../GridRow';
import classes from './app.module.css';

function App() {
  const [matrix, setMatrix] = useState<MatrixType>(() =>
    generateRandomMatrix(MATRIX_SIZE)
  );

  useEffect(() => {
    changeMatrix();
  }, []);

  useEffect(() => {
    const interval = setInterval(changeMatrix, MATRIX_CHANGE_SPEED);
    return () => clearInterval(interval);
  }, [matrix]);

  const changeMatrix = () => {
    const newMatrix = getEmptyMatrix(MATRIX_SIZE);
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
    <div className={classes.app}>
      {matrix.map((list, index) => (
        <GridRow key={index} list={list} />
      ))}
    </div>
  );
}

export default App;
