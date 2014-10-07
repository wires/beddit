# Commandline tool to work with Beddit API

Install deps

	npm i

Run it

	node beddit.js --user=you@example.com --pass=s3cr3t

## Sample output

Here some sample output:

	-
	  date:    2014-10-02
	  score:   65
	  latency: -8
	  tags:    long_sleep_latency not_enough_sleep
	-
	  date:    2014-10-03
	  score:   60
	  latency: 5
	  tags:    good_sleep_latency not_enough_sleep
	-
	  date:    2014-10-04
	  score:   64
	  latency: -8
	  tags:    long_sleep_latency not_enough_sleep

It get's all data from the API, I'm just limiting it to have a quick
overview. 

(yeah, I never get enough sleep, it's true)
