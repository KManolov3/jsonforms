import { OnDestroy, OnInit } from '@angular/core';
import { JsonFormsAngularService, JsonFormsBaseRenderer } from '@jsonforms/angular';
import { LabelElement, RankedTester } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class LabelRenderer extends JsonFormsBaseRenderer<LabelElement> implements OnDestroy, OnInit {
    private jsonFormsService;
    label: string;
    visible: boolean;
    private subscription;
    constructor(jsonFormsService: JsonFormsAngularService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LabelRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LabelRenderer, "LabelRenderer", never, {}, {}, never, never, false, never>;
}
export declare const LabelRendererTester: RankedTester;
//# sourceMappingURL=label.renderer.d.ts.map