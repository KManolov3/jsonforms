import { ControlElement } from '@jsonforms/core';
declare const _default: import("vue").DefineComponent<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<ControlElement>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
}, {
    handleChange(path: string, value: any): void;
    cell: import("vue").ComputedRef<{
        cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
        isValid: boolean;
        rootSchema: NonNullable<import("@jsonforms/core").JsonSchema>;
        uischema: ControlElement;
        errors: string;
        data: any;
        id: string;
        config: any;
        schema: NonNullable<import("@jsonforms/core").JsonSchema>;
        enabled: boolean;
        visible: boolean;
        path: string;
        renderers: import("@jsonforms/core").JsonFormsRendererRegistryEntry[];
    }>;
}, unknown, {
    determinedCell(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<ControlElement>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
}>>, {
    enabled: boolean;
    renderers: import("@jsonforms/core").JsonFormsRendererRegistryEntry[];
    cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
    config: Record<string, any>;
}, {}>;
export default _default;
