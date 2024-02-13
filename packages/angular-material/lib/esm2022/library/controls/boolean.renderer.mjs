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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { isBooleanControl, rankWith } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/checkbox";
export class BooleanControlRenderer extends JsonFormsControl {
    changeDetectionRef;
    constructor(jsonformsService, changeDetectionRef) {
        super(jsonformsService);
        this.changeDetectionRef = changeDetectionRef;
    }
    isChecked = () => this.data || false;
    getEventValue = (event) => event.checked;
    mapAdditionalProps() {
        if (!this.changeDetectionRef.destroyed) {
            this.changeDetectionRef.markForCheck();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BooleanControlRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BooleanControlRenderer, selector: "BooleanControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="boolean-control">
      <mat-checkbox
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-checkbox>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}.boolean-control{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;height:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BooleanControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'BooleanControlRenderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="boolean-control">
      <mat-checkbox
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-checkbox>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}.boolean-control{flex:1 1 auto;display:flex;flex-direction:column;justify-content:center;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const booleanControlTester = rankWith(2, isBooleanControl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWJyYXJ5L2NvbnRyb2xzL2Jvb2xlYW4ucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZ0IsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQXFDM0UsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjtJQUdoRDtJQUZWLFlBQ0UsZ0JBQXlDLEVBQ2pDLGtCQUFxQztRQUU3QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUZoQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBRy9DLENBQUM7SUFDRCxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckMsYUFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTlDLGtCQUFrQjtRQUNoQixJQUFJLENBQUUsSUFBSSxDQUFDLGtCQUE4QixDQUFDLFNBQVMsRUFBRTtZQUNuRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDO3dHQWRVLHNCQUFzQjs0RkFBdEIsc0JBQXNCLHFGQWpDdkI7Ozs7Ozs7Ozs7Ozs7OztHQWVUOzs0RkFrQlUsc0JBQXNCO2tCQW5DbEMsU0FBUzsrQkFDRSx3QkFBd0IsWUFDeEI7Ozs7Ozs7Ozs7Ozs7OztHQWVULG1CQWdCZ0IsdUJBQXVCLENBQUMsTUFBTTs7QUFtQmpELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFpQixRQUFRLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcbiAgXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuICBcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICBcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIFZpZXdSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsIEpzb25Gb3Jtc0NvbnRyb2wgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNCb29sZWFuQ29udHJvbCwgUmFua2VkVGVzdGVyLCByYW5rV2l0aCB9IGZyb20gJ0Bqc29uZm9ybXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0Jvb2xlYW5Db250cm9sUmVuZGVyZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nU3R5bGVdPVwieyBkaXNwbGF5OiBoaWRkZW4gPyAnbm9uZScgOiAnJyB9XCIgY2xhc3M9XCJib29sZWFuLWNvbnRyb2xcIj5cbiAgICAgIDxtYXQtY2hlY2tib3hcbiAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiaXNDaGVja2VkKClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiIWlzRW5hYmxlZCgpXCJcbiAgICAgICAgW2lkXT1cImlkXCJcbiAgICAgID5cbiAgICAgICAge3sgbGFiZWwgfX1cbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgICAgPG1hdC1oaW50IGNsYXNzPVwibWF0LWNhcHRpb25cIiAqbmdJZj1cInNob3VsZFNob3dVbmZvY3VzZWREZXNjcmlwdGlvbigpXCI+e3tcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgIH19PC9tYXQtaGludD5cbiAgICAgIDxtYXQtZXJyb3IgY2xhc3M9XCJtYXQtY2FwdGlvblwiPnt7IGVycm9yIH19PC9tYXQtZXJyb3I+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgIC5ib29sZWFuLWNvbnRyb2wge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhbkNvbnRyb2xSZW5kZXJlciBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2wge1xuICBjb25zdHJ1Y3RvcihcbiAgICBqc29uZm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cbiAgaXNDaGVja2VkID0gKCkgPT4gdGhpcy5kYXRhIHx8IGZhbHNlO1xuICBnZXRFdmVudFZhbHVlID0gKGV2ZW50OiBhbnkpID0+IGV2ZW50LmNoZWNrZWQ7XG5cbiAgbWFwQWRkaXRpb25hbFByb3BzKCkge1xuICAgIGlmICghKHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib29sZWFuQ29udHJvbFRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoMiwgaXNCb29sZWFuQ29udHJvbCk7XG4iXX0=