function parse (input, words = []) {
	let seen = new Set(),
		result = input.toLowerCase().match(new RegExp("\\b" + words.join("|") + "\\b", "ig")) || [];

	return result.reduce((a, b) => {
		if (!seen.has(b)) {
			seen.add(b);
			a.push(b);
		}

		return a;
	}, []).sort();
}
