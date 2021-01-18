import Cell from './Cell';
import styles from '../../styles/Row.module.css';

const Row = ({ row }) => {
	return (
		<div className={styles.row}>
			{row.map((value, index) => (
				<Cell key={index} value={value} index={index} />
			))}
		</div>
	);
};

export default Row;
