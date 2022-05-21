export interface Options {
	hiraganaKatakanaRate: number;
	halfSpaceRate: number;
	bigSpaceRate: number;
	tripleRepeatRate: number;
	repeatRate: number;
	jpCommaRate: number;
	jpPeriodRate: number;
}

export const defaultOptions = {
	hiraganaKatakanaRate: 0.55,
	halfSpaceRate: 0.04,
	bigSpaceRate: 0.04,
	tripleRepeatRate: 0.01,
	repeatRate: 0.25,
	jpCommaRate: 0.05,
	jpPeriodRate: 0.05,
};
