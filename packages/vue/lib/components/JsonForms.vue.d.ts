import { PropType } from 'vue';
import { JsonSchema, UISchemaElement, ValidationMode, JsonFormsCore, JsonFormsUISchemaRegistryEntry, JsonFormsRendererRegistryEntry, JsonFormsCellRendererRegistryEntry, CoreActions, JsonFormsI18nState, Middleware } from '@jsonforms/core';
import { JsonFormsChangeEvent, MaybeReadonly } from '../types';
import Ajv, { ErrorObject } from 'ajv';
declare const _default: import("vue").DefineComponent<{
    data: {
        required: true;
        type: PropType<any>;
    };
    schema: {
        required: false;
        type: PropType<JsonSchema>;
        default: undefined;
    };
    uischema: {
        required: false;
        type: PropType<UISchemaElement>;
        default: undefined;
    };
    renderers: {
        required: true;
        type: PropType<MaybeReadonly<JsonFormsRendererRegistryEntry[]>>;
    };
    cells: {
        required: false;
        type: PropType<MaybeReadonly<JsonFormsCellRendererRegistryEntry[]>>;
        default: () => never[];
    };
    config: {
        required: false;
        type: PropType<any>;
        default: undefined;
    };
    readonly: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    uischemas: {
        required: false;
        type: PropType<MaybeReadonly<JsonFormsUISchemaRegistryEntry[]>>;
        default: () => never[];
    };
    validationMode: {
        required: false;
        type: PropType<ValidationMode>;
        default: string;
    };
    ajv: {
        required: false;
        type: PropType<Ajv>;
        default: undefined;
    };
    i18n: {
        required: false;
        type: PropType<JsonFormsI18nState>;
        default: undefined;
    };
    additionalErrors: {
        required: false;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
        default: () => ErrorObject<string, Record<string, any>, unknown>[];
    };
    middleware: {
        required: false;
        type: PropType<Middleware>;
        default: Middleware;
    };
}, unknown, {
    schemaToUse: JsonSchema;
    dataToUse: any;
    uischemaToUse: UISchemaElement;
    jsonforms: {
        core: JsonFormsCore;
        config: any;
        i18n: JsonFormsI18nState;
        renderers: MaybeReadonly<JsonFormsRendererRegistryEntry[]>;
        cells: MaybeReadonly<JsonFormsCellRendererRegistryEntry[]>;
        uischemas: MaybeReadonly<JsonFormsUISchemaRegistryEntry[]>;
        readonly: boolean;
    };
}, {
    coreDataToUpdate(): any;
    eventToEmit(): JsonFormsChangeEvent;
}, {
    dispatch(action: CoreActions): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        required: true;
        type: PropType<any>;
    };
    schema: {
        required: false;
        type: PropType<JsonSchema>;
        default: undefined;
    };
    uischema: {
        required: false;
        type: PropType<UISchemaElement>;
        default: undefined;
    };
    renderers: {
        required: true;
        type: PropType<MaybeReadonly<JsonFormsRendererRegistryEntry[]>>;
    };
    cells: {
        required: false;
        type: PropType<MaybeReadonly<JsonFormsCellRendererRegistryEntry[]>>;
        default: () => never[];
    };
    config: {
        required: false;
        type: PropType<any>;
        default: undefined;
    };
    readonly: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    uischemas: {
        required: false;
        type: PropType<MaybeReadonly<JsonFormsUISchemaRegistryEntry[]>>;
        default: () => never[];
    };
    validationMode: {
        required: false;
        type: PropType<ValidationMode>;
        default: string;
    };
    ajv: {
        required: false;
        type: PropType<Ajv>;
        default: undefined;
    };
    i18n: {
        required: false;
        type: PropType<JsonFormsI18nState>;
        default: undefined;
    };
    additionalErrors: {
        required: false;
        type: PropType<ErrorObject<string, Record<string, any>, unknown>[]>;
        default: () => ErrorObject<string, Record<string, any>, unknown>[];
    };
    middleware: {
        required: false;
        type: PropType<Middleware>;
        default: Middleware;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    config: any;
    i18n: JsonFormsI18nState;
    schema: JsonSchema;
    uischema: UISchemaElement;
    cells: MaybeReadonly<JsonFormsCellRendererRegistryEntry[]>;
    uischemas: MaybeReadonly<JsonFormsUISchemaRegistryEntry[]>;
    readonly: boolean;
    validationMode: ValidationMode;
    ajv: Ajv;
    additionalErrors: ErrorObject<string, Record<string, any>, unknown>[];
    middleware: Middleware;
}, {}>;
export default _default;
