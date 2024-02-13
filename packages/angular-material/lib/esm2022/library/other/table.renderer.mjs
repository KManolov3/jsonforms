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
import startCase from 'lodash/startCase';
import { Component } from '@angular/core';
import { JsonFormsAngularService, JsonFormsArrayControl, } from '@jsonforms/angular';
import { createDefaultValue, deriveTypes, encode, isObjectArrayControl, isPrimitiveArrayControl, mapDispatchToArrayControlProps, or, Paths, rankWith, setReadonly, } from '@jsonforms/core';
import * as i0 from "@angular/core";
import * as i1 from "@jsonforms/angular";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/table";
import * as i6 from "@angular/material/tooltip";
export class TableRenderer extends JsonFormsArrayControl {
    detailUiSchema;
    displayedColumns;
    items;
    columnsToIgnore = ['array', 'object'];
    addItem;
    moveItemUp;
    moveItemDown;
    removeItems;
    translations;
    constructor(jsonformsService) {
        super(jsonformsService);
    }
    trackElement(index, _element) {
        return index ? index : null;
    }
    mapAdditionalProps(props) {
        this.items = this.generateCells(props.schema, props.path);
        this.displayedColumns = this.items.map((item) => item.property);
        if (this.isEnabled()) {
            this.displayedColumns.push('action');
        }
        this.translations = props.translations;
    }
    getProps(index, props) {
        const rowPath = Paths.compose(props.path, `${index}`);
        return {
            schema: props.schema,
            uischema: props.uischema,
            path: rowPath,
        };
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
    generateCells = (schema, rowPath) => {
        if (schema.type === 'object') {
            return this.getValidColumnProps(schema).map((prop) => {
                const encProp = encode(prop);
                const uischema = controlWithoutLabel(`#/properties/${encProp}`);
                if (!this.isEnabled()) {
                    setReadonly(uischema);
                }
                return {
                    property: prop,
                    header: startCase(prop),
                    props: {
                        schema: schema,
                        uischema,
                        path: rowPath,
                    },
                };
            });
        }
        // needed to correctly render input control for multi attributes
        return [
            {
                property: 'DUMMY',
                header: this.label,
                props: {
                    schema: schema,
                    uischema: controlWithoutLabel(`#`),
                    path: rowPath,
                },
            },
        ];
    };
    getValidColumnProps = (scopedSchema) => {
        if (scopedSchema.type === 'object') {
            return Object.keys(scopedSchema.properties).filter((prop) => {
                const types = deriveTypes(scopedSchema.properties[prop]);
                if (types.length > 1) {
                    return false;
                }
                return this.columnsToIgnore.indexOf(types[0]) === -1;
            });
        }
        // primitives
        return [''];
    };
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableRenderer, deps: [{ token: i1.JsonFormsAngularService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TableRenderer, selector: "TableRenderer", usesInheritance: true, ngImport: i0, template: `
    <table
      mat-table
      [dataSource]="data"
      class="mat-elevation-z8"
      [trackBy]="trackElement"
    >
      <ng-container matColumnDef="action">
        <tr>
          <th mat-header-cell *matHeaderCellDef>
            <button
              mat-button
              color="primary"
              (click)="add()"
              [disabled]="!isEnabled()"
              [matTooltip]="translations.addTooltip"
            >
              <mat-icon>add</mat-icon>
            </button>
          </th>
        </tr>
        <tr>
          <td
            mat-cell
            *matCellDef="
              let row;
              let i = index;
              let first = first;
              let last = last
            "
          >
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(i)"
              [matTooltip]="translations.upAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(i)"
              [matTooltip]="translations.downAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(i)"
              [disabled]="!isEnabled()"
              matTooltipPosition="right"
              [matTooltip]="translations.removeTooltip"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </tr>

        <tr></tr
      ></ng-container>

      <ng-container
        *ngFor="let item of items"
        matColumnDef="{{ item.property }}"
      >
        <th mat-header-cell *matHeaderCellDef>{{ item.header }}</th>
        <td mat-cell *matCellDef="let index = index">
          <jsonforms-outlet
            [renderProps]="getProps(index, item.props)"
          ></jsonforms-outlet>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `, isInline: true, styles: ["table{width:100%}\n", ".cdk-column-action{width:15%}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.JsonFormsOutlet, selector: "jsonforms-outlet", inputs: ["renderProps"] }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i5.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i5.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i6.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TableRenderer, decorators: [{
            type: Component,
            args: [{ selector: 'TableRenderer', template: `
    <table
      mat-table
      [dataSource]="data"
      class="mat-elevation-z8"
      [trackBy]="trackElement"
    >
      <ng-container matColumnDef="action">
        <tr>
          <th mat-header-cell *matHeaderCellDef>
            <button
              mat-button
              color="primary"
              (click)="add()"
              [disabled]="!isEnabled()"
              [matTooltip]="translations.addTooltip"
            >
              <mat-icon>add</mat-icon>
            </button>
          </th>
        </tr>
        <tr>
          <td
            mat-cell
            *matCellDef="
              let row;
              let i = index;
              let first = first;
              let last = last
            "
          >
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-up"
              mat-button
              [disabled]="first"
              (click)="up(i)"
              [matTooltip]="translations.upAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_upward</mat-icon>
            </button>
            <button
              *ngIf="uischema?.options?.showSortButtons"
              class="item-down"
              mat-button
              [disabled]="last"
              (click)="down(i)"
              [matTooltip]="translations.downAriaLabel"
              matTooltipPosition="right"
            >
              <mat-icon>arrow_downward</mat-icon>
            </button>
            <button
              mat-button
              color="warn"
              (click)="remove(i)"
              [disabled]="!isEnabled()"
              matTooltipPosition="right"
              [matTooltip]="translations.removeTooltip"
            >
              <mat-icon>delete</mat-icon>
            </button>
          </td>
        </tr>

        <tr></tr
      ></ng-container>

      <ng-container
        *ngFor="let item of items"
        matColumnDef="{{ item.property }}"
      >
        <th mat-header-cell *matHeaderCellDef>{{ item.header }}</th>
        <td mat-cell *matCellDef="let index = index">
          <jsonforms-outlet
            [renderProps]="getProps(index, item.props)"
          ></jsonforms-outlet>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
    </table>
  `, styles: ["table{width:100%}\n", ".cdk-column-action{width:15%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.JsonFormsAngularService }]; } });
export const TableRendererTester = rankWith(3, or(isObjectArrayControl, isPrimitiveArrayControl));
export const controlWithoutLabel = (scope) => ({
    type: 'Control',
    scope: scope,
    label: false,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUucmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlicmFyeS9vdGhlci90YWJsZS5yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF1QkU7QUFDRixPQUFPLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIscUJBQXFCLEdBQ3RCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUlMLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsTUFBTSxFQUNOLG9CQUFvQixFQUNwQix1QkFBdUIsRUFFdkIsOEJBQThCLEVBQzlCLEVBQUUsRUFFRixLQUFLLEVBRUwsUUFBUSxFQUNSLFdBQVcsR0FFWixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7OztBQTJGekIsTUFBTSxPQUFPLGFBQWMsU0FBUSxxQkFBcUI7SUFDdEQsY0FBYyxDQUFrQjtJQUNoQyxnQkFBZ0IsQ0FBVztJQUMzQixLQUFLLENBQXNCO0lBQ2xCLGVBQWUsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQTJDO0lBQ2xELFVBQVUsQ0FBOEM7SUFDeEQsWUFBWSxDQUE4QztJQUMxRCxXQUFXLENBQW1EO0lBQzlELFlBQVksQ0FBb0I7SUFFaEMsWUFBWSxnQkFBeUM7UUFDbkQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELFlBQVksQ0FBQyxLQUFhLEVBQUUsUUFBYTtRQUN2QyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNELGtCQUFrQixDQUFDLEtBQXdCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFB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Q2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9GVDs7QUFtSEgsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWlCLFFBQVEsQ0FDdkQsQ0FBQyxFQUNELEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUNsRCxDQUFDO0FBUUYsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxLQUFhLEVBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLElBQUksRUFBRSxTQUFTO0lBQ2YsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztDQUNiLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFRoZSBNSVQgTGljZW5zZVxuICBcbiAgQ29weXJpZ2h0IChjKSAyMDE3LTIwMTkgRWNsaXBzZVNvdXJjZSBNdW5pY2hcbiAgaHR0cHM6Ly9naXRodWIuY29tL2VjbGlwc2Vzb3VyY2UvanNvbmZvcm1zXG4gIFxuICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICBcbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gIFxuICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gIFRIRSBTT0ZUV0FSRS5cbiovXG5pbXBvcnQgc3RhcnRDYXNlIGZyb20gJ2xvZGFzaC9zdGFydENhc2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlLFxuICBKc29uRm9ybXNBcnJheUNvbnRyb2wsXG59IGZyb20gJ0Bqc29uZm9ybXMvYW5ndWxhcic7XG5pbXBvcnQge1xuICBBcnJheUNvbnRyb2xQcm9wcyxcbiAgQXJyYXlUcmFuc2xhdGlvbnMsXG4gIENvbnRyb2xFbGVtZW50LFxuICBjcmVhdGVEZWZhdWx0VmFsdWUsXG4gIGRlcml2ZVR5cGVzLFxuICBlbmNvZGUsXG4gIGlzT2JqZWN0QXJyYXlDb250cm9sLFxuICBpc1ByaW1pdGl2ZUFycmF5Q29udHJvbCxcbiAgSnNvblNjaGVtYSxcbiAgbWFwRGlzcGF0Y2hUb0FycmF5Q29udHJvbFByb3BzLFxuICBvcixcbiAgT3duUHJvcHNPZlJlbmRlcmVyLFxuICBQYXRocyxcbiAgUmFua2VkVGVzdGVyLFxuICByYW5rV2l0aCxcbiAgc2V0UmVhZG9ubHksXG4gIFVJU2NoZW1hRWxlbWVudCxcbn0gZnJvbSAnQGpzb25mb3Jtcy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVGFibGVSZW5kZXJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRhYmxlXG4gICAgICBtYXQtdGFibGVcbiAgICAgIFtkYXRhU291cmNlXT1cImRhdGFcIlxuICAgICAgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCJcbiAgICAgIFt0cmFja0J5XT1cInRyYWNrRWxlbWVudFwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJhY3Rpb25cIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZCgpXCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VuYWJsZWQoKVwiXG4gICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cInRyYW5zbGF0aW9ucy5hZGRUb29sdGlwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRkXG4gICAgICAgICAgICBtYXQtY2VsbFxuICAgICAgICAgICAgKm1hdENlbGxEZWY9XCJcbiAgICAgICAgICAgICAgbGV0IHJvdztcbiAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleDtcbiAgICAgICAgICAgICAgbGV0IGZpcnN0ID0gZmlyc3Q7XG4gICAgICAgICAgICAgIGxldCBsYXN0ID0gbGFzdFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICpuZ0lmPVwidWlzY2hlbWE/Lm9wdGlvbnM/LnNob3dTb3J0QnV0dG9uc1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiaXRlbS11cFwiXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImZpcnN0XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInVwKGkpXCJcbiAgICAgICAgICAgICAgW21hdFRvb2x0aXBdPVwidHJhbnNsYXRpb25zLnVwQXJpYUxhYmVsXCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWF0LWljb24+YXJyb3dfdXB3YXJkPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAqbmdJZj1cInVpc2NoZW1hPy5vcHRpb25zPy5zaG93U29ydEJ1dHRvbnNcIlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW0tZG93blwiXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxhc3RcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiZG93bihpKVwiXG4gICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cInRyYW5zbGF0aW9ucy5kb3duQXJpYUxhYmVsXCJcbiAgICAgICAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bWF0LWljb24+YXJyb3dfZG93bndhcmQ8L21hdC1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG1hdC1idXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZShpKVwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFbmFibGVkKClcIlxuICAgICAgICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgIFttYXRUb29sdGlwXT1cInRyYW5zbGF0aW9ucy5yZW1vdmVUb29sdGlwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuXG4gICAgICAgIDx0cj48L3RyXG4gICAgICA+PC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIlxuICAgICAgICBtYXRDb2x1bW5EZWY9XCJ7eyBpdGVtLnByb3BlcnR5IH19XCJcbiAgICAgID5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj57eyBpdGVtLmhlYWRlciB9fTwvdGg+XG4gICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGpzb25mb3Jtcy1vdXRsZXRcbiAgICAgICAgICAgIFtyZW5kZXJQcm9wc109XCJnZXRQcm9wcyhpbmRleCwgaXRlbS5wcm9wcylcIlxuICAgICAgICAgID48L2pzb25mb3Jtcy1vdXRsZXQ+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICA8L3RhYmxlPlxuICBgLFxuICBzdHlsZXM6IFsndGFibGUge3dpZHRoOiAxMDAlO30nLCAnLmNkay1jb2x1bW4tYWN0aW9uIHsgd2lkdGg6IDE1JX0nXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSZW5kZXJlciBleHRlbmRzIEpzb25Gb3Jtc0FycmF5Q29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRldGFpbFVpU2NoZW1hOiBVSVNjaGVtYUVsZW1lbnQ7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdO1xuICBpdGVtczogQ29sdW1uRGVzY3JpcHRpb25bXTtcbiAgcmVhZG9ubHkgY29sdW1uc1RvSWdub3JlID0gWydhcnJheScsICdvYmplY3QnXTtcbiAgYWRkSXRlbTogKHBhdGg6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gKCkgPT4gdm9pZDtcbiAgbW92ZUl0ZW1VcDogKHBhdGg6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4gKCkgPT4gdm9pZDtcbiAgbW92ZUl0ZW1Eb3duOiAocGF0aDogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoKSA9PiB2b2lkO1xuICByZW1vdmVJdGVtczogKHBhdGg6IHN0cmluZywgdG9EZWxldGU6IG51bWJlcltdKSA9PiAoKSA9PiB2b2lkO1xuICB0cmFuc2xhdGlvbnM6IEFycmF5VHJhbnNsYXRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKGpzb25mb3Jtc1NlcnZpY2U6IEpzb25Gb3Jtc0FuZ3VsYXJTZXJ2aWNlKSB7XG4gICAgc3VwZXIoanNvbmZvcm1zU2VydmljZSk7XG4gIH1cbiAgdHJhY2tFbGVtZW50KGluZGV4OiBudW1iZXIsIF9lbGVtZW50OiBhbnkpIHtcbiAgICByZXR1cm4gaW5kZXggPyBpbmRleCA6IG51bGw7XG4gIH1cbiAgbWFwQWRkaXRpb25hbFByb3BzKHByb3BzOiBBcnJheUNvbnRyb2xQcm9wcykge1xuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmdlbmVyYXRlQ2VsbHMocHJvcHMuc2NoZW1hLCBwcm9wcy5wYXRoKTtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLml0ZW1zLm1hcCgoaXRlbSkgPT4gaXRlbS5wcm9wZXJ0eSk7XG4gICAgaWYgKHRoaXMuaXNFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdhY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSBwcm9wcy50cmFuc2xhdGlvbnM7XG4gIH1cbiAgZ2V0UHJvcHMoaW5kZXg6IG51bWJlciwgcHJvcHM6IE93blByb3BzT2ZSZW5kZXJlcik6IE93blByb3BzT2ZSZW5kZXJlciB7XG4gICAgY29uc3Qgcm93UGF0aCA9IFBhdGhzLmNvbXBvc2UocHJvcHMucGF0aCwgYCR7aW5kZXh9YCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjaGVtYTogcHJvcHMuc2NoZW1hLFxuICAgICAgdWlzY2hlbWE6IHByb3BzLnVpc2NoZW1hLFxuICAgICAgcGF0aDogcm93UGF0aCxcbiAgICB9O1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUl0ZW1zKHRoaXMucHJvcHNQYXRoLCBbaW5kZXhdKSgpO1xuICB9XG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEl0ZW0oXG4gICAgICB0aGlzLnByb3BzUGF0aCxcbiAgICAgIGNyZWF0ZURlZmF1bHRWYWx1ZSh0aGlzLnNjb3BlZFNjaGVtYSwgdGhpcy5yb290U2NoZW1hKVxuICAgICkoKTtcbiAgfVxuICB1cChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5tb3ZlSXRlbVVwKHRoaXMucHJvcHNQYXRoLCBpbmRleCkoKTtcbiAgfVxuICBkb3duKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm1vdmVJdGVtRG93bih0aGlzLnByb3BzUGF0aCwgaW5kZXgpKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcblxuICAgIGNvbnN0IHsgYWRkSXRlbSwgcmVtb3ZlSXRlbXMsIG1vdmVVcCwgbW92ZURvd24gfSA9XG4gICAgICBtYXBEaXNwYXRjaFRvQXJyYXlDb250cm9sUHJvcHMoXG4gICAgICAgIHRoaXMuanNvbkZvcm1zU2VydmljZS51cGRhdGVDb3JlLmJpbmQodGhpcy5qc29uRm9ybXNTZXJ2aWNlKVxuICAgICAgKTtcbiAgICB0aGlzLmFkZEl0ZW0gPSBhZGRJdGVtO1xuICAgIHRoaXMubW92ZUl0ZW1VcCA9IG1vdmVVcDtcbiAgICB0aGlzLm1vdmVJdGVtRG93biA9IG1vdmVEb3duO1xuICAgIHRoaXMucmVtb3ZlSXRlbXMgPSByZW1vdmVJdGVtcztcbiAgfVxuXG4gIGdlbmVyYXRlQ2VsbHMgPSAoXG4gICAgc2NoZW1hOiBKc29uU2NoZW1hLFxuICAgIHJvd1BhdGg6IHN0cmluZ1xuICApOiBDb2x1bW5EZXNjcmlwdGlvbltdID0+IHtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRWYWxpZENvbHVtblByb3BzKHNjaGVtYSkubWFwKChwcm9wKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuY1Byb3AgPSBlbmNvZGUocHJvcCk7XG4gICAgICAgIGNvbnN0IHVpc2NoZW1hID0gY29udHJvbFdpdGhvdXRMYWJlbChgIy9wcm9wZXJ0aWVzLyR7ZW5jUHJvcH1gKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRW5hYmxlZCgpKSB7XG4gICAgICAgICAgc2V0UmVhZG9ubHkodWlzY2hlbWEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcHJvcGVydHk6IHByb3AsXG4gICAgICAgICAgaGVhZGVyOiBzdGFydENhc2UocHJvcCksXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hLFxuICAgICAgICAgICAgdWlzY2hlbWEsXG4gICAgICAgICAgICBwYXRoOiByb3dQYXRoLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gbmVlZGVkIHRvIGNvcnJlY3RseSByZW5kZXIgaW5wdXQgY29udHJvbCBmb3IgbXVsdGkgYXR0cmlidXRlc1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHByb3BlcnR5OiAnRFVNTVknLFxuICAgICAgICBoZWFkZXI6IHRoaXMubGFiZWwsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgICAgICAgdWlzY2hlbWE6IGNvbnRyb2xXaXRob3V0TGFiZWwoYCNgKSxcbiAgICAgICAgICBwYXRoOiByb3dQYXRoLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xuXG4gIGdldFZhbGlkQ29sdW1uUHJvcHMgPSAoc2NvcGVkU2NoZW1hOiBKc29uU2NoZW1hKSA9PiB7XG4gICAgaWYgKHNjb3BlZFNjaGVtYS50eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNjb3BlZFNjaGVtYS5wcm9wZXJ0aWVzKS5maWx0ZXIoKHByb3ApID0+IHtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBkZXJpdmVUeXBlcyhzY29wZWRTY2hlbWEucHJvcGVydGllc1twcm9wXSk7XG4gICAgICAgIGlmICh0eXBlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNvbHVtbnNUb0lnbm9yZS5pbmRleE9mKHR5cGVzWzBdKSA9PT0gLTE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gcHJpbWl0aXZlc1xuICAgIHJldHVybiBbJyddO1xuICB9O1xufVxuZXhwb3J0IGNvbnN0IFRhYmxlUmVuZGVyZXJUZXN0ZXI6IFJhbmtlZFRlc3RlciA9IHJhbmtXaXRoKFxuICAzLFxuICBvcihpc09iamVjdEFycmF5Q29udHJvbCwgaXNQcmltaXRpdmVBcnJheUNvbnRyb2wpXG4pO1xuXG5pbnRlcmZhY2UgQ29sdW1uRGVzY3JpcHRpb24ge1xuICBwcm9wZXJ0eTogc3RyaW5nO1xuICBoZWFkZXI6IHN0cmluZztcbiAgcHJvcHM6IE93blByb3BzT2ZSZW5kZXJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRyb2xXaXRob3V0TGFiZWwgPSAoc2NvcGU6IHN0cmluZyk6IENvbnRyb2xFbGVtZW50ID0+ICh7XG4gIHR5cGU6ICdDb250cm9sJyxcbiAgc2NvcGU6IHNjb3BlLFxuICBsYWJlbDogZmFsc2UsXG59KTtcbiJdfQ==