'use strict';

const appPort = process.env.PORT || 3000;
const appEnv = process.env.NODE_ENV || 'production';

if (appEnv !== 'development') {
	require('newrelic');

	if(process.env.NODETIME_ACCOUNT_KEY) {
		require('nodetime').profile({
			accountKey: process.env.NODETIME_ACCOUNT_KEY,
		});
	}
}


// require("babel/register");


GLOBAL.appStartTime = Date.now();


let express = require('express');
let app = require('./config/express')(express);

require('./routes')(app, express);



app.listen(appPort, function() {
	console.log('');
	console.log('**************************************************');
	console.log('%d Express server started', GLOBAL.appStartTime);
	console.log('%d Port: %d', GLOBAL.appStartTime, appPort);
	console.log('%d Mode: %s', GLOBAL.appStartTime, appEnv);
	console.log('**************************************************');
	console.log('');
});
