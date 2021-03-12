import classes from './styles.module.css';

interface CellProps {
  cell: number;
}

function Cell({ cell }: CellProps) {
  const color = cell ? 'black' : 'white';
  return <div className={`${classes.cell} ${classes[color]}`} />;
}

export default Cell;
