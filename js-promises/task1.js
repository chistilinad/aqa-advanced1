function printWithDelay(text, ms) {
	setTimeout(() => {
		console.log(text);
	}, ms);
}

printWithDelay('Третій', 3000);
printWithDelay('Перший', 1000);
printWithDelay('Другий', 2000);
