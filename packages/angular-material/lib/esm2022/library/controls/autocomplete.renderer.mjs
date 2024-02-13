/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { Actions, composeWithUi, isEnumControl, rankWith, } from '@jsonforms/core';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/autocomplete";
/**
 * To use this component you will need to add your own tester:
 * <pre><code>
 * ...
 * export const AutocompleteControlRendererTester: RankedTester = rankWith(2, isEnumControl);
 * ...
 * </code></pre>
 * Add the tester and renderer to JSONForms registry:
 * <pre><code>
 * ...
 * { tester: AutocompleteControlRendererTester, renderer: AutocompleteControlRenderer },
 * ...
 * </code></pre>
 * Furthermore you need to update your module.
 * <pre><code>
 * ...
 * imports: [JsonFormsAngularMaterialModule, MatAutocompleteModule],
 * declarations: [AutocompleteControlRenderer]
 * ...
 * </code></pre>
 *
 */
export class AutocompleteControlRenderer extends JsonFormsControl {
    options;
    filteredOptions;
    shouldFilter;
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.target.value;
    ngOnInit() {
        super.ngOnInit();
        this.shouldFilter = false;
        this.filteredOptions = this.form.valueChanges.pipe(startWith(''), map((val) => this.filter(val)));
    }
    updateFilter(event) {
        // ENTER
        if (event.keyCode === 13) {
            this.shouldFilter = false;
        }
        else {
            this.shouldFilter = true;
        }
    }
    onSelect(ev) {
        const path = composeWithUi(this.uischema, this.path);
        this.shouldFilter = false;
        this.jsonFormsService.updateCore(Actions.update(path, () => ev.option.value));
        this.triggerValidation();
    }
    filter(val) {
        return (this.options || this.scopedSchema.enum || []).filter((option) => !this.shouldFilter ||
            !val ||
            option.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }
    getOwnProps() {
        return {
            ...super.getOwnProps(),
            options: this.options,
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AutocompleteControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: AutocompleteControlRenderer, selector: "AutocompleteControlRenderer", inputs: { options: "options" }, usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        type="text"
        (change)="onChange($event)"
        [id]="id"
        [formControl]="form"
        [matAutocomplete]="auto"
        (keydown)="updateFilter($event)"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-autocomplete
        autoActiveFirstOption
        #auto="matAutocomplete"
        (optionSelected)="onSelect($event)"
      >
        <mat-option
          *ngFor="let option of filteredOptions | async"
          [value]="option"
        >
          {{ option }}
        </mat-option>
      </mat-autocomplete>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "component", type: i7.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "directive", type: i7.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: AutocompleteControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'AutocompleteControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        type="text"
        (change)="onChange($event)"
        [id]="id"
        [formControl]="form"
        [matAutocomplete]="auto"
        (keydown)="updateFilter($event)"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-autocomplete
        autoActiveFirstOption
        #auto="matAutocomplete"
        (optionSelected)="onSelect($event)"
      >
        <mat-option
          *ngFor="let option of filteredOptions | async"
          [value]="option"
        >
          {{ option }}
        </mat-option>
      </mat-autocomplete>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; }, propDecorators: { options: [{
                type: Input
            }] } });
export const enumControlTester = rankWith(2, isEnumControl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvY29udHJvbHMvYXV0b2NvbXBsZXRlLnJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsT0FBTyxFQUNQLGFBQWEsRUFFYixhQUFhLEVBR2IsUUFBUSxHQUNULE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBRWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFnREgsTUFBTSxPQUFPLDJCQUNYLFNBQVEsZ0JBQWdCO0lBR2YsT0FBTyxDQUFXO0lBQzNCLGVBQWUsQ0FBdUI7SUFDdEMsWUFBWSxDQUFVO0lBQ3RCLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFaEIsWUFBWSxnQkFBeUM7UUFDbkQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELGFBQWEsR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFFbkQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FDaEQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUMvQixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFVO1FBQ3JCLFFBQVE7UUFDUixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsRUFBZ0M7UUFDdkMsTUFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUEwQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUM1QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FDMUQsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNULENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDbEIsQ0FBQyxHQUFHO1lBQ0osTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBQ1MsV0FBVztRQUNuQixPQUFPO1lBQ0wsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQzt3R0F0RFUsMkJBQTJCOzRGQUEzQiwyQkFBMkIsMEhBN0M1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQStCVDs7NEZBY1UsMkJBQTJCO2tCQS9DdkMsU0FBUzsrQkFDRSw2QkFBNkIsWUFDN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQlQsbUJBWWdCLHVCQUF1QixDQUFDLE1BQU07OEdBTXRDLE9BQU87c0JBQWYsS0FBSzs7QUFxRFIsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWlCLFFBQVEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcbiAgXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuICBcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICBcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsIEpzb25Gb3Jtc0NvbnRyb2wgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgQWN0aW9ucyxcbiAgY29tcG9zZVdpdGhVaSxcbiAgQ29udHJvbEVsZW1lbnQsXG4gIGlzRW51bUNvbnRyb2wsXG4gIE93blByb3BzT2ZDb250cm9sLFxuICBSYW5rZWRUZXN0ZXIsXG4gIHJhbmtXaXRoLFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuaW1wb3J0IHR5cGUgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUbyB1c2UgdGhpcyBjb21wb25lbnQgeW91IHdpbGwgbmVlZCB0byBhZGQgeW91ciBvd24gdGVzdGVyOlxuICogPHByZT48Y29kZT5cbiAqIC4uLlxuICogZXhwb3J0IGNvbnN0IEF1dG9jb21wbGV0ZUNvbnRyb2xSZW5kZXJlclRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoMiwgaXNFbnVtQ29udHJvbCk7XG4gKiAuLi5cbiAqIDwvY29kZT48L3ByZT5cbiAqIEFkZCB0aGUgdGVzdGVyIGFuZCByZW5kZXJlciB0byBKU09ORm9ybXMgcmVnaXN0cnk6XG4gKiA8cHJlPjxjb2RlPlxuICogLi4uXG4gKiB7IHRlc3RlcjogQXV0b2NvbXBsZXRlQ29udHJvbFJlbmRlcmVyVGVzdGVyLCByZW5kZXJlcjogQXV0b2NvbXBsZXRlQ29udHJvbFJlbmRlcmVyIH0sXG4gKiAuLi5cbiAqIDwvY29kZT48L3ByZT5cbiAqIEZ1cnRoZXJtb3JlIHlvdSBuZWVkIHRvIHVwZGF0ZSB5b3VyIG1vZHVsZS5cbiAqIDxwcmU+PGNvZGU+XG4gKiAuLi5cbiAqIGltcG9ydHM6IFtKc29uRm9ybXNBbmd1bGFyTWF0ZXJpYWxNb2R1bGUsIE1hdEF1dG9jb21wbGV0ZU1vZHVsZV0sXG4gKiBkZWNsYXJhdGlvbnM6IFtBdXRvY29tcGxldGVDb250cm9sUmVuZGVyZXJdXG4gKiAuLi5cbiAqIDwvY29kZT48L3ByZT5cbiAqXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0F1dG9jb21wbGV0ZUNvbnRyb2xSZW5kZXJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaGlkZGVuID8gJ25vbmUnIDogJycgfVwiPlxuICAgICAgPG1hdC1sYWJlbD57eyBsYWJlbCB9fTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1cIlxuICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgICAgICAoa2V5ZG93bik9XCJ1cGRhdGVGaWx0ZXIoJGV2ZW50KVwiXG4gICAgICAgIChmb2N1cyk9XCJmb2N1c2VkID0gdHJ1ZVwiXG4gICAgICAgIChmb2N1c291dCk9XCJmb2N1c2VkID0gZmFsc2VcIlxuICAgICAgLz5cbiAgICAgIDxtYXQtYXV0b2NvbXBsZXRlXG4gICAgICAgIGF1dG9BY3RpdmVGaXJzdE9wdGlvblxuICAgICAgICAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiXG4gICAgICAgIChvcHRpb25TZWxlY3RlZCk9XCJvblNlbGVjdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgICAgPG1hdC1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCJcbiAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IG9wdGlvbiB9fVxuICAgICAgICA8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1hdXRvY29tcGxldGU+XG4gICAgICA8bWF0LWhpbnQgKm5nSWY9XCJzaG91bGRTaG93VW5mb2N1c2VkRGVzY3JpcHRpb24oKSB8fCBmb2N1c2VkXCI+e3tcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgIH19PC9tYXQtaGludD5cbiAgICAgIDxtYXQtZXJyb3I+e3sgZXJyb3IgfX08L21hdC1lcnJvcj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gICAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb250cm9sUmVuZGVyZXJcbiAgZXh0ZW5kcyBKc29uRm9ybXNDb250cm9sXG4gIGltcGxlbWVudHMgT25Jbml0XG57XG4gIEBJbnB1dCgpIG9wdGlvbnM6IHN0cmluZ1tdO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBzaG91bGRGaWx0ZXI6IGJvb2xlYW47XG4gIGZvY3VzZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihqc29uZm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZSkge1xuICAgIHN1cGVyKGpzb25mb3Jtc1NlcnZpY2UpO1xuICB9XG4gIGdldEV2ZW50VmFsdWUgPSAoZXZlbnQ6IGFueSkgPT4gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG4gICAgdGhpcy5zaG91bGRGaWx0ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZm9ybS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAoKHZhbCkgPT4gdGhpcy5maWx0ZXIodmFsKSlcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVyKGV2ZW50OiBhbnkpIHtcbiAgICAvLyBFTlRFUlxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5zaG91bGRGaWx0ZXIgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG91bGRGaWx0ZXIgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0KGV2OiBNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50KSB7XG4gICAgY29uc3QgcGF0aCA9IGNvbXBvc2VXaXRoVWkodGhpcy51aXNjaGVtYSBhcyBDb250cm9sRWxlbWVudCwgdGhpcy5wYXRoKTtcbiAgICB0aGlzLnNob3VsZEZpbHRlciA9IGZhbHNlO1xuICAgIHRoaXMuanNvbkZvcm1zU2VydmljZS51cGRhdGVDb3JlKFxuICAgICAgQWN0aW9ucy51cGRhdGUocGF0aCwgKCkgPT4gZXYub3B0aW9uLnZhbHVlKVxuICAgICk7XG4gICAgdGhpcy50cmlnZ2VyVmFsaWRhdGlvbigpO1xuICB9XG5cbiAgZmlsdGVyKHZhbDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zIHx8IHRoaXMuc2NvcGVkU2NoZW1hLmVudW0gfHwgW10pLmZpbHRlcihcbiAgICAgIChvcHRpb24pID0+XG4gICAgICAgICF0aGlzLnNob3VsZEZpbHRlciB8fFxuICAgICAgICAhdmFsIHx8XG4gICAgICAgIG9wdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsLnRvTG93ZXJDYXNlKCkpID09PSAwXG4gICAgKTtcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0T3duUHJvcHMoKTogT3duUHJvcHNPZkF1dG9Db21wbGV0ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN1cGVyLmdldE93blByb3BzKCksXG4gICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZW51bUNvbnRyb2xUZXN0ZXI6IFJhbmtlZFRlc3RlciA9IHJhbmtXaXRoKDIsIGlzRW51bUNvbnRyb2wpO1xuXG5pbnRlcmZhY2UgT3duUHJvcHNPZkF1dG9Db21wbGV0ZSBleHRlbmRzIE93blByb3BzT2ZDb250cm9sIHtcbiAgb3B0aW9uczogc3RyaW5nW107XG59XG4iXX0=