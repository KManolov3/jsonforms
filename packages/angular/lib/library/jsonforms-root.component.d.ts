import { DoCheck, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { JsonFormsI18nState, JsonFormsRendererRegistryEntry, JsonSchema, Middleware, UISchemaElement, UISchemaTester, ValidationMode } from '@jsonforms/core';
import Ajv, { ErrorObject } from 'ajv';
import { JsonFormsAngularService } from './jsonforms.service';
import * as i0 from "@angular/core";
export declare class JsonForms implements DoCheck, OnChanges, OnInit {
    private jsonformsService;
    uischema: UISchemaElement;
    schema: JsonSchema;
    data: any;
    renderers: JsonFormsRendererRegistryEntry[];
    uischemas: {
        tester: UISchemaTester;
        uischema: UISchemaElement;
    }[];
    dataChange: EventEmitter<any>;
    readonly: boolean;
    validationMode: ValidationMode;
    ajv: Ajv;
    config: any;
    i18n: JsonFormsI18nState;
    additionalErrors: ErrorObject[];
    middleware: Middleware;
    errors: EventEmitter<ErrorObject<string, Record<string, any>, unknown>[]>;
    private previousData;
    private previousErrors;
    private initialized;
    oldI18N: JsonFormsI18nState;
    constructor(jsonformsService: JsonFormsAngularService);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonForms, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonForms, "jsonforms", never, { "uischema": { "alias": "uischema"; "required": false; }; "schema": { "alias": "schema"; "required": false; }; "data": { "alias": "data"; "required": false; }; "renderers": { "alias": "renderers"; "required": false; }; "uischemas": { "alias": "uischemas"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "validationMode": { "alias": "validationMode"; "required": false; }; "ajv": { "alias": "ajv"; "required": false; }; "config": { "alias": "config"; "required": false; }; "i18n": { "alias": "i18n"; "required": false; }; "additionalErrors": { "alias": "additionalErrors"; "required": false; }; "middleware": { "alias": "middleware"; "required": false; }; }, { "dataChange": "dataChange"; "errors": "errors"; }, never, never, false, never>;
}
//# sourceMappingURL=jsonforms-root.component.d.ts.map