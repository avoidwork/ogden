	function ogden (input) {
		if (typeof input !== "string") {
			throw new TypeError("String required");
		}

		const fn = input.length > 0 ? parse : () => [];

		return {
			adjectives: fn(input, adjectives),
			compound: fn(input, compound),
			adverbs: fn(input, adverbs),
			international: fn(input, international),
			nouns: fn(input, nouns),
			prepositions: fn(input, prepositions),
			pronouns: fn(input, pronouns),
			operations: fn(input, operations),
			verbs: fn(input, verbs)
		};
	}

	ogden.version = "{{VERSION}}";
