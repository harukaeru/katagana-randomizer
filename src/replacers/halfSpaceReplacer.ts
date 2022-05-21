import { CreateReplacer } from './replacer.js';

export const createReplacer: CreateReplacer = options => {
	if (options.halfSpaceRate == undefined) {
		return null;
	}
	return ({ letter, randomNumber }) => {
		if (randomNumber <= options.halfSpaceRate) {
			return letter + ' ';
		} else {
			return letter;
		}
	};
};
