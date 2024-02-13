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
import { rankWith, uiTypeIs, } from '@jsonforms/core';
import { LayoutRenderer } from './layout.renderer';
import { JsonFormsAngularService } from '@jsonforms/angular';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "./layout.renderer";
export class HorizontalLayoutRenderer extends LayoutRenderer {
    constructor(jsonFormsService, changeDetectionRef) {
        super(jsonFormsService, changeDetectionRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HorizontalLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: HorizontalLayoutRenderer, selector: "HorizontalLayoutRenderer", usesInheritance: true, ngImport: i0, template: `
    <div
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="horizontal-layout"
    >
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, isInline: true, styles: [".horizontal-layout{display:flex;gap:16px;flex-flow:row wrap;align-items:flex-start;place-content:flex-start center}.horizontal-layout>div{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "pipe", type: i3.LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: HorizontalLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'HorizontalLayoutRenderer', template: `
    <div
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="horizontal-layout"
    >
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".horizontal-layout{display:flex;gap:16px;flex-flow:row wrap;align-items:flex-start;place-content:flex-start center}.horizontal-layout>div{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const horizontalLayoutTester = rankWith(1, uiTypeIs('HorizontalLayout'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9yaXpvbnRhbC1sYXlvdXQucmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlicmFyeS9sYXlvdXRzL2hvcml6b250YWwtbGF5b3V0LnJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBR0wsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFtQzdELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxjQUFnQztJQUM1RSxZQUNFLGdCQUF5QyxFQUN6QyxrQkFBcUM7UUFFckMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQzt3R0FOVSx3QkFBd0I7NEZBQXhCLHdCQUF3Qix1RkEvQnpCOzs7Ozs7Ozs7Ozs7OztHQWNUOzs0RkFpQlUsd0JBQXdCO2tCQWpDcEMsU0FBUzsrQkFDRSwwQkFBMEIsWUFDMUI7Ozs7Ozs7Ozs7Ozs7O0dBY1QsbUJBZWdCLHVCQUF1QixDQUFDLE1BQU07O0FBVWpELE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFpQixRQUFRLENBQzFELENBQUMsRUFDRCxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FDN0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSG9yaXpvbnRhbExheW91dCxcbiAgUmFua2VkVGVzdGVyLFxuICByYW5rV2l0aCxcbiAgdWlUeXBlSXMsXG59IGZyb20gJ0Bqc29uZm9ybXMvY29yZSc7XG5pbXBvcnQgeyBMYXlvdXRSZW5kZXJlciB9IGZyb20gJy4vbGF5b3V0LnJlbmRlcmVyJztcbmltcG9ydCB7IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlIH0gZnJvbSAnQGpzb25mb3Jtcy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnSG9yaXpvbnRhbExheW91dFJlbmRlcmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICcnIH1cIlxuICAgICAgY2xhc3M9XCJob3Jpem9udGFsLWxheW91dFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICBsZXQgcHJvcHMgb2YgdWlzY2hlbWEgfCBsYXlvdXRDaGlsZHJlblJlbmRlclByb3BzIDogc2NoZW1hIDogcGF0aDtcbiAgICAgICAgICB0cmFja0J5OiB0cmFja0VsZW1lbnRcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGpzb25mb3Jtcy1vdXRsZXQgW3JlbmRlclByb3BzXT1cInByb3BzXCI+PC9qc29uZm9ybXMtb3V0bGV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC5ob3Jpem9udGFsLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgY2VudGVyO1xuICAgICAgfVxuICAgICAgLmhvcml6b250YWwtbGF5b3V0ID4gZGl2IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxMYXlvdXRSZW5kZXJlciBleHRlbmRzIExheW91dFJlbmRlcmVyPEhvcml6b250YWxMYXlvdXQ+IHtcbiAgY29uc3RydWN0b3IoXG4gICAganNvbkZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsXG4gICAgY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihqc29uRm9ybXNTZXJ2aWNlLCBjaGFuZ2VEZXRlY3Rpb25SZWYpO1xuICB9XG59XG5leHBvcnQgY29uc3QgaG9yaXpvbnRhbExheW91dFRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoXG4gIDEsXG4gIHVpVHlwZUlzKCdIb3Jpem9udGFsTGF5b3V0Jylcbik7XG4iXX0=