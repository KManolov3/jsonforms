import { JsonFormsState, StatePropsOfControl, StatePropsOfControlWithDetail } from '@jsonforms/core';
import type { OnDestroy, OnInit } from '@angular/core';
import { JsonFormsAbstractControl } from './abstract-control';
export declare class JsonFormsControl extends JsonFormsAbstractControl<StatePropsOfControl> implements OnInit, OnDestroy {
    protected mapToProps(state: JsonFormsState): StatePropsOfControl;
}
export declare class JsonFormsControlWithDetail extends JsonFormsAbstractControl<StatePropsOfControlWithDetail> implements OnInit, OnDestroy {
    protected mapToProps(state: JsonFormsState): StatePropsOfControlWithDetail;
}
//# sourceMappingURL=control.d.ts.map