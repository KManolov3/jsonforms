import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { RankedTester } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class TextControlRenderer extends JsonFormsControl {
    focused: boolean;
    constructor(jsonformsService: JsonFormsAngularService);
    getEventValue: (event: any) => any;
    getType: () => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextControlRenderer, "TextControlRenderer", never, {}, {}, never, never, false, never>;
}
export declare const TextControlRendererTester: RankedTester;
//# sourceMappingURL=text.renderer.d.ts.map