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
import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer, } from '@jsonforms/angular';
import { mapStateToLabelProps, rankWith, uiTypeIs, } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
export class LabelRenderer extends JsonFormsBaseRenderer {
    jsonFormsService;
    label;
    visible;
    subscription;
    constructor(jsonFormsService) {
        super();
        this.jsonFormsService = jsonFormsService;
    }
    ngOnInit() {
        this.subscription = this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = mapStateToLabelProps(state, this.getOwnProps());
                this.visible = props.visible;
                this.label = props.text;
            },
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LabelRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LabelRenderer, selector: "LabelRenderer", usesInheritance: true, ngImport: i0, template: ` <label class="mat-headline-6"> {{ label }} </label> `, isInline: true, styles: [":host{flex:1 1 auto}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LabelRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'LabelRenderer', template: ` <label class="mat-headline-6"> {{ label }} </label> `, styles: [":host{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const LabelRendererTester = rankWith(4, uiTypeIs('Label'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwucmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlicmFyeS9vdGhlci9sYWJlbC5yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkU7QUFDRixPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHFCQUFxQixHQUN0QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFHTCxvQkFBb0IsRUFHcEIsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGlCQUFpQixDQUFDOzs7QUFjekIsTUFBTSxPQUFPLGFBQ1gsU0FBUSxxQkFBbUM7SUFRdkI7SUFMcEIsS0FBSyxDQUFTO0lBQ2QsT0FBTyxDQUFVO0lBRVQsWUFBWSxDQUFlO0lBRW5DLFlBQW9CLGdCQUF5QztRQUMzRCxLQUFLLEVBQUUsQ0FBQztRQURVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7SUFFN0QsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3pELElBQUksRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRTtnQkFDOUIsTUFBTSxLQUFLLEdBQUcsb0JBQW9CLENBQ2hDLEtBQUssRUFDTCxJQUFJLENBQUMsV0FBVyxFQUFxQixDQUN0QyxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzFCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzt3R0E3QlUsYUFBYTs0RkFBYixhQUFhLDRFQVRkLHVEQUF1RDs7NEZBU3RELGFBQWE7a0JBWHpCLFNBQVM7K0JBQ0UsZUFBZSxZQUNmLHVEQUF1RDs7QUF5Q25FLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFpQixRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhlIE1JVCBMaWNlbnNlXG5cbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTkgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgSnNvbkZvcm1zQmFzZVJlbmRlcmVyLFxufSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgSnNvbkZvcm1zU3RhdGUsXG4gIExhYmVsRWxlbWVudCxcbiAgbWFwU3RhdGVUb0xhYmVsUHJvcHMsXG4gIE93blByb3BzT2ZMYWJlbCxcbiAgUmFua2VkVGVzdGVyLFxuICByYW5rV2l0aCxcbiAgdWlUeXBlSXMsXG59IGZyb20gJ0Bqc29uZm9ybXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnTGFiZWxSZW5kZXJlcicsXG4gIHRlbXBsYXRlOiBgIDxsYWJlbCBjbGFzcz1cIm1hdC1oZWFkbGluZS02XCI+IHt7IGxhYmVsIH19IDwvbGFiZWw+IGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTGFiZWxSZW5kZXJlclxuICBleHRlbmRzIEpzb25Gb3Jtc0Jhc2VSZW5kZXJlcjxMYWJlbEVsZW1lbnQ+XG4gIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXRcbntcbiAgbGFiZWw6IHN0cmluZztcbiAgdmlzaWJsZTogYm9vbGVhbjtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUganNvbkZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5qc29uRm9ybXNTZXJ2aWNlLiRzdGF0ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKHN0YXRlOiBKc29uRm9ybXNTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wcyA9IG1hcFN0YXRlVG9MYWJlbFByb3BzKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIHRoaXMuZ2V0T3duUHJvcHMoKSBhcyBPd25Qcm9wc09mTGFiZWxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy52aXNpYmxlID0gcHJvcHMudmlzaWJsZTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHByb3BzLnRleHQ7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTGFiZWxSZW5kZXJlclRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoNCwgdWlUeXBlSXMoJ0xhYmVsJykpO1xuIl19