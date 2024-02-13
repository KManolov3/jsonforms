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
import { and, isBooleanControl, optionIs, rankWith, } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/slide-toggle";
export class ToggleControlRenderer extends JsonFormsControl {
    changeDetectorRef;
    constructor(jsonformsService, changeDetectorRef) {
        super(jsonformsService);
        this.changeDetectorRef = changeDetectorRef;
    }
    isChecked = () => this.data || false;
    getEventValue = (event) => event.checked;
    mapAdditionalProps() {
        this.changeDetectorRef.markForCheck();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToggleControlRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ToggleControlRenderer, selector: "ToggleControlRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-slide-toggle
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-slide-toggle>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "component", type: i4.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ToggleControlRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'ToggleControlRenderer',
                    template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }">
      <mat-slide-toggle
        (change)="onChange($event)"
        [checked]="isChecked()"
        [disabled]="!isEnabled()"
        [id]="id"
      >
        {{ label }}
      </mat-slide-toggle>
      <mat-hint class="mat-caption" *ngIf="shouldShowUnfocusedDescription()">{{
        description
      }}</mat-hint>
      <mat-error class="mat-caption">{{ error }}</mat-error>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const ToggleControlRendererTester = rankWith(3, and(isBooleanControl, optionIs('toggle', true)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvY29udHJvbHMvdG9nZ2xlLnJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsR0FBRyxFQUNILGdCQUFnQixFQUNoQixRQUFRLEVBRVIsUUFBUSxHQUNULE1BQU0saUJBQWlCLENBQUM7Ozs7OztBQXNCekIsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjtJQUcvQztJQUZWLFlBQ0UsZ0JBQXlDLEVBQ2pDLGlCQUFvQztRQUU1QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUZoQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBRzlDLENBQUM7SUFDRCxTQUFTLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckMsYUFBYSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlDLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQzt3R0FYVSxxQkFBcUI7NEZBQXJCLHFCQUFxQixvRkFsQnRCOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDs7NEZBR1UscUJBQXFCO2tCQXBCakMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztHQWVUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7QUFlRCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBaUIsUUFBUSxDQUMvRCxDQUFDLEVBQ0QsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FDaEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuICBcbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTkgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG4gIFxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICBcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIFxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKc29uRm9ybXNBbmd1bGFyU2VydmljZSwgSnNvbkZvcm1zQ29udHJvbCB9IGZyb20gJ0Bqc29uZm9ybXMvYW5ndWxhcic7XG5pbXBvcnQge1xuICBhbmQsXG4gIGlzQm9vbGVhbkNvbnRyb2wsXG4gIG9wdGlvbklzLFxuICBSYW5rZWRUZXN0ZXIsXG4gIHJhbmtXaXRoLFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUb2dnbGVDb250cm9sUmVuZGVyZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW25nU3R5bGVdPVwieyBkaXNwbGF5OiBoaWRkZW4gPyAnbm9uZScgOiAnJyB9XCI+XG4gICAgICA8bWF0LXNsaWRlLXRvZ2dsZVxuICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbY2hlY2tlZF09XCJpc0NoZWNrZWQoKVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCIhaXNFbmFibGVkKClcIlxuICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgPlxuICAgICAgICB7eyBsYWJlbCB9fVxuICAgICAgPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICAgICAgPG1hdC1oaW50IGNsYXNzPVwibWF0LWNhcHRpb25cIiAqbmdJZj1cInNob3VsZFNob3dVbmZvY3VzZWREZXNjcmlwdGlvbigpXCI+e3tcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgIH19PC9tYXQtaGludD5cbiAgICAgIDxtYXQtZXJyb3IgY2xhc3M9XCJtYXQtY2FwdGlvblwiPnt7IGVycm9yIH19PC9tYXQtZXJyb3I+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUb2dnbGVDb250cm9sUmVuZGVyZXIgZXh0ZW5kcyBKc29uRm9ybXNDb250cm9sIHtcbiAgY29uc3RydWN0b3IoXG4gICAganNvbmZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cbiAgaXNDaGVja2VkID0gKCkgPT4gdGhpcy5kYXRhIHx8IGZhbHNlO1xuICBnZXRFdmVudFZhbHVlID0gKGV2ZW50OiBhbnkpID0+IGV2ZW50LmNoZWNrZWQ7XG4gIG1hcEFkZGl0aW9uYWxQcm9wcygpIHtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBUb2dnbGVDb250cm9sUmVuZGVyZXJUZXN0ZXI6IFJhbmtlZFRlc3RlciA9IHJhbmtXaXRoKFxuICAzLFxuICBhbmQoaXNCb29sZWFuQ29udHJvbCwgb3B0aW9uSXMoJ3RvZ2dsZScsIHRydWUpKVxuKTtcbiJdfQ==