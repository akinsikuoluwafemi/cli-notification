import {alert} from './index.js';

alert();

alert({
	type: `success`,
	msg: `Everything finished!.`,
	name: `DONE`
});

alert({
	type: `warning`,
	msg: `Let's be guided.`
});

alert({
	type: `info`,
	msg: `Femi is awesome!.`
});

alert({
	type: `error.`,
	msg: `Something went wrong.`
});
