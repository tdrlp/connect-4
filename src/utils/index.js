const flipBoardHorizontally = (board) => {
	const newBoard = [];
	board.forEach((col) => {
		col.forEach(
			(row, index) =>
				(newBoard[index] = newBoard[index]
					? [...newBoard[index], row]
					: [row])
		);
	});
	return newBoard;
};

exports.flipBoardHorizontally = flipBoardHorizontally;
