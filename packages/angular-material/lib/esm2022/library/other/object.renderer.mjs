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
import isEmpty from 'lodash/isEmpty';
import startCase from 'lodash/startCase';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControlWithDetail, } from '@jsonforms/angular';
import { findUISchema, Generate, isObjectControl, rankWith, setReadonly, } from '@jsonforms/core';
import { cloneDeep } from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/material/card";
export class ObjectControlRenderer extends JsonFormsControlWithDetail {
    detailUiSchema;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    mapAdditionalProps(props) {
        this.detailUiSchema = findUISchema(props.uischemas, props.schema, props.uischema.scope, props.path, () => {
            const newSchema = cloneDeep(props.schema);
            // delete unsupported operators
            delete newSchema.oneOf;
            delete newSchema.anyOf;
            delete newSchema.allOf;
            return Generate.uiSchema(newSchema, 'Group', undefined, this.rootSchema);
        }, props.uischema, props.rootSchema);
        if (isEmpty(props.path)) {
            this.detailUiSchema.type = 'VerticalLayout';
        }
        else {
            this.detailUiSchema.label = startCase(props.path);
        }
        if (!this.isEnabled()) {
            setReadonly(this.detailUiSchema);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectControlRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ObjectControlRenderer, selector: "ObjectRenderer", usesInheritance: true, ngImport: i0, template: `
    <mat-card class="object-layout" appearance="outlined">
      <jsonforms-outlet
        [uischema]="detailUiSchema"
        [schema]="scopedSchema"
        [path]="propsPath"
      >
      </jsonforms-outlet>
    </mat-card>
  `, isInline: true, styles: [".object-layout{padding:16px}\n"], dependencies: [{ kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ObjectControlRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'ObjectRenderer', template: `
    <mat-card class="object-layout" appearance="outlined">
      <jsonforms-outlet
        [uischema]="detailUiSchema"
        [schema]="scopedSchema"
        [path]="propsPath"
      >
      </jsonforms-outlet>
    </mat-card>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".object-layout{padding:16px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const ObjectControlRendererTester = rankWith(2, isObjectControl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvb3RoZXIvb2JqZWN0LnJlbmRlcmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVCRTtBQUNGLE9BQU8sT0FBTyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHVCQUF1QixFQUN2QiwwQkFBMEIsR0FDM0IsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBRUwsWUFBWSxFQUNaLFFBQVEsRUFFUixlQUFlLEVBRWYsUUFBUSxFQUNSLFdBQVcsR0FFWixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7QUF1Qm5DLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSwwQkFBMEI7SUFDbkUsY0FBYyxDQUFrQjtJQUNoQyxZQUFZLGdCQUF5QztRQUNuRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsa0JBQWtCLENBQUMsS0FBNkI7UUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxZQUFZLENBQ2hDLEtBQUssQ0FBQyxTQUFTLEVBQ2YsS0FBSyxDQUFDLE1BQU0sRUFDWixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFDcEIsS0FBSyxDQUFDLElBQUksRUFDVixHQUFHLEVBQUU7WUFDSCxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLCtCQUErQjtZQUMvQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDdkIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3ZCLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztZQUN2QixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQ3RCLFNBQVMsRUFDVCxPQUFPLEVBQ1AsU0FBUyxFQUNULElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUM7UUFDSixDQUFDLEVBQ0QsS0FBSyxDQUFDLFFBQVEsRUFDZCxLQUFLLENBQUMsVUFBVSxDQUNqQixDQUFDO1FBQ0YsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO1NBQzdDO2FBQU07WUFDSixJQUFJLENBQUMsY0FBOEIsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7d0dBbkNVLHFCQUFxQjs0RkFBckIscUJBQXFCLDZFQW5CdEI7Ozs7Ozs7OztHQVNUOzs0RkFVVSxxQkFBcUI7a0JBckJqQyxTQUFTOytCQUNFLGdCQUFnQixZQUNoQjs7Ozs7Ozs7O0dBU1QsbUJBUWdCLHVCQUF1QixDQUFDLE1BQU07O0FBdUNqRCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FBaUIsUUFBUSxDQUMvRCxDQUFDLEVBQ0QsZUFBZSxDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgVGhlIE1JVCBMaWNlbnNlXG4gIFxuICBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBFY2xpcHNlU291cmNlIE11bmljaFxuICBodHRwczovL2dpdGh1Yi5jb20vZWNsaXBzZXNvdXJjZS9qc29uZm9ybXNcbiAgXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gIFxuICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAgXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgVEhFIFNPRlRXQVJFLlxuKi9cbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgSnNvbkZvcm1zQ29udHJvbFdpdGhEZXRhaWwsXG59IGZyb20gJ0Bqc29uZm9ybXMvYW5ndWxhcic7XG5pbXBvcnQge1xuICBDb250cm9sV2l0aERldGFpbFByb3BzLFxuICBmaW5kVUlTY2hlbWEsXG4gIEdlbmVyYXRlLFxuICBHcm91cExheW91dCxcbiAgaXNPYmplY3RDb250cm9sLFxuICBSYW5rZWRUZXN0ZXIsXG4gIHJhbmtXaXRoLFxuICBzZXRSZWFkb25seSxcbiAgVUlTY2hlbWFFbGVtZW50LFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnT2JqZWN0UmVuZGVyZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtY2FyZCBjbGFzcz1cIm9iamVjdC1sYXlvdXRcIiBhcHBlYXJhbmNlPVwib3V0bGluZWRcIj5cbiAgICAgIDxqc29uZm9ybXMtb3V0bGV0XG4gICAgICAgIFt1aXNjaGVtYV09XCJkZXRhaWxVaVNjaGVtYVwiXG4gICAgICAgIFtzY2hlbWFdPVwic2NvcGVkU2NoZW1hXCJcbiAgICAgICAgW3BhdGhdPVwicHJvcHNQYXRoXCJcbiAgICAgID5cbiAgICAgIDwvanNvbmZvcm1zLW91dGxldD5cbiAgICA8L21hdC1jYXJkPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAub2JqZWN0LWxheW91dCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgYCxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9iamVjdENvbnRyb2xSZW5kZXJlciBleHRlbmRzIEpzb25Gb3Jtc0NvbnRyb2xXaXRoRGV0YWlsIHtcbiAgZGV0YWlsVWlTY2hlbWE6IFVJU2NoZW1hRWxlbWVudDtcbiAgY29uc3RydWN0b3IoanNvbmZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UpIHtcbiAgICBzdXBlcihqc29uZm9ybXNTZXJ2aWNlKTtcbiAgfVxuICBtYXBBZGRpdGlvbmFsUHJvcHMocHJvcHM6IENvbnRyb2xXaXRoRGV0YWlsUHJvcHMpIHtcbiAgICB0aGlzLmRldGFpbFVpU2NoZW1hID0gZmluZFVJU2NoZW1hKFxuICAgICAgcHJvcHMudWlzY2hlbWFzLFxuICAgICAgcHJvcHMuc2NoZW1hLFxuICAgICAgcHJvcHMudWlzY2hlbWEuc2NvcGUsXG4gICAgICBwcm9wcy5wYXRoLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdTY2hlbWEgPSBjbG9uZURlZXAocHJvcHMuc2NoZW1hKTtcbiAgICAgICAgLy8gZGVsZXRlIHVuc3VwcG9ydGVkIG9wZXJhdG9yc1xuICAgICAgICBkZWxldGUgbmV3U2NoZW1hLm9uZU9mO1xuICAgICAgICBkZWxldGUgbmV3U2NoZW1hLmFueU9mO1xuICAgICAgICBkZWxldGUgbmV3U2NoZW1hLmFsbE9mO1xuICAgICAgICByZXR1cm4gR2VuZXJhdGUudWlTY2hlbWEoXG4gICAgICAgICAgbmV3U2NoZW1hLFxuICAgICAgICAgICdHcm91cCcsXG4gICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgIHRoaXMucm9vdFNjaGVtYVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHByb3BzLnVpc2NoZW1hLFxuICAgICAgcHJvcHMucm9vdFNjaGVtYVxuICAgICk7XG4gICAgaWYgKGlzRW1wdHkocHJvcHMucGF0aCkpIHtcbiAgICAgIHRoaXMuZGV0YWlsVWlTY2hlbWEudHlwZSA9ICdWZXJ0aWNhbExheW91dCc7XG4gICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLmRldGFpbFVpU2NoZW1hIGFzIEdyb3VwTGF5b3V0KS5sYWJlbCA9IHN0YXJ0Q2FzZShwcm9wcy5wYXRoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICBzZXRSZWFkb25seSh0aGlzLmRldGFpbFVpU2NoZW1hKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBPYmplY3RDb250cm9sUmVuZGVyZXJUZXN0ZXI6IFJhbmtlZFRlc3RlciA9IHJhbmtXaXRoKFxuICAyLFxuICBpc09iamVjdENvbnRyb2xcbik7XG4iXX0=