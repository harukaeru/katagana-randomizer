"use strict";
exports.__esModule = true;
exports.convertRandomly = void 0;
var HIRAGANA_START = 0x3041;
var HIRAGANA_END = 0x3096;
var _h = '';
for (var i = HIRAGANA_START; i <= HIRAGANA_END; i++) {
    _h += String.fromCodePoint(i);
}
var hiraganas = _h;
var KATAKANA_START = 0x30a1;
var NORMAL_KATAKANA_END = 0x30f6;
var _k = '';
for (var i = KATAKANA_START; i <= NORMAL_KATAKANA_END; i++) {
    _k += String.fromCodePoint(i);
}
var katakanas = _k;
var xk = Array.from(hiraganas);
xk.map(function (a, b) { return a + b; });
var kataganas = Array.from(hiraganas)
    .map(function (h, i) {
    var _a;
    return (_a = {},
        _a[h] = [h, "" + katakanas[i]],
        _a["" + katakanas[i]] = [h, "" + katakanas[i]],
        _a);
})
    .reduce(function (a, b) { return Object.assign(a, b); }, {});
var convertRandomly = function (letter, randomIndex) {
    var arr = kataganas[letter];
    if (arr) {
        return arr[randomIndex];
    }
    else {
        return letter;
    }
};
exports.convertRandomly = convertRandomly;
