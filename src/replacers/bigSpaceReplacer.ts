import { CreateReplacer } from './replacer.js';

export const createReplacer: CreateReplacer = options => {
	if (options.bigSpaceRate == undefined) {
		return null;
	}
	return ({ letter, randomNumber }) => {
		if (randomNumber <= options.bigSpaceRate) {
			return letter + '　';
		} else {
			return letter;
		}
	};
};
