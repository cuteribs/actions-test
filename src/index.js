const core = require('@actions/core');

function run() {
	try {
		runAction();
	} catch (error) {
		core.setFailed(error.message);
	}
}

function runAction() {
	const name = core.getInput('lastAuthor', { required: true });
	core.info(`lastAuthor = ${name}`);

	const message = `Welcome ${name}`;
	core.setOutput('welcomeMessage', message);
	core.info(`welcomeMessage = ${message}`);
}

run();