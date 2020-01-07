/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { MatAutocompleteTrigger } from '@angular/material';
import { startWith, map, distinctUntilChanged } from 'rxjs/operators';
export class MultiSelectSearchAngular2Component {
    constructor() {
        this.searchContrl = new FormControl();
        this.autoCompleteContrl = new FormControl();
        this.selectedOptions$ = new BehaviorSubject([]);
        this.autoCompleteData$ = new BehaviorSubject([]);
        this.liveChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.filteredOptions$ = combineLatest(this.searchContrl.valueChanges.pipe(startWith('')), this.autoCompleteData$
            .pipe(startWith([]))
            .pipe(distinctUntilChanged((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.join(',') === b.join(',')))))
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([searchValue, data]) => this._filter(searchValue, data))));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dataSource.currentValue) {
            /** @type {?} */
            const data = [...new Set(changes.dataSource.currentValue)];
            this.autoCompleteData$.next((/** @type {?} */ (data.filter((/**
             * @param {?} d
             * @return {?}
             */
            d => d !== null)))));
        }
    }
    /**
     * Method to all clear the filter values
     * @return {?}
     */
    clearFilter() {
        this.searchContrl.setValue('');
        this.selectedOptions$.next([]);
        this.liveChange.emit([]);
    }
    /**
     * Method to remove an item from filter
     * @private
     * @param {?} option - filter string to be removed
     * @return {?}
     */
    remove(option) {
        /** @type {?} */
        const selectedOptions = this.selectedOptionsValue.filter((/**
         * @param {?} o
         * @return {?}
         */
        o => o !== option));
        this.selectedOptions$.next(selectedOptions);
        this.liveChange.emit(selectedOptions);
    }
    /**
     * Method to add filter to existing filter string
     * @private
     * @param {?} option - filter string to be added
     * @return {?}
     */
    add(option) {
        /** @type {?} */
        const selectedOptions = this.selectedOptionsValue;
        selectedOptions.push(option);
        this.selectedOptions$.next(selectedOptions);
        this.liveChange.emit(selectedOptions);
    }
    /**
     * Handler for select/deselect/select-all of items from suggestions
     * @param {?} selectedValue - selected/deselected value
     * @return {?}
     */
    onOptionSelectionChange(selectedValue) {
        if (selectedValue === 'All') {
            this.selectedOptionsValue.length === this.autoCompleteData$.getValue().length ?
                this.selectedOptions$.next([]) : this.selectedOptions$.next(this.autoCompleteData$.getValue());
            this.liveChange.emit(this.selectedOptionsValue);
        }
        else {
            /** @type {?} */
            const newOption = selectedValue;
            this.selectedOptionsValue.includes(newOption) ? this.remove(newOption) : this.add(newOption);
        }
        this.searchContrl.setValue('');
        this.searchInput.nativeElement.blur();
        this.autoComplete.closePanel();
        // setTimeout(() => {
        //   this.autoComplete.openPanel();
        // });
    }
    /**
     * Clear search field on focus out without changing searchform control
     * @param {?} isFocussed
     * @return {?}
     */
    _setFocus(isFocussed) {
        if (!isFocussed && !this.autoComplete.panelOpen) {
            this.searchContrl.setValue(null);
        }
    }
    /**
     * Getter for selected options
     * @return {?}
     */
    get selectedOptionsValue() {
        return this.selectedOptions$.getValue();
    }
    /**
     * Utility method for filtering the suggestions based on typed value
     * @private
     * @param {?} value - typed value
     * @param {?} searchData - datasource
     * @return {?}
     */
    _filter(value, searchData) {
        /** @type {?} */
        let allData = searchData;
        if (this.selectedOptionsValue.length) {
            // showing all selected values first followed by unselected values
            /** @type {?} */
            const selected = searchData.filter((/**
             * @param {?} data
             * @return {?}
             */
            data => this.selectedOptionsValue.includes(data)));
            /** @type {?} */
            const unselected = searchData.filter((/**
             * @param {?} data
             * @return {?}
             */
            data => !selected.includes(data)));
            allData = selected.concat(unselected);
        }
        if (value) {
            /** @type {?} */
            const filterValue = value.toString().toLowerCase();
            return allData.filter((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                return option.toString().toLowerCase().includes(filterValue);
            }));
        }
        else {
            return allData;
        }
    }
}
MultiSelectSearchAngular2Component.decorators = [
    { type: Component, args: [{
                selector: 'multi-select-search',
                template: "<div class=\"multi-select\">\n  <mat-form-field class=\"multi-select__form-field\">\n    <div class=\"multi-select__text-contianer\">\n      <label *ngIf=\"(selectedOptions$ | async).length > 0\" class=\"mat-body-1\">\n        {{(selectedOptions$ | async)[0]}},\n      </label>\n      <span class=\"mat-body-1\" *ngIf=\"(selectedOptions$ | async).length > 1\">\n        (+{{(selectedOptions$ | async).length - 1}})\n      </span>\n    </div>\n    <div>\n        <input matInput #searchInput [formControl]=\"searchContrl\" [matAutocomplete]=\"auto\" (focus)=\"_setFocus(true)\" (blur)=\"_setFocus(false)\">\n    </div>\n    <mat-icon matPrefix color=\"accent\">search</mat-icon>\n    <mat-icon matSuffix color=\"accent\" *ngIf=\"(selectedOptions$ | async).length\" class=\"multi-select__close-icon\" (click)=\"clearFilter()\">\n      close\n    </mat-icon>\n  </mat-form-field>\n  <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\" (optionSelected)=\"onOptionSelectionChange($event.option.value)\">\n      <div class=\"multi-select__select-all\">\n          <mat-checkbox \n          color=\"primary\"\n          [checked]=\"(selectedOptions$ | async).length == (autoCompleteData$ | async).length\"\n          disableRipple=true (change)=\"onOptionSelectionChange('All')\">\n            <span class=\"mat-caption\">select all</span>\n          </mat-checkbox>\n      </div>\n     \n    <mat-option *ngFor=\"let option of filteredOptions$ | async\"\n      [value]=\"option\">\n      <mat-checkbox \n      color=\"primary\"\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"onOptionSelectionChange(option)\"\n      [checked]=\"(selectedOptions$ | async).includes(option) ? true : false\"\n      disableRipple=true>\n      <span class=\"mat-caption\">{{option}}</span>\n      </mat-checkbox> \n      \n    </mat-option>\n  </mat-autocomplete>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".multi-select{width:inherit;overflow:hidden}.multi-select__select-all{margin:1rem}.multi-select__close-icon{cursor:pointer}.multi-select__form-field{width:inherit;margin:.5rem 0;background-color:#f9fafc}.multi-select__form-field .mat-form-field-underline{display:none}.multi-select__form-field .mat-form-field-wrapper{padding:0}.multi-select__form-field .mat-form-field-infix{padding:0;border:none;display:flex}.multi-select__form-field .mat-form-field-flex{align-items:center;padding:.07rem}.multi-select__text-contianer{display:flex;max-width:80%}.multi-select__text-contianer span{flex:0 1 auto}.multi-select__text-contianer label{flex:0 1 auto;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]
            }] }
];
/** @nocollapse */
MultiSelectSearchAngular2Component.ctorParameters = () => [];
MultiSelectSearchAngular2Component.propDecorators = {
    searchInput: [{ type: ViewChild, args: ['searchInput', null,] }],
    autoComplete: [{ type: ViewChild, args: ['searchInput', { read: MatAutocompleteTrigger, static: true },] }],
    liveChange: [{ type: Output }],
    dataSource: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktc2VsZWN0LXNlYXJjaC1hbmd1bGFyMi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tdWx0aS1zZWxlY3Qtc2VhcmNoLWFuZ3VsYXIyLyIsInNvdXJjZXMiOlsibGliL211bHRpLXNlbGVjdC1zZWFyY2gtYW5ndWxhcjIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUVSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixLQUFLLEVBRUwsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBYyxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRdEUsTUFBTSxPQUFPLGtDQUFrQztJQWdCN0M7UUFmQSxpQkFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDekIsdUJBQWtCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUUvQyxxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRCxzQkFBaUIsR0FBRyxJQUFJLGVBQWUsQ0FBZ0IsRUFBRSxDQUFDLENBQUM7UUFNM0QsZUFBVSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO0lBS2xELENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbEQsSUFBSSxDQUFDLGlCQUFpQjthQUNy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QyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7U0FDSDthQUFNO1lBQ04sT0FBTyxPQUFPLENBQUM7U0FDZjtJQUNKLENBQUM7OztZQTFIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsNjFEQUE0RDtnQkFFNUQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7OzswQkFRRSxTQUFTLFNBQUMsYUFBYSxFQUFFLElBQUk7MkJBQzdCLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFFdkUsTUFBTTt5QkFHTixLQUFLOzs7O0lBWk4sMERBQWlDOzs7OztJQUNqQyxnRUFBK0M7O0lBQy9DLDhEQUF1Qzs7SUFDdkMsOERBQXFEOztJQUNyRCwrREFBMkQ7O0lBRTNELHlEQUEwRTs7SUFDMUUsMERBQStHOztJQUUvRyx3REFDa0U7O0lBRWxFLHdEQUNXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LFxuICAgICAgICAgIE9uSW5pdCwgT25DaGFuZ2VzLFxuICAgICAgICAgIFZpZXdDaGlsZCxcbiAgICAgICAgICBFbGVtZW50UmVmLFxuICAgICAgICAgIE91dHB1dCxcbiAgICAgICAgICBFdmVudEVtaXR0ZXIsXG4gICAgICAgICAgSW5wdXQsXG4gICAgICAgICAgU2ltcGxlQ2hhbmdlcyxcbiAgICAgICAgICBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ211bHRpLXNlbGVjdC1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXVsdGktc2VsZWN0LXNlYXJjaC1hbmd1bGFyMi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL211bHRpLXNlbGVjdC1zZWFyY2gtYW5ndWxhcjIuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdFNlYXJjaEFuZ3VsYXIyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICwgT25DaGFuZ2VzIHtcbiAgc2VhcmNoQ29udHJsID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHByaXZhdGUgYXV0b0NvbXBsZXRlQ29udHJsID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGZpbHRlcmVkT3B0aW9ucyQ6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBzZWxlY3RlZE9wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4oW10pO1xuICBhdXRvQ29tcGxldGVEYXRhJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QXJyYXk8c3RyaW5nPj4oW10pO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0JywgbnVsbCkgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0JywgeyByZWFkOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyLCBzdGF0aWM6IHRydWUgfSkgYXV0b0NvbXBsZXRlOiBNYXRBdXRvY29tcGxldGVUcmlnZ2VyO1xuXG4gIEBPdXRwdXQoKVxuICBsaXZlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBASW5wdXQoKVxuICBkYXRhU291cmNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMkID0gY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJsLnZhbHVlQ2hhbmdlcy5waXBlKHN0YXJ0V2l0aCgnJykpLFxuICAgICAgdGhpcy5hdXRvQ29tcGxldGVEYXRhJFxuICAgICAgLnBpcGUoc3RhcnRXaXRoKFtdKSlcbiAgICAgIC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKChhLCBiKSA9PiBhLmpvaW4oJywnKSA9PT0gYi5qb2luKCcsJykpKVxuICAgIClcbiAgICAucGlwZShtYXAoKFtzZWFyY2hWYWx1ZSwgZGF0YV0pID0+IHRoaXMuX2ZpbHRlcihzZWFyY2hWYWx1ZSwgZGF0YSkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5kYXRhU291cmNlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IFsuLi5uZXcgU2V0KGNoYW5nZXMuZGF0YVNvdXJjZS5jdXJyZW50VmFsdWUpXTtcbiAgICAgIHRoaXMuYXV0b0NvbXBsZXRlRGF0YSQubmV4dChkYXRhLmZpbHRlcihkID0+IGQgIT09IG51bGwpIGFzIHN0cmluZ1tdKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBhbGwgY2xlYXIgdGhlIGZpbHRlciB2YWx1ZXNcbiAgICovXG4gIHB1YmxpYyBjbGVhckZpbHRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNlYXJjaENvbnRybC5zZXRWYWx1ZSgnJyk7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMkLm5leHQoW10pO1xuICAgIHRoaXMubGl2ZUNoYW5nZS5lbWl0KFtdKTtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIHJlbW92ZSBhbiBpdGVtIGZyb20gZmlsdGVyXG4gICAqIEBwYXJhbSBvcHRpb24gLSBmaWx0ZXIgc3RyaW5nIHRvIGJlIHJlbW92ZWRcbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5zZWxlY3RlZE9wdGlvbnNWYWx1ZS5maWx0ZXIobyA9PiBvICE9PSBvcHRpb24pO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zJC5uZXh0KHNlbGVjdGVkT3B0aW9ucyk7XG4gICAgdGhpcy5saXZlQ2hhbmdlLmVtaXQoc2VsZWN0ZWRPcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogTWV0aG9kIHRvIGFkZCBmaWx0ZXIgdG8gZXhpc3RpbmcgZmlsdGVyIHN0cmluZ1xuICAgKiBAcGFyYW0gb3B0aW9uIC0gZmlsdGVyIHN0cmluZyB0byBiZSBhZGRlZFxuICAgKi9cbiAgcHJpdmF0ZSBhZGQob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9uc1ZhbHVlO1xuICAgIHNlbGVjdGVkT3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMkLm5leHQoc2VsZWN0ZWRPcHRpb25zKTtcbiAgICB0aGlzLmxpdmVDaGFuZ2UuZW1pdChzZWxlY3RlZE9wdGlvbnMpO1xuICB9XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBzZWxlY3QvZGVzZWxlY3Qvc2VsZWN0LWFsbCBvZiBpdGVtcyBmcm9tIHN1Z2dlc3Rpb25zXG4gICAqIEBwYXJhbSBzZWxlY3RlZFZhbHVlIC0gc2VsZWN0ZWQvZGVzZWxlY3RlZCB2YWx1ZVxuICAgKi9cbiAgb25PcHRpb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0ZWRWYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdBbGwnKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc1ZhbHVlLmxlbmd0aCA9PT0gdGhpcy5hdXRvQ29tcGxldGVEYXRhJC5nZXRWYWx1ZSgpLmxlbmd0aCA/XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyQubmV4dChbXSkgOiB0aGlzLnNlbGVjdGVkT3B0aW9ucyQubmV4dCh0aGlzLmF1dG9Db21wbGV0ZURhdGEkLmdldFZhbHVlKCkpO1xuICAgICAgdGhpcy5saXZlQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnNWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld09wdGlvbiA9IHNlbGVjdGVkVmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uc1ZhbHVlLmluY2x1ZGVzKG5ld09wdGlvbikgPyB0aGlzLnJlbW92ZShuZXdPcHRpb24pIDogdGhpcy5hZGQobmV3T3B0aW9uKTtcbiAgICB9XG4gICAgdGhpcy5zZWFyY2hDb250cmwuc2V0VmFsdWUoJycpO1xuICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy5hdXRvQ29tcGxldGUuY2xvc2VQYW5lbCgpO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5hdXRvQ29tcGxldGUub3BlblBhbmVsKCk7XG4gICAgLy8gfSk7XG4gIH1cbiAgLyoqXG4gICAqIENsZWFyIHNlYXJjaCBmaWVsZCBvbiBmb2N1cyBvdXQgd2l0aG91dCBjaGFuZ2luZyBzZWFyY2hmb3JtIGNvbnRyb2xcbiAgICovXG4gIF9zZXRGb2N1cyhpc0ZvY3Vzc2VkKSB7XG4gICAgaWYgKCFpc0ZvY3Vzc2VkICYmICF0aGlzLmF1dG9Db21wbGV0ZS5wYW5lbE9wZW4pIHtcbiAgICAgIHRoaXMuc2VhcmNoQ29udHJsLnNldFZhbHVlKG51bGwpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2V0dGVyIGZvciBzZWxlY3RlZCBvcHRpb25zXG4gICAqL1xuICBnZXQgc2VsZWN0ZWRPcHRpb25zVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPcHRpb25zJC5nZXRWYWx1ZSgpO1xuICB9XG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCBmb3IgZmlsdGVyaW5nIHRoZSBzdWdnZXN0aW9ucyBiYXNlZCBvbiB0eXBlZCB2YWx1ZVxuICAgKiBAcGFyYW0gdmFsdWUgLSB0eXBlZCB2YWx1ZVxuICAgKiBAcGFyYW0gc2VhcmNoRGF0YSAtIGRhdGFzb3VyY2VcbiAgICovXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nLCBzZWFyY2hEYXRhOiBBcnJheTxzdHJpbmc+KTogc3RyaW5nW10ge1xuICAgIGxldCBhbGxEYXRhID0gc2VhcmNoRGF0YTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZE9wdGlvbnNWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIC8vIHNob3dpbmcgYWxsIHNlbGVjdGVkIHZhbHVlcyBmaXJzdCBmb2xsb3dlZCBieSB1bnNlbGVjdGVkIHZhbHVlc1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWFyY2hEYXRhLmZpbHRlcihkYXRhID0+IHRoaXMuc2VsZWN0ZWRPcHRpb25zVmFsdWUuaW5jbHVkZXMoZGF0YSkpO1xuICAgICAgY29uc3QgdW5zZWxlY3RlZCA9IHNlYXJjaERhdGEuZmlsdGVyKGRhdGEgPT4gIXNlbGVjdGVkLmluY2x1ZGVzKGRhdGEpKTtcbiAgICAgIGFsbERhdGEgPSBzZWxlY3RlZC5jb25jYXQodW5zZWxlY3RlZCk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gYWxsRGF0YS5maWx0ZXIob3B0aW9uID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpO1xuICAgICAgfSk7XG4gICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYWxsRGF0YTtcbiAgICAgfVxuICB9XG59XG4iXX0=