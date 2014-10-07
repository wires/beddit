# Commandline tool to work with Beddit API

Install deps

	npm i

Run it

	node beddit.js --user=you@example.com --pass=s3cr3t

## Sample output

Here some sample output:

┌────────────┬─────────────┬───────────────┬───────────────────────────────────────────────┐
│ Date       │ Sleep score │ Sleep latency │ Tags                                          │
├────────────┼─────────────┼───────────────┼───────────────────────────────────────────────┤
│ 2014-10-02 │ 65          │ -8            │ long sleep latency, not enough sleep          │
├────────────┼─────────────┼───────────────┼───────────────────────────────────────────────┤
│ 2014-10-03 │ 60          │ 5             │ good sleep latency, not enough sleep          │
├────────────┼─────────────┼───────────────┼───────────────────────────────────────────────┤
│ 2014-10-04 │ 64          │ -8            │ long sleep latency, not enough sleep          │
├────────────┼─────────────┼───────────────┼───────────────────────────────────────────────┤
│ 2014-10-05 │ 89          │ -3            │ long sleep latency, not enough sleep, snoring │
├────────────┼─────────────┼───────────────┼───────────────────────────────────────────────┤
│ 2014-10-06 │ 6           │ -8            │ long sleep latency, not enough sleep          │
├────────────┼─────────────┼───────────────┼───────────────────────────────────────────────┤
│ 2014-10-07 │ 100         │ 5             │ snoring, too much sleep                       │
└────────────┴─────────────┴───────────────┴───────────────────────────────────────────────┘

It get's all data from the API, I'm just limiting it to have a quick
overview. 

(yeah, I never get enough sleep, it's true)
