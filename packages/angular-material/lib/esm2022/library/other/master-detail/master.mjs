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
import some from 'lodash/some';
import get from 'lodash/get';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, } from '@angular/core';
import { JsonFormsAngularService, JsonFormsArrayControl, } from '@jsonforms/angular';
import { createDefaultValue, decode, findUISchema, getFirstPrimitiveProp, mapDispatchToArrayControlProps, mapStateToArrayControlProps, rankWith, setReadonly, uiTypeIs, } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/sidenav";
import * as i4 from "@angular/material/list";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "./detail";
const keywords = ['#', 'properties', 'items'];
export const removeSchemaKeywords = (path) => {
    return decode(path
        .split('/')
        .filter((s) => !some(keywords, (key) => key === s))
        .join('.'));
};
export class MasterListComponent extends JsonFormsArrayControl {
    changeDetectorRef;
    masterItems;
    selectedItem;
    selectedItemIdx;
    addItem;
    removeItems;
    highlightedIdx;
    translations;
    constructor(jsonformsService, changeDetectorRef) {
        super(jsonformsService);
        this.changeDetectorRef = changeDetectorRef;
    }
    onListItemHover(idx) {
        this.highlightedIdx = idx;
    }
    trackElement(_index, element) {
        return element ? element.label : null;
    }
    ngOnInit() {
        super.ngOnInit();
        const dispatch = this.jsonFormsService.updateCore.bind(this.jsonFormsService);
        const { addItem, removeItems } = mapDispatchToArrayControlProps(dispatch);
        this.addItem = addItem;
        this.removeItems = removeItems;
    }
    mapAdditionalProps(props) {
        const { data, path, schema, uischema } = props;
        const controlElement = uischema;
        this.propsPath = props.path;
        const detailUISchema = findUISchema(props.uischemas, schema, `${controlElement.scope}/items`, props.path, 'VerticalLayout', controlElement, props.rootSchema);
        if (!this.isEnabled()) {
            setReadonly(detailUISchema);
        }
        this.translations = props.translations;
        const masterItems = (data || []).map((d, index) => {
            const labelRefInstancePath = controlElement.options?.labelRef &&
                removeSchemaKeywords(controlElement.options.labelRef);
            const isPrimitive = d !== undefined && typeof d !== 'object';
            const masterItem = {
                label: isPrimitive
                    ? d.toString()
                    : get(d, labelRefInstancePath ?? getFirstPrimitiveProp(schema)),
                data: d,
                path: `${path}.${index}`,
                schema,
                uischema: detailUISchema,
            };
            return masterItem;
        });
        this.masterItems = masterItems;
        let newSelectedIdx = -1;
        let newSelectedItem;
        if (this.masterItems.length === 0) {
            // unset select if no elements anymore
            this.selectedItem = undefined;
            this.selectedItemIdx = -1;
        }
        else if (this.selectedItemIdx >= this.masterItems.length) {
            // the previous index is to high, reduce it to the maximal possible
            newSelectedIdx = this.masterItems.length - 1;
            newSelectedItem = this.masterItems[newSelectedIdx];
        }
        else if (this.selectedItemIdx !== -1 &&
            this.selectedItemIdx < this.masterItems.length) {
            newSelectedIdx = this.selectedItemIdx;
            newSelectedItem = this.masterItems[this.selectedItemIdx];
        }
        if (newSelectedItem !== undefined &&
            this.selectedItem !== undefined &&
            (newSelectedItem.label === this.selectedItem.label ||
                newSelectedItem.path === this.selectedItem.path)) {
            // after checking that we are on the same path, set selection
            this.selectedItem = newSelectedItem;
            this.selectedItemIdx = newSelectedIdx;
        }
        else if (this.masterItems.length > 0) {
            // pre-select 1st entry if the previous selected element as fallback
            this.selectedItem = this.masterItems[0];
            this.selectedItemIdx = 0;
        }
        this.changeDetectorRef.markForCheck();
    }
    onSelect(item, idx) {
        this.selectedItem = item;
        this.selectedItemIdx = idx;
    }
    onAddClick() {
        this.addItem(this.propsPath, createDefaultValue(this.scopedSchema, this.rootSchema))();
    }
    onDeleteClick(item) {
        this.removeItems(this.propsPath, [item])();
    }
    mapToProps(state) {
        const props = mapStateToArrayControlProps(state, this.getOwnProps());
        return { ...props };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterListComponent, deps: [{ token: i1.JsonFormsAngularService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MasterListComponent, selector: "jsonforms-list-with-detail-master", usesInheritance: true, ngImport: i0, template: `
    <mat-sidenav-container
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="container"
    >
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <mat-list-item *ngIf="masterItems.length === 0">{{
            translations.noDataMessage
          }}</mat-list-item>
          <mat-list-item
            *ngFor="
              let item of masterItems;
              let i = index;
              trackBy: trackElement
            "
            [class.selected]="item === selectedItem"
            (click)="onSelect(item, i)"
            (mouseover)="onListItemHover(i)"
            (mouseout)="onListItemHover(undefined)"
          >
            <a matLine>{{ item.label || 'No label set' }}</a>
            <button
              mat-icon-button
              class="button item-button hide"
              (click)="onDeleteClick(i)"
              [ngClass]="{ show: highlightedIdx == i }"
              *ngIf="isEnabled()"
            >
              <mat-icon mat-list-icon>delete</mat-icon>
            </button>
          </mat-list-item>
        </mat-nav-list>
        <button
          mat-fab
          color="primary"
          class="add-button"
          (click)="onAddClick()"
          *ngIf="isEnabled()"
        >
          <mat-icon [attr.aria-label]="translations.addAriaLabel">add</mat-icon>
        </button>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <jsonforms-detail
          *ngIf="selectedItem"
          [item]="selectedItem"
        ></jsonforms-detail>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `, isInline: true, styles: ["mat-list-item.selected{background:#0000000a}.container{height:100vh}.content{padding:15px;background-color:#fff}.add-button{float:right;margin-top:.5em;margin-right:.25em}.button{float:right;margin-right:.25em}.item-button{position:absolute;top:0;right:0}.show{display:inline-block}mat-sidenav{width:20%}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i3.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i3.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i3.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "component", type: i4.MatNavList, selector: "mat-nav-list", exportAs: ["matNavList"] }, { kind: "component", type: i4.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "component", type: i5.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i5.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "component", type: i6.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i7.JsonFormsDetailComponent, selector: "jsonforms-detail", inputs: ["item"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MasterListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'jsonforms-list-with-detail-master', template: `
    <mat-sidenav-container
      [ngStyle]="{ display: hidden ? 'none' : '' }"
      class="container"
    >
      <mat-sidenav mode="side" opened>
        <mat-nav-list>
          <mat-list-item *ngIf="masterItems.length === 0">{{
            translations.noDataMessage
          }}</mat-list-item>
          <mat-list-item
            *ngFor="
              let item of masterItems;
              let i = index;
              trackBy: trackElement
            "
            [class.selected]="item === selectedItem"
            (click)="onSelect(item, i)"
            (mouseover)="onListItemHover(i)"
            (mouseout)="onListItemHover(undefined)"
          >
            <a matLine>{{ item.label || 'No label set' }}</a>
            <button
              mat-icon-button
              class="button item-button hide"
              (click)="onDeleteClick(i)"
              [ngClass]="{ show: highlightedIdx == i }"
              *ngIf="isEnabled()"
            >
              <mat-icon mat-list-icon>delete</mat-icon>
            </button>
          </mat-list-item>
        </mat-nav-list>
        <button
          mat-fab
          color="primary"
          class="add-button"
          (click)="onAddClick()"
          *ngIf="isEnabled()"
        >
          <mat-icon [attr.aria-label]="translations.addAriaLabel">add</mat-icon>
        </button>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <jsonforms-detail
          *ngIf="selectedItem"
          [item]="selectedItem"
        ></jsonforms-detail>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-list-item.selected{background:#0000000a}.container{height:100vh}.content{padding:15px;background-color:#fff}.add-button{float:right;margin-top:.5em;margin-right:.25em}.button{float:right;margin-right:.25em}.item-button{position:absolute;top:0;right:0}.show{display:inline-block}mat-sidenav{width:20%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }, { type: i0.ChangeDetectorRef }]; } });
export const masterDetailTester = rankWith(4, uiTypeIs('ListWithDetail'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvb3RoZXIvbWFzdGVyLWRldGFpbC9tYXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxJQUFJLE1BQU0sYUFBYSxDQUFDO0FBQy9CLE9BQU8sR0FBRyxNQUFNLFlBQVksQ0FBQztBQUM3QixPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixxQkFBcUIsR0FDdEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBSUwsa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixZQUFZLEVBQ1oscUJBQXFCLEVBRXJCLDhCQUE4QixFQUM5QiwyQkFBMkIsRUFFM0IsUUFBUSxFQUNSLFdBQVcsRUFFWCxRQUFRLEdBQ1QsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7O0FBRXpCLE1BQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLElBQVksRUFBRSxFQUFFO0lBQ25ELE9BQU8sTUFBTSxDQUNYLElBQUk7U0FDRCxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ1YsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ2IsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTRGRixNQUFNLE9BQU8sbUJBQ1gsU0FBUSxxQkFBcUI7SUFhbkI7SUFWVixXQUFXLENBQVE7SUFDbkIsWUFB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ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuICBcbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTkgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG4gIFxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICBcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIFxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQgc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgSnNvbkZvcm1zQXJyYXlDb250cm9sLFxufSBmcm9tICdAanNvbmZvcm1zL2FuZ3VsYXInO1xuaW1wb3J0IHtcbiAgQXJyYXlDb250cm9sUHJvcHMsXG4gIEFycmF5VHJhbnNsYXRpb25zLFxuICBDb250cm9sRWxlbWVudCxcbiAgY3JlYXRlRGVmYXVsdFZhbHVlLFxuICBkZWNvZGUsXG4gIGZpbmRVSVNjaGVtYSxcbiAgZ2V0Rmlyc3RQcmltaXRpdmVQcm9wLFxuICBKc29uRm9ybXNTdGF0ZSxcbiAgbWFwRGlzcGF0Y2hUb0FycmF5Q29udHJvbFByb3BzLFxuICBtYXBTdGF0ZVRvQXJyYXlDb250cm9sUHJvcHMsXG4gIFJhbmtlZFRlc3RlcixcbiAgcmFua1dpdGgsXG4gIHNldFJlYWRvbmx5LFxuICBTdGF0ZVByb3BzT2ZBcnJheUNvbnRyb2wsXG4gIHVpVHlwZUlzLFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuXG5jb25zdCBrZXl3b3JkcyA9IFsnIycsICdwcm9wZXJ0aWVzJywgJ2l0ZW1zJ107XG5cbmV4cG9ydCBjb25zdCByZW1vdmVTY2hlbWFLZXl3b3JkcyA9IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGRlY29kZShcbiAgICBwYXRoXG4gICAgICAuc3BsaXQoJy8nKVxuICAgICAgLmZpbHRlcigocykgPT4gIXNvbWUoa2V5d29yZHMsIChrZXkpID0+IGtleSA9PT0gcykpXG4gICAgICAuam9pbignLicpXG4gICk7XG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqc29uZm9ybXMtbGlzdC13aXRoLWRldGFpbC1tYXN0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxtYXQtc2lkZW5hdi1jb250YWluZXJcbiAgICAgIFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaGlkZGVuID8gJ25vbmUnIDogJycgfVwiXG4gICAgICBjbGFzcz1cImNvbnRhaW5lclwiXG4gICAgPlxuICAgICAgPG1hdC1zaWRlbmF2IG1vZGU9XCJzaWRlXCIgb3BlbmVkPlxuICAgICAgICA8bWF0LW5hdi1saXN0PlxuICAgICAgICAgIDxtYXQtbGlzdC1pdGVtICpuZ0lmPVwibWFzdGVySXRlbXMubGVuZ3RoID09PSAwXCI+e3tcbiAgICAgICAgICAgIHRyYW5zbGF0aW9ucy5ub0RhdGFNZXNzYWdlXG4gICAgICAgICAgfX08L21hdC1saXN0LWl0ZW0+XG4gICAgICAgICAgPG1hdC1saXN0LWl0ZW1cbiAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICBsZXQgaXRlbSBvZiBtYXN0ZXJJdGVtcztcbiAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleDtcbiAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tFbGVtZW50XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT09IHNlbGVjdGVkSXRlbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoaXRlbSwgaSlcIlxuICAgICAgICAgICAgKG1vdXNlb3Zlcik9XCJvbkxpc3RJdGVtSG92ZXIoaSlcIlxuICAgICAgICAgICAgKG1vdXNlb3V0KT1cIm9uTGlzdEl0ZW1Ib3Zlcih1bmRlZmluZWQpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YSBtYXRMaW5lPnt7IGl0ZW0ubGFiZWwgfHwgJ05vIGxhYmVsIHNldCcgfX08L2E+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG1hdC1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpdGVtLWJ1dHRvbiBoaWRlXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlQ2xpY2soaSlcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IHNob3c6IGhpZ2hsaWdodGVkSWR4ID09IGkgfVwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWF0LWljb24gbWF0LWxpc3QtaWNvbj5kZWxldGU8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9tYXQtbGlzdC1pdGVtPlxuICAgICAgICA8L21hdC1uYXYtbGlzdD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG1hdC1mYWJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIGNsYXNzPVwiYWRkLWJ1dHRvblwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQWRkQ2xpY2soKVwiXG4gICAgICAgICAgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bWF0LWljb24gW2F0dHIuYXJpYS1sYWJlbF09XCJ0cmFuc2xhdGlvbnMuYWRkQXJpYUxhYmVsXCI+YWRkPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L21hdC1zaWRlbmF2PlxuICAgICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDxqc29uZm9ybXMtZGV0YWlsXG4gICAgICAgICAgKm5nSWY9XCJzZWxlY3RlZEl0ZW1cIlxuICAgICAgICAgIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiXG4gICAgICAgID48L2pzb25mb3Jtcy1kZXRhaWw+XG4gICAgICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG4gIGAsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIC8qIFRPRE8obWRjLW1pZ3JhdGlvbik6IFRoZSBmb2xsb3dpbmcgcnVsZSB0YXJnZXRzIGludGVybmFsIGNsYXNzZXMgb2YgbGlzdCB0aGF0IG1heSBubyBsb25nZXIgYXBwbHkgZm9yIHRoZSBNREMgdmVyc2lvbi4gKi9cbiAgICAgIG1hdC1saXN0LWl0ZW0uc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgfVxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB9XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAuYWRkLWJ1dHRvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4yNWVtO1xuICAgICAgfVxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XG4gICAgICB9XG4gICAgICAuaXRlbS1idXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgICAuc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICAgIG1hdC1zaWRlbmF2IHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWFzdGVyTGlzdENvbXBvbmVudFxuICBleHRlbmRzIEpzb25Gb3Jtc0FycmF5Q29udHJvbFxuICBpbXBsZW1lbnRzIE9uSW5pdFxue1xuICBtYXN0ZXJJdGVtczogYW55W107XG4gIHNlbGVjdGVkSXRlbTogYW55O1xuICBzZWxlY3RlZEl0ZW1JZHg6IG51bWJlcjtcbiAgYWRkSXRlbTogKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gKCkgPT4gdm9pZDtcbiAgcmVtb3ZlSXRlbXM6IChwYXRoOiBzdHJpbmcsIHRvRGVsZXRlOiBudW1iZXJbXSkgPT4gKCkgPT4gdm9pZDtcbiAgaGlnaGxpZ2h0ZWRJZHg6IG51bWJlcjtcbiAgdHJhbnNsYXRpb25zOiBBcnJheVRyYW5zbGF0aW9ucztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBqc29uZm9ybXNTZXJ2aWNlOiBKc29uRm9ybXNBbmd1bGFyU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihqc29uZm9ybXNTZXJ2aWNlKTtcbiAgfVxuXG4gIG9uTGlzdEl0ZW1Ib3ZlcihpZHg6IG51bWJlcikge1xuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJZHggPSBpZHg7XG4gIH1cblxuICB0cmFja0VsZW1lbnQoX2luZGV4OiBudW1iZXIsIGVsZW1lbnQ6IGFueSkge1xuICAgIHJldHVybiBlbGVtZW50ID8gZWxlbWVudC5sYWJlbCA6IG51bGw7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdGhpcy5qc29uRm9ybXNTZXJ2aWNlLnVwZGF0ZUNvcmUuYmluZChcbiAgICAgIHRoaXMuanNvbkZvcm1zU2VydmljZVxuICAgICk7XG4gICAgY29uc3QgeyBhZGRJdGVtLCByZW1vdmVJdGVtcyB9ID0gbWFwRGlzcGF0Y2hUb0FycmF5Q29udHJvbFByb3BzKGRpc3BhdGNoKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSBhZGRJdGVtO1xuICAgIHRoaXMucmVtb3ZlSXRlbXMgPSByZW1vdmVJdGVtcztcbiAgfVxuXG4gIG1hcEFkZGl0aW9uYWxQcm9wcyhwcm9wczogQXJyYXlDb250cm9sUHJvcHMpIHtcbiAgICBjb25zdCB7IGRhdGEsIHBhdGgsIHNjaGVtYSwgdWlzY2hlbWEgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNvbnRyb2xFbGVtZW50ID0gdWlzY2hlbWEgYXMgQ29udHJvbEVsZW1lbnQ7XG4gICAgdGhpcy5wcm9wc1BhdGggPSBwcm9wcy5wYXRoO1xuICAgIGNvbnN0IGRldGFpbFVJU2NoZW1hID0gZmluZFVJU2NoZW1hKFxuICAgICAgcHJvcHMudWlzY2hlbWFzLFxuICAgICAgc2NoZW1hLFxuICAgICAgYCR7Y29udHJvbEVsZW1lbnQuc2NvcGV9L2l0ZW1zYCxcbiAgICAgIHByb3BzLnBhdGgsXG4gICAgICAnVmVydGljYWxMYXlvdXQnLFxuICAgICAgY29udHJvbEVsZW1lbnQsXG4gICAgICBwcm9wcy5yb290U2NoZW1hXG4gICAgKTtcblxuICAgIGlmICghdGhpcy5pc0VuYWJsZWQoKSkge1xuICAgICAgc2V0UmVhZG9ubHkoZGV0YWlsVUlTY2hlbWEpO1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNsYXRpb25zID0gcHJvcHMudHJhbnNsYXRpb25zO1xuXG4gICAgY29uc3QgbWFzdGVySXRlbXMgPSAoZGF0YSB8fCBbXSkubWFwKChkOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsUmVmSW5zdGFuY2VQYXRoID1cbiAgICAgICAgY29udHJvbEVsZW1lbnQub3B0aW9ucz8ubGFiZWxSZWYgJiZcbiAgICAgICAgcmVtb3ZlU2NoZW1hS2V5d29yZHMoY29udHJvbEVsZW1lbnQub3B0aW9ucy5sYWJlbFJlZik7XG4gICAgICBjb25zdCBpc1ByaW1pdGl2ZSA9IGQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZCAhPT0gJ29iamVjdCc7XG4gICAgICBjb25zdCBtYXN0ZXJJdGVtID0ge1xuICAgICAgICBsYWJlbDogaXNQcmltaXRpdmVcbiAgICAgICAgICA/IGQudG9TdHJpbmcoKVxuICAgICAgICAgIDogZ2V0KGQsIGxhYmVsUmVmSW5zdGFuY2VQYXRoID8/IGdldEZpcnN0UHJpbWl0aXZlUHJvcChzY2hlbWEpKSxcbiAgICAgICAgZGF0YTogZCxcbiAgICAgICAgcGF0aDogYCR7cGF0aH0uJHtpbmRleH1gLFxuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHVpc2NoZW1hOiBkZXRhaWxVSVNjaGVtYSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gbWFzdGVySXRlbTtcbiAgICB9KTtcbiAgICB0aGlzLm1hc3Rlckl0ZW1zID0gbWFzdGVySXRlbXM7XG4gICAgbGV0IG5ld1NlbGVjdGVkSWR4ID0gLTE7XG4gICAgbGV0IG5ld1NlbGVjdGVkSXRlbTtcbiAgICBpZiAodGhpcy5tYXN0ZXJJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIHVuc2V0IHNlbGVjdCBpZiBubyBlbGVtZW50cyBhbnltb3JlXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtSWR4ID0gLTE7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSXRlbUlkeCA+PSB0aGlzLm1hc3Rlckl0ZW1zLmxlbmd0aCkge1xuICAgICAgLy8gdGhlIHByZXZpb3VzIGluZGV4IGlzIHRvIGhpZ2gsIHJlZHVjZSBpdCB0byB0aGUgbWF4aW1hbCBwb3NzaWJsZVxuICAgICAgbmV3U2VsZWN0ZWRJZHggPSB0aGlzLm1hc3Rlckl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICBuZXdTZWxlY3RlZEl0ZW0gPSB0aGlzLm1hc3Rlckl0ZW1zW25ld1NlbGVjdGVkSWR4XTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JZHggIT09IC0xICYmXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbUlkeCA8IHRoaXMubWFzdGVySXRlbXMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBuZXdTZWxlY3RlZElkeCA9IHRoaXMuc2VsZWN0ZWRJdGVtSWR4O1xuICAgICAgbmV3U2VsZWN0ZWRJdGVtID0gdGhpcy5tYXN0ZXJJdGVtc1t0aGlzLnNlbGVjdGVkSXRlbUlkeF07XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgbmV3U2VsZWN0ZWRJdGVtICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIChuZXdTZWxlY3RlZEl0ZW0ubGFiZWwgPT09IHRoaXMuc2VsZWN0ZWRJdGVtLmxhYmVsIHx8XG4gICAgICAgIG5ld1NlbGVjdGVkSXRlbS5wYXRoID09PSB0aGlzLnNlbGVjdGVkSXRlbS5wYXRoKVxuICAgICkge1xuICAgICAgLy8gYWZ0ZXIgY2hlY2tpbmcgdGhhdCB3ZSBhcmUgb24gdGhlIHNhbWUgcGF0aCwgc2V0IHNlbGVjdGlvblxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBuZXdTZWxlY3RlZEl0ZW07XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbUlkeCA9IG5ld1NlbGVjdGVkSWR4O1xuICAgIH0gZWxzZSBpZiAodGhpcy5tYXN0ZXJJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBwcmUtc2VsZWN0IDFzdCBlbnRyeSBpZiB0aGUgcHJldmlvdXMgc2VsZWN0ZWQgZWxlbWVudCBhcyBmYWxsYmFja1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSB0aGlzLm1hc3Rlckl0ZW1zWzBdO1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1JZHggPSAwO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25TZWxlY3QoaXRlbTogYW55LCBpZHg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbUlkeCA9IGlkeDtcbiAgfVxuXG4gIG9uQWRkQ2xpY2soKSB7XG4gICAgdGhpcy5hZGRJdGVtKFxuICAgICAgdGhpcy5wcm9wc1BhdGgsXG4gICAgICBjcmVhdGVEZWZhdWx0VmFsdWUodGhpcy5zY29wZWRTY2hlbWEsIHRoaXMucm9vdFNjaGVtYSlcbiAgICApKCk7XG4gIH1cblxuICBvbkRlbGV0ZUNsaWNrKGl0ZW06IG51bWJlcikge1xuICAgIHRoaXMucmVtb3ZlSXRlbXModGhpcy5wcm9wc1BhdGgsIFtpdGVtXSkoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBtYXBUb1Byb3BzKHN0YXRlOiBKc29uRm9ybXNTdGF0ZSk6IFN0YXRlUHJvcHNPZkFycmF5Q29udHJvbCB7XG4gICAgY29uc3QgcHJvcHMgPSBtYXBTdGF0ZVRvQXJyYXlDb250cm9sUHJvcHMoc3RhdGUsIHRoaXMuZ2V0T3duUHJvcHMoKSk7XG4gICAgcmV0dXJuIHsgLi4ucHJvcHMgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWFzdGVyRGV0YWlsVGVzdGVyOiBSYW5rZWRUZXN0ZXIgPSByYW5rV2l0aChcbiAgNCxcbiAgdWlUeXBlSXMoJ0xpc3RXaXRoRGV0YWlsJylcbik7XG4iXX0=