"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(_name) {
        this._name = _name;
        this.name = _name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype.validateName = function (value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    };
    return Subject;
}());
exports.default = Subject;
