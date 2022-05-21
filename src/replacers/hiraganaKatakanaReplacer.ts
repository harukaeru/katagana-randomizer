import { hiraganas, katakanas } from '../utils.js';
import { CreateReplacer } from './replacer.js';

const kataganas = Array.from(hiraganas)
	.map((h, i) => ({
		[h]: [h, `${katakanas[i]}`],
		[`${katakanas[i]}`]: [h, `${katakanas[i]}`],
	}))
	.reduce((a, b) => Object.assign(a, b), {});

export const convertHiraganaOrKatakana = (
	letter: string,
	hiraganaKatakanaIndex: number
): string => {
	const arr = kataganas[letter];
	if (arr) {
		return arr[hiraganaKatakanaIndex] as string;
	} else {
		return letter;
	}
};

export const createReplacer: CreateReplacer = options => {
	if (!options.hiraganaKatakanaRate == undefined) {
		return null;
	}
	return ({ letter, randomNumber }) => {
		const hiraganaKatakanaIndex =
			randomNumber <= options.hiraganaKatakanaRate ? 0 : 1;
		return convertHiraganaOrKatakana(letter, hiraganaKatakanaIndex);
	};
};
