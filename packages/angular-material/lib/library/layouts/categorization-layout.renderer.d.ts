import { Categorization, Category, RankedTester } from '@jsonforms/core';
import { OnDestroy, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer } from '@jsonforms/angular';
import * as i0 from "@angular/core";
export declare class CategorizationTabLayoutRenderer extends JsonFormsBaseRenderer<Categorization> implements OnInit, OnDestroy {
    private jsonFormsService;
    hidden: boolean;
    visibleCategories: (Category | Categorization)[];
    private subscription;
    categoryLabels: string[];
    constructor(jsonFormsService: JsonFormsAngularService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CategorizationTabLayoutRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CategorizationTabLayoutRenderer, "jsonforms-categorization-layout", never, {}, {}, never, never, false, never>;
}
export declare const categorizationTester: RankedTester;
//# sourceMappingURL=categorization-layout.renderer.d.ts.map