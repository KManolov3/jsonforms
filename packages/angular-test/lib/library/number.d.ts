import type { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import type { JsonFormsControl } from '@jsonforms/angular';
import { ControlElement } from '@jsonforms/core';
import { ErrorTestExpectation, TestConfig, TestData } from './util';
interface ComponentResult<C extends JsonFormsControl> {
    fixture: ComponentFixture<any>;
    component: C;
    numberElement?: DebugElement;
    numberNativeElement?: any;
}
export declare const prepareComponent: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance?: string, elementToUse?: (element: DebugElement) => any) => ComponentResult<C>;
export declare const defaultNumberTestData: TestData<ControlElement>;
export declare const updateWithSiblingNumberValue: <C extends JsonFormsControl>(fixture: ComponentFixture<C>, testData: TestData<ControlElement>, expectations: () => any) => void;
export declare const numberBaseTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance: string, elementToUse: (element: DebugElement) => any, testData?: TestData<ControlElement>) => () => void;
export declare const numberInputEventTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance: string, elementToUse: (element: DebugElement) => any, testData?: TestData<ControlElement>) => () => void;
export declare const numberErrorTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, errorTestInformation: ErrorTestExpectation, testData?: TestData<ControlElement>) => () => void;
export declare const additionalTestData: TestData<ControlElement>;
export declare const numberAdditionalPropsTest: <C extends JsonFormsControl>(testConfig: TestConfig<C>, instance: string, elementToUse: (element: DebugElement) => any, testData?: TestData<ControlElement>) => () => void;
export {};
//# sourceMappingURL=number.d.ts.map