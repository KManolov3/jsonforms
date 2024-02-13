import { ChangeDetectorRef, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsArrayControl } from '@jsonforms/angular';
import { ArrayControlProps, ArrayTranslations, JsonFormsState, RankedTester, StatePropsOfArrayControl } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare const removeSchemaKeywords: (path: string) => string;
export declare class MasterListComponent extends JsonFormsArrayControl implements OnInit {
    private changeDetectorRef;
    masterItems: any[];
    selectedItem: any;
    selectedItemIdx: number;
    addItem: (path: string, value: any) => () => void;
    removeItems: (path: string, toDelete: number[]) => () => void;
    highlightedIdx: number;
    translations: ArrayTranslations;
    constructor(jsonformsService: JsonFormsAngularService, changeDetectorRef: ChangeDetectorRef);
    onListItemHover(idx: number): void;
    trackElement(_index: number, element: any): any;
    ngOnInit(): void;
    mapAdditionalProps(props: ArrayControlProps): void;
    onSelect(item: any, idx: number): void;
    onAddClick(): void;
    onDeleteClick(item: number): void;
    protected mapToProps(state: JsonFormsState): StatePropsOfArrayControl;
    static ɵfac: i0.ɵɵFactoryDeclaration<MasterListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MasterListComponent, "jsonforms-list-with-detail-master", never, {}, {}, never, never, false, never>;
}
export declare const masterDetailTester: RankedTester;
//# sourceMappingURL=master.d.ts.map