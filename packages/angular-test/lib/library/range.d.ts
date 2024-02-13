import type { Type } from '@angular/core';
import type { JsonFormsControl } from '@jsonforms/angular';
import { ErrorTestExpectation, TestConfig, TestData } from './util';
import { ControlElement, JsonSchema } from '@jsonforms/core';
export declare const rangeDefaultData: {
    foo: number;
};
export declare const rangeDefaultSchema: JsonSchema;
export declare const rangeDefaultUischema: ControlElement;
export declare const rangeDefaultTestData: TestData<ControlElement>;
export declare const rangeBaseTest: <C extends JsonFormsControl, I>(testConfig: TestConfig<C>, instance: Type<I>) => () => void;
export declare const rangeInputEventTest: <C extends JsonFormsControl, I>(testConfig: TestConfig<C>, instance: Type<I>) => () => void;
export declare const rangeErrorTest: <C extends JsonFormsControl, I>(testConfig: TestConfig<C>, instance: Type<I>, errorTestInformation: ErrorTestExpectation) => () => void;
//# sourceMappingURL=range.d.ts.map