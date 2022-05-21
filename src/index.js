"use strict";
exports.__esModule = true;
exports.kataganaRandomize = void 0;
var wanakana = require("wanakana");
var utils_1 = require("./utils");
console.log('wanakana', wanakana);
var getRandom = function (degree) {
    if (degree === void 0) { degree = 0.5; }
    return Math.random() * 100 >= 100 * degree ? 1 : 0;
};
var kataganaRandomize = function (text, choosingRandomizer, spaceRandomizer, commaRandomizer, periodRandomizer, toKana) {
    if (choosingRandomizer === void 0) { choosingRandomizer = getRandom; }
    if (spaceRandomizer === void 0) { spaceRandomizer = getRandom; }
    if (commaRandomizer === void 0) { commaRandomizer = getRandom; }
    if (periodRandomizer === void 0) { periodRandomizer = getRandom; }
    if (toKana === void 0) { toKana = true; }
    var target_text = toKana ? wanakana.toKana(text) : text;
    var result = '';
    for (var i = 0; i < target_text.length; i++) {
        var r = choosingRandomizer();
        var letter = utils_1.convertRandomly("" + target_text[i], r);
        var space1 = spaceRandomizer() ? ' ' : '';
        var space2 = spaceRandomizer() ? '　' : '';
        var comma = commaRandomizer() ? '、' : '';
        var period = periodRandomizer() ? '。' : '';
        result += letter + space1 + space2 + comma + period;
    }
    return result;
};
exports.kataganaRandomize = kataganaRandomize;
var data = 'あああああああああああああああああああいうえおああふぁｓか';
console.log(exports.kataganaRandomize(data.toString(), function () { return getRandom(0.55); }, function () { return getRandom(0.96); }, function () { return getRandom(0.99); }, function () { return getRandom(0.995); }));
