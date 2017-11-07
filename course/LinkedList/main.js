"use strict";
exports.__esModule = true;
var linkedList_1 = require("./linkedList");
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.main = function () {
        Program.lList = new linkedList_1.LinkedList();
        console.log(Program.lList.append(30));
    };
    return Program;
}());
