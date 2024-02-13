import { OnDestroy, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsAbstractControl } from '@jsonforms/angular';
import { ArrayLayoutProps, ArrayTranslations, JsonFormsState, OwnPropsOfRenderer, RankedTester, StatePropsOfArrayLayout, UISchemaElement, UISchemaTester } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class ArrayLayoutRenderer extends JsonFormsAbstractControl<StatePropsOfArrayLayout> implements OnInit, OnDestroy {
    noData: boolean;
    translations: ArrayTranslations;
    addItem: (path: string, value: any) => () => void;
    moveItemUp: (path: string, index: number) => () => void;
    moveItemDown: (path: string, index: number) => () => void;
    removeItems: (path: string, toDelete: number[]) => () => void;
    uischemas: {
        tester: UISchemaTester;
        uischema: UISchemaElement;
    }[];
    constructor(jsonFormsService: JsonFormsAngularService);
    mapToProps(state: JsonFormsState): StatePropsOfArrayLayout;
    remove(index: number): void;
    add(): void;
    up(index: number): void;
    down(index: number): void;
    ngOnInit(): void;
    mapAdditionalProps(props: ArrayLayoutProps): void;
    getProps(index: number): OwnPropsOfRenderer;
    trackByFn(index: number): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayLayoutRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ArrayLayoutRenderer, "app-array-layout-renderer", never, {}, {}, never, never, false, never>;
}
export declare const ArrayLayoutRendererTester: RankedTester;
//# sourceMappingURL=array-layout.renderer.d.ts.map