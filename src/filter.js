	const filter = (input = [], words = new Set()) => input.filter(i => words.has(i)).sort();
