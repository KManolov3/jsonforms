import { ControlElement, JsonFormsState, JsonSchema, OwnPropsOfControl, StatePropsOfControl } from '@jsonforms/core';
import { OnDestroy, OnInit } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import type { Subscription } from 'rxjs';
import { JsonFormsBaseRenderer } from './base.renderer';
import { JsonFormsAngularService } from './jsonforms.service';
import * as i0 from "@angular/core";
export declare abstract class JsonFormsAbstractControl<Props extends StatePropsOfControl> extends JsonFormsBaseRenderer<ControlElement> implements OnInit, OnDestroy {
    protected jsonFormsService: JsonFormsAngularService;
    id: string;
    disabled: boolean;
    visible: boolean;
    form: FormControl;
    subscription: Subscription;
    data: any;
    label: string;
    description: string;
    error: string | null;
    scopedSchema: JsonSchema;
    rootSchema: JsonSchema;
    enabled: boolean;
    hidden: boolean;
    propsPath: string;
    constructor(jsonFormsService: JsonFormsAngularService);
    getEventValue: (event: any) => any;
    onChange(ev: any): void;
    shouldShowUnfocusedDescription(): boolean;
    ngOnInit(): void;
    validator: ValidatorFn;
    mapAdditionalProps(_props: Props): void;
    ngOnDestroy(): void;
    isEnabled(): boolean;
    protected getOwnProps(): OwnPropsOfControl;
    protected abstract mapToProps(state: JsonFormsState): Props;
    protected triggerValidation(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonFormsAbstractControl<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonFormsAbstractControl<any>, "ng-component", never, { "id": { "alias": "id"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=abstract-control.d.ts.map