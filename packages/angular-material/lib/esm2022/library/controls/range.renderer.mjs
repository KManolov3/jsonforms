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
import { ChangeDetectionStrategy, Component, ChangeDetectorRef, } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { isRangeControl, rankWith } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/slider";
export class RangeControlRenderer extends JsonFormsControl {
    changeDetectorRef;
    min;
    max;
    multipleOf;
    focused = false;
    constructor(jsonformsService, changeDetectorRef) {
        super(jsonformsService);
        this.changeDetectorRef = changeDetectorRef;
    }
    getEventValue = (event) => Number(event);
    mapAdditionalProps() {
        if (this.scopedSchema) {
            this.min = this.scopedSchema.minimum;
            this.max = this.scopedSchema.maximum;
            this.multipleOf = this.scopedSchema.multipleOf || 1;
        }
        this.changeDetectorRef.markForCheck();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RangeControlRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: RangeControlRenderer, selector: "RangeControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="range-control">
      <label class="mat-caption" style="color:rgba(0,0,0,.54)">{{
        label
      }}</label>
      <mat-slider
        [disabled]="!isEnabled()"
        [max]="max"
        [min]="min"
        [step]="multipleOf"
        [discrete]="true"
        [id]="id"
        showTickMarks
        #ngSlider
      >
        <input matSliderThumb (valueChange)="onChange($event)" />
      </mat-slider>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, isInline: true, styles: [":host{display:flex;flex-direction:row}.range-control{flex:1 1 auto;display:flex;flex-direction:column}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i4.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: RangeControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'RangeControlRenderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="range-control">
      <label class="mat-caption" style="color:rgba(0,0,0,.54)">{{
        label
      }}</label>
      <mat-slider
        [disabled]="!isEnabled()"
        [max]="max"
        [min]="min"
        [step]="multipleOf"
        [discrete]="true"
        [id]="id"
        showTickMarks
        #ngSlider
      >
        <input matSliderThumb (valueChange)="onChange($event)" />
      </mat-slider>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:flex;flex-direction:row}.range-control{flex:1 1 auto;display:flex;flex-direction:column}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const RangeControlRendererTester = rankWith(4, isRangeControl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UucmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlicmFyeS9jb250cm9scy9yYW5nZS5yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkU7QUFDRixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBZ0IsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQTBDekUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGdCQUFnQjtJQVE5QztJQVBWLEdBQUcsQ0FBUztJQUNaLEdBQUcsQ0FBUztJQUNaLFVBQVUsQ0FBUztJQUNuQixPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRWhCLFlBQ0UsZ0JBQXlDLEVBQ2pDLGlCQUFvQztRQUU1QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUZoQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRzlDLENBQUM7SUFDRCxhQUFhLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7WUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO3dHQXBCVSxvQkFBb0I7NEZBQXBCLG9CQUFvQixtRkF0Q3JCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUOzs0RkFnQlUsb0JBQW9CO2tCQXhDaEMsU0FBUzsrQkFDRSxzQkFBc0IsWUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQsbUJBY2dCLHVCQUF1QixDQUFDLE1BQU07O0FBd0JqRCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBaUIsUUFBUSxDQUM5RCxDQUFDLEVBQ0QsY0FBYyxDQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcbiAgXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuICBcbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICBcbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsIEpzb25Gb3Jtc0NvbnRyb2wgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHsgaXNSYW5nZUNvbnRyb2wsIFJhbmtlZFRlc3RlciwgcmFua1dpdGggfSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdSYW5nZUNvbnRyb2xSZW5kZXJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICcnIH1cIiBjbGFzcz1cInJhbmdlLWNvbnRyb2xcIj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cIm1hdC1jYXB0aW9uXCIgc3R5bGU9XCJjb2xvcjpyZ2JhKDAsMCwwLC41NClcIj57e1xuICAgICAgICBsYWJlbFxuICAgICAgfX08L2xhYmVsPlxuICAgICAgPG1hdC1zbGlkZXJcbiAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VuYWJsZWQoKVwiXG4gICAgICAgIFttYXhdPVwibWF4XCJcbiAgICAgICAgW21pbl09XCJtaW5cIlxuICAgICAgICBbc3RlcF09XCJtdWx0aXBsZU9mXCJcbiAgICAgICAgW2Rpc2NyZXRlXT1cInRydWVcIlxuICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICBzaG93VGlja01hcmtzXG4gICAgICAgICNuZ1NsaWRlclxuICAgICAgPlxuICAgICAgICA8aW5wdXQgbWF0U2xpZGVyVGh1bWIgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiAvPlxuICAgICAgPC9tYXQtc2xpZGVyPlxuICAgICAgPG1hdC1oaW50IGNsYXNzPVwibWF0LWNhcHRpb25cIiAqbmdJZj1cInNob3VsZFNob3dVbmZvY3VzZWREZXNjcmlwdGlvbigpXCI+e3tcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgIH19PC9tYXQtaGludD5cbiAgICAgIDxtYXQtZXJyb3IgY2xhc3M9XCJtYXQtY2FwdGlvblwiPnt7IGVycm9yIH19PC9tYXQtZXJyb3I+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgIC5yYW5nZS1jb250cm9sIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlQ29udHJvbFJlbmRlcmVyIGV4dGVuZHMgSnNvbkZvcm1zQ29udHJvbCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgbXVsdGlwbGVPZjogbnVtYmVyO1xuICBmb2N1c2VkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAganNvbmZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cbiAgZ2V0RXZlbnRWYWx1ZSA9IChldmVudDogbnVtYmVyKSA9PiBOdW1iZXIoZXZlbnQpO1xuICBtYXBBZGRpdGlvbmFsUHJvcHMoKSB7XG4gICAgaWYgKHRoaXMuc2NvcGVkU2NoZW1hKSB7XG4gICAgICB0aGlzLm1pbiA9IHRoaXMuc2NvcGVkU2NoZW1hLm1pbmltdW07XG4gICAgICB0aGlzLm1heCA9IHRoaXMuc2NvcGVkU2NoZW1hLm1heGltdW07XG4gICAgICB0aGlzLm11bHRpcGxlT2YgPSB0aGlzLnNjb3BlZFNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBSYW5nZUNvbnRyb2xSZW5kZXJlclRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoXG4gIDQsXG4gIGlzUmFuZ2VDb250cm9sXG4pO1xuIl19