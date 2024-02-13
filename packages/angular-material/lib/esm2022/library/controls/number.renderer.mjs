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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { isIntegerControl, isNumberControl, or, rankWith, } from '@jsonforms/core';
import merge from 'lodash/merge';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
export class NumberControlRenderer extends JsonFormsControl {
    MAXIMUM_FRACTIONAL_DIGITS = 20;
    oldValue;
    min;
    max;
    multipleOf;
    locale;
    numberFormat;
    decimalSeparator;
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    onChange(ev) {
        const data = this.oldValue
            ? ev.target.value.replace(this.oldValue, '')
            : ev.target.value;
        // ignore these
        if (data === '.' ||
            data === ',' ||
            data === ' ' ||
            // if the value is 0 and we already have a value then we ignore
            (data === '0' &&
                this.getValue() !== '' &&
                // a 0 in the first place
                ((ev.target.selectionStart === 1 && ev.target.selectionEnd === 1) ||
                    // or in the last place as this doesn't change the value (when there is a separator)
                    (ev.target.selectionStart === ev.target.value.length &&
                        ev.target.selectionEnd === ev.target.value.length &&
                        ev.target.value.indexOf(this.decimalSeparator) !== -1)))) {
            this.oldValue = ev.target.value;
            return;
        }
        super.onChange(ev);
        this.oldValue = this.getValue();
    }
    getEventValue = (event) => {
        const cleanPattern = new RegExp(`[^-+0-9${this.decimalSeparator}]`, 'g');
        const cleaned = event.target.value.replace(cleanPattern, '');
        const normalized = cleaned.replace(this.decimalSeparator, '.');
        if (normalized === '') {
            return undefined;
        }
        // convert to number
        const number = +normalized;
        // if not a number just return the string
        if (Number.isNaN(number)) {
            return event.target.value;
        }
        return number;
    };
    getValue = () => {
        if (this.data !== undefined && this.data !== null) {
            if (typeof this.data === 'number') {
                return this.numberFormat.format(this.data);
            }
            return this.data;
        }
        return '';
    };
    mapAdditionalProps(props) {
        if (this.scopedSchema) {
            const testerContext = {
                rootSchema: this.rootSchema,
                config: props.config,
            };
            const defaultStep = isNumberControl(this.uischema, this.rootSchema, testerContext)
                ? 0.1
                : 1;
            this.min = this.scopedSchema.minimum;
            this.max = this.scopedSchema.maximum;
            this.multipleOf = this.scopedSchema.multipleOf || defaultStep;
            const appliedUiSchemaOptions = merge({}, props.config, this.uischema.options);
            const currentLocale = this.jsonFormsService.getLocale();
            if (this.locale === undefined || this.locale !== currentLocale) {
                this.locale = currentLocale;
                this.numberFormat = new Intl.NumberFormat(this.locale, {
                    useGrouping: appliedUiSchemaOptions.useGrouping,
                    maximumFractionDigits: this.MAXIMUM_FRACTIONAL_DIGITS,
                });
                this.determineDecimalSeparator();
                this.oldValue = this.getValue();
            }
            this.form.setValue(this.getValue());
        }
    }
    determineDecimalSeparator() {
        const example = this.numberFormat.format(1.1);
        this.decimalSeparator = example.charAt(1);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumberControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NumberControlRenderer, selector: "NumberControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        (input)="onChange($event)"
        [value]="getValue()"
        [id]="id"
        [formControl]="form"
        [min]="min"
        [max]="max"
        [step]="multipleOf"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NumberControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'NumberControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        (input)="onChange($event)"
        [value]="getValue()"
        [id]="id"
        [formControl]="form"
        [min]="min"
        [max]="max"
        [step]="multipleOf"
        (focus)="focused = true"
        (focusout)="focused = false"
      />
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const NumberControlRendererTester = rankWith(2, or(isNumberControl, isIntegerControl));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvY29udHJvbHMvbnVtYmVyLnJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsRUFBRSxFQUVGLFFBQVEsR0FFVCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sS0FBSyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQXNDakMsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjtJQUN4Qyx5QkFBeUIsR0FBRyxFQUFFLENBQUM7SUFFaEQsUUFBUSxDQUFTO0lBQ2pCLEdBQUcsQ0FBUztJQUNaLEdBQUcsQ0FBUztJQUNaLFVBQVUsQ0FBUztJQUNuQixNQUFNLENBQVM7SUFDZixZQUFZLENBQW9CO0lBQ2hDLGdCQUFnQixDQUFTO0lBQ3pCLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFaEIsWUFBWSxnQkFBeUM7UUFDbkQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxFQUFPO1FBQ2QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztZQUM1QyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDcEIsZUFBZTtRQUNmLElBQ0UsSUFBSSxLQUFLLEdBQUc7WUFDWixJQUFJLEtB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b0ZBbEN0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7OzRGQWNVLHFCQUFxQjtrQkFwQ2pDLFNBQVM7K0JBQ0UsdUJBQXVCLFlBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVCxtQkFZZ0IsdUJBQXVCLENBQUMsTUFBTTs7QUFnSGpELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFpQixRQUFRLENBQy9ELENBQUMsRUFDRCxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixDQUFDLENBQ3RDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcbiAgXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuICBcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICBcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsIEpzb25Gb3Jtc0NvbnRyb2wgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgaXNJbnRlZ2VyQ29udHJvbCxcbiAgaXNOdW1iZXJDb250cm9sLFxuICBvcixcbiAgUmFua2VkVGVzdGVyLFxuICByYW5rV2l0aCxcbiAgU3RhdGVQcm9wc09mQ29udHJvbCxcbn0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcbmltcG9ydCBtZXJnZSBmcm9tICdsb2Rhc2gvbWVyZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdOdW1iZXJDb250cm9sUmVuZGVyZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZCBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICcnIH1cIj5cbiAgICAgIDxtYXQtbGFiZWw+e3sgbGFiZWwgfX08L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFt2YWx1ZV09XCJnZXRWYWx1ZSgpXCJcbiAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1cIlxuICAgICAgICBbbWluXT1cIm1pblwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW3N0ZXBdPVwibXVsdGlwbGVPZlwiXG4gICAgICAgIChmb2N1cyk9XCJmb2N1c2VkID0gdHJ1ZVwiXG4gICAgICAgIChmb2N1c291dCk9XCJmb2N1c2VkID0gZmFsc2VcIlxuICAgICAgLz5cbiAgICAgIDxtYXQtaGludCAqbmdJZj1cInNob3VsZFNob3dVbmZvY3VzZWREZXNjcmlwdGlvbigpIHx8IGZvY3VzZWRcIj57e1xuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgfX08L21hdC1oaW50PlxuICAgICAgPG1hdC1lcnJvcj57eyBlcnJvciB9fTwvbWF0LWVycm9yPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckNvbnRyb2xSZW5kZXJlciBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2wge1xuICBwcml2YXRlIHJlYWRvbmx5IE1BWElNVU1fRlJBQ1RJT05BTF9ESUdJVFMgPSAyMDtcblxuICBvbGRWYWx1ZTogc3RyaW5nO1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIG11bHRpcGxlT2Y6IG51bWJlcjtcbiAgbG9jYWxlOiBzdHJpbmc7XG4gIG51bWJlckZvcm1hdDogSW50bC5OdW1iZXJGb3JtYXQ7XG4gIGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZztcbiAgZm9jdXNlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGpzb25mb3Jtc1NlcnZpY2U6IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cblxuICBvbkNoYW5nZShldjogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMub2xkVmFsdWVcbiAgICAgID8gZXYudGFyZ2V0LnZhbHVlLnJlcGxhY2UodGhpcy5vbGRWYWx1ZSwgJycpXG4gICAgICA6IGV2LnRhcmdldC52YWx1ZTtcbiAgICAvLyBpZ25vcmUgdGhlc2VcbiAgICBpZiAoXG4gICAgICBkYXRhID09PSAnLicgfHxcbiAgICAgIGRhdGEgPT09ICcsJyB8fFxuICAgICAgZGF0YSA9PT0gJyAnIHx8XG4gICAgICAvLyBpZiB0aGUgdmFsdWUgaXMgMCBhbmQgd2UgYWxyZWFkeSBoYXZlIGEgdmFsdWUgdGhlbiB3ZSBpZ25vcmVcbiAgICAgIChkYXRhID09PSAnMCcgJiZcbiAgICAgICAgdGhpcy5nZXRWYWx1ZSgpICE9PSAnJyAmJlxuICAgICAgICAvLyBhIDAgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgICAgICgoZXYudGFyZ2V0LnNlbGVjdGlvblN0YXJ0ID09PSAxICYmIGV2LnRhcmdldC5zZWxlY3Rpb25FbmQgPT09IDEpIHx8XG4gICAgICAgICAgLy8gb3IgaW4gdGhlIGxhc3QgcGxhY2UgYXMgdGhpcyBkb2Vzbid0IGNoYW5nZSB0aGUgdmFsdWUgKHdoZW4gdGhlcmUgaXMgYSBzZXBhcmF0b3IpXG4gICAgICAgICAgKGV2LnRhcmdldC5zZWxlY3Rpb25TdGFydCA9PT0gZXYudGFyZ2V0LnZhbHVlLmxlbmd0aCAmJlxuICAgICAgICAgICAgZXYudGFyZ2V0LnNlbGVjdGlvbkVuZCA9PT0gZXYudGFyZ2V0LnZhbHVlLmxlbmd0aCAmJlxuICAgICAgICAgICAgZXYudGFyZ2V0LnZhbHVlLmluZGV4T2YodGhpcy5kZWNpbWFsU2VwYXJhdG9yKSAhPT0gLTEpKSlcbiAgICApIHtcbiAgICAgIHRoaXMub2xkVmFsdWUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1cGVyLm9uQ2hhbmdlKGV2KTtcbiAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICB9XG5cbiAgZ2V0RXZlbnRWYWx1ZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgY2xlYW5QYXR0ZXJuID0gbmV3IFJlZ0V4cChgW14tKzAtOSR7dGhpcy5kZWNpbWFsU2VwYXJhdG9yfV1gLCAnZycpO1xuICAgIGNvbnN0IGNsZWFuZWQgPSBldmVudC50YXJnZXQudmFsdWUucmVwbGFjZShjbGVhblBhdHRlcm4sICcnKTtcbiAgICBjb25zdCBub3JtYWxpemVkID0gY2xlYW5lZC5yZXBsYWNlKHRoaXMuZGVjaW1hbFNlcGFyYXRvciwgJy4nKTtcblxuICAgIGlmIChub3JtYWxpemVkID09PSAnJykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBjb252ZXJ0IHRvIG51bWJlclxuICAgIGNvbnN0IG51bWJlciA9ICtub3JtYWxpemVkO1xuICAgIC8vIGlmIG5vdCBhIG51bWJlciBqdXN0IHJldHVybiB0aGUgc3RyaW5nXG4gICAgaWYgKE51bWJlci5pc05hTihudW1iZXIpKSB7XG4gICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gbnVtYmVyO1xuICB9O1xuXG4gIGdldFZhbHVlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmRhdGEgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmRhdGEgIT09IG51bGwpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXQuZm9ybWF0KHRoaXMuZGF0YSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH07XG5cbiAgbWFwQWRkaXRpb25hbFByb3BzKHByb3BzOiBTdGF0ZVByb3BzT2ZDb250cm9sKSB7XG4gICAgaWYgKHRoaXMuc2NvcGVkU2NoZW1hKSB7XG4gICAgICBjb25zdCB0ZXN0ZXJDb250ZXh0ID0ge1xuICAgICAgICByb290U2NoZW1hOiB0aGlzLnJvb3RTY2hlbWEsXG4gICAgICAgIGNvbmZpZzogcHJvcHMuY29uZmlnLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGRlZmF1bHRTdGVwID0gaXNOdW1iZXJDb250cm9sKFxuICAgICAgICB0aGlzLnVpc2NoZW1hLFxuICAgICAgICB0aGlzLnJvb3RTY2hlbWEsXG4gICAgICAgIHRlc3RlckNvbnRleHRcbiAgICAgIClcbiAgICAgICAgPyAwLjFcbiAgICAgICAgOiAxO1xuICAgICAgdGhpcy5taW4gPSB0aGlzLnNjb3BlZFNjaGVtYS5taW5pbXVtO1xuICAgICAgdGhpcy5tYXggPSB0aGlzLnNjb3BlZFNjaGVtYS5tYXhpbXVtO1xuICAgICAgdGhpcy5tdWx0aXBsZU9mID0gdGhpcy5zY29wZWRTY2hlbWEubXVsdGlwbGVPZiB8fCBkZWZhdWx0U3RlcDtcbiAgICAgIGNvbnN0IGFwcGxpZWRVaVNjaGVtYU9wdGlvbnMgPSBtZXJnZShcbiAgICAgICAge30sXG4gICAgICAgIHByb3BzLmNvbmZpZyxcbiAgICAgICAgdGhpcy51aXNjaGVtYS5vcHRpb25zXG4gICAgICApO1xuICAgICAgY29uc3QgY3VycmVudExvY2FsZSA9IHRoaXMuanNvbkZvcm1zU2VydmljZS5nZXRMb2NhbGUoKTtcbiAgICAgIGlmICh0aGlzLmxvY2FsZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubG9jYWxlICE9PSBjdXJyZW50TG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gY3VycmVudExvY2FsZTtcbiAgICAgICAgdGhpcy5udW1iZXJGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHtcbiAgICAgICAgICB1c2VHcm91cGluZzogYXBwbGllZFVpU2NoZW1hT3B0aW9ucy51c2VHcm91cGluZyxcbiAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IHRoaXMuTUFYSU1VTV9GUkFDVElPTkFMX0RJR0lUUyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGV0ZXJtaW5lRGVjaW1hbFNlcGFyYXRvcigpO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXRlcm1pbmVEZWNpbWFsU2VwYXJhdG9yKCk6IHZvaWQge1xuICAgIGNvbnN0IGV4YW1wbGUgPSB0aGlzLm51bWJlckZvcm1hdC5mb3JtYXQoMS4xKTtcbiAgICB0aGlzLmRlY2ltYWxTZXBhcmF0b3IgPSBleGFtcGxlLmNoYXJBdCgxKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IE51bWJlckNvbnRyb2xSZW5kZXJlclRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoXG4gIDIsXG4gIG9yKGlzTnVtYmVyQ29udHJvbCwgaXNJbnRlZ2VyQ29udHJvbClcbik7XG4iXX0=