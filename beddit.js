var Beddit = require('beddit-api');
var argv = require('minimist')(process.argv.slice(2));
var prettyjson = require("prettyjson");
var table = require('cli-table');

// just getting started
var beddit = new Beddit();

beddit
    .login(argv.user, argv.pass)
    .then(function(auth) {
	beddit
	    .sleep()
	    .then(function(sleep_data) {
		var s = sleep_data.map(function(record){
		    return {
			date: record.date,
			score: record.properties.score_amount_of_sleep,
			latency: record.properties.score_sleep_latency,
			tags: record.tags.join(' ')
		    }
		});

		console.log(prettyjson.render(s));
	    });
    })
    .fail(function(err){
	console.error(err);
    });
