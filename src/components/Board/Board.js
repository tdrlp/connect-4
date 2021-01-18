import Row from './Row';
import styles from '../../styles/Board.module.css';

const Board = ({ board }) => {
	return (
		<div className={styles.board}>
			{board.map((row, index) => (
				<Row key={index} row={row} />
			))}
		</div>
	);
};

export default Board;
