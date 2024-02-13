import { JsonFormsAngularService, JsonFormsControlWithDetail } from '@jsonforms/angular';
import { ControlWithDetailProps, RankedTester, UISchemaElement } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class ObjectControlRenderer extends JsonFormsControlWithDetail {
    detailUiSchema: UISchemaElement;
    constructor(jsonformsService: JsonFormsAngularService);
    mapAdditionalProps(props: ControlWithDetailProps): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObjectControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ObjectControlRenderer, "ObjectRenderer", never, {}, {}, never, never, false, never>;
}
export declare const ObjectControlRendererTester: RankedTester;
//# sourceMappingURL=object.renderer.d.ts.map