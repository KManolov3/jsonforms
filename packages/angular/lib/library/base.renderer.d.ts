import { JsonSchema, OwnPropsOfRenderer, UISchemaElement } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class JsonFormsBaseRenderer<T extends UISchemaElement> {
    uischema: T;
    schema: JsonSchema;
    path: string;
    protected getOwnProps(): OwnPropsOfRenderer;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonFormsBaseRenderer<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<JsonFormsBaseRenderer<any>, never, never, { "uischema": { "alias": "uischema"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; "path": { "alias": "path"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=base.renderer.d.ts.map