
/**
 * Module dependencies
 */

var 	express  = require('express'),
	bodyParser   = require('body-parser'),
	routes       = require('./routes'),
	api          = require('./routes/api'),
	ExpressBrute = require('express-brute');
	http         = require('http'),
	path         = require('path'),
	cookieParser = require('cookie-parser'),
	csrf         = require('csurf'),
	prettyHrtime = require('pretty-hrtime'),
	acc 		 = require('./public/js/accounts.js'),
	store        = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production 
	bruteforce   = new ExpressBrute(store);

var app            = module.exports = express();
var parseForm      = bodyParser.urlencoded({ extended: false });
var csrfProtection = csrf({ cookie: true });


/**
 * Configuration
 */

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', csrfProtection, routes.partials);

// API
app.post('/api/brute-force', bruteforce.prevent, api.brute);
app.post('/api/csrf', parseForm, csrfProtection, api.csrf);
app.post('/api/time', api.time);
app.post('/api/redosTime', api.redosTime);
app.post('/api/ssji', api.ssji);


// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
