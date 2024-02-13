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
import { rankWith, uiTypeIs } from '@jsonforms/core';
import { LayoutRenderer } from './layout.renderer';
import { JsonFormsAngularService } from '@jsonforms/angular';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/card";
import * as i4 from "./layout.renderer";
export class GroupLayoutRenderer extends LayoutRenderer {
    constructor(jsonFormsService, changeDetectionRef) {
        super(jsonFormsService, changeDetectionRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GroupLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: GroupLayoutRenderer, selector: "GroupLayoutRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-card
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      appearance="outlined"
      class="group-layout"
    >
      <mat-card-title class="mat-headline-6">{{ label }}</mat-card-title>
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </mat-card>
  `, isInline: true, styles: [".group-layout{display:flex;flex-direction:column;gap:16px;padding:16px}.group-layout>div{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i3.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "pipe", type: i4.LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: GroupLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'GroupLayoutRenderer', template: `
    <mat-card
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      appearance="outlined"
      class="group-layout"
    >
      <mat-card-title class="mat-headline-6">{{ label }}</mat-card-title>
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </mat-card>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".group-layout{display:flex;flex-direction:column;gap:16px;padding:16px}.group-layout>div{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const groupLayoutTester = rankWith(1, uiTypeIs('Group'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAtbGF5b3V0LnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvbGF5b3V0cy9ncm91cC1sYXlvdXQucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBNkIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBb0M3RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsY0FBMkI7SUFDbEUsWUFDRSxnQkFBeUMsRUFDekMsa0JBQXFDO1FBRXJDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7d0dBTlUsbUJBQW1COzRGQUFuQixtQkFBbUIsa0ZBaENwQjs7Ozs7Ozs7Ozs7Ozs7OztHQWdCVDs7NEZBZ0JVLG1CQUFtQjtrQkFsQy9CLFNBQVM7K0JBQ0UscUJBQXFCLFlBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JULG1CQWNnQix1QkFBdUIsQ0FBQyxNQUFNOztBQVVqRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBaUIsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuXG4gIENvcHlyaWdodCAoYykgMjAxNy0yMDE5IEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR3JvdXBMYXlvdXQsIFJhbmtlZFRlc3RlciwgcmFua1dpdGgsIHVpVHlwZUlzIH0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcbmltcG9ydCB7IExheW91dFJlbmRlcmVyIH0gZnJvbSAnLi9sYXlvdXQucmVuZGVyZXInO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdHcm91cExheW91dFJlbmRlcmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bWF0LWNhcmRcbiAgICAgIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaGlkZGVuID8gJ25vbmUnIDogJycgfVwiXG4gICAgICBhcHBlYXJhbmNlPVwib3V0bGluZWRcIlxuICAgICAgY2xhc3M9XCJncm91cC1sYXlvdXRcIlxuICAgID5cbiAgICAgIDxtYXQtY2FyZC10aXRsZSBjbGFzcz1cIm1hdC1oZWFkbGluZS02XCI+e3sgbGFiZWwgfX08L21hdC1jYXJkLXRpdGxlPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICBsZXQgcHJvcHMgb2YgdWlzY2hlbWEgfCBsYXlvdXRDaGlsZHJlblJlbmRlclByb3BzIDogc2NoZW1hIDogcGF0aDtcbiAgICAgICAgICB0cmFja0J5OiB0cmFja0VsZW1lbnRcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGpzb25mb3Jtcy1vdXRsZXQgW3JlbmRlclByb3BzXT1cInByb3BzXCI+PC9qc29uZm9ybXMtb3V0bGV0PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtY2FyZD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmdyb3VwLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cbiAgICAgIC5ncm91cC1sYXlvdXQgPiBkaXYge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBMYXlvdXRSZW5kZXJlciBleHRlbmRzIExheW91dFJlbmRlcmVyPEdyb3VwTGF5b3V0PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGpzb25Gb3Jtc1NlcnZpY2U6IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlLFxuICAgIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoanNvbkZvcm1zU2VydmljZSwgY2hhbmdlRGV0ZWN0aW9uUmVmKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGdyb3VwTGF5b3V0VGVzdGVyOiBSYW5rZWRUZXN0ZXIgPSByYW5rV2l0aCgxLCB1aVR5cGVJcygnR3JvdXAnKSk7XG4iXX0=