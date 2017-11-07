"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList(node) {
        this.head = node || null;
    }
    LinkedList.prototype.append = function (value) {
        var newNode = new node_1.Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    };
    LinkedList.prototype.unshift = function (value) {
        var newHead = new node_1.Node(value);
        if (!this.head) {
            this.head = newHead;
            return;
        }
        newHead.next = this.head;
        this.head = newHead;
    };
    LinkedList.prototype.addByPos = function (pos, value) {
        if (!this.head || pos < 0 || (pos > this.size())) {
            return;
        }
        if (pos === 0) {
            this.unshift(value);
            return;
        }
        var currentNode = this.head;
        var newNode = new node_1.Node(value);
        for (var i = 1; i < pos; i++) {
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    };
    LinkedList.prototype.shift = function () {
        if (!this.head) {
            return;
        }
        var result = 0;
        result = this.head.value;
        this.head = this.head.next;
        return result;
    };
    LinkedList.prototype.pop = function () {
        if (!this.head) {
            return;
        }
        var result = 0;
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        result = currentNode.value;
        currentNode = null;
        return result;
    };
    LinkedList.prototype.deleteByValue = function (value) {
        if (!this.head) {
            return;
        }
        else if (this.head.value === value) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
            }
            return;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
            }
        }
    };
    LinkedList.prototype.deleteByPos = function (pos) {
        if (!this.head || pos < 0 || (pos > this.size())) {
            return;
        }
        var result = 0;
        if (pos === 0) {
            result = this.head.value;
            this.head = this.head.next;
            return result;
        }
        var currentNode = this.head;
        for (var i = 1; i < pos; i++) {
            currentNode = currentNode.next;
        }
        result = currentNode.next.value;
        currentNode.next = currentNode.next.next;
        return result;
    };
    LinkedList.prototype.size = function () {
        var result = 0;
        var currentNode = this.head;
        while (currentNode) {
            currentNode = currentNode.next;
            result++;
        }
        return result;
    };
    LinkedList.prototype.toArray = function () {
        if (!this.head) {
            return;
        }
        var result = [];
        var currentNode = this.head;
        while (currentNode) {
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
