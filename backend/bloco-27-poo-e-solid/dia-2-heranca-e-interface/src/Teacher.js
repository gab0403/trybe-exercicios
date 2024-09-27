"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, _salary, subject) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._salary = _salary;
        _this._subject = subject;
        _this.salary = _salary;
        _this._admissionDate = new Date();
        _this.registration = _this.generateRegistration();
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (value) {
            if (value.length < 16)
                throw new Error('O registro deve possuir no mínimo 16 caracteres.');
            this._registration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('O salário não pode ser negativo.');
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "admissionDate", {
        get: function () {
            return this._admissionDate;
        },
        set: function (value) {
            if (value.getTime() > new Date().getTime())
                throw new Error('A data de admissão não pode ser uma data no futuro.');
            this._admissionDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.generateRegistration = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "PRF".concat(randomStr);
    };
    return Teacher;
}(Person_1.default));
exports.default = Teacher;
