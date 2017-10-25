	function ogden (input) {
		if (typeof input !== "string") {
			throw new TypeError("String required");
		}

		const words = input.split(/\s/),
			fn = words.length > 0 ? filter : () => [];

		return {
			adjectives: fn(words, adjectives),
			compound: fn(words, compound),
			adverbs: fn(words, adverbs),
			international: fn(words, international),
			nouns: fn(words, nouns),
			prepositions: fn(words, prepositions),
			pronouns: fn(words, pronouns),
			operations: fn(words, operations),
			verbs: fn(words, verbs)
		};
	}

	ogden.version = "{{VERSION}}";
