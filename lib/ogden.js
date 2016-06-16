/**
 * Basic English tokenizer
 *
 * @author Jason Mulligan <jason.mulligan@avoidwork.com>
 * @copyright 2016
 * @license BSD-3-Clause
 * @link http://avoidwork.github.io/ogden
 * @version 1.0.2
 */
"use strict";

(function (global) {

	var adjectives = ["be", "do", "have", "come", "go", "give", "take", "see", "seem", "send", "keep", "make", "say", "let", "get", "put"];

	var compound = ["afterthought", "airplane", "another", "anybody", "anyhow", "anyone", "anything", "anywhereFbackbone", "backspace", "backwoods", "become", "bedroom", "beeswax", "birthday", "birthright", "blackberry", "blackbird", "blackboard", "bloodvessel", "bluebell", "bookkeeper", "brushwood", "buttercup", "cardboard", "carefree", "caretaker", "clockwork", "commonsense", "copyright", "cupboard", "daylight", "downfall", "ear-ring", "earthwork", "evergreen", "everybody", "everyday", "everyone", "everything", "everywhere", "eyeball", "fatherland", "fingerprint", "firearm", "fire-engine", "firefly", "fireman", "fireplace", "firework", "first-rate", "football", "footlights", "footman", "footnote", "footprint", "footstep", "gasworks", "goldfish", "goodlooking", "gunboat", "gun-carriage", "gunmetal", "gunpowder", "handbook", "handwriting", "headdress", "headland", "headstone", "headway", "hereafter", "herewith", "highlands", "highway", "himself", "horseplay", "horsepower", "hourglass", "houseboat", "housekeeper", "however", "inasmuch", "income", "indoors", "inland", "inlet", "input", "inside", "instep", "into", "itself", "keyboard", "landmark", "landslip", "lighthouse", "looking-glass", "manhole", "myself", "network", "newspaper", "nobody", "nothing", "nowhere", "offspring", "oncoming", "oneself", "oneline", "onlooker", "onto", "outburst", "outcome", "outcry", "outdoor", "outgoing", "outhouse", "outlaw", "outlet", "outline", "outlook", "output", "outside", "outskirts", "outstretched", "overacting", "overall overbalancing", "overcoat", "overcome", "overdo", "overdressed", "overfull", "overhanging", "overhead", "overload", "overbearing", "overland", "overleaf", "overseas", "overseer", "overshoe", "overstatement", "overtake", "overtaxed", "overtime", "overturned", "overuse", "overvalued", "overweight", "overworking", "pincushion", "plaything", "policeman", "postman", "postmark", "postmaster", "postoffice", "runaway", "seaman", "secondhand", "shorthand", "shutdown", "sideboard", "sidewalk", "somebody", "someday", "somehow", "someone", "something", "sometime", "somewhat", "somewhere", "startup", "suchlike", "sunburn", "sunlight", "sunshade", "sweetheart", "today", "tonight", "tradesman", "underclothing", "undercooked", "undergo", "undergrowth", "undermined", "undersigned", "undersized", "understatement", "undertake", "undervalued", "undo", "update", "upkeep", "uplift", "upon", "upright", "uptake", "viewpoint", "waterfall", "weekend", "well-being", "well-off", "whatever", "whenever", "whereas", "whereby", "wherever", "whichever", "whitewash", "whoever", "windpipe", "within", "without", "woodwork", "workhouse", "x-ray", "yearbook", "yourself", "zookeeper"];

	var directions = ["at", "with", "from", "against", "to", "across", "after", "among", "before", "about", "through", "down", "between", "up", "under", "on", "over", "off", "by", "in", "out"];

	var international = ["alcohol", "Algebra", "aluminium", "aluminum", "ammonia", "anaesthetic", "anesthetic", "April", "Arithmetic", "asbestos", "August", "automobile", "ballet", "bank", "bar", "beef", "beer", "Biology", "bomb", "cafe", "calendar", "centi-", "champagne", "chauffeur", "chemist", "Chemistry", "check", "chocolate", "cigarette", "circus", "citron", "club", "coffee", "cocktail", "cognac", "College", "colony", "dance", "December", "degree", "dynamite", "eight", "electricity", "eleven", "Embassy", "Empire", "encyclopedia", "engineer", "February", "fifteen", "fifth", "fifty", "five", "four", "fourteen", "fourth", "forty", "Friday", "gas", "Geography", "Geology", "Geometry", "gram", "glycerin", "half", "hotel", "hundred", "hyena", "hygiene", "hysteria", "Imperial", "influenza", "international", "January", "jazz", "July", "June", "kilo-", "King", "latitude", "lava", "litre", "liter", "liqueur", "longitude", "macaroni", "madam", "magnetic", "malaria", "March", "Mathematics", "May", "metre", "meter", "micro-", "microscope", "milli-", "million", "minute", "Monday", "Museum", "neutron", "nickel", "nicotine", "nine", "November", "October", "olive", "once", "omelet", "one", "opera", "opium", "orchestra", "organism", "pyjamas", "pajamas", "paraffin", "paradise", "park", "passport", "patent", "penguin", "petroleum", "phonograph", "Physics", "Physiology", "piano", "platinum", "police", "post", "President", "Prince", "Princess", "program", "propaganda", "Psychology", "pyramid", "quarter", "Queen", "quiz", "radio", "radium", "referendum", "restaurant", "rheumatism", "Royal", "rum", "salad", "sardine", "Saturday", "second", "September", "seven", "sir", "six", "sixteen", "sport", "Sunday• Sex", "taxi", "tea", "telegram", "telephone", "ten", "terrace", "theatre", "thermometer", "third", "thirteen", "thirty", "thousand", "three", "Thursday", "toast", "tobacco", "torpedo", "Tuesday", "turbine", "twenty-one", "twelve", "twenty", "twice", "two", "university", "universal", "vanilla", "violin", "visa", "vitamin", "vodka", "volt", "Wednesday", "whisky", "you", "zebra", "zinc", "Zoology"];

	var operations = ["come", "get", "give", "go", "keep", "let", "make", "put", "seem", "take", "be", "do", "have", "say", "see", "send", "may", "will", "about", "across", "after", "against", "among", "at", "before", "between", "by", "down", "from", "in", "off", "on", "over", "through", "to", "under", "up", "with", "as", "for", "of", "till", "than", "a", "the", "all", "any", "every", "little", "much", "no", "other", "some", "such", "that", "this", "I", "he", "you", "who", "and", "because", "but", "or", "if", "though", "while", "how", "when", "where", "why", "again", "ever", "far", "forward", "here", "near", "now", "out", "still", "then", "there", "together", "well", "almost", "enough", "even", "not", "only", "quite", "so", "very", "tomorrow", "yesterday", "north", "south", "east", "west", "please", "yes"];

	var qualitiesGeneral = ["able", "acid", "angry", "automatic", "beautiful", "black", "boiling", "bright", "broken", "brown", "cheap", "chemical", "chief", "clean", "clear", "common", "complex", "conscious", "cut", "deep", "dependent", "early", "elastic", "electric", "equal", "fat", "fertile", "first", "fixed", "flat", "free", "frequent", "full", "general", "good", "great", "grey/gray", "hanging", "happy", "hard", "healthy", "high", "hollow", "important", "kind", "like", "living", "long", "male", "married", "material", "medical", "military", "natural", "necessary", "new", "normal", "open", "parallel", "past", "physical", "political", "poor", "possible", "present", "private", "probable", "quick", "quiet", "ready", "red", "regular", "responsible", "right", "round", "same", "second", "separate", "serious", "sharp", "smooth", "sticky", "stiff", "straight", "strong", "sudden", "sweet", "tall", "thick", "tight", "tired", "true", "violent", "waiting", "warm", "wet", "wide", "wise", "yellow", "young"];

	var qualitiesOpposites = ["awake", "bad", "bent", "bitter", "blue", "certain", "cold", "complete", "cruel", "dark", "dead", "dear", "delicate", "different", "dirty", "dry", "false", "feeble", "female", "foolish", "future", "green", "ill", "last", "late", "left", "loose", "loud", "low", "mixed", "narrow", "old", "opposite", "public", "rough", "sad", "safe", "secret", "short", "shut", "simple", "slow", "small", "soft", "solid", "special", "strange", "thin", "white", "wrong"];

	var pronouns = ["i", "you", "he", "she", "it", "we", "you", "they", "me", "we", "us", "you", "he", "she", "it", "him", "her", "they", "them"];

	var thingsGeneral = ["account", "act", "addition", "adjustment", "advertisement", "agreement", "air", "amount", "amusement", "animal", "answer", "apparatus", "approval", "argument", "art", "attack", "attempt", "attention", "attraction", "authority", "back", "balance", "base", "behavior", "belief", "birth", "bit", "bite", "blood", "blow", "body", "brass", "bread", "breath", "brother", "building", "burn", "burst", "business", "butter", "canvas", "care", "cause", "chalk", "chance", "change", "cloth", "coal", "color", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cork", "cotton", "cough", "country", "cover", "crack", "credit", "crime", "crush", "cry", "current", "curve", "damage", "danger", "daughter", "day", "death", "debt", "decision", "degree", "design", "desire", "destruction", "detail", "development", "digestion", "direction", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "doubt", "drink", "driving", "dust", "earth", "edge", "education", "effect", "end", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "fact", "fall", "family", "father", "fear", "feeling", "fiction", "field", "fight", "fire", "flame", "flight", "flower", "fold", "food", "force", "form", "friend", "front", "fruit", "glass", "gold", "government", "grain", "grass", "grip", "group", "growth", "guide", "harbor", "harmony", "hate", "hearing", "heat", "help", "history", "hole", "hope", "hour", "humor", "ice", "idea", "impulse", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "jelly", "join", "journey", "judge", "jump", "kick", "kiss", "knowledge", "land", "language", "laugh", "law", "lead", "learning", "leather", "letter", "level", "lift", "light", "limit", "linen", "liquid", "list", "look", "loss", "love", "machine", "man", "manager", "mark", "market", "mass", "meal", "measure", "meat", "meeting", "memory", "metal", "middle", "milk", "mind", "mine", "minute", "mist", "money", "month", "morning", "mother", "motion", "mountain", "move", "music", "name", "nation", "need", "news", "night", "noise", "note", "number", "observation", "offer", "oil", "operation", "opinion", "order", "organization", "ornament", "owner", "page", "pain", "paint", "paper", "part", "paste", "payment", "peace", "person", "place", "plant", "play", "pleasure", "point", "poison", "polish", "porter", "position", "powder", "power", "price", "print", "process", "produce", "profit", "property", "prose", "protest", "pull", "punishment", "purpose", "push", "quality", "question", "rain", "range", "rate", "ray", "reaction", "reading", "reason", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest", "reward", "rhythm", "rice", "river", "road", "roll", "room", "rub", "rule", "run", "salt", "sand", "scale", "science", "sea", "seat", "secretary", "selection", "self", "sense", "servant", "sex", "shade", "shake", "shame", "shock", "side", "sign", "silk", "silver", "sister", "size", "sky", "sleep", "slip", "slope", "smash", "smell", "smile", "smoke", "sneeze", "snow", "soap", "society", "son", "song", "sort", "sound", "soup", "space", "stage", "start", "statement", "steam", "steel", "step", "stitch", "stone", "stop", "story", "stretch", "structure", "substance", "sugar", "suggestion", "summer", "support", "surprise", "swim", "system", "talk", "taste", "tax", "teaching", "tendency", "test", "theory", "thing", "thought", "thunder", "time", "tin", "top", "touch", "trade", "transport", "trick", "trouble", "turn", "twist", "unit", "use", "value", "verse", "vessel", "view", "voice", "walk", "war", "wash", "waste", "water", "wave", "wax", "way", "weather", "week", "weight", "wind", "wine", "winter", "woman", "wood", "wool", "word", "work", "wound", "writing", "year"];

	var thingsPicturable = ["angle", "ant", "apple", "arch", "arm", "army", "baby", "bag", "ball", "band", "basin", "basket", "bath", "bed", "bee", "bell", "berry", "bird", "blade", "board", "boat", "bone", "book", "boot", "bottle", "box", "boy", "brain", "brake", "branch", "brick", "bridge", "brush", "bucket", "bulb", "button", "cake", "camera", "card", "cart", "carriage", "cat", "chain", "cheese", "chest", "chin", "church", "circle", "clock", "cloud", "coat", "collar", "comb", "cord", "cow", "cup", "curtain", "cushion", "dog", "door", "drain", "drawer", "dress", "drop", "ear", "egg", "engine", "eye", "face", "farm", "feather", "finger", "fish", "flag", "floor", "fly", "foot", "fork", "fowl", "frame", "garden", "girl", "glove", "goat", "gun", "hair", "hammer", "hand", "hat", "head", "heart", "hook", "horn", "horse", "hospital", "house", "island", "jewel", "kettle", "key", "knee", "knife", "knot", "leaf", "leg", "library", "line", "lip", "lock", "map", "match", "monkey", "moon", "mouth", "muscle", "nail", "neck", "needle", "nerve", "net", "nose", "nut", "office", "orange", "oven", "parcel", "pen", "pencil", "picture", "pig", "pin", "pipe", "plane", "plate", "plough", "plow", "pocket", "pot", "potato", "prison", "pump", "rail", "rat", "receipt", "ring", "rod", "roof", "root", "sail", "school", "scissors", "screw", "seed", "sheep", "shelf", "ship", "shirt", "shoe", "skin", "skirt", "snake", "sock", "spade", "sponge", "spoon", "spring", "square", "stamp", "star", "station", "stem", "stick", "stocking", "stomach", "store", "street", "sun", "table", "tail", "thread", "throat", "thumb", "ticket", "toe", "tongue", "tooth", "town", "train", "tray", "tree", "trousers", "umbrella", "wall", "watch", "wheel", "whip", "whistle", "window", "wing", "wire", "worm"];

	var verbs = ["be", "do", "have", "come", "go", "give", "take", "see", "seem", "send", "keep", "make", "say", "let", "get", "put"];

	function parse(input, words) {
		var seen = new Set(),
		    result = input.toLowerCase().match(new RegExp("\\b" + words.join("|") + "\\b", "ig")) || [];

		return result.reduce(function (a, b) {
			if (!seen.has(b)) {
				seen.add(b);
				a.push(b);
			}

			return a;
		}, []).sort();
	}

	function ogden(input) {
		if (typeof input !== "string") {
			throw new TypeError("String required");
		}

		var fn = input.length > 0 ? parse : function () {
			return [];
		};

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

	ogden.version = "1.0.2";

	// Node, AMD & window supported
	if (typeof exports !== "undefined") {
		module.exports = ogden;
	} else if (typeof define === "function" && define.amd) {
		define(function () {
			return ogden;
		});
	} else {
		global.ogden = ogden;
	}
})(typeof window !== "undefined" ? window : global);
