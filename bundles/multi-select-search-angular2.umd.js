(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('@angular/material'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('multi-select-search-angular2', ['exports', '@angular/core', '@angular/forms', 'rxjs', '@angular/material', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['multi-select-search-angular2'] = {}, global.ng.core, global.ng.forms, global.rxjs, global.ng.material, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, forms, rxjs, material, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MultiSelectSearchAngular2Component = /** @class */ (function () {
        function MultiSelectSearchAngular2Component() {
            this.searchContrl = new forms.FormControl();
            this.autoCompleteContrl = new forms.FormControl();
            this.selectedOptions$ = new rxjs.BehaviorSubject([]);
            this.autoCompleteData$ = new rxjs.BehaviorSubject([]);
            this.liveChange = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.filteredOptions$ = rxjs.combineLatest(this.searchContrl.valueChanges.pipe(operators.startWith('')), this.autoCompleteData$
                .pipe(operators.startWith([]))
                .pipe(operators.distinctUntilChanged((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a.join(',') === b.join(','); }))))
                .pipe(operators.map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = __read(_a, 2), searchValue = _b[0], data = _b[1];
                return _this._filter(searchValue, data);
            })));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (changes.dataSource.currentValue) {
                /** @type {?} */
                var data = __spread(new Set(changes.dataSource.currentValue));
                this.autoCompleteData$.next((/** @type {?} */ (data.filter((/**
                 * @param {?} d
                 * @return {?}
                 */
                function (d) { return d !== null; })))));
            }
        };
        /**
         * Method to all clear the filter values
         */
        /**
         * Method to all clear the filter values
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype.clearFilter = /**
         * Method to all clear the filter values
         * @return {?}
         */
        function () {
            this.searchContrl.setValue('');
            this.selectedOptions$.next([]);
            this.liveChange.emit([]);
        };
        /**
         * Method to remove an item from filter
         * @param option - filter string to be removed
         */
        /**
         * Method to remove an item from filter
         * @private
         * @param {?} option - filter string to be removed
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype.remove = /**
         * Method to remove an item from filter
         * @private
         * @param {?} option - filter string to be removed
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var selectedOptions = this.selectedOptionsValue.filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return o !== option; }));
            this.selectedOptions$.next(selectedOptions);
            this.liveChange.emit(selectedOptions);
        };
        /**
         * Method to add filter to existing filter string
         * @param option - filter string to be added
         */
        /**
         * Method to add filter to existing filter string
         * @private
         * @param {?} option - filter string to be added
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype.add = /**
         * Method to add filter to existing filter string
         * @private
         * @param {?} option - filter string to be added
         * @return {?}
         */
        function (option) {
            /** @type {?} */
            var selectedOptions = this.selectedOptionsValue;
            selectedOptions.push(option);
            this.selectedOptions$.next(selectedOptions);
            this.liveChange.emit(selectedOptions);
        };
        /**
         * Handler for select/deselect/select-all of items from suggestions
         * @param selectedValue - selected/deselected value
         */
        /**
         * Handler for select/deselect/select-all of items from suggestions
         * @param {?} selectedValue - selected/deselected value
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype.onOptionSelectionChange = /**
         * Handler for select/deselect/select-all of items from suggestions
         * @param {?} selectedValue - selected/deselected value
         * @return {?}
         */
        function (selectedValue) {
            if (selectedValue === 'All') {
                this.selectedOptionsValue.length === this.autoCompleteData$.getValue().length ?
                    this.selectedOptions$.next([]) : this.selectedOptions$.next(this.autoCompleteData$.getValue());
                this.liveChange.emit(this.selectedOptionsValue);
            }
            else {
                /** @type {?} */
                var newOption = selectedValue;
                this.selectedOptionsValue.includes(newOption) ? this.remove(newOption) : this.add(newOption);
            }
            this.searchContrl.setValue('');
            this.searchInput.nativeElement.blur();
            this.autoComplete.closePanel();
            // setTimeout(() => {
            //   this.autoComplete.openPanel();
            // });
        };
        /**
         * Clear search field on focus out without changing searchform control
         */
        /**
         * Clear search field on focus out without changing searchform control
         * @param {?} isFocussed
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype._setFocus = /**
         * Clear search field on focus out without changing searchform control
         * @param {?} isFocussed
         * @return {?}
         */
        function (isFocussed) {
            if (!isFocussed && !this.autoComplete.panelOpen) {
                this.searchContrl.setValue(null);
            }
        };
        Object.defineProperty(MultiSelectSearchAngular2Component.prototype, "selectedOptionsValue", {
            /**
             * Getter for selected options
             */
            get: /**
             * Getter for selected options
             * @return {?}
             */
            function () {
                return this.selectedOptions$.getValue();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Utility method for filtering the suggestions based on typed value
         * @param value - typed value
         * @param searchData - datasource
         */
        /**
         * Utility method for filtering the suggestions based on typed value
         * @private
         * @param {?} value - typed value
         * @param {?} searchData - datasource
         * @return {?}
         */
        MultiSelectSearchAngular2Component.prototype._filter = /**
         * Utility method for filtering the suggestions based on typed value
         * @private
         * @param {?} value - typed value
         * @param {?} searchData - datasource
         * @return {?}
         */
        function (value, searchData) {
            var _this = this;
            /** @type {?} */
            var allData = searchData;
            if (this.selectedOptionsValue.length) {
                // showing all selected values first followed by unselected values
                /** @type {?} */
                var selected_1 = searchData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return _this.selectedOptionsValue.includes(data); }));
                /** @type {?} */
                var unselected = searchData.filter((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return !selected_1.includes(data); }));
                allData = selected_1.concat(unselected);
            }
            if (value) {
                /** @type {?} */
                var filterValue_1 = value.toString().toLowerCase();
                return allData.filter((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) {
                    return option.toString().toLowerCase().includes(filterValue_1);
                }));
            }
            else {
                return allData;
            }
        };
        MultiSelectSearchAngular2Component.decorators = [
            { type: core.Component, args: [{
                        selector: 'multi-select-search',
                        template: "<div class=\"multi-select\">\n  <mat-form-field class=\"multi-select__form-field\">\n    <div class=\"multi-select__text-contianer\">\n      <label *ngIf=\"(selectedOptions$ | async).length > 0\" class=\"mat-body-1\">\n        {{(selectedOptions$ | async)[0]}},\n      </label>\n      <span class=\"mat-body-1\" *ngIf=\"(selectedOptions$ | async).length > 1\">\n        (+{{(selectedOptions$ | async).length - 1}})\n      </span>\n    </div>\n    <div>\n        <input matInput #searchInput [formControl]=\"searchContrl\" [matAutocomplete]=\"auto\" (focus)=\"_setFocus(true)\" (blur)=\"_setFocus(false)\">\n    </div>\n    <mat-icon matPrefix color=\"accent\">search</mat-icon>\n    <mat-icon matSuffix color=\"accent\" *ngIf=\"(selectedOptions$ | async).length\" class=\"multi-select__close-icon\" (click)=\"clearFilter()\">\n      close\n    </mat-icon>\n  </mat-form-field>\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onOptionSelectionChange($event.option.value)\">\n      <div class=\"multi-select__select-all\">\n          <mat-checkbox \n          color=\"primary\"\n          [checked]=\"(selectedOptions$ | async).length == (autoCompleteData$ | async).length\"\n          disableRipple=true (change)=\"onOptionSelectionChange('All')\">\n            <span class=\"mat-caption\">select all</span>\n          </mat-checkbox>\n      </div>\n     \n    <mat-option *ngFor=\"let option of filteredOptions$ | async\"\n      [value]=\"option\">\n      <mat-checkbox \n      color=\"primary\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"onOptionSelectionChange(option)\"\n      [checked]=\"(selectedOptions$ | async).includes(option) ? true : false\"\n      disableRipple=true>\n      <span class=\"mat-caption\">{{option}}</span>\n      </mat-checkbox> \n      \n    </mat-option>\n  </mat-autocomplete>\n</div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".multi-select{width:inherit;overflow:hidden}.multi-select__select-all{margin:1rem}.multi-select__close-icon{cursor:pointer}.multi-select__form-field{width:inherit;margin:.5rem 0;background-color:#f9fafc}.multi-select__form-field .mat-form-field-underline{display:none}.multi-select__form-field .mat-form-field-wrapper{padding:0}.multi-select__form-field .mat-form-field-infix{padding:0;border:none;display:flex}.multi-select__form-field .mat-form-field-flex{align-items:center;padding:.07rem}.multi-select__text-contianer{display:flex;max-width:80%}.multi-select__text-contianer span{flex:0 1 auto}.multi-select__text-contianer label{flex:0 1 auto;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
                    }] }
        ];
        /** @nocollapse */
        MultiSelectSearchAngular2Component.ctorParameters = function () { return []; };
        MultiSelectSearchAngular2Component.propDecorators = {
            searchInput: [{ type: core.ViewChild, args: ['searchInput', null,] }],
            autoComplete: [{ type: core.ViewChild, args: ['searchInput', { read: material.MatAutocompleteTrigger, static: true },] }],
            liveChange: [{ type: core.Output }],
            dataSource: [{ type: core.Input }]
        };
        return MultiSelectSearchAngular2Component;
    }());
    if (false) {
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.searchContrl;
        /**
         * @type {?}
         * @private
         */
        MultiSelectSearchAngular2Component.prototype.autoCompleteContrl;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.filteredOptions$;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.selectedOptions$;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.autoCompleteData$;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.searchInput;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.autoComplete;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.liveChange;
        /** @type {?} */
        MultiSelectSearchAngular2Component.prototype.dataSource;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MultiSelectSearchAngular2Module = /** @class */ (function () {
        function MultiSelectSearchAngular2Module() {
        }
        MultiSelectSearchAngular2Module.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [MultiSelectSearchAngular2Component],
                        imports: [
                            common.CommonModule,
                            material.MatCheckboxModule,
                            material.MatFormFieldModule,
                            material.MatListModule,
                            material.MatInputModule,
                            material.MatAutocompleteModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            material.MatIconModule
                        ],
                        exports: [MultiSelectSearchAngular2Component]
                    },] }
        ];
        return MultiSelectSearchAngular2Module;
    }());

    exports.MultiSelectSearchAngular2Component = MultiSelectSearchAngular2Component;
    exports.MultiSelectSearchAngular2Module = MultiSelectSearchAngular2Module;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=multi-select-search-angular2.umd.js.map
