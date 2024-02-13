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
import { and, categorizationHasCategory, defaultJsonFormsI18nState, deriveLabelForUISchemaElement, getAjv, isVisible, mapStateToLayoutProps, rankWith, uiTypeIs, } from '@jsonforms/core';
import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer, } from '@jsonforms/angular';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/tabs";
export class CategorizationTabLayoutRenderer extends JsonFormsBaseRenderer {
    jsonFormsService;
    hidden;
    visibleCategories;
    subscription;
    categoryLabels;
    constructor(jsonFormsService) {
        super();
        this.jsonFormsService = jsonFormsService;
    }
    ngOnInit() {
        this.subscription = this.jsonFormsService.$state.subscribe({
            next: (state) => {
                const props = mapStateToLayoutProps(state, this.getOwnProps());
                this.hidden = !props.visible;
                this.visibleCategories = this.uischema.elements.filter((category) => isVisible(category, props.data, undefined, getAjv(state)));
                this.categoryLabels = this.visibleCategories.map((element) => deriveLabelForUISchemaElement(element, state.jsonforms.i18n?.translate ??
                    defaultJsonFormsI18nState.translate));
            },
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CategorizationTabLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CategorizationTabLayoutRenderer, selector: "jsonforms-categorization-layout", usesInheritance: true, ngImport: i0, template: `
    <mat-tab-group
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      dynamicHeight="true"
    >
      <mat-tab
        *ngFor="let category of visibleCategories; let i = index"
        [label]="categoryLabels[i]"
      >
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-tab>
    </mat-tab-group>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i3.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CategorizationTabLayoutRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'jsonforms-categorization-layout',
                    template: `
    <mat-tab-group
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      dynamicHeight="true"
    >
      <mat-tab
        *ngFor="let category of visibleCategories; let i = index"
        [label]="categoryLabels[i]"
      >
        <div *ngFor="let element of category.elements">
          <jsonforms-outlet
            [uischema]="element"
            [path]="path"
            [schema]="schema"
          ></jsonforms-outlet>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const categorizationTester = rankWith(2, and(uiTypeIs('Categorization'), categorizationHasCategory));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcml6YXRpb24tbGF5b3V0LnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvbGF5b3V0cy9jYXRlZ29yaXphdGlvbi1sYXlvdXQucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUNMLEdBQUcsRUFFSCx5QkFBeUIsRUFFekIseUJBQXlCLEVBQ3pCLDZCQUE2QixFQUM3QixNQUFNLEVBQ04sU0FBUyxFQUdULHFCQUFxQixFQUVyQixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixxQkFBcUIsR0FDdEIsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUF5QjVCLE1BQU0sT0FBTywrQkFDWCxTQUFRLHFCQUFxQztJQVF6QjtJQUxwQixNQUFNLENBQVU7SUFDaEIsaUJBQWlCLENBQWdDO0lBQ3pDLFlBQVksQ0FBZTtJQUNuQyxjQUFjLENBQVc7SUFFekIsWUFBb0IsZ0JBQXlDO1FBQzNELEtBQUssRUFBRSxDQUFDO1FBRFUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtJQUU3RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDekQsSUFBSSxFQUFFLENBQUMsS0FBcUIsRUFBRSxFQUFFO2dCQUM5QixNQUFNLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUNwRCxDQUFDLFFBQW1DLEVBQUUsRUFBRSxDQUN0QyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUM1RCxDQUFDO2dCQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQzNELDZCQUE2QixDQUMzQixPQUE2QixFQUM3QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxTQUFTO29CQUM3Qix5QkFBeUIsQ0FBQyxTQUFTLENBQ3RDLENBQ0YsQ0FBQztZQUNKLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzt3R0FyQ1UsK0JBQStCOzRGQUEvQiwrQkFBK0IsOEZBcEJoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUOzs0RkFFVSwrQkFBK0I7a0JBdEIzQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7b0JBQzNDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2lCQUNGOztBQXlDRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBaUIsUUFBUSxDQUN4RCxDQUFDLEVBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQzNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcblxuICBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBFY2xpcHNlU291cmNlIE11bmljaFxuICBodHRwczovL2dpdGh1Yi5jb20vZWNsaXBzZXNvdXJjZS9qc29uZm9ybXNcblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgVEhFIFNPRlRXQVJFLlxuKi9cbmltcG9ydCB7XG4gIGFuZCxcbiAgQ2F0ZWdvcml6YXRpb24sXG4gIGNhdGVnb3JpemF0aW9uSGFzQ2F0ZWdvcnksXG4gIENhdGVnb3J5LFxuICBkZWZhdWx0SnNvbkZvcm1zSTE4blN0YXRlLFxuICBkZXJpdmVMYWJlbEZvclVJU2NoZW1hRWxlbWVudCxcbiAgZ2V0QWp2LFxuICBpc1Zpc2libGUsXG4gIEpzb25Gb3Jtc1N0YXRlLFxuICBMYWJlbGFibGUsXG4gIG1hcFN0YXRlVG9MYXlvdXRQcm9wcyxcbiAgUmFua2VkVGVzdGVyLFxuICByYW5rV2l0aCxcbiAgdWlUeXBlSXMsXG59IGZyb20gJ0Bqc29uZm9ybXMvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgSnNvbkZvcm1zQmFzZVJlbmRlcmVyLFxufSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pzb25mb3Jtcy1jYXRlZ29yaXphdGlvbi1sYXlvdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtdGFiLWdyb3VwXG4gICAgICBbbmdTdHlsZV09XCJ7IGRpc3BsYXk6IGhpZGRlbiA/ICdub25lJyA6ICcnIH1cIlxuICAgICAgZHluYW1pY0hlaWdodD1cInRydWVcIlxuICAgID5cbiAgICAgIDxtYXQtdGFiXG4gICAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiB2aXNpYmxlQ2F0ZWdvcmllczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAgIFtsYWJlbF09XCJjYXRlZ29yeUxhYmVsc1tpXVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVsZW1lbnQgb2YgY2F0ZWdvcnkuZWxlbWVudHNcIj5cbiAgICAgICAgICA8anNvbmZvcm1zLW91dGxldFxuICAgICAgICAgICAgW3Vpc2NoZW1hXT1cImVsZW1lbnRcIlxuICAgICAgICAgICAgW3BhdGhdPVwicGF0aFwiXG4gICAgICAgICAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgICAgICAgPjwvanNvbmZvcm1zLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21hdC10YWI+XG4gICAgPC9tYXQtdGFiLWdyb3VwPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yaXphdGlvblRhYkxheW91dFJlbmRlcmVyXG4gIGV4dGVuZHMgSnNvbkZvcm1zQmFzZVJlbmRlcmVyPENhdGVnb3JpemF0aW9uPlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIGhpZGRlbjogYm9vbGVhbjtcbiAgdmlzaWJsZUNhdGVnb3JpZXM6IChDYXRlZ29yeSB8IENhdGVnb3JpemF0aW9uKVtdO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBjYXRlZ29yeUxhYmVsczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqc29uRm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuanNvbkZvcm1zU2VydmljZS4kc3RhdGUuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChzdGF0ZTogSnNvbkZvcm1zU3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBtYXBTdGF0ZVRvTGF5b3V0UHJvcHMoc3RhdGUsIHRoaXMuZ2V0T3duUHJvcHMoKSk7XG4gICAgICAgIHRoaXMuaGlkZGVuID0gIXByb3BzLnZpc2libGU7XG4gICAgICAgIHRoaXMudmlzaWJsZUNhdGVnb3JpZXMgPSB0aGlzLnVpc2NoZW1hLmVsZW1lbnRzLmZpbHRlcihcbiAgICAgICAgICAoY2F0ZWdvcnk6IENhdGVnb3J5IHwgQ2F0ZWdvcml6YXRpb24pID0+XG4gICAgICAgICAgICBpc1Zpc2libGUoY2F0ZWdvcnksIHByb3BzLmRhdGEsIHVuZGVmaW5lZCwgZ2V0QWp2KHN0YXRlKSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUxhYmVscyA9IHRoaXMudmlzaWJsZUNhdGVnb3JpZXMubWFwKChlbGVtZW50KSA9PlxuICAgICAgICAgIGRlcml2ZUxhYmVsRm9yVUlTY2hlbWFFbGVtZW50KFxuICAgICAgICAgICAgZWxlbWVudCBhcyBMYWJlbGFibGU8Ym9vbGVhbj4sXG4gICAgICAgICAgICBzdGF0ZS5qc29uZm9ybXMuaTE4bj8udHJhbnNsYXRlID8/XG4gICAgICAgICAgICAgIGRlZmF1bHRKc29uRm9ybXNJMThuU3RhdGUudHJhbnNsYXRlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpemF0aW9uVGVzdGVyOiBSYW5rZWRUZXN0ZXIgPSByYW5rV2l0aChcbiAgMixcbiAgYW5kKHVpVHlwZUlzKCdDYXRlZ29yaXphdGlvbicpLCBjYXRlZ29yaXphdGlvbkhhc0NhdGVnb3J5KVxuKTtcbiJdfQ==