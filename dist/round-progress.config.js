"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoundProgressConfig = (function () {
    function RoundProgressConfig() {
        this._options = {
            radius: 125,
            animation: 'easeOutCubic',
            animationDelay: null,
            duration: 500,
            stroke: 15,
            color: '#45CCCE',
            background: '#EAEAEA',
            responsive: false,
            clockwise: true,
            semicircle: false,
            rounded: false
        };
    }
    /** Configures the defaults. */
    /** Configures the defaults. */
    RoundProgressConfig.prototype.setDefaults = /** Configures the defaults. */
    function (config) {
        return Object.assign(this._options, config);
    };
    /** Fetches a value from the defaults. */
    /** Fetches a value from the defaults. */
    RoundProgressConfig.prototype.get = /** Fetches a value from the defaults. */
    function (key) {
        return this._options[key];
    };
    RoundProgressConfig.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RoundProgressConfig.ctorParameters = function () { return []; };
    return RoundProgressConfig;
}());
exports.RoundProgressConfig = RoundProgressConfig;
//# sourceMappingURL=round-progress.config.js.map