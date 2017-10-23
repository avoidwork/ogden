	function parse (input, words) {
		return input.split(/\s/).filter(i => words.has(i)).sort();
	}
