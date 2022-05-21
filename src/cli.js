#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var meow_1 = require("meow");
var index_1 = require("./index");
var cli = meow_1["default"]("\n\tUsage\n\t  $ foo <input>\n\n\tOptions\n\t  --rainbow, -r  Include a rainbow\n\n\tExamples\n\t  $ foo unicorns --rainbow\n\t  \uD83C\uDF08 unicorns \uD83C\uDF08\n", {
    importMeta: import.meta,
    flags: {
        rainbow: {
            type: 'boolean',
            alias: 'r'
        }
    }
});
/*
{
    input: ['unicorns'],
    flags: {rainbow: true},
    ...
}
*/
index_1.kataganaRandomize(cli.input[0] ? 'a' : 'b');
