import { Options } from './options';
import { createReplacer as createHiraganaKanakaReplacer } from './replacers/hiraganaKatakanaReplacer.js';
import { createReplacer as createHalfSpaceReplacer } from './replacers/halfSpaceReplacer.js';
import { createReplacer as createBigSpaceReplacer } from './replacers/bigSpaceReplacer.js';
import { createReplacer as createRepeatableReplacer } from './replacers/repeatableReplacer.js';
import { Replacer } from './replacers/replacer';
import { composeReplacers } from './replacers/replacer_utils.js';

export const convert = (text: string, replace: Replacer) => {
	let result = '';
	for (let i = 0; i < text.length; i++) {
		const letter = `${text[i]}`;
		const randomNumber = Math.random();

		result += replace({ letter, randomNumber });
	}
	return result;
};

export const kataganize = (text: string, options: Options) => {
	const replacers = [
		createHiraganaKanakaReplacer(options),
		createRepeatableReplacer(options),
		createHalfSpaceReplacer(options),
		createBigSpaceReplacer(options),
	];
	const replace = composeReplacers(replacers);

	return convert(text, replace);
};
