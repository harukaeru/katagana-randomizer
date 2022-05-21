const HIRAGANA_START = 0x3041;
const HIRAGANA_END = 0x3096;

let _h = '';
for (let i = HIRAGANA_START; i <= HIRAGANA_END; i++) {
	_h += String.fromCodePoint(i);
}

export const hiraganas = _h;

const KATAKANA_START = 0x30a1;
const NORMAL_KATAKANA_END = 0x30f6;

let _k = '';
for (let i = KATAKANA_START; i <= NORMAL_KATAKANA_END; i++) {
	_k += String.fromCodePoint(i);
}

export const katakanas = _k;
