	// Node, AMD & window supported
	if (typeof exports !== "undefined") {
		module.exports = ogden;
	} else if (typeof define === "function" && define.amd !== void 0) {
		define(() => ogden);
	} else {
		global.ogden = ogden;
	}
}(typeof window !== "undefined" ? window : global));
