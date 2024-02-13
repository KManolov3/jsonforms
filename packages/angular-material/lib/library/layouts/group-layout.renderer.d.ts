import { ChangeDetectorRef } from '@angular/core';
import { GroupLayout, RankedTester } from '@jsonforms/core';
import { LayoutRenderer } from './layout.renderer';
import { JsonFormsAngularService } from '@jsonforms/angular';
import * as i0 from "@angular/core";
export declare class GroupLayoutRenderer extends LayoutRenderer<GroupLayout> {
    constructor(jsonFormsService: JsonFormsAngularService, changeDetectionRef: ChangeDetectorRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupLayoutRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupLayoutRenderer, "GroupLayoutRenderer", never, {}, {}, never, never, false, never>;
}
export declare const groupLayoutTester: RankedTester;
//# sourceMappingURL=group-layout.renderer.d.ts.map