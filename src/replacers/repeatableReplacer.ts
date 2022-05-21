import { CreateReplacer } from './replacer.js';

export const createReplacer: CreateReplacer = options => {
	if (!options.repeatRate == undefined) {
		return null;
	}
	return ({ letter, randomNumber }) => {
		if (options.tripleRepeatRate && randomNumber <= options.tripleRepeatRate) {
			return letter + letter + letter;
		} else if (randomNumber <= options.repeatRate) {
			return letter + letter;
		} else {
			return letter;
		}
	};
};
