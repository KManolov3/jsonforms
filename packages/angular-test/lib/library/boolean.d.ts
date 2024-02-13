import type { Type } from '@angular/core';
import type { JsonFormsControl } from '@jsonforms/angular';
import { ControlElement, JsonSchema } from '@jsonforms/core';
import { ErrorTestExpectation, TestConfig } from './util';
export declare const defaultBooleanTestSchema: JsonSchema;
export declare const defaultBooleanTestData: {
    data: {
        foo: boolean;
    };
    schema: JsonSchema;
    uischema: ControlElement;
};
export declare const booleanBaseTest: <C extends JsonFormsControl, I>(testConfig: TestConfig<C>, instance: Type<I>) => () => void;
export declare const booleanInputEventTest: <C extends JsonFormsControl, I>(testConfig: TestConfig<C>, instance: Type<I>, selectorForClick: string) => () => void;
export declare const booleanErrorTest: <C extends JsonFormsControl, I>(testConfig: TestConfig<C>, instance: Type<I>, errorTestInformation: ErrorTestExpectation) => () => void;
//# sourceMappingURL=boolean.d.ts.map