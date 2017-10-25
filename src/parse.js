	const parse = (input, words) => input.split(/\s/).filter(i => words.has(i)).sort();
