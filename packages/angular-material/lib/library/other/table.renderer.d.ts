import { OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsArrayControl } from '@jsonforms/angular';
import { ArrayControlProps, ArrayTranslations, ControlElement, JsonSchema, OwnPropsOfRenderer, RankedTester, UISchemaElement } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class TableRenderer extends JsonFormsArrayControl implements OnInit {
    detailUiSchema: UISchemaElement;
    displayedColumns: string[];
    items: ColumnDescription[];
    readonly columnsToIgnore: string[];
    addItem: (path: string, value: any) => () => void;
    moveItemUp: (path: string, index: number) => () => void;
    moveItemDown: (path: string, index: number) => () => void;
    removeItems: (path: string, toDelete: number[]) => () => void;
    translations: ArrayTranslations;
    constructor(jsonformsService: JsonFormsAngularService);
    trackElement(index: number, _element: any): number;
    mapAdditionalProps(props: ArrayControlProps): void;
    getProps(index: number, props: OwnPropsOfRenderer): OwnPropsOfRenderer;
    remove(index: number): void;
    add(): void;
    up(index: number): void;
    down(index: number): void;
    ngOnInit(): void;
    generateCells: (schema: JsonSchema, rowPath: string) => ColumnDescription[];
    getValidColumnProps: (scopedSchema: JsonSchema) => string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRenderer, "TableRenderer", never, {}, {}, never, never, false, never>;
}
export declare const TableRendererTester: RankedTester;
interface ColumnDescription {
    property: string;
    header: string;
    props: OwnPropsOfRenderer;
}
export declare const controlWithoutLabel: (scope: string) => ControlElement;
export {};
//# sourceMappingURL=table.renderer.d.ts.map