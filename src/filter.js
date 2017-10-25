	const filter = (input = [], words = new Set()) => input.filter(i => words.has(i)).sort().reduce((a, b) => {
		if (a.includes(b) === false) {
			a.push(b);
		}

		return a;
	}, []);
