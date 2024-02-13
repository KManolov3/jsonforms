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
import { ChangeDetectorRef, Component, Pipe, } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer, } from '@jsonforms/angular';
import { mapStateToLayoutProps, } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
export class LayoutRenderer extends JsonFormsBaseRenderer {
    jsonFormsService;
    changeDetectionRef;
    hidden;
    label;
    subscription;
    constructor(jsonFormsService, changeDetectionRef) {
        super();
        this.jsonFormsService = jsonFormsService;
        this.changeDetectionRef = changeDetectionRef;
    }
    ngOnInit() {
        this.subscription = this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = mapStateToLayoutProps(state, this.getOwnProps());
                this.label = props.label;
                this.hidden = !props.visible;
                this.changeDetectionRef.markForCheck();
            },
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    trackElement(_index, renderProp) {
        return renderProp
            ? renderProp.path + JSON.stringify(renderProp.uischema)
            : null;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: LayoutRenderer, selector: "ng-component", usesInheritance: true, ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutRenderer, decorators: [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export class LayoutChildrenRenderPropsPipe {
    transform(uischema, schema, path) {
        const elements = (uischema.elements || []).map((el) => ({
            uischema: el,
            schema: schema,
            path: path,
        }));
        return elements;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutChildrenRenderPropsPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: LayoutChildrenRenderPropsPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'layoutChildrenRenderProps' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvbGF5b3V0cy9sYXlvdXQucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUdMLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsSUFBSSxHQUNMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIscUJBQXFCLEdBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUdMLHFCQUFxQixHQUl0QixNQUFNLGlCQUFpQixDQUFDOzs7QUFNekIsTUFBTSxPQUFPLGNBQ1gsU0FBUSxxQkFBd0I7SUFRdEI7SUFDRTtJQU5aLE1BQU0sQ0FBVTtJQUNoQixLQUFLLENBQXFCO0lBQ2xCLFlBQVksQ0FBZTtJQUVuQyxZQUNVLGdCQUF5QyxFQUN2QyxrQkFBcUM7UUFFL0MsS0FBSyxFQUFFLENBQUM7UUFIQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3ZDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFHakQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3pELElBQUksRUFBRSxDQUFDLEtBQXFCLEVBQUUsRUFBRTtnQkFDOUIsTUFBTSxLQUFLLEdBQUcscUJBQXFCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDekMsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQWMsRUFBRSxVQUE4QjtRQUN6RCxPQUFPLFVBQVU7WUFDZixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDdkQsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNYLENBQUM7d0dBcENVLGNBQWM7NEZBQWQsY0FBYywyRUFGZixFQUFFOzs0RkFFRCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiOztBQXlDRCxNQUFNLE9BQU8sNkJBQTZCO0lBQ3hDLFNBQVMsQ0FDUCxRQUFnQixFQUNoQixNQUFrQixFQUNsQixJQUFZO1FBRVosTUFBTSxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO3dHQVpVLDZCQUE2QjtzR0FBN0IsNkJBQTZCOzs0RkFBN0IsNkJBQTZCO2tCQUR6QyxJQUFJO21CQUFDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhlIE1JVCBMaWNlbnNlXG5cbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTkgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG5cbiAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQge1xuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgUGlwZVRyYW5zZm9ybSxcbiAgUGlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgSnNvbkZvcm1zQmFzZVJlbmRlcmVyLFxufSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgSnNvbkZvcm1zU3RhdGUsXG4gIExheW91dCxcbiAgbWFwU3RhdGVUb0xheW91dFByb3BzLFxuICBPd25Qcm9wc09mUmVuZGVyZXIsXG4gIFVJU2NoZW1hRWxlbWVudCxcbiAgSnNvblNjaGVtYSxcbn0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcbmltcG9ydCB0eXBlIHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dFJlbmRlcmVyPFQgZXh0ZW5kcyBMYXlvdXQ+XG4gIGV4dGVuZHMgSnNvbkZvcm1zQmFzZVJlbmRlcmVyPFQ+XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3lcbntcbiAgaGlkZGVuOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUganNvbkZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5qc29uRm9ybXNTZXJ2aWNlLiRzdGF0ZS5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKHN0YXRlOiBKc29uRm9ybXNTdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9wcyA9IG1hcFN0YXRlVG9MYXlvdXRQcm9wcyhzdGF0ZSwgdGhpcy5nZXRPd25Qcm9wcygpKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IHByb3BzLmxhYmVsO1xuICAgICAgICB0aGlzLmhpZGRlbiA9ICFwcm9wcy52aXNpYmxlO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tFbGVtZW50KF9pbmRleDogbnVtYmVyLCByZW5kZXJQcm9wOiBPd25Qcm9wc09mUmVuZGVyZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiByZW5kZXJQcm9wXG4gICAgICA/IHJlbmRlclByb3AucGF0aCArIEpTT04uc3RyaW5naWZ5KHJlbmRlclByb3AudWlzY2hlbWEpXG4gICAgICA6IG51bGw7XG4gIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAnbGF5b3V0Q2hpbGRyZW5SZW5kZXJQcm9wcycgfSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRDaGlsZHJlblJlbmRlclByb3BzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgdWlzY2hlbWE6IExheW91dCxcbiAgICBzY2hlbWE6IEpzb25TY2hlbWEsXG4gICAgcGF0aDogc3RyaW5nXG4gICk6IE93blByb3BzT2ZSZW5kZXJlcltdIHtcbiAgICBjb25zdCBlbGVtZW50cyA9ICh1aXNjaGVtYS5lbGVtZW50cyB8fCBbXSkubWFwKChlbDogVUlTY2hlbWFFbGVtZW50KSA9PiAoe1xuICAgICAgdWlzY2hlbWE6IGVsLFxuICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgIH0pKTtcbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cbn1cbiJdfQ==