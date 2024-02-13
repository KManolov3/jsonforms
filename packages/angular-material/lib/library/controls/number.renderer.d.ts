import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { RankedTester, StatePropsOfControl } from '@jsonforms/core';
import * as i0 from "@angular/core";
export declare class NumberControlRenderer extends JsonFormsControl {
    private readonly MAXIMUM_FRACTIONAL_DIGITS;
    oldValue: string;
    min: number;
    max: number;
    multipleOf: number;
    locale: string;
    numberFormat: Intl.NumberFormat;
    decimalSeparator: string;
    focused: boolean;
    constructor(jsonformsService: JsonFormsAngularService);
    onChange(ev: any): void;
    getEventValue: (event: any) => any;
    getValue: () => any;
    mapAdditionalProps(props: StatePropsOfControl): void;
    private determineDecimalSeparator;
    static ɵfac: i0.ɵɵFactoryDeclaration<NumberControlRenderer, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NumberControlRenderer, "NumberControlRenderer", never, {}, {}, never, never, false, never>;
}
export declare const NumberControlRendererTester: RankedTester;
//# sourceMappingURL=number.renderer.d.ts.map