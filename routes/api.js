/*
 * Serve JSON to our AngularJS client
 */
function fibonaccy(num) {
	if (num <= 2) return 1;
	return fibonaccy(num-1) + fibonaccy(num-2);
}

module.exports = {
	
	brute: function (req, res) {
		res.json({ data: 'Success!' });
	},

	time: function (req, res) {
		var start = process.hrtime();
		var num = fibonaccy(req.body.num);
		var words = prettyHrtime(process.hrtime(start), {verbose:true});
		res.json( {num: num,  time: words} );
	},

	csrf: function (req, res) {
		res.json({ data: 'Success!'} );
	},

	redosTime: function (req, res) {
		var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var email = req.body.text;
		var start = process.hrtime();
		var valid = emailRegex.test(email);
		console.log(valid);
		var words = prettyHrtime(process.hrtime(start), {verbose:true});
		res.json( {time: words, valid: valid} );
	},

	ssji: function (req, res) {
		var text = eval(req.body.text);
		res.send(text);
	}
};
