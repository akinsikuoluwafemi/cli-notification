/**
 * CLI Alerts
 *
 *
 * Cross platform CLI Alerts with colors.
 * Works on MacOs, Linux, and Windows.
 * Alerts: info, success, warning, error.
 *
 * @author Femi Akinsiku <https://femiakin.com/>
 *
 */

import chalk from 'chalk';
import sym from 'log-symbols';
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.hex(`#FFA500`);
const orangeI = chalk.hex(`#FFA500`).inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

export const alert = options => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``
	};
	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;

	const printName = name ? name : type.toUpperCase();

	if (type === `success`) {
		console.log(`\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`);
	}
	if (type === `warning`) {
		console.log(`\n${sym.warning}  ${orangeI(` ${printName} `)} ${orange(msg)}\n`);
	}
	if (type === `info`) {
		console.log(`\n${sym.info}  ${blueI(`${printName} `)} ${blue(msg)}\n`);
	}
	if (type === `error`) {
		console.log(`\n${sym.error}  ${redI(` ${printName} `)} ${red(msg)}\n`);
	}
};
