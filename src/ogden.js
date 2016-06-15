function ogden (input = "") {
	let result;

	if (input.length > 0) {
		result = {
			operations: input.match(new RegExp("\\s*?(" + operations.join("|") + ")\\s*?", "ig")) || [],
			thingsGeneral: input.match(new RegExp(thingsGeneral.join("|")), "ig") || [],
			thingsPicturable: input.match(new RegExp(thingsPicturable.join("|")), "ig") || [],
			qualitiesGeneral: input.match(new RegExp(qualitiesGeneral.join("|")), "ig") || [],
			qualitiesOpposites: input.match(new RegExp(qualitiesOpposites.join("|")), "ig") || []
		};
	} else {
		result = {
			operations: [],
			thingsGeneral: [],
			thingsPicturable: [],
			qualitiesGeneral: [],
			qualitiesOpposites: []
		};
	}

	return result;
}