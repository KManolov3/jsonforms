import { ChangeDetectorRef } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { RankedTester } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class RangeControlRenderer extends JsonFormsControl {
    private changeDetectorRef;
    min: number;
    max: number;
    multipleOf: number;
    focused: boolean;
    constructor(jsonformsService: JsonFormsAngularService, changeDetectorRef: ChangeDetectorRef);
    getEventValue: (event: number) => number;
    mapAdditionalProps(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RangeControlRenderer, "RangeControlRenderer", never, {}, {}, never, never, false, never>;
}
export declare const RangeControlRendererTester: RankedTester;
//# sourceMappingURL=range.renderer.d.ts.map