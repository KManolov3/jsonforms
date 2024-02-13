import { ChangeDetectorRef } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { RankedTester } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class BooleanControlRenderer extends JsonFormsControl {
    private changeDetectionRef;
    constructor(jsonformsService: JsonFormsAngularService, changeDetectionRef: ChangeDetectorRef);
    isChecked: () => any;
    getEventValue: (event: any) => any;
    mapAdditionalProps(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BooleanControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BooleanControlRenderer, "BooleanControlRenderer", never, {}, {}, never, never, false, never>;
}
export declare const booleanControlTester: RankedTester;
//# sourceMappingURL=boolean.renderer.d.ts.map