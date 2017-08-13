var express    = require('express');

var models     = require("./models");
var controller = require("./controller");
var route     = require("./route");

var app = express();


/*app.set('view engine', 'ejs');
app.set('views', './views');*/

models(app).init();
controller(app).init();
route(app).init();


app.use(express.static('public'));

app.listen("8000");
