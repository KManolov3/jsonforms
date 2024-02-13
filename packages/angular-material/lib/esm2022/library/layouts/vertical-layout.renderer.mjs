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
export class VerticalLayoutRenderer extends LayoutRenderer {
    constructor(jsonFormsService, changeDetectionRef) {
        super(jsonFormsService, changeDetectionRef);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VerticalLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: VerticalLayoutRenderer, selector: "VerticalLayoutRenderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="vertical-layout">
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, isInline: true, styles: [".vertical-layout{display:flex;flex-direction:column;gap:16px}.vertical-layout>div{flex:1 1 auto}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "pipe", type: i3.LayoutChildrenRenderPropsPipe, name: "layoutChildrenRenderProps" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: VerticalLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'VerticalLayoutRenderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="vertical-layout">
      <div
        *ngFor="
          let props of uischema | layoutChildrenRenderProps : schema : path;
          trackBy: trackElement
        "
      >
        <jsonforms-outlet [renderProps]="props"></jsonforms-outlet>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".vertical-layout{display:flex;flex-direction:column;gap:16px}.vertical-layout>div{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const verticalLayoutTester = rankWith(1, uiTypeIs('VerticalLayout'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtbGF5b3V0LnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvbGF5b3V0cy92ZXJ0aWNhbC1sYXlvdXQucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQThCN0QsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGNBQThCO0lBQ3hFLFlBQ0UsZ0JBQXlDLEVBQ3pDLGtCQUFxQztRQUVyQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM5QyxDQUFDO3dHQU5VLHNCQUFzQjs0RkFBdEIsc0JBQXNCLHFGQTFCdkI7Ozs7Ozs7Ozs7O0dBV1Q7OzRGQWVVLHNCQUFzQjtrQkE1QmxDLFNBQVM7K0JBQ0Usd0JBQXdCLFlBQ3hCOzs7Ozs7Ozs7OztHQVdULG1CQWFnQix1QkFBdUIsQ0FBQyxNQUFNOztBQVVqRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBaUIsUUFBUSxDQUN4RCxDQUFDLEVBQ0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQzNCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBUaGUgTUlUIExpY2Vuc2VcblxuICBDb3B5cmlnaHQgKGMpIDIwMTctMjAxOSBFY2xpcHNlU291cmNlIE11bmljaFxuICBodHRwczovL2dpdGh1Yi5jb20vZWNsaXBzZXNvdXJjZS9qc29uZm9ybXNcblxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG4gIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAgVEhFIFNPRlRXQVJFLlxuKi9cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJhbmtlZFRlc3RlcixcbiAgcmFua1dpdGgsXG4gIHVpVHlwZUlzLFxuICBWZXJ0aWNhbExheW91dCxcbn0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcbmltcG9ydCB7IExheW91dFJlbmRlcmVyIH0gZnJvbSAnLi9sYXlvdXQucmVuZGVyZXInO1xuaW1wb3J0IHsgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UgfSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdWZXJ0aWNhbExheW91dFJlbmRlcmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaGlkZGVuID8gJ25vbmUnIDogJycgfVwiIGNsYXNzPVwidmVydGljYWwtbGF5b3V0XCI+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgIGxldCBwcm9wcyBvZiB1aXNjaGVtYSB8IGxheW91dENoaWxkcmVuUmVuZGVyUHJvcHMgOiBzY2hlbWEgOiBwYXRoO1xuICAgICAgICAgIHRyYWNrQnk6IHRyYWNrRWxlbWVudFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8anNvbmZvcm1zLW91dGxldCBbcmVuZGVyUHJvcHNdPVwicHJvcHNcIj48L2pzb25mb3Jtcy1vdXRsZXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLnZlcnRpY2FsLWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgIH1cbiAgICAgIC52ZXJ0aWNhbC1sYXlvdXQgPiBkaXYge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmVydGljYWxMYXlvdXRSZW5kZXJlciBleHRlbmRzIExheW91dFJlbmRlcmVyPFZlcnRpY2FsTGF5b3V0PiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGpzb25Gb3Jtc1NlcnZpY2U6IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlLFxuICAgIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgc3VwZXIoanNvbkZvcm1zU2VydmljZSwgY2hhbmdlRGV0ZWN0aW9uUmVmKTtcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHZlcnRpY2FsTGF5b3V0VGVzdGVyOiBSYW5rZWRUZXN0ZXIgPSByYW5rV2l0aChcbiAgMSxcbiAgdWlUeXBlSXMoJ1ZlcnRpY2FsTGF5b3V0Jylcbik7XG4iXX0=