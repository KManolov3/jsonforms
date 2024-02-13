import { ChangeDetectorRef } from '@angular/core';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { RankedTester } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class ToggleControlRenderer extends JsonFormsControl {
    private changeDetectorRef;
    constructor(jsonformsService: JsonFormsAngularService, changeDetectorRef: ChangeDetectorRef);
    isChecked: () => any;
    getEventValue: (event: any) => any;
    mapAdditionalProps(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToggleControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToggleControlRenderer, "ToggleControlRenderer", never, {}, {}, never, never, false, never>;
}
export declare const ToggleControlRendererTester: RankedTester;
//# sourceMappingURL=toggle.renderer.d.ts.map