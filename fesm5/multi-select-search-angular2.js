import { __read, __spread } from 'tslib';
import { EventEmitter, Component, ViewEncapsulation, ViewChild, Output, Input, NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { MatAutocompleteTrigger, MatCheckboxModule, MatFormFieldModule, MatListModule, MatInputModule, MatAutocompleteModule, MatIconModule } from '@angular/material';
import { startWith, distinctUntilChanged, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MultiSelectSearchAngular2Component = /** @class */ (function () {
    function MultiSelectSearchAngular2Component() {
        this.searchContrl = new FormControl();
        this.autoCompleteContrl = new FormControl();
        this.selectedOptions$ = new BehaviorSubject([]);
        this.autoCompleteData$ = new BehaviorSubject([]);
        this.liveChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MultiSelectSearchAngular2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.filteredOptions$ = combineLatest(this.searchContrl.valueChanges.pipe(startWith('')), this.autoCompleteData$
            .pipe(startWith([]))
            .pipe(distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a.join(',') === b.join(','); }))))
            .pipe(map((/**
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
        { type: Component, args: [{
                    selector: 'multi-select-search',
                    template: "<div class=\"multi-select\">\n  <mat-form-field class=\"multi-select__form-field\">\n    <div class=\"multi-select__text-contianer\">\n      <label *ngIf=\"(selectedOptions$ | async).length > 0\" class=\"mat-body-1\">\n        {{(selectedOptions$ | async)[0]}},\n      </label>\n      <span class=\"mat-body-1\" *ngIf=\"(selectedOptions$ | async).length > 1\">\n        (+{{(selectedOptions$ | async).length - 1}})\n      </span>\n    </div>\n    <div>\n        <input matInput #searchInput [formControl]=\"searchContrl\" [matAutocomplete]=\"auto\" (focus)=\"_setFocus(true)\" (blur)=\"_setFocus(false)\">\n    </div>\n    <mat-icon matPrefix color=\"accent\">search</mat-icon>\n    <mat-icon matSuffix color=\"accent\" *ngIf=\"(selectedOptions$ | async).length\" class=\"multi-select__close-icon\" (click)=\"clearFilter()\">\n      close\n    </mat-icon>\n  </mat-form-field>\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onOptionSelectionChange($event.option.value)\">\n      <div class=\"multi-select__select-all\">\n          <mat-checkbox \n          color=\"primary\"\n          [checked]=\"(selectedOptions$ | async).length == (autoCompleteData$ | async).length\"\n          disableRipple=true (change)=\"onOptionSelectionChange('All')\">\n            <span class=\"mat-caption\">select all</span>\n          </mat-checkbox>\n      </div>\n     \n    <mat-option *ngFor=\"let option of filteredOptions$ | async\"\n      [value]=\"option\">\n      <mat-checkbox \n      color=\"primary\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"onOptionSelectionChange(option)\"\n      [checked]=\"(selectedOptions$ | async).includes(option) ? true : false\"\n      disableRipple=true>\n      <span class=\"mat-caption\">{{option}}</span>\n      </mat-checkbox> \n      \n    </mat-option>\n  </mat-autocomplete>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".multi-select{width:inherit;overflow:hidden}.multi-select__select-all{margin:1rem}.multi-select__close-icon{cursor:pointer}.multi-select__form-field{width:inherit;margin:.5rem 0;background-color:#f9fafc}.multi-select__form-field .mat-form-field-underline{display:none}.multi-select__form-field .mat-form-field-wrapper{padding:0}.multi-select__form-field .mat-form-field-infix{padding:0;border:none;display:flex}.multi-select__form-field .mat-form-field-flex{align-items:center;padding:.07rem}.multi-select__text-contianer{display:flex;max-width:80%}.multi-select__text-contianer span{flex:0 1 auto}.multi-select__text-contianer label{flex:0 1 auto;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
                }] }
    ];
    /** @nocollapse */
    MultiSelectSearchAngular2Component.ctorParameters = function () { return []; };
    MultiSelectSearchAngular2Component.propDecorators = {
        searchInput: [{ type: ViewChild, args: ['searchInput', null,] }],
        autoComplete: [{ type: ViewChild, args: ['searchInput', { read: MatAutocompleteTrigger, static: true },] }],
        liveChange: [{ type: Output }],
        dataSource: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [MultiSelectSearchAngular2Component],
                    imports: [
                        CommonModule,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatListModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule
                    ],
                    exports: [MultiSelectSearchAngular2Component]
                },] }
    ];
    return MultiSelectSearchAngular2Module;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MultiSelectSearchAngular2Component, MultiSelectSearchAngular2Module };
//# sourceMappingURL=multi-select-search-angular2.js.map
