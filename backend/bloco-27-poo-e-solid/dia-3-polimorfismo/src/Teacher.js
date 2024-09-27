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
var Employee_1 = require("./Employee");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate, salary) || this;
        _this._subject = subject;
        _this.enrollment = _this.generateEnrollment();
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
    Teacher.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "PRF".concat(randomStr);
    };
    return Teacher;
}(Employee_1.default));
exports.default = Teacher;
