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
import { isStringControl, rankWith } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
export class TextControlRenderer extends JsonFormsControl {
    focused = false;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    getEventValue = (event) => event.target.value || undefined;
    getType = () => {
        if (this.uischema.options && this.uischema.options.format) {
            return this.uischema.options.format;
        }
        if (this.scopedSchema && this.scopedSchema.format) {
            switch (this.scopedSchema.format) {
                case 'email':
                    return 'email';
                case 'tel':
                    return 'tel';
                default:
                    return 'text';
            }
        }
        return 'text';
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TextControlRenderer, selector: "TextControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="getType()"
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TextControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'TextControlRenderer', template: `
    <mat-form-field [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-label>{{ label }}</mat-label>
      <input
        matInput
        [type]="getType()"
        (input)="onChange($event)"
        [id]="id"
        [formControl]="form"
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
export const TextControlRendererTester = rankWith(1, isStringControl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWJyYXJ5L2NvbnRyb2xzL3RleHQucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFnQixRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztBQW1DMUUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjtJQUN2RCxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLFlBQVksZ0JBQXlDO1FBQ25ELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxhQUFhLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQztJQUNoRSxPQUFPLEdBQUcsR0FBVyxFQUFFO1FBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3pELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1NBQ3JDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1lBQ2pELFFBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLEtBQUssT0FBTztvQkFDVixPQUFPLE9BQU8sQ0FBQztnQkFDakIsS0FBSyxLQUFLO29CQUNSLE9BQU8sS0FBSyxDQUFDO2dCQUNmO29CQUNFLE9BQU8sTUFBTSxDQUFDO2FBQ2pCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDLENBQUM7d0dBckJTLG1CQUFtQjs0RkFBbkIsbUJBQW1CLGtGQS9CcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUOzs0RkFjVSxtQkFBbUI7a0JBakMvQixTQUFTOytCQUNFLHFCQUFxQixZQUNyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQsbUJBWWdCLHVCQUF1QixDQUFDLE1BQU07O0FBeUJqRCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBaUIsUUFBUSxDQUM3RCxDQUFDLEVBQ0QsZUFBZSxDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhlIE1JVCBMaWNlbnNlXG4gIFxuICBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBFY2xpcHNlU291cmNlIE11bmljaFxuICBodHRwczovL2dpdGh1Yi5jb20vZWNsaXBzZXNvdXJjZS9qc29uZm9ybXNcbiAgXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gIFxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAgXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgVEhFIFNPRlRXQVJFLlxuKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlLCBKc29uRm9ybXNDb250cm9sIH0gZnJvbSAnQGpzb25mb3Jtcy9hbmd1bGFyJztcbmltcG9ydCB7IGlzU3RyaW5nQ29udHJvbCwgUmFua2VkVGVzdGVyLCByYW5rV2l0aCB9IGZyb20gJ0Bqc29uZm9ybXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1RleHRDb250cm9sUmVuZGVyZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtZm9ybS1maWVsZCBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICcnIH1cIj5cbiAgICAgIDxtYXQtbGFiZWw+e3sgbGFiZWwgfX08L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBtYXRJbnB1dFxuICAgICAgICBbdHlwZV09XCJnZXRUeXBlKClcIlxuICAgICAgICAoaW5wdXQpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtpZF09XCJpZFwiXG4gICAgICAgIFtmb3JtQ29udHJvbF09XCJmb3JtXCJcbiAgICAgICAgKGZvY3VzKT1cImZvY3VzZWQgPSB0cnVlXCJcbiAgICAgICAgKGZvY3Vzb3V0KT1cImZvY3VzZWQgPSBmYWxzZVwiXG4gICAgICAvPlxuICAgICAgPG1hdC1oaW50ICpuZ0lmPVwic2hvdWxkU2hvd1VuZm9jdXNlZERlc2NyaXB0aW9uKCkgfHwgZm9jdXNlZFwiPnt7XG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9fTwvbWF0LWhpbnQ+XG4gICAgICA8bWF0LWVycm9yPnt7IGVycm9yIH19PC9tYXQtZXJyb3I+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgfVxuICAgICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dENvbnRyb2xSZW5kZXJlciBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2wge1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKGpzb25mb3Jtc1NlcnZpY2U6IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cbiAgZ2V0RXZlbnRWYWx1ZSA9IChldmVudDogYW55KSA9PiBldmVudC50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkO1xuICBnZXRUeXBlID0gKCk6IHN0cmluZyA9PiB7XG4gICAgaWYgKHRoaXMudWlzY2hlbWEub3B0aW9ucyAmJiB0aGlzLnVpc2NoZW1hLm9wdGlvbnMuZm9ybWF0KSB7XG4gICAgICByZXR1cm4gdGhpcy51aXNjaGVtYS5vcHRpb25zLmZvcm1hdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcGVkU2NoZW1hICYmIHRoaXMuc2NvcGVkU2NoZW1hLmZvcm1hdCkge1xuICAgICAgc3dpdGNoICh0aGlzLnNjb3BlZFNjaGVtYS5mb3JtYXQpIHtcbiAgICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICAgIHJldHVybiAnZW1haWwnO1xuICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICAgIHJldHVybiAndGVsJztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJ3RleHQnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ3RleHQnO1xuICB9O1xufVxuZXhwb3J0IGNvbnN0IFRleHRDb250cm9sUmVuZGVyZXJUZXN0ZXI6IFJhbmtlZFRlc3RlciA9IHJhbmtXaXRoKFxuICAxLFxuICBpc1N0cmluZ0NvbnRyb2xcbik7XG4iXX0=