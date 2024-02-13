import type { DebugElement } from '@angular/core';
import type { JsonFormsControl } from '@jsonforms/angular';
import { ControlElement } from '@jsonforms/core';
import { ErrorTestExpectation, TestConfig, TestData } from './util';
export declare const defaultTextTestData: TestData<ControlElement>;
export declare const textBaseTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance: string, elementToUse: (element: DebugElement) => any, testData?: TestData<ControlElement>) => () => void;
export declare const textInputEventTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance: string, elementToUse: (element: DebugElement) => any, testData?: TestData<ControlElement>) => () => void;
export declare const textErrorTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, errorTestInformation: ErrorTestExpectation, testData?: TestData<ControlElement>) => () => void;
export declare const textTypeTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance: string, elementToUse: (element: DebugElement) => any, testData?: TestData<ControlElement>) => () => void;
//# sourceMappingURL=text.d.ts.map