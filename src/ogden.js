function ogden (input) {
	if (typeof input !== "string") {
		throw new TypeError("String required");
	}

	let fn = input.length > 0 ? parse : () => [];

	return {
		adjectives: fn(input, adjectives),
		compound: fn(input, compound),
		directions: fn(input, directions),
		international: fn(input, international),
		qualitiesGeneral: fn(input, qualitiesGeneral),
		qualitiesOpposites: fn(input, qualitiesOpposites),
		pronouns: fn(input, pronouns),
		operations: fn(input, operations),
		thingsGeneral: fn(input, thingsGeneral),
		thingsPicturable: fn(input, thingsPicturable),
		verbs: fn(input, verbs)
	};
}

ogden.version = "{{VERSION}}";
