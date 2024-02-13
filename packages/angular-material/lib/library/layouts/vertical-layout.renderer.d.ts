import { ChangeDetectorRef } from '@angular/core';
import { RankedTester, VerticalLayout } from '@jsonforms/core';
import { LayoutRenderer } from './layout.renderer';
import { JsonFormsAngularService } from '@jsonforms/angular';
import * as i0 from "@angular/core";
export declare class VerticalLayoutRenderer extends LayoutRenderer<VerticalLayout> {
    constructor(jsonFormsService: JsonFormsAngularService, changeDetectionRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalLayoutRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<VerticalLayoutRenderer, "VerticalLayoutRenderer", never, {}, {}, never, never, false, never>;
}
export declare const verticalLayoutTester: RankedTester;
//# sourceMappingURL=vertical-layout.renderer.d.ts.map