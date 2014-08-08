(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	}
	else if (typeof exports === 'object') {
		module.exports = factory();
	}
	else {
		root.Widget = factory();
	}
}(this, function() {

	function Widget() {
	}

	Widget.prototype = {};

	return Widget;

}));