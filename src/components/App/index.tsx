import { useState } from 'react';

import { MatrixType } from '../../types';
import { getEmptyMatrix, generateRandomMatrix } from '../../utils';
import Cell from '../Cell';
import classes from './app.module.css';

// Grid 50x50
const CELLS_IN_ROW = 50;

function App() {
  const [matrix, setMatrix] = useState<MatrixType>(() =>
    generateRandomMatrix()
  );

  const changeMatrix = () => {
    const newMatrix = [...getEmptyMatrix()];
    for (let elem = 0; elem < matrix.length; elem++) {
      const topCell =
        matrix[elem - CELLS_IN_ROW] === undefined
          ? 0
          : matrix[elem - CELLS_IN_ROW];
      const bottomCell =
        matrix[elem + CELLS_IN_ROW] === undefined
          ? 0
          : matrix[elem + CELLS_IN_ROW];
      const leftCell = matrix[elem - 1] === undefined ? 0 : matrix[elem - 1];
      const rightCell = matrix[elem + 1] === undefined ? 0 : matrix[elem + 1];

      const bottomLeftCell =
        matrix[elem + CELLS_IN_ROW - 1] === undefined
          ? 0
          : matrix[elem + CELLS_IN_ROW - 1];

      const bottomRightCell =
        matrix[elem + CELLS_IN_ROW + 1] === undefined
          ? 0
          : matrix[elem + CELLS_IN_ROW + 1];

      const topLeftCell =
        matrix[elem - CELLS_IN_ROW + 1] === undefined
          ? 0
          : matrix[elem - CELLS_IN_ROW + 1];

      const topRightCell =
        matrix[elem - CELLS_IN_ROW - 1] === undefined
          ? 0
          : matrix[elem - CELLS_IN_ROW - 1];

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
        newMatrix[elem] = 0;
      } else if ((sum === 2 || sum === 3) && matrix[elem] === 1) {
        newMatrix[elem] = 1;
      } else if (sum > 3) {
        newMatrix[elem] = 0;
      } else if (sum === 3 && matrix[elem] === 0) {
        newMatrix[elem] = 1;
      }
    }
    setMatrix(newMatrix);
  };

  return (
    <div className={classes.app} onClick={changeMatrix} aria-hidden="true">
      Header
      <div className={classes.grid}>
        {matrix.map((elem, index) => (
          <Cell key={index} cell={elem} />
        ))}
      </div>
    </div>
  );
}

export default App;
