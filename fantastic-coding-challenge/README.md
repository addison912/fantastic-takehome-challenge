# fantastic

A new fantastic challenger appears! This is a challenge for the development team to assess back-end, front-end, and automation skills.

You are one of the first candidates to attempt this modified challenge. 

PLEASE do not feel pressure to accomplish all/any of the stretch objectives. If the main requirements take longer than two or four hours that should be a good stopping point.
Feel free to exercise your own discretion around which stretch objectives you think make the most sense to tackle first.

Feedback on the workload and difficulty of this challenge would be greatly appreciated.

## Installation

 1. Set up a python3 environment
 2. pip3 install twisted
 3. python3 server.py
 4. Now you're running fantastic!
 5. Visit http://localhost:12345 in a web browser or a CLI utility like curl
 6. It should throw a verbose error or return "fantastic!".

## Now it's your turn to exercise fantastic

Requests to fantastic usually succeed with a status code of 200, but we've noticed that requests can also fail about 25% of the time with a
status code of 500. The success and failure cases have fairly constrained return values and messages, but keep in mind that in a real production 
system there could be any number of failure cases. 

We want to write a service to monitor the health of fantastic. This monitoring service should consist of a back-end API, a simple minimally styled front-end web interface for the API, and some automation tooling for build/test/run.

### Requirements

#### Back-end
* It should check fantastic frequently - at least several times a minute
* Service should provide a JSON HTTP API for obtaining a list of timestamps+response for the last rolling 5 minute interval of checks 
  * Non-prescriptive example: { response: [{'timestamp':201808161712, 'code':200}, ...]}

#### Front-end
* GUI should provide a simple, minimally styled table for the raw counts of non-response, 500, and 200
* GUI should provide a simple, minimally styled graph for the current percentage of failures in the rolling interval
* GUI should auto-update table and graph data

#### Test / Automation / Ease-of-use
* Unittest(s) for both of back-end and front-end
* Updated README explaining prerequisites/set-up, testing, and how to run the monitoring service

### Stretch objectives
* Dockerfile or docker-compose for fantastic, back-end, and front-end
* Websockets instead of HTTP polling 
* Support for more than the three anticipated types of responses from fantastic
* Jenkinsfile, Travis.yml, Circle.yml, etc. for automated build and tag of Docker image(s)
* Accomplish the same monitoring service but with off-the-shelf solution(s) (e.g. Prometheus, Grafana, etc.)

### Obligatory

* This should go without saying, but you can't use anyone else's code, unless it's under [an open-source license](http://opensource.org/licenses).
  If you need to copy a snippet from Stack Overflow or some similar site, that's okay. But you should 
  be the primary author of, and understand, all the code you submit.
* Please refrain from including any identifying information in your submission, such as comments with your name, author information in a setup file, etc.

### Judging

This is what we look for.

* **Correctness**. Does it do what we asked?
* **Simplicity.** Does the design match the task?
* **Clarity.** Can any competent programmer easily understand what's going on?
* **Generality.** It shouldn't be all hardcoded, but don't make it too abstract either.
* **Tests and testability.** It would be really great if you have tests. If not, it should be
  at least possible to test this.
* **Documentation:**
  * Can a junior developer get this running? Are requirements listed, including how to install them? What platform did you develop and test your solution on?
  * Is there *just enough* documentation, to tell us *why* the program works this way?

## Platform

Our services are usually written in Python and run on Linux.

However, please use the language and environment where you are the strongest.

**Note:** we would prefer that your solution be operating system agnostic. If it is not please mention so, and
be aware that your solution may take us slightly longer to review as we dig a Windows laptop out of the closet :)

For instance, you could use any of these:
    Python
    Node.JS               
