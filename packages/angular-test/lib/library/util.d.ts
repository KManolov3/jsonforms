import type { Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import type { JsonFormsRendererRegistryEntry, JsonSchema, UISchemaElement } from '@jsonforms/core';
import type { ErrorObject } from 'ajv';
export interface ErrorTestExpectation {
    errorInstance: Type<any>;
    numberOfElements: number;
    indexOfElement: number;
}
export interface TestConfig<C extends JsonFormsControl> {
    imports: any[];
    providers: any[];
    componentUT: Type<C>;
}
export declare const baseSetup: <C extends JsonFormsControl>(testConfig: TestConfig<C>) => void;
export interface TestData<T extends UISchemaElement> {
    data: any;
    schema: JsonSchema;
    uischema: T;
    errors?: ErrorObject[];
    renderers?: JsonFormsRendererRegistryEntry[];
}
export declare const getJsonFormsService: (component: JsonFormsControl) => JsonFormsAngularService;
export declare const setupMockStore: (fixture: ComponentFixture<any>, testData: TestData<UISchemaElement>) => void;
//# sourceMappingURL=util.d.ts.map