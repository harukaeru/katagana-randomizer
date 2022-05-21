#!/usr/bin/env node
import meow from 'meow';
import { kataganize } from './index.js';
import { defaultOptions } from './options.js';

const cli = meow(
	`
	Usage
	  $ foo <input>

	Options
	  --rainbow, -r  Include a rainbow

	Examples
	  $ foo unicorns --rainbow
	  🌈 unicorns 🌈
`,
	{
		importMeta: import.meta,
		flags: {
			rainbow: {
				type: 'boolean',
				alias: 'r',
			},
		},
	}
);

process.stdin.on('data', data => {
	const text = data.toString();
	if (text) {
		// TODO: validate options
		const options = {
			...defaultOptions,
			...cli.flags,
		};

		console.log(kataganize(text, options));
	} else {
		cli.showHelp();
	}
	process.exit();
});
