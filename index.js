var fs = require("fs");
(function(scope) {
	var Requir_e = function(_scope) {
		this._scope = _scope;
		this.basedir = process.cwd();
	}
	Requir_e.prototype = {
		eRoot: function(root) {
			this.basedir = process.cwd() + "/" + root;
		},
		e: function(s) {
			var path = s.replace(/\./g, "/");
			var basedir = this.basedir;
			console.log(basedir + "/" + path + ".js");
			var code = fs.readFileSync(basedir + "/" + path + ".js", "utf8");
			eval.call(this._scope, code);
		}
	};
	requir = new Requir_e(scope);
})(module.exports);