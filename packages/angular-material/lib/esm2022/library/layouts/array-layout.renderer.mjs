/*
  The MIT License

  Copyright (c) 2017-2020 EclipseSource Munich
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
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { JsonFormsAngularService, JsonFormsAbstractControl, } from '@jsonforms/angular';
import { createDefaultValue, findUISchema, isObjectArrayWithNesting, mapDispatchToArrayControlProps, mapStateToArrayLayoutProps, Paths, rankWith, setReadonly, unsetReadonly, } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/card";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/tooltip";
import * as i7 from "@angular/material/badge";
export class ArrayLayoutRenderer extends JsonFormsAbstractControl {
    noData;
    translations;
    addItem;
    moveItemUp;
    moveItemDown;
    removeItems;
    uischemas;
    constructor(jsonFormsService) {
        super(jsonFormsService);
    }
    mapToProps(state) {
        const props = mapStateToArrayLayoutProps(state, this.getOwnProps());
        return { ...props };
    }
    remove(index) {
        this.removeItems(this.propsPath, [index])();
    }
    add() {
        this.addItem(this.propsPath, createDefaultValue(this.scopedSchema, this.rootSchema))();
    }
    up(index) {
        this.moveItemUp(this.propsPath, index)();
    }
    down(index) {
        this.moveItemDown(this.propsPath, index)();
    }
    ngOnInit() {
        super.ngOnInit();
        const { addItem, removeItems, moveUp, moveDown } = mapDispatchToArrayControlProps(this.jsonFormsService.updateCore.bind(this.jsonFormsService));
        this.addItem = addItem;
        this.moveItemUp = moveUp;
        this.moveItemDown = moveDown;
        this.removeItems = removeItems;
    }
    mapAdditionalProps(props) {
        this.translations = props.translations;
        this.noData = !props.data || props.data === 0;
        this.uischemas = props.uischemas;
    }
    getProps(index) {
        const uischema = findUISchema(this.uischemas, this.scopedSchema, this.uischema.scope, this.propsPath, undefined, this.uischema, this.rootSchema);
        if (this.isEnabled()) {
            unsetReadonly(uischema);
        }
        else {
            setReadonly(uischema);
        }
        return {
            schema: this.scopedSchema,
            path: Paths.compose(this.propsPath, `${index}`),
            uischema,
        };
    }
    trackByFn(index) {
        return index;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayLayoutRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ArrayLayoutRenderer, selector: "app-array-layout-renderer", usesInheritance: true, ngImport: i0, template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="array-layout">
      <div class="array-layout-toolbar">
        <h2 class="mat-h2 array-layout-title">{{ label }}</h2>
        <span></span>
        <mat-icon
          *ngIf="this.error?.length"
          color="warn"
          matBadge="{{ this.error.split('').length }}"
          matBadgeColor="warn"
          matTooltip="{{ this.error }}"
          matTooltipClass="error-message-tooltip"
        >
          error_outline
        </mat-icon>
        <span></span>
        <button
          mat-button
          matTooltip="{{ translations.addTooltip }}"
          [disabled]="!isEnabled()"
          (click)="add()"
          attr.aria-label="{{ translations.addAriaLabel }}"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
      <p *ngIf="noData">{{ translations.noDataMessage }}</p>
      <div
        *ngFor="
          let item of [].constructor(data);
          let idx = index;
          trackBy: trackByFn;
          last as last;
          first as first
        "
      >
        <mat-card class="array-item" appearance="outlined">
          <mat-card-content>
            <jsonforms-outlet [renderProps]="getProps(idx)"></jsonforms-outlet>
          </mat-card-content>
          <mat-card-actions *ngIf="isEnabled()">
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(idx)"
              attr.aria-label="{{ translations.upAriaLabel }}"
              matTooltip="{{ translations.up }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(idx)"
              attr.aria-label="{{ translations.downAriaLabel }}"
              matTooltip="{{ translations.down }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(idx)"
              attr.aria-label="{{ translations.removeAriaLabel }}"
              matTooltip="{{ translations.removeTooltip }}"
              matTooltipPosition="right"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `, isInline: true, styles: [".array-layout{display:flex;flex-direction:column;gap:16px}.array-layout>*{flex:1 1 auto}.array-layout-toolbar{display:flex;align-items:center}.array-layout-title{margin:0}.array-layout-toolbar>span{flex:1 1 auto}.array-item{padding:16px}::ng-deep .error-message-tooltip{white-space:pre-line}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i3.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i3.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i7.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ArrayLayoutRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'app-array-layout-renderer', template: `
    <div [ngStyle]="{ display: hidden ? 'none' : '' }" class="array-layout">
      <div class="array-layout-toolbar">
        <h2 class="mat-h2 array-layout-title">{{ label }}</h2>
        <span></span>
        <mat-icon
          *ngIf="this.error?.length"
          color="warn"
          matBadge="{{ this.error.split('').length }}"
          matBadgeColor="warn"
          matTooltip="{{ this.error }}"
          matTooltipClass="error-message-tooltip"
        >
          error_outline
        </mat-icon>
        <span></span>
        <button
          mat-button
          matTooltip="{{ translations.addTooltip }}"
          [disabled]="!isEnabled()"
          (click)="add()"
          attr.aria-label="{{ translations.addAriaLabel }}"
        >
          <mat-icon>add</mat-icon>
        </button>
      </div>
      <p *ngIf="noData">{{ translations.noDataMessage }}</p>
      <div
        *ngFor="
          let item of [].constructor(data);
          let idx = index;
          trackBy: trackByFn;
          last as last;
          first as first
        "
      >
        <mat-card class="array-item" appearance="outlined">
          <mat-card-content>
            <jsonforms-outlet [renderProps]="getProps(idx)"></jsonforms-outlet>
          </mat-card-content>
          <mat-card-actions *ngIf="isEnabled()">
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(idx)"
              attr.aria-label="{{ translations.upAriaLabel }}"
              matTooltip="{{ translations.up }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(idx)"
              attr.aria-label="{{ translations.downAriaLabel }}"
              matTooltip="{{ translations.down }}"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(idx)"
              attr.aria-label="{{ translations.removeAriaLabel }}"
              matTooltip="{{ translations.removeTooltip }}"
              matTooltipPosition="right"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".array-layout{display:flex;flex-direction:column;gap:16px}.array-layout>*{flex:1 1 auto}.array-layout-toolbar{display:flex;align-items:center}.array-layout-title{margin:0}.array-layout-toolbar>span{flex:1 1 auto}.array-item{padding:16px}::ng-deep .error-message-tooltip{white-space:pre-line}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const ArrayLayoutRendererTester = rankWith(4, isObjectArrayWithNesting);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXktbGF5b3V0LnJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYnJhcnkvbGF5b3V0cy9hcnJheS1sYXlvdXQucmVuZGVyZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdUJFO0FBQ0YsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEdBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qix3QkFBd0IsR0FDekIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBR0wsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWix3QkFBd0IsRUFFeEIsOEJBQThCLEVBQzlCLDBCQUEwQixFQUUxQixLQUFLLEVBRUwsUUFBUSxFQUNSLFdBQVcsRUFJWCxhQUFhLEdBQ2QsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7O0FBa0h6QixNQUFNLE9BQU8sbUJBQ1gsU0FBUSx3QkFBaUQ7SUFHekQsTUFBTSxDQUFVO0lBQ2hCLFlBQVksQ0FBb0I7SUFDaEMsT0FBTyxDQUEyQztJQUNsRCxVQUFVLENBQThDO0lBQ3hELFlBQVksQ0FBOEM7SUFDMUQsV0FBVyxDQUFtRDtJQUM5RCxTQUFTLENBR0w7SUFDSixZQUFZLGdCQUF5QztRQUNuRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsVUFBVSxDQUFDLEtBQXFCO1FBQzlCLE1BQU0sS0FBSyxHQUFHLDBCQUEwQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNwRSxPQUFPLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlD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dCAoYykgMjAxNy0yMDIwIEVjbGlwc2VTb3VyY2UgTXVuaWNoXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9lY2xpcHNlc291cmNlL2pzb25mb3Jtc1xuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UsXG4gIEpzb25Gb3Jtc0Fic3RyYWN0Q29udHJvbCxcbn0gZnJvbSAnQGpzb25mb3Jtcy9hbmd1bGFyJztcbmltcG9ydCB7XG4gIEFycmF5TGF5b3V0UHJvcHMsXG4gIEFycmF5VHJhbnNsYXRpb25zLFxuICBjcmVhdGVEZWZhdWx0VmFsdWUsXG4gIGZpbmRVSVNjaGVtYSxcbiAgaXNPYmplY3RBcnJheVdpdGhOZXN0aW5nLFxuICBKc29uRm9ybXNTdGF0ZSxcbiAgbWFwRGlzcGF0Y2hUb0FycmF5Q29udHJvbFByb3BzLFxuICBtYXBTdGF0ZVRvQXJyYXlMYXlvdXRQcm9wcyxcbiAgT3duUHJvcHNPZlJlbmRlcmVyLFxuICBQYXRocyxcbiAgUmFua2VkVGVzdGVyLFxuICByYW5rV2l0aCxcbiAgc2V0UmVhZG9ubHksXG4gIFN0YXRlUHJvcHNPZkFycmF5TGF5b3V0LFxuICBVSVNjaGVtYUVsZW1lbnQsXG4gIFVJU2NoZW1hVGVzdGVyLFxuICB1bnNldFJlYWRvbmx5LFxufSBmcm9tICdAanNvbmZvcm1zL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYXJyYXktbGF5b3V0LXJlbmRlcmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N0eWxlXT1cInsgZGlzcGxheTogaGlkZGVuID8gJ25vbmUnIDogJycgfVwiIGNsYXNzPVwiYXJyYXktbGF5b3V0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXJyYXktbGF5b3V0LXRvb2xiYXJcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibWF0LWgyIGFycmF5LWxheW91dC10aXRsZVwiPnt7IGxhYmVsIH19PC9oMj5cbiAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8bWF0LWljb25cbiAgICAgICAgICAqbmdJZj1cInRoaXMuZXJyb3I/Lmxlbmd0aFwiXG4gICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICBtYXRCYWRnZT1cInt7IHRoaXMuZXJyb3Iuc3BsaXQoJycpLmxlbmd0aCB9fVwiXG4gICAgICAgICAgbWF0QmFkZ2VDb2xvcj1cIndhcm5cIlxuICAgICAgICAgIG1hdFRvb2x0aXA9XCJ7eyB0aGlzLmVycm9yIH19XCJcbiAgICAgICAgICBtYXRUb29sdGlwQ2xhc3M9XCJlcnJvci1tZXNzYWdlLXRvb2x0aXBcIlxuICAgICAgICA+XG4gICAgICAgICAgZXJyb3Jfb3V0bGluZVxuICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgICAgbWF0VG9vbHRpcD1cInt7IHRyYW5zbGF0aW9ucy5hZGRUb29sdGlwIH19XCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzRW5hYmxlZCgpXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkKClcIlxuICAgICAgICAgIGF0dHIuYXJpYS1sYWJlbD1cInt7IHRyYW5zbGF0aW9ucy5hZGRBcmlhTGFiZWwgfX1cIlxuICAgICAgICA+XG4gICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCAqbmdJZj1cIm5vRGF0YVwiPnt7IHRyYW5zbGF0aW9ucy5ub0RhdGFNZXNzYWdlIH19PC9wPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICBsZXQgaXRlbSBvZiBbXS5jb25zdHJ1Y3RvcihkYXRhKTtcbiAgICAgICAgICBsZXQgaWR4ID0gaW5kZXg7XG4gICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUZuO1xuICAgICAgICAgIGxhc3QgYXMgbGFzdDtcbiAgICAgICAgICBmaXJzdCBhcyBmaXJzdFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8bWF0LWNhcmQgY2xhc3M9XCJhcnJheS1pdGVtXCIgYXBwZWFyYW5jZT1cIm91dGxpbmVkXCI+XG4gICAgICAgICAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgICA8anNvbmZvcm1zLW91dGxldCBbcmVuZGVyUHJvcHNdPVwiZ2V0UHJvcHMoaWR4KVwiPjwvanNvbmZvcm1zLW91dGxldD5cbiAgICAgICAgICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gICAgICAgICAgPG1hdC1jYXJkLWFjdGlvbnMgKm5nSWY9XCJpc0VuYWJsZWQoKVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cInVpc2NoZW1hPy5vcHRpb25zPy5zaG93U29ydEJ1dHRvbnNcIlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW0tdXBcIlxuICAgICAgICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJmaXJzdFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJ1cChpZHgpXCJcbiAgICAgICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPVwie3sgdHJhbnNsYXRpb25zLnVwQXJpYUxhYmVsIH19XCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cInt7IHRyYW5zbGF0aW9ucy51cCB9fVwiXG4gICAgICAgICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hdC1pY29uPmFycm93X3Vwd2FyZDwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKm5nSWY9XCJ1aXNjaGVtYT8ub3B0aW9ucz8uc2hvd1NvcnRCdXR0b25zXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtLWRvd25cIlxuICAgICAgICAgICAgICBtYXQtYnV0dG9uXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsYXN0XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRvd24oaWR4KVwiXG4gICAgICAgICAgICAgIGF0dHIuYXJpYS1sYWJlbD1cInt7IHRyYW5zbGF0aW9ucy5kb3duQXJpYUxhYmVsIH19XCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cInt7IHRyYW5zbGF0aW9ucy5kb3duIH19XCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWF0LWljb24+YXJyb3dfZG93bndhcmQ8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZShpZHgpXCJcbiAgICAgICAgICAgICAgYXR0ci5hcmlhLWxhYmVsPVwie3sgdHJhbnNsYXRpb25zLnJlbW92ZUFyaWFMYWJlbCB9fVwiXG4gICAgICAgICAgICAgIG1hdFRvb2x0aXA9XCJ7eyB0cmFuc2xhdGlvbnMucmVtb3ZlVG9vbHRpcCB9fVwiXG4gICAgICAgICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gICAgICAgIDwvbWF0LWNhcmQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgLmFycmF5LWxheW91dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgIH1cbiAgICAgIC5hcnJheS1sYXlvdXQgPiAqIHtcbiAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICB9XG4gICAgICAuYXJyYXktbGF5b3V0LXRvb2xiYXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgLmFycmF5LWxheW91dC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5hcnJheS1sYXlvdXQtdG9vbGJhciA+IHNwYW4ge1xuICAgICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIH1cbiAgICAgIC5hcnJheS1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIH1cbiAgICAgIDo6bmctZGVlcCAuZXJyb3ItbWVzc2FnZS10b29sdGlwIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgfVxuICAgIGAsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFJlbmRlcmVyXG4gIGV4dGVuZHMgSnNvbkZvcm1zQWJzdHJhY3RDb250cm9sPFN0YXRlUHJvcHNPZkFycmF5TGF5b3V0PlxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIG5vRGF0YTogYm9vbGVhbjtcbiAgdHJhbnNsYXRpb25zOiBBcnJheVRyYW5zbGF0aW9ucztcbiAgYWRkSXRlbTogKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gKCkgPT4gdm9pZDtcbiAgbW92ZUl0ZW1VcDogKHBhdGg6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gKCkgPT4gdm9pZDtcbiAgbW92ZUl0ZW1Eb3duOiAocGF0aDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB2b2lkO1xuICByZW1vdmVJdGVtczogKHBhdGg6IHN0cmluZywgdG9EZWxldGU6IG51bWJlcltdKSA9PiAoKSA9PiB2b2lkO1xuICB1aXNjaGVtYXM6IHtcbiAgICB0ZXN0ZXI6IFVJU2NoZW1hVGVzdGVyO1xuICAgIHVpc2NoZW1hOiBVSVNjaGVtYUVsZW1lbnQ7XG4gIH1bXTtcbiAgY29uc3RydWN0b3IoanNvbkZvcm1zU2VydmljZTogSnNvbkZvcm1zQW5ndWxhclNlcnZpY2UpIHtcbiAgICBzdXBlcihqc29uRm9ybXNTZXJ2aWNlKTtcbiAgfVxuICBtYXBUb1Byb3BzKHN0YXRlOiBKc29uRm9ybXNTdGF0ZSk6IFN0YXRlUHJvcHNPZkFycmF5TGF5b3V0IHtcbiAgICBjb25zdCBwcm9wcyA9IG1hcFN0YXRlVG9BcnJheUxheW91dFByb3BzKHN0YXRlLCB0aGlzLmdldE93blByb3BzKCkpO1xuICAgIHJldHVybiB7IC4uLnByb3BzIH07XG4gIH1cbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUl0ZW1zKHRoaXMucHJvcHNQYXRoLCBbaW5kZXhdKSgpO1xuICB9XG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEl0ZW0oXG4gICAgICB0aGlzLnByb3BzUGF0aCxcbiAgICAgIGNyZWF0ZURlZmF1bHRWYWx1ZSh0aGlzLnNjb3BlZFNjaGVtYSwgdGhpcy5yb290U2NoZW1hKVxuICAgICkoKTtcbiAgfVxuICB1cChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlSXRlbVVwKHRoaXMucHJvcHNQYXRoLCBpbmRleCkoKTtcbiAgfVxuICBkb3duKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVJdGVtRG93bih0aGlzLnByb3BzUGF0aCwgaW5kZXgpKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICBjb25zdCB7IGFkZEl0ZW0sIHJlbW92ZUl0ZW1zLCBtb3ZlVXAsIG1vdmVEb3duIH0gPVxuICAgICAgbWFwRGlzcGF0Y2hUb0FycmF5Q29udHJvbFByb3BzKFxuICAgICAgICB0aGlzLmpzb25Gb3Jtc1NlcnZpY2UudXBkYXRlQ29yZS5iaW5kKHRoaXMuanNvbkZvcm1zU2VydmljZSlcbiAgICAgICk7XG4gICAgdGhpcy5hZGRJdGVtID0gYWRkSXRlbTtcbiAgICB0aGlzLm1vdmVJdGVtVXAgPSBtb3ZlVXA7XG4gICAgdGhpcy5tb3ZlSXRlbURvd24gPSBtb3ZlRG93bjtcbiAgICB0aGlzLnJlbW92ZUl0ZW1zID0gcmVtb3ZlSXRlbXM7XG4gIH1cbiAgbWFwQWRkaXRpb25hbFByb3BzKHByb3BzOiBBcnJheUxheW91dFByb3BzKSB7XG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBwcm9wcy50cmFuc2xhdGlvbnM7XG4gICAgdGhpcy5ub0RhdGEgPSAhcHJvcHMuZGF0YSB8fCBwcm9wcy5kYXRhID09PSAwO1xuICAgIHRoaXMudWlzY2hlbWFzID0gcHJvcHMudWlzY2hlbWFzO1xuICB9XG4gIGdldFByb3BzKGluZGV4OiBudW1iZXIpOiBPd25Qcm9wc09mUmVuZGVyZXIge1xuICAgIGNvbnN0IHVpc2NoZW1hID0gZmluZFVJU2NoZW1hKFxuICAgICAgdGhpcy51aXNjaGVtYXMsXG4gICAgICB0aGlzLnNjb3BlZFNjaGVtYSxcbiAgICAgIHRoaXMudWlzY2hlbWEuc2NvcGUsXG4gICAgICB0aGlzLnByb3BzUGF0aCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHRoaXMudWlzY2hlbWEsXG4gICAgICB0aGlzLnJvb3RTY2hlbWFcbiAgICApO1xuICAgIGlmICh0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICB1bnNldFJlYWRvbmx5KHVpc2NoZW1hKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0UmVhZG9ubHkodWlzY2hlbWEpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgc2NoZW1hOiB0aGlzLnNjb3BlZFNjaGVtYSxcbiAgICAgIHBhdGg6IFBhdGhzLmNvbXBvc2UodGhpcy5wcm9wc1BhdGgsIGAke2luZGV4fWApLFxuICAgICAgdWlzY2hlbWEsXG4gICAgfTtcbiAgfVxuICB0cmFja0J5Rm4oaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQXJyYXlMYXlvdXRSZW5kZXJlclRlc3RlcjogUmFua2VkVGVzdGVyID0gcmFua1dpdGgoXG4gIDQsXG4gIGlzT2JqZWN0QXJyYXlXaXRoTmVzdGluZ1xuKTtcbiJdfQ==