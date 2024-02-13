import { PropType } from 'vue';
import { Styles } from '../styles';
import { Options } from '../util';
declare const _default: import("vue").DefineComponent<{
    id: {
        required: true;
        type: StringConstructor;
    };
    description: {
        required: false;
        type: StringConstructor;
        default: undefined;
    };
    errors: {
        required: false;
        type: StringConstructor;
        default: undefined;
    };
    label: {
        required: false;
        type: StringConstructor;
        default: undefined;
    };
    appliedOptions: {
        required: false;
        type: PropType<Options>;
        default: undefined;
    };
    visible: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    isFocused: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    styles: {
        required: true;
        type: PropType<Styles>;
    };
}, unknown, unknown, {
    showDescription(): boolean;
    computedLabel(): string;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        required: true;
        type: StringConstructor;
    };
    description: {
        required: false;
        type: StringConstructor;
        default: undefined;
    };
    errors: {
        required: false;
        type: StringConstructor;
        default: undefined;
    };
    label: {
        required: false;
        type: StringConstructor;
        default: undefined;
    };
    appliedOptions: {
        required: false;
        type: PropType<Options>;
        default: undefined;
    };
    visible: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    required: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    isFocused: {
        required: false;
        type: BooleanConstructor;
        default: boolean;
    };
    styles: {
        required: true;
        type: PropType<Styles>;
    };
}>>, {
    description: string;
    errors: string;
    label: string;
    appliedOptions: Options;
    visible: boolean;
    required: boolean;
    isFocused: boolean;
}, {}>;
export default _default;
