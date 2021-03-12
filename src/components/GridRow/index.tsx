import Cell from '../Cell';
import classes from './style.module.css';

import { GridRowType } from '../../types';

interface GridRowProps {
  list: GridRowType;
}

function GridRow({ list }: GridRowProps) {
  return (
    <div className={classes.grid}>
      {list.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </div>
  );
}

export default GridRow;
