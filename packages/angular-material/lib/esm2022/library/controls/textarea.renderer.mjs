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
import { isMultiLineControl, rankWith } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
export class TextAreaRenderer extends JsonFormsControl {
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.target.value || undefined;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextAreaRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextAreaRenderer, selector: "TextAreaRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <textarea
        matInput
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false"
      ></textarea>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextAreaRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'TextAreaRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <textarea
        matInput
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
        (focus)="focused = true"
        (focusout)="focused = false"
      ></textarea>
      <mat-hint *ngIf="shouldShowUnfocusedDescription() || focused">{{
        description
      }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}mat-form-field{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const TextAreaRendererTester = rankWith(2, isMultiLineControl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEucmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlicmFyeS9jb250cm9scy90ZXh0YXJlYS5yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkU7QUFDRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFrQzdFLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxnQkFBZ0I7SUFDcEQsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQixZQUFZLGdCQUF5QztRQUNuRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsYUFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxTQUFTLENBQUM7d0dBTHJELGdCQUFnQjs0RkFBaEIsZ0JBQWdCLCtFQTlCakI7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQlQ7OzRGQWNVLGdCQUFnQjtrQkFoQzVCLFNBQVM7K0JBQ0Usa0JBQWtCLFlBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULG1CQVlnQix1QkFBdUIsQ0FBQyxNQUFNOztBQVNqRCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBaUIsUUFBUSxDQUMxRCxDQUFDLEVBQ0Qsa0JBQWtCLENBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcbiAgXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuICBcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICBcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsIEpzb25Gb3Jtc0NvbnRyb2wgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNNdWx0aUxpbmVDb250cm9sLCBSYW5rZWRUZXN0ZXIsIHJhbmtXaXRoIH0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGV4dEFyZWFSZW5kZXJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG1hdC1mb3JtLWZpZWxkIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaGlkZGVuID8gJ25vbmUnIDogJycgfVwiPlxuICAgICAgPG1hdC1sYWJlbD57eyBsYWJlbCB9fTwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIG1hdElucHV0XG4gICAgICAgIChpbnB1dCk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgICAgW2Zvcm1Db250cm9sXT1cImZvcm1cIlxuICAgICAgICAoZm9jdXMpPVwiZm9jdXNlZCA9IHRydWVcIlxuICAgICAgICAoZm9jdXNvdXQpPVwiZm9jdXNlZCA9IGZhbHNlXCJcbiAgICAgID48L3RleHRhcmVhPlxuICAgICAgPG1hdC1oaW50ICpuZ0lmPVwic2hvdWxkU2hvd1VuZm9jdXNlZERlc2NyaXB0aW9uKCkgfHwgZm9jdXNlZFwiPnt7XG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9fTwvbWF0LWhpbnQ+XG4gICAgICA8bWF0LWVycm9yPnt7IGVycm9yIH19PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEFyZWFSZW5kZXJlciBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2wge1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKGpzb25mb3Jtc1NlcnZpY2U6IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cbiAgZ2V0RXZlbnRWYWx1ZSA9IChldmVudDogYW55KSA9PiBldmVudC50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xufVxuZXhwb3J0IGNvbnN0IFRleHRBcmVhUmVuZGVyZXJUZXN0ZXI6IFJhbmtlZFRlc3RlciA9IHJhbmtXaXRoKFxuICAyLFxuICBpc011bHRpTGluZUNvbnRyb2xcbik7XG4iXX0=