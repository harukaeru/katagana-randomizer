import { Replacer } from './replacer';

export const composeReplacers = (replacers: Array<Replacer | null>) => {
	const composed: Replacer = ({ letter, randomNumber }) => {
		return replacers
			.flatMap(r => (r ? [r] : []))
			.reduce((acc, replace) => replace({ letter: acc, randomNumber }), letter);
	};
	return composed;
};
