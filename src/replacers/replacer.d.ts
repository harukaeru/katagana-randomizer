export type Replacer = ({
	letter,
	randomNumber,
}: {
	letter: string;
	randomNumber: number;
}) => string;

export type CreateReplacer = (options: Options) => Replacer | null;
