import classNames from 'classnames/bind';
import styles from '../../styles/Cell.module.css';

let cx = classNames.bind(styles);

const Cell = ({ value, index }) => {
	return (
		<span className={styles.cell} onClick={() => console.log(index)}>
			<span
				className={cx('circle', {
					red: value === 0,
					blue: value === 1,
				})}
			></span>
		</span>
	);
};

export default Cell;
