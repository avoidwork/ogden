const verbs = [
	"abuse",
	"accept",
	"access",
	"according",
	"account",
	"accuse",
	"achieve",
	"acquire",
	"act",
	"adapt",
	"add",
	"address",
	"adjust",
	"admire",
	"admit",
	"adopt",
	"advance",
	"advanced",
	"advantage",
	"affect",
	"afford",
	"age",
	"agree",
	"air",
	"alarm",
	"allow",
	"amazing",
	"amount",
	"anger",
	"angle",
	"announce",
	"answer",
	"anticipate",
	"apologize",
	"appeal",
	"appear",
	"apply",
	"appreciate",
	"approach",
	"appropriate",
	"approve",
	"are",
	"argue",
	"arise",
	"arm",
	"arrive",
	"ask",
	"assist",
	"associate",
	"assume",
	"assure",
	"attach",
	"attack",
	"attempt",
	"attend",
	"attract",
	"author",
	"average",
	"avoid",
	"award",
	"baby",
	"bag",
	"bake",
	"balance",
	"ball",
	"band",
	"bank",
	"bar",
	"base",
	"bat",
	"battle",
	"be",
	"beach",
	"bear",
	"beat",
	"become",
	"bed",
	"been",
	"begin",
	"behave",
	"being",
	"believe",
	"bell",
	"belong",
	"belt",
	"bench",
	"bend",
	"benefit",
	"bet",
	"bicycle",
	"bid",
	"bike",
	"bill",
	"birth",
	"bit",
	"bite",
	"black",
	"blame",
	"blank",
	"blind",
	"block",
	"blow",
	"blue",
	"board",
	"boat",
	"body",
	"bone",
	"book",
	"boot",
	"border",
	"born",
	"borrow",
	"boss",
	"bother",
	"bottle",
	"bottom",
	"bowl",
	"box",
	"brain",
	"branch",
	"break",
	"breakfast",
	"breast",
	"brick",
	"bridge",
	"bring",
	"brush",
	"buddy",
	"bug",
	"build",
	"building",
	"bunch",
	"burn",
	"bus",
	"busy",
	"button",
	"buy",
	"cable",
	"cake",
	"calculate",
	"calendar",
	"call",
	"camp",
	"campaign",
	"cancel",
	"candle",
	"candy",
	"cap",
	"card",
	"care",
	"career",
	"carpet",
	"carry",
	"case",
	"cash",
	"cat",
	"catch",
	"cause",
	"celebrate",
	"chain",
	"chair",
	"challenge",
	"champion",
	"change",
	"channel",
	"charge",
	"chart",
	"check",
	"chip",
	"choose",
	"claim",
	"class",
	"clerk",
	"click",
	"clock",
	"closed",
	"closet",
	"cloud",
	"club",
	"clue",
	"coach",
	"coast",
	"coat",
	"code",
	"collar",
	"collect",
	"combine",
	"come",
	"comfort",
	"command",
	"comment",
	"commission",
	"commit",
	"communicate",
	"company",
	"compare",
	"compete",
	"complain",
	"complete",
	"complicated",
	"concentrate",
	"concern",
	"concerned",
	"concert",
	"condition",
	"conference",
	"confirm",
	"conflict",
	"connect",
	"consider",
	"consist",
	"consult",
	"contact",
	"contain",
	"content",
	"contest",
	"continue",
	"contribute",
	"convert",
	"convince",
	"cook",
	"copy",
	"correct",
	"cost",
	"count",
	"counter",
	"couple",
	"course",
	"court",
	"cover",
	"cow",
	"crack",
	"craft",
	"crash",
	"cream",
	"create",
	"credit",
	"crew",
	"criticize",
	"cross",
	"cry",
	"culture",
	"cup",
	"curve",
	"cut",
	"cycle",
	"damage",
	"dance",
	"dare",
	"date",
	"deal",
	"debate",
	"decide",
	"delay",
	"deliver",
	"demand",
	"depend",
	"deposit",
	"describe",
	"deserve",
	"design",
	"desire",
	"destroy",
	"detail",
	"detailed",
	"determine",
	"develop",
	"devil",
	"die",
	"diet",
	"differ",
	"dig",
	"dimension",
	"dirty",
	"disagree",
	"disappointed",
	"discipline",
	"discount",
	"discover",
	"discuss",
	"dish",
	"display",
	"distance",
	"distribute",
	"district",
	"divide",
	"doctor",
	"document",
	"does",
	"dog",
	"dot",
	"doubt",
	"draft",
	"drag",
	"draw",
	"dream",
	"drink",
	"drive",
	"drop",
	"dry",
	"dump",
	"dust",
	"earn",
	"earth",
	"ease",
	"eat",
	"edge",
	"effect",
	"egg",
	"emphasize",
	"employ",
	"empty",
	"enable",
	"encourage",
	"encouraging",
	"end",
	"engage",
	"engineer",
	"enhance",
	"enjoy",
	"ensure",
	"enter",
	"entrance",
	"escape",
	"essay",
	"establish",
	"estimate",
	"even",
	"evidence",
	"exact",
	"examine",
	"example",
	"exchange",
	"excuse",
	"exercise",
	"exist",
	"exit",
	"expand",
	"expect",
	"experience",
	"experienced",
	"explain",
	"explore",
	"expose",
	"express",
	"extend",
	"eye",
	"face",
	"factor",
	"fail",
	"fall",
	"fan",
	"farm",
	"father",
	"fault",
	"fear",
	"feature",
	"fee",
	"feed",
	"feel",
	"field",
	"fight",
	"figure",
	"file",
	"fill",
	"film",
	"finance",
	"find",
	"finger",
	"finish",
	"fire",
	"firm",
	"fish",
	"fit",
	"fix",
	"fixed",
	"floor",
	"flow",
	"flower",
	"fly",
	"focus",
	"fold",
	"follow",
	"foot",
	"force",
	"forget",
	"form",
	"frame",
	"frequent",
	"friend",
	"fruit",
	"fuel",
	"function",
	"gain",
	"gap",
	"garage",
	"garden",
	"gas",
	"gather",
	"gear",
	"generate",
	"get",
	"gift",
	"give",
	"glove",
	"go",
	"golf",
	"grab",
	"grade",
	"grandfather",
	"grass",
	"ground",
	"group",
	"grow",
	"guarantee",
	"guard",
	"guess",
	"guide",
	"guy",
	"habit",
	"hand",
	"handle",
	"hang",
	"happen",
	"harm",
	"has",
	"hate",
	"have",
	"hear",
	"heat",
	"help",
	"hesitate",
	"hide",
	"highlight",
	"hire",
	"hit",
	"hold",
	"hole",
	"hook",
	"hope",
	"horse",
	"host",
	"hunt",
	"hurry",
	"hurt",
	"husband",
	"ice",
	"identify",
	"ignore",
	"illustrate",
	"image",
	"imagine",
	"impact",
	"implement",
	"imply",
	"impress",
	"improve",
	"include",
	"incorporate",
	"increase",
	"indicate",
	"influence",
	"inform",
	"insist",
	"install",
	"intend",
	"interest",
	"interested",
	"interview",
	"introduce",
	"invest",
	"investigate",
	"invite",
	"involve",
	"involved",
	"iron",
	"is",
	"island",
	"issue",
	"jacket",
	"job",
	"join",
	"joke",
	"judge",
	"juice",
	"jump",
	"jury",
	"justify",
	"keep",
	"kick",
	"kid",
	"kill",
	"kiss",
	"knee",
	"knife",
	"know",
	"lack",
	"land",
	"landscape",
	"laugh",
	"lawyer",
	"lay",
	"layer",
	"lead",
	"league",
	"learn",
	"leave",
	"lecture",
	"leg",
	"lesson",
	"let",
	"letter",
	"lie",
	"lift",
	"light",
	"like",
	"limit",
	"limited",
	"line",
	"link",
	"lip",
	"list",
	"listen",
	"live",
	"load",
	"loan",
	"lock",
	"log",
	"look",
	"loose",
	"lose",
	"lost",
	"luck",
	"lunch",
	"machine",
	"mail",
	"maintain",
	"make",
	"man",
	"manage",
	"manufacturing",
	"march",
	"mark",
	"market",
	"married",
	"marry",
	"match",
	"mate",
	"matter",
	"mean",
	"meet",
	"mention",
	"mess",
	"metal",
	"milk",
	"mind",
	"mirror",
	"miss",
	"mistake",
	"mix",
	"mixed",
	"model",
	"monitor",
	"mortgage",
	"mouse",
	"mouth",
	"move",
	"muscle",
	"must",
	"nail",
	"name",
	"narrow",
	"neck",
	"need",
	"negotiate",
	"nerve",
	"net",
	"network",
	"noise",
	"nose",
	"note",
	"notice",
	"number",
	"nurse",
	"object",
	"obtain",
	"occasion",
	"occur",
	"offer",
	"officer",
	"oil",
	"open",
	"operate",
	"option",
	"order",
	"organize",
	"organized",
	"ought",
	"overcome",
	"owe",
	"own",
	"pace",
	"pack",
	"package",
	"page",
	"pain",
	"paint",
	"pair",
	"panic",
	"parent",
	"park",
	"part",
	"participate",
	"partner",
	"pass",
	"passage",
	"pattern",
	"pause",
	"pay",
	"peak",
	"pen",
	"pension",
	"perfect",
	"perform",
	"permit",
	"persuade",
	"phase",
	"phrase",
	"pick",
	"picture",
	"piece",
	"pin",
	"pipe",
	"pitch",
	"place",
	"plan",
	"plant",
	"plate",
	"play",
	"please",
	"pleased",
	"pleasure",
	"point",
	"pool",
	"pop",
	"position",
	"possess",
	"post",
	"pot",
	"pound",
	"pour",
	"practice",
	"pray",
	"prefer",
	"prepare",
	"press",
	"pressure",
	"pretend",
	"prevent",
	"price",
	"pride",
	"priest",
	"print",
	"process",
	"produce",
	"profile",
	"profit",
	"program",
	"progress",
	"project",
	"promise",
	"prompt",
	"propose",
	"proposed",
	"protect",
	"prove",
	"provide",
	"provided",
	"pull",
	"punch",
	"purchase",
	"purpose",
	"pursue",
	"push",
	"put",
	"qualify",
	"quarter",
	"question",
	"quit",
	"quote",
	"race",
	"radio",
	"rain",
	"raise",
	"range",
	"rate",
	"reach",
	"react",
	"read",
	"ready",
	"realize",
	"reason",
	"receive",
	"recognize",
	"recommend",
	"record",
	"recover",
	"reduce",
	"refer",
	"reference",
	"reflect",
	"refuse",
	"register",
	"regret",
	"relate",
	"related",
	"relax",
	"release",
	"relieve",
	"rely",
	"remain",
	"remaining",
	"remember",
	"remind",
	"remove",
	"rent",
	"repair",
	"repeat",
	"replace",
	"reply",
	"report",
	"represent",
	"request",
	"require",
	"research",
	"reserve",
	"resist",
	"resolve",
	"resort",
	"respect",
	"respond",
	"rest",
	"result",
	"retain",
	"retire",
	"return",
	"reveal",
	"review",
	"reward",
	"rice",
	"rid",
	"ride",
	"ring",
	"rip",
	"rise",
	"risk",
	"rock",
	"roll",
	"roof",
	"room",
	"rope",
	"row",
	"rub",
	"ruin",
	"rule",
	"run",
	"rush",
	"sail",
	"salary",
	"sand",
	"sandwich",
	"save",
	"say",
	"scale",
	"schedule",
	"scheme",
	"school",
	"score",
	"scratch",
	"screen",
	"screw",
	"script",
	"search",
	"season",
	"seat",
	"section",
	"secure",
	"see",
	"seek",
	"seem",
	"select",
	"sell",
	"send",
	"sense",
	"sentence",
	"separate",
	"serve",
	"service",
	"set",
	"settle",
	"sex",
	"shake",
	"shall",
	"shame",
	"shape",
	"share",
	"sharp",
	"shelter",
	"shift",
	"shine",
	"ship",
	"shock",
	"shoe",
	"shoot",
	"shop",
	"shoulder",
	"show",
	"shower",
	"shut",
	"side",
	"sign",
	"sing",
	"sink",
	"sit",
	"site",
	"size",
	"skin",
	"skirt",
	"sky",
	"sleep",
	"slice",
	"slide",
	"slight",
	"slip",
	"smart",
	"smell",
	"smile",
	"smoke",
	"snow",
	"sock",
	"soil",
	"solve",
	"sort",
	"sound",
	"source",
	"space",
	"speak",
	"specify",
	"speed",
	"spell",
	"spend",
	"spirit",
	"spite",
	"split",
	"sport",
	"spot",
	"spray",
	"spread",
	"spring",
	"stable",
	"staff",
	"stage",
	"stand",
	"star",
	"start",
	"state",
	"station",
	"stay",
	"steal",
	"step",
	"stick",
	"stomach",
	"stop",
	"store",
	"storm",
	"strain",
	"stress",
	"stretch",
	"strike",
	"string",
	"strip",
	"stroke",
	"structure",
	"struggle",
	"study",
	"stuff",
	"style",
	"submit",
	"succeed",
	"suck",
	"suffer",
	"sugar",
	"suggest",
	"suit",
	"summer",
	"sun",
	"supply",
	"support",
	"suppose",
	"surprise",
	"surprised",
	"surround",
	"survey",
	"survive",
	"suspect",
	"swim",
	"swing",
	"switch",
	"table",
	"tackle",
	"take",
	"talk",
	"tank",
	"tap",
	"target",
	"task",
	"taste",
	"tax",
	"teach",
	"team",
	"tear",
	"telephone",
	"tell",
	"tend",
	"term",
	"test",
	"text",
	"thank",
	"theme",
	"think",
	"throw",
	"ticket",
	"tie",
	"till",
	"tip",
	"tired",
	"title",
	"toe",
	"tone",
	"tool",
	"touch",
	"tour",
	"towel",
	"tower",
	"track",
	"trade",
	"traffic",
	"train",
	"transition",
	"translate",
	"trash",
	"travel",
	"treat",
	"tree",
	"trip",
	"trouble",
	"truck",
	"trust",
	"try",
	"tune",
	"turn",
	"twist",
	"type",
	"understand",
	"upset",
	"use",
	"vacation",
	"value",
	"vary",
	"view",
	"visit",
	"voice",
	"wait",
	"wake",
	"walk",
	"wall",
	"want",
	"war",
	"warm",
	"warn",
	"was",
	"wash",
	"waste",
	"watch",
	"water",
	"wave",
	"wear",
	"weather",
	"web",
	"weekend",
	"weigh",
	"weight",
	"well",
	"were",
	"wheel",
	"win",
	"wind",
	"window",
	"wing",
	"wise",
	"wish",
	"witness",
	"wonder",
	"word",
	"worried",
	"worry",
	"would",
	"wrap",
	"write",
	"yard",
	"zone"
];
