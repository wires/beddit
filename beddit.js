var Beddit = require('beddit-api');
var argv = require('minimist')(process.argv.slice(2));
var prettyjson = require("prettyjson");
var Table = require('cli-table');

// output table
var table = new Table({ head: ['Date', 'Sleep score', 'Sleep latency', 'Tags'] });

// just getting started
var beddit = new Beddit();

beddit
    .login(argv.user, argv.pass)
    .then(function(auth) {
	beddit
	    .sleep()
	    .then(function(sleep_data) {

		// build table
		sleep_data.forEach(function(record){
		    table.push([
			record.date,
			record.properties.score_amount_of_sleep,
			record.properties.score_sleep_latency,
			record.tags.join(', ').replace(/_/g, ' ')
		    ]);
		});

		// render table
		console.log(table.toString());
	    });
    })
    .fail(function(err){
	console.error(err);
    });
