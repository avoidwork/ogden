function ogden (input = "") {
	let result;

	if (input.length > 0) {
		result = {
			directions: parse(input, directions),
			qualitiesGeneral: parse(input, qualitiesGeneral),
			qualitiesOpposites: parse(input, qualitiesOpposites),
			pronouns: parse(input, pronouns),
			operations: parse(input, operations),
			thingsGeneral: parse(input, thingsGeneral),
			thingsPicturable: parse(input, thingsPicturable)
		};
	} else {
		result = {
			directions: [],
			qualitiesGeneral: [],
			qualitiesOpposites: [],
			pronouns: [],
			operations: [],
			thingsGeneral: [],
			thingsPicturable: []
		};
	}

	return result;
}