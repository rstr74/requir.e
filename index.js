var fs = require("fs");
(function(scope) {
	var Requir_e = function(_scope) {
		this._scope = _scope;
		this._scope.requir_e = function(code) {
			return code;
		}
		this.basedir = process.cwd();
	}
	Requir_e.prototype = {
		eRoot: function(root) {
			this.basedir = process.cwd() + "/" + root;
		},
		e:function(s) {
			var path = s.replace(/\./g, "/");
			var basedir = this.basedir;
			var code = fs.readFileSync(basedir + "/" + path + ".js", "utf8");
			this._scope.requir_e(eval(code));
		}
	};
	requir = new Requir_e(arguments.callee);
})(module.exports);